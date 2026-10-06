// Settle: let a machine (or an object) come to rest under gravity with no program, and say which PLACEMENT
// pose would put it where it landed — so an app can drop a thing on the floor instead of guessing a z.
import type { Engine } from "./engine";
import type { CompiledWorld, PlacedMachine, Pose, Quat, World, WorldObject, XYZ } from "./types";
import * as V from "./vec";

export interface SettleResult {
  /** the body that was watched (the machine's root, or the object's body) */
  ref: string;
  /** the placement pose that lands it where it came to rest */
  pose: { pos: XYZ; quat: Quat };
  /** how far it moved, metres */
  moved: number;
  /** true when it was still (under 1 mm/s) at the end */
  settled: boolean;
  seconds: number;
}

/**
 * Simulates `seconds` from the LOADED state (the engine's reset state) with no programs, reads where the root body
 * went, and puts the engine back exactly as it was before the call. The placement maths: a root body sits at
 * `pos + R(q)·offset` with rotation `q·qOff`; the body landed at (p1, q1), so the placement that lands it there is
 * q' = q1·qOff⁻¹ and pos' = p1 − R(q')·offset.
 */
export function settlePose(engine: Engine, compiled: CompiledWorld, world: World, who: { machineId?: string; objectId?: string }, seconds = 0.5): SettleResult {
  const dt = engine.timestep;
  const steps = Math.max(1, Math.round(Math.max(0.01, seconds) / dt));
  let placed: Pose | undefined;
  let bodyName: string;
  let ref: string;
  if (who.machineId) {
    const m = (world.machines ?? []).find((x: PlacedMachine) => x.id === who.machineId);
    if (!m) throw new Error(`no machine "${who.machineId}" in the world (machines: ${(world.machines ?? []).map((x) => x.id).join(", ") || "none"})`);
    const free = compiled.joints.find((j) => j.machine === m.id && j.type === "free");
    const parts = compiled.bodies.filter((b) => b.machine === m.id);
    const root = free?.body ?? parts[parts.length - 1]?.name;
    if (!root) throw new Error(`machine "${m.id}" has no bodies`);
    if (!free) throw new Error(`machine "${m.id}" is fixed to the world (a grounded part): nothing to settle`);
    placed = m.pose;
    bodyName = root;
    ref = compiled.bodies.find((b) => b.name === root)?.ref ?? root;
  } else if (who.objectId) {
    const o = (world.objects ?? []).find((x: WorldObject) => x.id === who.objectId);
    if (!o) throw new Error(`no object "${who.objectId}" in the world (objects: ${(world.objects ?? []).map((x) => x.id).join(", ") || "none"})`);
    if (o.fixed) throw new Error(`object "${o.id}" is fixed: nothing to settle`);
    const b = compiled.bodies.find((x) => x.object === o.id);
    if (!b) throw new Error(`object "${o.id}" has no body`);
    placed = o.pose;
    bodyName = b.name;
    ref = o.id;
  } else throw new Error("settle needs a machineId or an objectId");

  const saved = engine.save();
  try {
    engine.reset();
    const p0 = engine.bodyPos(bodyName), q0 = engine.bodyQuat(bodyName);
    const pq = V.poseQuat(placed);
    const pp: XYZ = placed?.pos ?? [0, 0, 0];
    // the body relative to its placement, at the loaded pose
    const qOff = V.quatNormalize(V.quatMul(V.quatConj(pq), q0));
    const offset = V.rotate(V.quatConj(pq), V.sub(p0, pp));
    engine.step(steps);
    engine.forward?.(); // poses as integrated, not one step behind
    const p1 = engine.bodyPos(bodyName), q1 = engine.bodyQuat(bodyName);
    engine.step(Math.max(1, Math.round(0.02 / dt)));
    engine.forward?.();
    const p2 = engine.bodyPos(bodyName);
    const speed = V.len(V.sub(p2, p1)) / 0.02;
    const qNew = V.quatNormalize(V.quatMul(q1, V.quatConj(qOff)));
    const posNew = V.sub(p1, V.rotate(qNew, offset));
    const r = (n: number) => Math.round(n * 1e5) / 1e5;
    return { ref, pose: { pos: posNew.map(r) as XYZ, quat: qNew.map(r) as Quat }, moved: r(V.len(V.sub(p1, p0))), settled: speed < 0.001, seconds: steps * dt };
  } finally {
    engine.restore(saved);
  }
}
