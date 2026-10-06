// Runtime 6: the scripted camera, settle, the program↔machine binding rule and the shared blackboard.
import { test } from "node:test";
import assert from "node:assert/strict";
import { compileWorld, MujocoEngine, RecordedEngine, Simulation, encodeTrajectory, decodeTrajectory, evaluatePath, settlePose } from "../dist/core.mjs";
import { carWorld, carPackage } from "./fixtures.mjs";

const engine = await MujocoEngine.create();

function load(extra) {
  const { world, meshes } = carWorld(extra);
  const c = compileWorld({ world, meshes });
  engine.load(c);
  return { world, c };
}

test("a follow camera is recorded per sample, the film replays it, the bytes are version 2", () => {
  const { c } = load();
  const r = new Simulation(engine, c).runAll({
    runId: "cam", duration: 2, seed: 1, camera: { pos: [2, 2, 2], look: [0, 0, 0], fov: 42 },
    programs: [{ id: "p", source: `function loop({ machine, camera }) { machine.motor("drive").speed(30); camera.follow("car", { distance: 1.0, height: 0.45, lag: 0 }); }` }],
  });
  assert.equal(r.status, "finished", r.reason);
  assert.equal(r.camera, "scripted");
  const lane = r.trajectory.camera;
  assert.ok(lane && lane.length === 7 * r.trajectory.samples, "one camera pose per sample");
  // the camera sits 1 m behind the chassis (its heading is +x, so behind is −x) and 0.45 m up, looking at it
  const i = (r.trajectory.samples - 1) * 7;
  const chassis = engine.bodyPos("car.chassis");
  assert.ok(Math.abs(lane[i] - (chassis[0] - 1.0)) < 0.03, `camera x ${lane[i]} vs chassis ${chassis[0]} − 1`);
  assert.ok(Math.abs(lane[i + 2] - (chassis[2] + 0.45)) < 0.03, `camera z ${lane[i + 2]}`);
  assert.ok(Math.abs(lane[i + 3] - chassis[0]) < 0.01 && Math.abs(lane[i + 5] - chassis[2]) < 0.01, "looks at the chassis");
  assert.equal(lane[i + 6], 42);
  // bytes: v2 round-trips the lane; a run without a camera still writes v1
  const bytes = encodeTrajectory(r.trajectory);
  const back = decodeTrajectory(bytes);
  assert.equal(back.camera.length, lane.length);
  assert.ok([...back.data].every((v, k) => v === r.trajectory.data[k]));
  assert.equal(JSON.parse(new TextDecoder().decode(bytes.subarray(4, 4 + new DataView(bytes.buffer).getUint32(0, true)))).v, 2);
  const rec = new RecordedEngine(back, c.timestep);
  rec.load(c);
  assert.equal(rec.hasCamera, true);
  rec.seek(1.0);
  const at = rec.cameraAt();
  const k = Math.round(1.0 * back.rate) * 7;
  assert.deepEqual(at.pos, [lane[k], lane[k + 1], lane[k + 2]]);
  const plain = new Simulation(engine, c).runAll({ runId: "nocam", duration: 0.2 });
  assert.equal(plain.camera, "free");
  assert.equal(plain.trajectory.camera, undefined);
  const pb = encodeTrajectory(plain.trajectory);
  assert.equal(JSON.parse(new TextDecoder().decode(pb.subarray(4, 4 + new DataView(pb.buffer).getUint32(0, true)))).v, 1);
  assert.equal(decodeTrajectory(encodeTrajectory(plain.trajectory)).camera, undefined);
});

test("the same seed gives the same camera lane twice (smoothing runs in sim time)", () => {
  const { c } = load();
  const run = () => {
    engine.load(c);
    return new Simulation(engine, c).runAll({ runId: "d", duration: 1.5, seed: 3, programs: [{ id: "p", source: `function loop({ machine, camera }) { machine.motor("drive").speed(25); machine.motor("steer").angle(-50); camera.follow("car.chassis", { lag: 0.8 }); }` }] });
  };
  const a = run(), b = run();
  assert.ok([...a.trajectory.camera].every((v, i) => v === b.trajectory.camera[i]), "identical lanes");
  // with lag the camera glides from the viewer's pose to the shot, then never jumps (past the first half second)
  let maxStep = 0;
  for (let i = Math.round(0.5 * a.trajectory.rate) * 7; i < a.trajectory.camera.length; i += 7) maxStep = Math.max(maxStep, Math.hypot(a.trajectory.camera[i] - a.trajectory.camera[i - 7], a.trajectory.camera[i + 1] - a.trajectory.camera[i - 6]));
  assert.ok(maxStep < 0.05, `the camera moved at most ${maxStep} m between samples`);
});

test("camera.path interpolates between keys, holds outside them, and can loop", () => {
  const keys = [{ t: 0, at: [0, 0, 1], lookAt: [0, 0, 0] }, { t: 2, at: [2, 0, 1], lookAt: [2, 0, 0] }, { t: 4, at: [2, 2, 1] }];
  assert.deepEqual(evaluatePath(keys, -1).at, [0, 0, 1]);
  assert.deepEqual(evaluatePath(keys, 1).at, [1, 0, 1]);
  assert.deepEqual(evaluatePath(keys, 1).lookAt, [1, 0, 0]);
  assert.deepEqual(evaluatePath(keys, 3).at, [2, 1, 1]);
  assert.deepEqual(evaluatePath(keys, 9).at, [2, 2, 1]);
  assert.deepEqual(evaluatePath(keys, 5, { loop: true }).at, [1, 0, 1]);
  const s = evaluatePath(keys, 1, { ease: "smooth" }).at;
  assert.ok(s[0] > 0.99 && s[0] < 1.01, "smooth easing is symmetric at the midpoint");
  const q = evaluatePath(keys, 0.5, { ease: "smooth" }).at;
  assert.ok(q[0] < 0.5, `eased in: ${q[0]}`);
  // a path program drives the camera in the run
  const { c } = load();
  const r = new Simulation(engine, c).runAll({ runId: "path", duration: 1, programs: [{ id: "p", source: `function setup({ camera }) { camera.path([{ t: 0, at: [0, -1, 0.5], lookAt: "car" }, { t: 1, at: [1, -1, 0.5], lookAt: "car" }]); } function loop() {}` }] });
  assert.equal(r.status, "finished", r.reason);
  const lane = r.trajectory.camera;
  const mid = Math.round(0.5 * r.trajectory.rate) * 7;
  assert.ok(Math.abs(lane[mid] - 0.5) < 0.02, `halfway along the path at t=0.5: x=${lane[mid]}`);
});

test("camera.frame keeps everything named in view; camera.at and lookAt fix a shot; fov is clamped", () => {
  const { c } = load({ objects: [{ id: "ball", shape: { kind: "sphere", r: 0.03 }, pose: { pos: [1.5, 0, 0.03] }, material: { color: "#ff0000" } }] });
  const r = new Simulation(engine, c).runAll({ runId: "frame", duration: 0.5, camera: { pos: [0, -2, 1], look: [0, 0, 0], fov: 40 }, programs: [{ id: "p", source: `function loop({ camera }) { camera.frame(["car", "ball"], { margin: 1.1 }); }` }] });
  assert.equal(r.status, "finished", r.reason);
  const lane = r.trajectory.camera, i = (r.trajectory.samples - 1) * 7;
  // the centre is between the car (x≈0) and the ball (x=1.5), the camera backs off far enough to see both
  assert.ok(lane[i + 3] > 0.5 && lane[i + 3] < 1.0, `looks between them: ${lane[i + 3]}`);
  const dist = Math.hypot(lane[i] - lane[i + 3], lane[i + 1] - lane[i + 4], lane[i + 2] - lane[i + 5]);
  assert.ok(dist > 1.5 && dist < 6, `backed off ${dist} m`);
  const fixed = new Simulation(engine, c).runAll({ runId: "fixed", duration: 0.2, programs: [{ id: "p", source: `function setup({ camera }) { camera.at([0.5, -0.5, 0.3]); camera.lookAt("ball"); camera.fov(60); } function loop() {}` }] });
  const f = fixed.trajectory.camera, j = (fixed.trajectory.samples - 1) * 7;
  assert.deepEqual([f[j], f[j + 1], f[j + 2]].map((v) => Math.round(v * 100) / 100), [0.5, -0.5, 0.3]);
  assert.ok(Math.abs(f[j + 3] - 1.5) < 0.01, "looks at the ball");
  assert.equal(f[j + 6], 60);
  const bad = new Simulation(engine, c).runAll({ runId: "bad", duration: 0.2, programs: [{ id: "p", source: `function loop({ camera }) { camera.fov(400); }` }] });
  assert.equal(bad.status, "failed");
  assert.match(bad.reason, /fov/);
  const unknown = new Simulation(engine, c).runAll({ runId: "unk", duration: 0.2, programs: [{ id: "p", source: `function loop({ camera }) { camera.follow("rocket"); }` }] });
  assert.match(unknown.reason, /nothing is called "rocket"/);
});

test("save and restore carry the state (the bindings' getState never filled its output)", () => {
  const { c } = load();
  engine.setCtrl("car.drive", 30);
  engine.step(800);
  engine.forward(); // after a step the poses lag the integrated state by one step; read them as they are
  const p = engine.bodyPos("car.chassis"), t = engine.time();
  const s = engine.save();
  assert.ok(s.some((v) => v !== 0) && p[0] > 0.1, `moved to ${p}`);
  engine.step(800);
  assert.ok(engine.bodyPos("car.chassis")[0] > p[0] + 0.1, "kept going");
  engine.restore(s);
  const back = engine.bodyPos("car.chassis");
  assert.ok(back.every((v, i) => Math.abs(v - p[i]) < 1e-9), `restored ${back} vs ${p}`);
  assert.ok(Math.abs(engine.time() - t) < 1e-9, "time restored");
  assert.equal(engine.ctrl("car.drive"), 30);
});

test("settle answers the placement that lands a dropped ball and a car, and leaves the engine as it was", () => {
  const { world, c } = load({ objects: [{ id: "ball", shape: { kind: "sphere", r: 0.05 }, pose: { pos: [0.8, 0, 0.4] }, material: { color: "#ff0000" } }] });
  engine.step(300);
  const before = engine.save();
  const ball = settlePose(engine, c, world, { objectId: "ball" }, 1.0);
  assert.equal(ball.ref, "ball");
  assert.ok(Math.abs(ball.pose.pos[2] - 0.05) < 0.003, `rests at its radius: z=${ball.pose.pos[2]}`);
  assert.ok(Math.abs(ball.pose.pos[0] - 0.8) < 0.01, "did not drift sideways");
  assert.ok(ball.moved > 0.3 && ball.settled, `moved ${ball.moved}, settled ${ball.settled}`);
  const after = engine.save();
  assert.ok([...before].every((v, i) => v === after[i]), "the engine state is restored exactly");
  const car = settlePose(engine, c, world, { machineId: "car" }, 0.5);
  assert.equal(car.ref, "car.chassis");
  assert.ok(Math.abs(car.pose.pos[2] - 0.0005) < 0.003, `the car was placed resting already: z'=${car.pose.pos[2]}`);
  assert.ok(car.moved < 0.01, `barely moved: ${car.moved}`);
  // a car dropped from 10 cm lands on its wheels: the placement comes down by about that much
  const { world: w2, c: c2 } = load({ machines: [{ id: "car", package: carPackage().pkg, pose: { pos: [0, 0, 0.1] } }] });
  const dropped = settlePose(engine, c2, w2, { machineId: "car" }, 1.0);
  assert.ok(dropped.pose.pos[2] < 0.02 && dropped.pose.pos[2] > -0.01, `landed: z'=${dropped.pose.pos[2]}`);
  assert.ok(Math.abs(dropped.pose.quat[0]) > 0.99, `still upright: ${dropped.pose.quat}`);
  assert.throws(() => settlePose(engine, c, world, { objectId: "nope" }), /no object "nope"/);
});

test("a program must say which machine it drives when there are several; world programs see all; shared is one object", () => {
  const { pkg, meshes } = carPackage();
  const two = { version: "world/1", ground: {}, objects: [], machines: [{ id: "car", package: pkg, pose: { pos: [0, 0, 0.0005] } }, { id: "robot", package: pkg, pose: { pos: [0, 0.6, 0.0005] } }], metrics: [] };
  const c = compileWorld({ world: two, meshes });
  engine.load(c);
  const vague = new Simulation(engine, c).runAll({ runId: "v", duration: 0.2, programs: [{ id: "p", name: "vague", source: `function loop({ machine }) { machine.motor("drive").speed(1); }` }] });
  assert.equal(vague.status, "failed");
  assert.match(vague.reason, /program "vague" does not say which machine it drives \(machines: car, robot\) — set machine, or use machines\["car"\]/);
  engine.load(c);
  const named = new Simulation(engine, c).runAll({ runId: "n", duration: 0.5, programs: [{ id: "p", machine: "robot", source: `function loop({ machine, world }) { machine.motor("drive").speed(30); world.shared.robotSpeed = machine.velocity; }` }, { id: "w", machine: "*", source: `function loop({ machine, machines, world, log, t }) { if (machine !== undefined) throw new Error("a world program has no machine"); if (t > 0.45 && world.shared.robotSpeed) log("robot moves at", world.shared.robotSpeed[0].toFixed(2)); machines["car"].motor("drive").speed(-30); }` }] });
  assert.equal(named.status, "finished", named.reason);
  assert.ok(named.logs.some((l) => l.includes("robot moves at")), named.logs.join(" | "));
  assert.ok(engine.bodyPos("robot.chassis")[0] > 0.05 && engine.bodyPos("car.chassis")[0] < -0.05, "each machine drove its own way");
  engine.load(c);
  assert.throws(() => new Simulation(engine, c).runAll({ runId: "o", duration: 0.2, programs: [{ id: "p", machine: "cart", source: `function loop() {}` }] }), /drives machine "cart", which is not in the world \(machines: car, robot\)/);
});
