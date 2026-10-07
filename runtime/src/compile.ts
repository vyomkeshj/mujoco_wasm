// World + machine packages → MJCF text + mesh buffers + an engine-neutral description for rendering.
import type {
  Collider, CompiledActuator, CompiledBody, CompiledJoint, CompiledSensor, CompiledWorld, MachinePackage, MeshData,
  MeshRef, Metric, Part, PlacedMachine, Quat, RenderGeom, Sensor, World, WorldObject, XYZ,
} from "./types";
import { encodeStlBinary, meshData, parseStl, primitiveMesh, transformPositions } from "./stl";
import * as V from "./vec";

const MM = 0.001;
const DEFAULT_DENSITY = 1000; // kg/m³
const DEFAULT_FRICTION = 0.8;
const MIN_MASS_KG = 0.0005; // 0.5 g (H6)

export interface CompileInput {
  world: World;
  /** mesh key → STL bytes or a triangle soup in the package's units */
  meshes: Record<string, Uint8Array | Float32Array>;
}

export function meshKey(ref: MeshRef): string {
  if (ref.primitive) return `primitive:${JSON.stringify(ref.primitive)}`;
  const k = ref.key ?? ref.fileId ?? ref.url;
  if (!k) throw new Error("a mesh reference needs a key, fileId, url or primitive");
  return k;
}

const esc = (s: string): string => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c] as string);
const safe = (s: string): string => s.replace(/[^A-Za-z0-9_.:-]/g, "_");

function rgba(color: string | undefined, fallback: string): string {
  const hex = (color ?? fallback).trim().replace(/^#/, "");
  const h = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`colour must be #rrggbb (got "${color}")`);
  const n = Number.parseInt(h, 16);
  return `${V.fmt(((n >> 16) & 255) / 255)} ${V.fmt(((n >> 8) & 255) / 255)} ${V.fmt((n & 255) / 255)} 1`;
}

function frictionAttr(f: number | undefined): string {
  return `${V.fmt(f ?? DEFAULT_FRICTION)} 0.005 0.0001`;
}

class Mjcf {
  assets: string[] = [];
  bodies: string[] = [];
  contact: string[] = [];
  equality: string[] = [];
  actuators: string[] = [];
  sensors: string[] = [];
}

interface PartPlan {
  machine: string;
  part: Part;
  name: string; // body name
  centroid: XYZ; // mm
  bboxMin: XYZ;
  bboxMax: XYZ;
  volume: number; // mm³
  bodyMeshes: { body: Part["bodies"][number]; data: MeshData }[];
  children: { part: PartPlan; joint: MachinePackage["joints"][number] | null }[];
  parentEdge: { parent: PartPlan | null; joint: MachinePackage["joints"][number] | null; synthetic?: "free" | "weld" } | null;
}

export function compileWorld(input: CompileInput): CompiledWorld {
  const { world, meshes } = input;
  if (world.version !== "world/1") throw new Error(`unknown world version "${(world as { version?: string }).version}" (this runtime reads world/1)`);
  const warnings: string[] = [];
  const out = new Mjcf();
  const bodies: CompiledBody[] = [];
  const joints: CompiledJoint[] = [];
  const actuators: CompiledActuator[] = [];
  const sensors: CompiledSensor[] = [];
  const files: { name: string; bytes: Uint8Array }[] = [];
  const timestep = world.timestep ?? 0.001;
  if (!(timestep > 0 && timestep <= 0.01)) throw new Error(`timestep must be in (0, 0.01] seconds (got ${timestep})`);
  const gravity: XYZ = world.gravity ?? [0, 0, -9.81];
  const groundOn = world.ground !== null;
  const groundSize = world.ground?.size ?? 10;
  const look = { sky: world.look?.sky ?? "#dfe9f3", floor: world.ground?.color ?? world.look?.floor ?? "#cfd6dc", groundSize, ground: groundOn };

  const loadMesh = (ref: MeshRef, what: string): MeshData => {
    if (ref.primitive) return meshData(primitiveMesh(ref.primitive));
    const key = meshKey(ref);
    const src = meshes[key];
    if (!src) throw new Error(`${what}: mesh "${key}" was not given to the compiler`);
    const positions = src instanceof Float32Array ? src : parseStl(src);
    return meshData(positions);
  };

  // ------------------------------------------------------------- ground
  if (groundOn) {
    out.bodies.push(`<geom name="floor" type="plane" size="${V.fmt(groundSize)} ${V.fmt(groundSize)} 0.1" friction="${frictionAttr(world.ground?.friction ?? 1)}" rgba="${rgba(look.floor, "#cfd6dc")}"/>`);
    bodies.push({ name: "world", ref: "world", origin: [0, 0, 0], geoms: [{ kind: "plane", size: [groundSize, groundSize, 0], pos: [0, 0, 0], quat: V.QUAT_ID, color: look.floor }] });
  } else {
    bodies.push({ name: "world", ref: "world", origin: [0, 0, 0], geoms: [] });
  }

  // ------------------------------------------------------------- objects
  const objectIds = new Set<string>();
  for (const o of world.objects ?? []) {
    if (objectIds.has(o.id)) throw new Error(`two objects share the id "${o.id}"`);
    objectIds.add(o.id);
    compileObject(o, out, bodies, files, loadMesh, warnings);
  }

  // ------------------------------------------------------------- machines
  const machineIds = new Set<string>();
  for (const m of world.machines ?? []) {
    if (machineIds.has(m.id)) throw new Error(`two machines share the id "${m.id}"`);
    machineIds.add(m.id);
    if (objectIds.has(m.id)) throw new Error(`machine "${m.id}" has the same id as an object`);
    compileMachine(m, out, bodies, joints, actuators, sensors, files, loadMesh, warnings);
  }

  // ------------------------------------------------------------- metrics (checked here so a run never fails late)
  const metrics = world.metrics ?? [];
  const known = new Set(bodies.map((b) => b.ref));
  const knownJoints = new Set(joints.map((j) => j.ref));
  for (const mt of metrics) {
    if (mt.kind === "time_to") {
      if (!metrics.some((x) => x.id === mt.target)) throw new Error(`metric "${mt.id}": time_to needs another metric id as target (got "${mt.target}")`);
    } else if (mt.kind === "joint_angle") {
      if (!knownJoints.has(mt.target)) throw new Error(`metric "${mt.id}": unknown joint "${mt.target}" (joints: ${[...knownJoints].join(", ") || "none"})`);
    } else if (!known.has(mt.target)) {
      throw new Error(`metric "${mt.id}": unknown body "${mt.target}" (bodies: ${[...known].filter((k) => k !== "world").join(", ") || "none"})`);
    }
    if (mt.kind === "touched" && (!mt.other || !known.has(mt.other))) throw new Error(`metric "${mt.id}": touched needs \`other\` naming a body`);
    if (mt.kind === "inside" && !mt.region) throw new Error(`metric "${mt.id}": inside needs a region {min, max}`);
  }

  const mjcf = [
    `<mujoco model="runmachine">`,
    `  <compiler angle="radian" autolimits="true"/>`,
    `  <option timestep="${V.fmt(timestep)}" gravity="${V.fmt3(gravity)}" integrator="implicitfast"/>`,
    `  <default>`,
    `    <geom condim="3" friction="${frictionAttr(undefined)}" solref="0.01 1"/>`,
    `    <joint armature="0.00001"/>`,
    `  </default>`,
    `  <asset>`,
    ...out.assets.map((l) => `    ${l}`),
    `  </asset>`,
    `  <worldbody>`,
    ...out.bodies.map((l) => `    ${l}`),
    `  </worldbody>`,
    `  <contact>`,
    ...out.contact.map((l) => `    ${l}`),
    `  </contact>`,
    `  <equality>`,
    ...out.equality.map((l) => `    ${l}`),
    `  </equality>`,
    `  <actuator>`,
    ...out.actuators.map((l) => `    ${l}`),
    `  </actuator>`,
    `  <sensor>`,
    ...out.sensors.map((l) => `    ${l}`),
    `  </sensor>`,
    `</mujoco>`,
    ``,
  ].join("\n");

  return { mjcf, files, bodies, joints, actuators, sensors, metrics, timestep, gravity, look, warnings };
}

// ------------------------------------------------------------------ objects

function compileObject(
  o: WorldObject, out: Mjcf, bodies: CompiledBody[], files: { name: string; bytes: Uint8Array }[],
  loadMesh: (ref: MeshRef, what: string) => MeshData, warnings: string[],
): void {
  const name = `obj.${safe(o.id)}`;
  const q = V.poseQuat(o.pose);
  const pos: XYZ = o.pose?.pos ?? [0, 0, 0];
  const color = o.material?.color ?? "#5c7cfa";
  const fr = frictionAttr(o.material?.friction);
  const massAttr = o.material?.mass !== undefined
    ? ` mass="${V.fmt(Math.max(MIN_MASS_KG, o.material.mass / 1000))}"`
    : ` density="${V.fmt(o.material?.density ?? DEFAULT_DENSITY)}"`;
  const geoms: RenderGeom[] = [];
  const lines: string[] = [];
  const s = o.shape;
  let bodyPos = pos;
  let bodyQuat = q;
  switch (s.kind) {
    case "box":
      lines.push(`<geom type="box" size="${V.fmt3(V.scale(s.size, 0.5))}"${massAttr} friction="${fr}" rgba="${rgba(color, "#5c7cfa")}"/>`);
      geoms.push({ kind: "box", size: s.size, pos: [0, 0, 0], quat: V.QUAT_ID, color });
      break;
    case "sphere":
      lines.push(`<geom type="sphere" size="${V.fmt(s.r)}"${massAttr} friction="${fr}" rgba="${rgba(color, "#5c7cfa")}"/>`);
      geoms.push({ kind: "sphere", size: [s.r, 0, 0], pos: [0, 0, 0], quat: V.QUAT_ID, color });
      break;
    case "cylinder":
      lines.push(`<geom type="cylinder" size="${V.fmt(s.r)} ${V.fmt(s.h / 2)}"${massAttr} friction="${fr}" rgba="${rgba(color, "#5c7cfa")}"/>`);
      geoms.push({ kind: "cylinder", size: [s.r, s.h, 0], pos: [0, 0, 0], quat: V.QUAT_ID, color });
      break;
    case "capsule":
      lines.push(`<geom type="capsule" size="${V.fmt(s.r)} ${V.fmt(s.h / 2)}"${massAttr} friction="${fr}" rgba="${rgba(color, "#5c7cfa")}"/>`);
      geoms.push({ kind: "capsule", size: [s.r, s.h, 0], pos: [0, 0, 0], quat: V.QUAT_ID, color });
      break;
    case "ramp": {
      // A tilted slab: its top surface rises from the object's origin along +x to height h over length l.
      const t = 0.02;
      const a = Math.atan2(s.h, s.l);
      const L = Math.hypot(s.l, s.h);
      const tilt = V.quatFromAxisAngle([0, 1, 0], -a);
      const centre: XYZ = [s.l / 2, 0, s.h / 2];
      const down = V.rotate(tilt, [0, 0, -t / 2]);
      bodyPos = V.add(pos, V.rotate(q, V.add(centre, down)));
      bodyQuat = V.quatMul(q, tilt);
      lines.push(`<geom type="box" size="${V.fmt3([L / 2, s.w / 2, t / 2])}"${massAttr} friction="${fr}" rgba="${rgba(color, "#8d99ae")}"/>`);
      geoms.push({ kind: "box", size: [L, s.w, t], pos: [0, 0, 0], quat: V.QUAT_ID, color });
      if (!o.fixed) warnings.push(`ramp "${o.id}" is not fixed — it will slide; set fixed:true for a real ramp`);
      break;
    }
    case "mesh": {
      const data = loadMesh(s.mesh, `object "${o.id}"`);
      const k = s.scale ?? 1;
      const local = transformPositions(data.positions, data.centroid, k);
      const file = `${name}.stl`;
      files.push({ name: file, bytes: encodeStlBinary(local) });
      // A closed shell weighs its own volume (inertia="exact"); MuJoCo's default weighs the convex hull, so a hollow
      // shade weighed as a solid cone and tipped the machine its mass report said was stable.
      const closed = isClosedMesh(data.positions);
      if (!closed) warnings.push(`machine "${m.id}" part "${pl.part.id}" body "${body.name}": the mesh is not a closed solid — its mass and inertia come from its convex hull; give the part material.mass to be exact`);
      out.assets.push(`<mesh name="${esc(name)}" file="${esc(file)}" inertia="${closed ? "exact" : "convex"}"/>`);
      bodyPos = V.add(pos, V.rotate(q, V.scale(data.centroid, k)));
      const col = s.collider ?? "hull";
      pushColliderGeoms(lines, geoms, col, { name, data, local, k, color, fr, massAttr, warnings, what: `object "${o.id}"` });
      break;
    }
    default:
      throw new Error(`object "${o.id}": unknown shape "${(s as { kind: string }).kind}"`);
  }
  out.bodies.push(`<body name="${esc(name)}" pos="${V.fmt3(bodyPos)}" quat="${V.fmt3(bodyQuat)}">`);
  if (!o.fixed) out.bodies.push(`  <freejoint name="${esc(name)}.free"/>`);
  for (const l of lines) out.bodies.push(`  ${l}`);
  out.bodies.push(`</body>`);
  bodies.push({ name, ref: o.id, object: o.id, origin: bodyPos, geoms });
}

interface ColliderCtx {
  name: string; data: MeshData; local: Float32Array; k: number; color: string; fr: string; massAttr: string; warnings: string[]; what: string;
}

/** The collision geoms of a mesh (and the visual mesh when the collider is a primitive). Positions in `local` are body frame, metres. */
function pushColliderGeoms(lines: string[], geoms: RenderGeom[], col: Collider, c: ColliderCtx): void {
  const meshGeom = (visualOnly: boolean) =>
    `<geom type="mesh" mesh="${esc(c.name)}"${c.massAttr} friction="${c.fr}" rgba="${rgba(c.color, "#5c7cfa")}"${visualOnly ? ` contype="0" conaffinity="0" group="1"` : ""}/>`;
  const kind = typeof col === "string" ? col : col.kind;
  if (kind === "hull" || kind === "exact") {
    if (kind === "exact") c.warnings.push(`${c.what}: exact colliders are not built yet — using the convex hull`);
    lines.push(meshGeom(false));
    geoms.push({ kind: "mesh", positions: c.local, color: c.color });
    return;
  }
  if (kind === "none") {
    lines.push(meshGeom(true));
    geoms.push({ kind: "mesh", positions: c.local, color: c.color, visualOnly: true });
    return;
  }
  const fit = typeof col === "string" ? fitPrimitive(col as "box" | "sphere" | "cylinder" | "capsule", c.data, c.k, c.what, c.warnings) : scaledExplicit(col, c.data.centroid, c.k);
  if (!fit) {
    lines.push(meshGeom(false));
    geoms.push({ kind: "mesh", positions: c.local, color: c.color });
    return;
  }
  // the mesh carries the mass and the look; the primitive carries the contact
  lines.push(meshGeom(true));
  geoms.push({ kind: "mesh", positions: c.local, color: c.color, visualOnly: true });
  const prim = fit;
  if (prim.kind === "cylinder") {
    const q = V.quatZTo(prim.axis);
    lines.push(`<geom type="cylinder" size="${V.fmt(prim.radius)} ${V.fmt(prim.length / 2)}" pos="${V.fmt3(prim.center)}" quat="${V.fmt3(q)}" mass="0" friction="${c.fr}" rgba="0 0 0 0"/>`);
  } else if (prim.kind === "sphere") {
    lines.push(`<geom type="sphere" size="${V.fmt(prim.radius)}" pos="${V.fmt3(prim.center)}" mass="0" friction="${c.fr}" rgba="0 0 0 0"/>`);
  } else if (prim.kind === "box") {
    lines.push(`<geom type="box" size="${V.fmt3(V.scale(prim.size, 0.5))}" pos="${V.fmt3(prim.center)}" quat="${V.fmt3(prim.quat ?? V.QUAT_ID)}" mass="0" friction="${c.fr}" rgba="0 0 0 0"/>`);
  } else if (prim.kind === "capsule") {
    const q = V.quatZTo(prim.axis);
    lines.push(`<geom type="capsule" size="${V.fmt(prim.radius)} ${V.fmt(Math.max(0, prim.length / 2 - prim.radius))}" pos="${V.fmt3(prim.center)}" quat="${V.fmt3(q)}" mass="0" friction="${c.fr}" rgba="0 0 0 0"/>`);
  }
}

type Fit =
  | { kind: "cylinder" | "capsule"; axis: XYZ; radius: number; length: number; center: XYZ }
  | { kind: "sphere"; radius: number; center: XYZ }
  | { kind: "box"; size: XYZ; center: XYZ; quat?: Quat };

/** An explicit collider written in the package's units around the design pose → body frame, metres. */
function scaledExplicit(col: Exclude<Collider, string>, centroid: XYZ, k: number): Fit {
  const centre = V.scale(V.sub(col.center, centroid), k);
  if (col.kind === "cylinder") return { kind: "cylinder", axis: col.axis, radius: col.radius * k, length: col.length * k, center: centre };
  if (col.kind === "sphere") return { kind: "sphere", radius: col.radius * k, center: centre };
  return { kind: "box", size: V.scale(col.size, k), center: centre, quat: col.quat };
}

/** Fit a primitive to a mesh's bounding box: the odd axis of a cylinder, equal extents of a sphere, the box itself. */
function fitPrimitive(kind: "box" | "sphere" | "cylinder" | "capsule", data: MeshData, k: number, what: string, warnings: string[]): Fit | null {
  const ext = V.sub(data.bbox.max, data.bbox.min);
  const bboxCentre = V.scale(V.add(data.bbox.min, data.bbox.max), 0.5);
  const centre = V.scale(V.sub(bboxCentre, data.centroid), k);
  if (kind === "box") return { kind: "box", size: V.scale(ext, k), center: centre };
  const near = (a: number, b: number) => Math.abs(a - b) <= 0.03 * Math.max(a, b);
  if (kind === "sphere") {
    if (near(ext[0], ext[1]) && near(ext[1], ext[2])) return { kind: "sphere", radius: (Math.max(...ext) / 2) * k, center: centre };
    warnings.push(`${what}: not round enough for a sphere collider (extents ${ext.map((e) => e.toFixed(2)).join(" × ")}) — using the convex hull`);
    return null;
  }
  // cylinder / capsule: two equal extents, the third is the axis
  for (let a = 0; a < 3; a++) {
    const u = (a + 1) % 3, v = (a + 2) % 3;
    if (near(ext[u], ext[v]) && !near(ext[a], ext[u])) {
      // a round cross-section is not enough: a cone, a cup or a shade has one too, and a cylinder around it
      // reaches parts the body never touches (it pushed a lamp over). The body must fill most of the cylinder.
      const fill = data.volume / (Math.PI * (ext[u] / 2) ** 2 * ext[a]);
      if (fill < 0.6) {
        warnings.push(`${what}: fills only ${Math.round(fill * 100)}% of the cylinder around it (a cone, a cup or a shell) — using the convex hull`);
        return null;
      }
      const axis: XYZ = [0, 0, 0];
      axis[a] = 1;
      return { kind, axis, radius: (ext[u] / 2) * k, length: ext[a] * k, center: centre };
    }
  }
  if (near(ext[0], ext[1]) && near(ext[1], ext[2])) {
    // a cube-ish body: take z as the axis
    const fill = data.volume / (Math.PI * (ext[0] / 2) ** 2 * ext[2]);
    if (fill < 0.6) {
      warnings.push(`${what}: fills only ${Math.round(fill * 100)}% of the cylinder around it (a cone, a cup or a shell) — using the convex hull`);
      return null;
    }
    return { kind, axis: [0, 0, 1], radius: (ext[0] / 2) * k, length: ext[2] * k, center: centre };
  }
  warnings.push(`${what}: no axis with a round cross-section for a ${kind} collider (extents ${ext.map((e) => e.toFixed(2)).join(" × ")}) — using the convex hull`);
  return null;
}

// ------------------------------------------------------------------ machines

function compileMachine(
  m: PlacedMachine, out: Mjcf, bodies: CompiledBody[], joints: CompiledJoint[], actuators: CompiledActuator[], sensors: CompiledSensor[],
  files: { name: string; bytes: Uint8Array }[], loadMesh: (ref: MeshRef, what: string) => MeshData, warnings: string[],
): void {
  const p = m.package;
  if (p?.version !== "machine/1") throw new Error(`machine "${m.id}": unknown package version "${(p as { version?: string })?.version}" (this runtime reads machine/1)`);
  if (p.units !== "mm") throw new Error(`machine "${m.id}": units must be mm (got "${p.units}")`);
  const mid = safe(m.id);
  const q = V.poseQuat(m.pose);
  const pos: XYZ = m.pose?.pos ?? [0, 0, 0];

  // parts
  const plans = new Map<string, PartPlan>();
  for (const part of p.parts) {
    if (plans.has(part.id)) throw new Error(`machine "${m.id}": two parts share the id "${part.id}"`);
    if (!part.bodies?.length) throw new Error(`machine "${m.id}": part "${part.id}" has no bodies`);
    const bodyMeshes = part.bodies.map((b) => ({ body: b, data: loadMesh(b.mesh, `machine "${m.id}" part "${part.id}" body "${b.name}"`) }));
    let vol = 0;
    const c = [0, 0, 0];
    const bmin: XYZ = [Infinity, Infinity, Infinity], bmax: XYZ = [-Infinity, -Infinity, -Infinity];
    for (const { data } of bodyMeshes) {
      const w = data.volume > 0 ? data.volume : 1e-9;
      vol += w;
      for (let k = 0; k < 3; k++) {
        c[k] += data.centroid[k] * w;
        bmin[k] = Math.min(bmin[k], data.bbox.min[k]);
        bmax[k] = Math.max(bmax[k], data.bbox.max[k]);
      }
    }
    const centroid: XYZ = [c[0] / vol, c[1] / vol, c[2] / vol];
    plans.set(part.id, { machine: m.id, part, name: `${mid}.${safe(part.id)}`, centroid, bboxMin: bmin, bboxMax: bmax, volume: vol, bodyMeshes, children: [], parentEdge: null });
  }
  const partOf = (id: string, what: string): PartPlan => {
    const pl = plans.get(id);
    if (!pl) throw new Error(`machine "${m.id}": ${what} names an unknown part "${id}" (parts: ${[...plans.keys()].join(", ")})`);
    return pl;
  };
  const jointIds = new Set<string>();
  for (const j of p.joints) {
    if (jointIds.has(j.id)) throw new Error(`machine "${m.id}": two joints share the id "${j.id}"`);
    jointIds.add(j.id);
    if (j.parent === j.child) throw new Error(`machine "${m.id}": joint "${j.id}" connects part "${j.child}" to itself`);
    if (j.parent !== "world") partOf(j.parent, `joint "${j.id}"`);
    partOf(j.child, `joint "${j.id}"`);
    if ((j.type === "hinge" || j.type === "slide") && !j.axis) throw new Error(`machine "${m.id}": joint "${j.id}" (${j.type}) needs an axis {point, dir}`);
    if (j.type === "ball" && !j.axis) throw new Error(`machine "${m.id}": joint "${j.id}" (ball) needs an axis {point} for its anchor`);
    if (j.axis) V.norm(j.axis.dir);
  }
  for (const g of p.ground) partOf(g, "ground");

  // the tree: BFS from the world over ground welds and joints
  const used = new Set<string>();
  const queue: PartPlan[] = [];
  for (const g of p.ground) {
    const pl = partOf(g, "ground");
    if (pl.parentEdge) continue;
    pl.parentEdge = { parent: null, joint: null, synthetic: "weld" };
    queue.push(pl);
  }
  for (const j of p.joints) {
    if (j.parent !== "world") continue;
    const child = partOf(j.child, `joint "${j.id}"`);
    if (child.parentEdge) {
      warnings.push(`machine "${m.id}": joint "${j.id}" to the world is extra — "${j.child}" is already attached; it becomes a constraint`);
      continue;
    }
    child.parentEdge = { parent: null, joint: j };
    used.add(j.id);
    queue.push(child);
  }
  const attach = (from: PartPlan) => {
    for (const j of p.joints) {
      if (used.has(j.id) || j.parent === "world") continue;
      let other: PartPlan | null = null;
      let forward = true;
      if (j.parent === from.part.id) other = partOf(j.child, `joint "${j.id}"`);
      else if (j.child === from.part.id) { other = partOf(j.parent, `joint "${j.id}"`); forward = false; }
      if (!other || other.parentEdge) continue;
      if (!forward) warnings.push(`machine "${m.id}": joint "${j.id}" is written child→parent for the tree; the axis is kept, the sign of its angle follows the tree`);
      other.parentEdge = { parent: from, joint: j };
      from.children.push({ part: other, joint: j });
      used.add(j.id);
      queue.push(other);
    }
  };
  while (queue.length) attach(queue.shift() as PartPlan);
  // unreachable parts float: a free joint at their root
  for (const pl of plans.values()) {
    if (pl.parentEdge) continue;
    pl.parentEdge = { parent: null, joint: null, synthetic: "free" };
    queue.push(pl);
    while (queue.length) attach(queue.shift() as PartPlan);
  }
  const loops = p.joints.filter((j) => !used.has(j.id) && j.parent !== "world");
  const extraWorld = p.joints.filter((j) => !used.has(j.id) && j.parent === "world");

  // emit bodies, depth first from the roots
  const emitPart = (pl: PartPlan, depth: number) => {
    const ind = "  ".repeat(depth);
    const root = !pl.parentEdge?.parent;
    const bodyPos: XYZ = root ? V.add(pos, V.rotate(q, V.scale(pl.centroid, MM))) : V.scale(V.sub(pl.centroid, (pl.parentEdge?.parent as PartPlan).centroid), MM);
    const bodyQuat: Quat = root ? q : V.QUAT_ID;
    out.bodies.push(`${ind}<body name="${esc(pl.name)}" pos="${V.fmt3(bodyPos)}" quat="${V.fmt3(bodyQuat)}">`);
    const edge = pl.parentEdge;
    const j = edge?.joint ?? null;
    if (edge?.synthetic === "free" || (j && j.type === "free")) {
      const jn = j ? `${mid}.${safe(j.id)}` : `${pl.name}.free`;
      out.bodies.push(`${ind}  <freejoint name="${esc(jn)}"/>`);
      joints.push({ name: jn, ref: j ? `${m.id}.${j.id}` : `${m.id}.${pl.part.id}.free`, type: "free", body: pl.name, machine: m.id });
    } else if (j && j.type !== "fixed") {
      const jn = `${mid}.${safe(j.id)}`;
      const ax = j.axis as { point: XYZ; dir: XYZ };
      const jpos = V.scale(V.sub(ax.point, pl.centroid), MM);
      const attrs: string[] = [`name="${esc(jn)}"`, `type="${j.type}"`, `pos="${V.fmt3(jpos)}"`];
      if (j.type !== "ball") attrs.push(`axis="${V.fmt3(V.norm(ax.dir))}"`);
      if (j.range && j.type !== "ball") {
        const k = j.type === "slide" ? MM : Math.PI / 180;
        attrs.push(`range="${V.fmt(j.range[0] * k)} ${V.fmt(j.range[1] * k)}"`);
      }
      if (j.damping !== undefined) attrs.push(`damping="${V.fmt(j.damping)}"`);
      if (j.friction !== undefined) attrs.push(`frictionloss="${V.fmt(j.friction)}"`);
      if (j.armature !== undefined) attrs.push(`armature="${V.fmt(j.armature)}"`);
      if (j.spring) {
        const k = j.type === "slide" ? MM : Math.PI / 180;
        attrs.push(`stiffness="${V.fmt(j.spring.stiffness)}"`, `springref="${V.fmt(j.spring.rest * k)}"`);
      }
      out.bodies.push(`${ind}  <joint ${attrs.join(" ")}/>`);
      joints.push({ name: jn, ref: `${m.id}.${j.id}`, type: j.type, body: pl.name, machine: m.id });
    }
    // geoms: one per body
    const geoms: RenderGeom[] = [];
    const mat = pl.part.material ?? {};
    const fr = frictionAttr(mat.friction);
    for (const { body, data } of pl.bodyMeshes) {
      const name = `${pl.name}.${safe(body.nodeId)}`;
      const local = transformPositions(data.positions, pl.centroid, MM);
      const file = `${name}.stl`;
      files.push({ name: file, bytes: encodeStlBinary(local) });
      // A closed shell weighs its own volume (inertia="exact"); MuJoCo's default weighs the convex hull, so a hollow
      // shade weighed as a solid cone and tipped the machine its mass report said was stable.
      const closed = isClosedMesh(data.positions);
      if (!closed) warnings.push(`machine "${m.id}" part "${pl.part.id}" body "${body.name}": the mesh is not a closed solid — its mass and inertia come from its convex hull; give the part material.mass to be exact`);
      out.assets.push(`<mesh name="${esc(name)}" file="${esc(file)}" inertia="${closed ? "exact" : "convex"}"/>`);
      const share = pl.volume > 0 ? (data.volume > 0 ? data.volume : 1e-9) / pl.volume : 1 / pl.bodyMeshes.length;
      const massAttr = mat.mass !== undefined
        ? ` mass="${V.fmt(Math.max(MIN_MASS_KG * share, (mat.mass / 1000) * share))}"`
        : ` density="${V.fmt(mat.density ?? DEFAULT_DENSITY)}"`;
      const lines: string[] = [];
      pushColliderGeoms(lines, geoms, body.collider ?? "hull", {
        name, data, local, k: MM, color: body.color ?? pl.part.color ?? "#9aa5b1", fr, massAttr, warnings,
        what: `machine "${m.id}" part "${pl.part.id}" body "${body.name}"`,
      });
      for (const l of lines) out.bodies.push(`${ind}  ${l}`);
    }
    // sensors on this part
    for (const s of p.sensors) {
      if (!("part" in s) || s.part !== pl.part.id) continue;
      emitPartSensor(s, pl, mid, m.id, out, sensors, ind + "  ");
    }
    for (const ch of pl.children) emitPart(ch.part, depth + 1);
    out.bodies.push(`${ind}</body>`);
    bodies.push({ name: pl.name, ref: `${m.id}.${pl.part.id}`, machine: m.id, part: pl.part.id, origin: root ? bodyPos : V.add(pos, V.rotate(q, V.scale(pl.centroid, MM))), geoms });
  };
  for (const pl of plans.values()) if (!pl.parentEdge?.parent) emitPart(pl, 0);

  // joints that were not tree edges: constraints
  for (const j of loops) {
    const a = partOf(j.parent, `joint "${j.id}"`), b = partOf(j.child, `joint "${j.id}"`);
    if (j.type === "fixed") {
      out.equality.push(`<weld name="${esc(`${mid}.${safe(j.id)}`)}" body1="${esc(a.name)}" body2="${esc(b.name)}"/>`);
    } else {
      const anchor = V.scale(V.sub((j.axis as { point: XYZ }).point, a.centroid), MM);
      out.equality.push(`<connect name="${esc(`${mid}.${safe(j.id)}`)}" body1="${esc(a.name)}" body2="${esc(b.name)}" anchor="${V.fmt3(anchor)}"/>`);
      warnings.push(`machine "${m.id}": joint "${j.id}" closes a loop — modelled as a ball at its anchor (H3)`);
    }
    out.contact.push(`<exclude body1="${esc(a.name)}" body2="${esc(b.name)}"/>`);
  }
  for (const j of extraWorld) {
    const b = partOf(j.child, `joint "${j.id}"`);
    out.equality.push(`<weld name="${esc(`${mid}.${safe(j.id)}`)}" body1="world" body2="${esc(b.name)}"/>`);
  }

  // joint-level sensors (encoders)
  for (const s of p.sensors) {
    if (s.type !== "encoder") continue;
    if (!jointIds.has(s.joint)) throw new Error(`machine "${m.id}": sensor "${s.id}" names an unknown joint "${s.joint}"`);
    const jn = `${mid}.${safe(s.joint)}`;
    const base = `${mid}.${safe(s.id)}`;
    out.sensors.push(`<jointpos name="${esc(base)}.pos" joint="${esc(jn)}"/>`, `<jointvel name="${esc(base)}.vel" joint="${esc(jn)}"/>`);
    sensors.push({ name: base, ref: `${m.id}.${s.id}`, machine: m.id, type: "encoder", mj: [`${base}.pos`, `${base}.vel`] });
  }

  // motors
  const jointById = new Map(p.joints.map((j) => [j.id, j] as const));
  for (const mo of p.motors) {
    const j = jointById.get(mo.joint);
    if (!j) throw new Error(`machine "${m.id}": motor "${mo.id}" names an unknown joint "${mo.joint}"`);
    if (j.type !== "hinge" && j.type !== "slide") throw new Error(`machine "${m.id}": motor "${mo.id}" can only drive a hinge or a slide (joint "${j.id}" is ${j.type})`);
    if (!(mo.maxTorque > 0)) throw new Error(`machine "${m.id}": motor "${mo.id}" needs maxTorque > 0`);
    const jn = `${mid}.${safe(j.id)}`;
    const an = `${mid}.${safe(mo.id)}`;
    const unit = j.type === "slide" ? MM : 1;
    const T = mo.maxTorque;
    const maxSpeed = (mo.maxSpeed ?? (j.type === "slide" ? 500 : 30)) * unit;
    const gear = mo.gear ?? 1;
    if (mo.kind === "velocity") {
      const kv = T / Math.max(0.3 * maxSpeed, 1e-6);
      out.actuators.push(`<velocity name="${esc(an)}" joint="${esc(jn)}" kv="${V.fmt(kv)}" gear="${V.fmt(gear)}" ctrlrange="${V.fmt(-maxSpeed)} ${V.fmt(maxSpeed)}" forcerange="${V.fmt(-T)} ${V.fmt(T)}"/>`);
    } else if (mo.kind === "position") {
      const kp = T / (j.type === "slide" ? 0.01 : 0.2);
      const kv = kp * 0.05;
      const range = j.range ? [j.range[0] * (j.type === "slide" ? MM : Math.PI / 180), j.range[1] * (j.type === "slide" ? MM : Math.PI / 180)] : [-Math.PI * 4, Math.PI * 4];
      out.actuators.push(`<position name="${esc(an)}" joint="${esc(jn)}" kp="${V.fmt(kp)}" kv="${V.fmt(kv)}" gear="${V.fmt(gear)}" ctrlrange="${V.fmt(range[0])} ${V.fmt(range[1])}" forcerange="${V.fmt(-T)} ${V.fmt(T)}"/>`);
    } else {
      out.actuators.push(`<motor name="${esc(an)}" joint="${esc(jn)}" gear="${V.fmt(gear)}" ctrlrange="${V.fmt(-T)} ${V.fmt(T)}"/>`);
    }
    actuators.push({ name: an, ref: `${m.id}.${mo.id}`, machine: m.id, joint: `${m.id}.${j.id}`, kind: mo.kind, maxTorque: T, maxSpeed });
  }

  // gears: joint couplings, and the two parts never collide
  for (const g of p.gears) {
    const a = jointById.get(g.driver), b = jointById.get(g.driven);
    if (!a || !b) throw new Error(`machine "${m.id}": gear "${g.id}" names an unknown joint (${!a ? g.driver : g.driven})`);
    if (a.type !== "hinge" || b.type !== "hinge") throw new Error(`machine "${m.id}": gear "${g.id}" couples two hinges (got ${a.type} and ${b.type})`);
    const ratio = g.ratio ?? (g.teeth ? -g.teeth[0] / g.teeth[1] : NaN);
    if (!Number.isFinite(ratio) || ratio === 0) throw new Error(`machine "${m.id}": gear "${g.id}" needs teeth [driver, driven] or a non-zero ratio`);
    out.equality.push(`<joint name="${esc(`${mid}.${safe(g.id)}`)}" joint1="${esc(`${mid}.${safe(b.id)}`)}" joint2="${esc(`${mid}.${safe(a.id)}`)}" polycoef="0 ${V.fmt(ratio)} 0 0 0"/>`);
    const pa = partOf(a.child, `gear "${g.id}"`), pb = partOf(b.child, `gear "${g.id}"`);
    if (pa !== pb) out.contact.push(`<exclude body1="${esc(pa.name)}" body2="${esc(pb.name)}"/>`);
  }
}

function emitPartSensor(s: Sensor, pl: PartPlan, mid: string, machineId: string, out: Mjcf, sensors: CompiledSensor[], ind: string): void {
  const base = `${mid}.${safe(s.id)}`;
  const ref = `${machineId}.${s.id}`;
  switch (s.type) {
    case "camera": {
      const look = V.norm(s.look);
      let up: XYZ = s.up ? V.norm(s.up) : [0, 0, 1];
      if (Math.abs(V.dot(look, up)) > 0.999) up = Math.abs(look[2]) < 0.9 ? [0, 0, 1] : [0, 1, 0];
      const z = V.scale(look, -1);
      const x = V.norm(V.cross(up, z));
      const y = V.norm(V.cross(z, x));
      const cpos = V.scale(V.sub(s.position, pl.centroid), MM);
      out.bodies.push(`${ind}<camera name="${esc(base)}" pos="${V.fmt3(cpos)}" xyaxes="${V.fmt3(x)} ${V.fmt3(y)}" fovy="${V.fmt(s.fov)}"/>`);
      sensors.push({ name: base, ref, machine: machineId, type: "camera", mj: [], camera: { name: base, width: s.width, height: s.height, fov: s.fov } });
      return;
    }
    case "imu": {
      const spos = V.scale(V.sub(s.position ?? pl.centroid, pl.centroid), MM);
      out.bodies.push(`${ind}<site name="${esc(base)}.site" pos="${V.fmt3(spos)}" size="0.002"/>`);
      out.sensors.push(`<accelerometer name="${esc(base)}.acc" site="${esc(base)}.site"/>`, `<gyro name="${esc(base)}.gyro" site="${esc(base)}.site"/>`);
      sensors.push({ name: base, ref, machine: machineId, type: "imu", mj: [`${base}.acc`, `${base}.gyro`] });
      return;
    }
    case "rangefinder": {
      const spos = V.scale(V.sub(s.position, pl.centroid), MM);
      out.bodies.push(`${ind}<site name="${esc(base)}.site" pos="${V.fmt3(spos)}" zaxis="${V.fmt3(V.norm(s.dir))}" size="0.002"/>`);
      out.sensors.push(`<rangefinder name="${esc(base)}.range" site="${esc(base)}.site" cutoff="${V.fmt(s.maxRange ?? 10)}"/>`);
      sensors.push({ name: base, ref, machine: machineId, type: "rangefinder", mj: [`${base}.range`] });
      return;
    }
    case "touch": {
      const half = V.scale(V.sub(pl.bboxMax, pl.bboxMin), 0.5 * MM);
      const centre = V.scale(V.sub(V.scale(V.add(pl.bboxMin, pl.bboxMax), 0.5), pl.centroid), MM);
      out.bodies.push(`${ind}<site name="${esc(base)}.site" type="box" pos="${V.fmt3(centre)}" size="${V.fmt3(half.map((h) => h + 0.001) as XYZ)}"/>`);
      out.sensors.push(`<touch name="${esc(base)}.touch" site="${esc(base)}.site"/>`);
      sensors.push({ name: base, ref, machine: machineId, type: "touch", mj: [`${base}.touch`] });
      return;
    }
    case "gps": {
      out.sensors.push(`<framepos name="${esc(base)}.pos" objtype="body" objname="${esc(pl.name)}"/>`, `<framelinvel name="${esc(base)}.vel" objtype="body" objname="${esc(pl.name)}"/>`);
      sensors.push({ name: base, ref, machine: machineId, type: "gps", mj: [`${base}.pos`, `${base}.vel`] });
      return;
    }
    default:
      return;
  }
}

export function metricTargets(metrics: Metric[]): string[] {
  return metrics.map((m) => m.target);
}

/** Every edge shared by exactly two triangles (vertices welded on a 1e-4 grid) — a watertight shell. */
export function isClosedMesh(positions: ArrayLike<number>): boolean {
  const key = (i: number) => `${Math.round(positions[i] * 1e4)},${Math.round(positions[i + 1] * 1e4)},${Math.round(positions[i + 2] * 1e4)}`;
  const edges = new Map<string, number>();
  for (let t = 0; t + 8 < positions.length; t += 9) {
    const v = [key(t), key(t + 3), key(t + 6)];
    if (v[0] === v[1] || v[1] === v[2] || v[0] === v[2]) continue; // degenerate sliver
    for (let e = 0; e < 3; e++) {
      const a = v[e], b = v[(e + 1) % 3], k = a < b ? `${a}|${b}` : `${b}|${a}`;
      edges.set(k, (edges.get(k) ?? 0) + 1);
    }
  }
  if (edges.size === 0) return false;
  for (const n of edges.values()) if (n !== 2) return false;
  return true;
}
