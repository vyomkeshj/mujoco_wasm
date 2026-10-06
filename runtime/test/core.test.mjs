import { test } from "node:test";
import assert from "node:assert/strict";
import { compileWorld, MujocoEngine, RecordedEngine, Simulation, encodeTrajectory, decodeTrajectory, compileProgram } from "../dist/core.mjs";
import { carWorld } from "./fixtures.mjs";

const engine = await MujocoEngine.create();

test("the car compiles into a tree with gears, motors and sensors", () => {
  const { world, meshes } = carWorld();
  const c = compileWorld({ world, meshes });
  assert.match(c.mjcf, /<joint name="car\.rearAxle" type="hinge"/);
  assert.match(c.mjcf, /<velocity name="car\.drive" joint="car\.drive"/);
  assert.match(c.mjcf, /<position name="car\.steer" joint="car\.steerDrive"/);
  assert.match(c.mjcf, /<joint name="car\.g1" joint1="car\.rearAxle" joint2="car\.drive" polycoef="0 -0\.3333333 0 0 0"/);
  assert.match(c.mjcf, /<exclude body1="car\.driveShaft" body2="car\.rearLink"\/>/);
  assert.match(c.mjcf, /<camera name="car\.eye"/);
  assert.match(c.mjcf, /<freejoint name="car\.chassis\.free"\/>/);
  assert.equal(c.files.length, 21);
  const report = engine.load(c);
  assert.ok(report.bodies.includes("car.chassis") && report.bodies.includes("car.wheelFL"));
  assert.equal(report.actuators.length, 2);
  assert.deepEqual(report.cameras, ["car.eye"]);
  // the chassis body sits at its centroid height: the plate's mid-plane is at z = 33 mm, the motors raise it a little
  const z = engine.bodyPos("car.chassis")[2];
  assert.ok(z > 0.033 && z < 0.045, `chassis at ${z}`);
});

test("a velocity motor through a 3:1 gear drives the car forward", () => {
  const { world, meshes } = carWorld();
  const c = compileWorld({ world, meshes });
  engine.load(c);
  const sim = new Simulation(engine, c);
  const result = sim.runAll({
    runId: "r1", duration: 3, seed: 7,
    programs: [{ id: "p", source: `function loop({ machine, t, log }) { machine.motor("drive").speed(30); if (t > 2.9 && t < 2.93) log("axle", machine.sensor("axleEnc").speed.toFixed(0)); }` }],
  });
  assert.equal(result.status, "finished", result.reason);
  const dist = result.metrics.dist.value;
  assert.ok(dist > 0.4 && dist < 1.0, `drove ${dist} m: ${JSON.stringify(result.metrics)}`);
  const drive = engine.joint("car.drive").qd, axle = engine.joint("car.rearAxle").qd;
  assert.ok(Math.abs(axle + drive / 3) < 0.5, `gear ratio: drive ${drive.toFixed(2)} axle ${axle.toFixed(2)}`);
  assert.ok(engine.bodyPos("car.chassis")[0] > 0.3, "forward is +x with gear -1");
  assert.ok(result.logs.some((l) => l.includes("axle")), "the program logged");
  assert.ok(result.trajectory.samples > 100);
});

test("steering turns the car", () => {
  const { world, meshes } = carWorld();
  const c = compileWorld({ world, meshes });
  engine.load(c);
  const sim = new Simulation(engine, c);
  const r = sim.runAll({ runId: "r2", duration: 3, programs: [{ id: "p", source: `function loop({ machine }) { machine.motor("drive").speed(25); machine.motor("steer").angle(-60); }` }] });
  assert.equal(r.status, "finished", r.reason);
  const steer = r.metrics.steer.value;
  assert.ok(Math.abs(steer) > 10, `steer angle ${steer}`);
  const p = r.metrics.dist.value;
  assert.ok(p > 0.2, `moved ${p}`);
  const pos = engine.bodyPos("car.chassis");
  assert.ok(Math.abs(pos[1]) > 0.05, `turned: y = ${pos[1]}`);
});

test("the same seed and program give the same trajectory bytes; the recording replays it", () => {
  const { world, meshes } = carWorld();
  const c = compileWorld({ world, meshes });
  const run = () => {
    engine.load(c);
    return new Simulation(engine, c).runAll({ runId: "d", duration: 1.5, seed: 3, programs: [{ id: "p", source: `function loop({ machine, random }) { machine.motor("drive").speed(20 + random()); }` }] });
  };
  const a = run(), b = run();
  const ba = encodeTrajectory(a.trajectory), bb = encodeTrajectory(b.trajectory);
  assert.equal(ba.length, bb.length);
  assert.ok(ba.every((v, i) => v === bb[i]), "identical bytes");
  const rec = new RecordedEngine(decodeTrajectory(ba), c.timestep);
  rec.load(c);
  rec.seek(1.0);
  engine.restore(engine.save());
  const i = Math.round(1.0 * a.trajectory.rate);
  const base = i * a.trajectory.stride + 1 + a.trajectory.bodies.indexOf("car.chassis") * 7;
  const wanted = Array.from(a.trajectory.data.subarray(base, base + 3));
  const got = rec.bodyPos("car.chassis");
  assert.ok(wanted.every((v, k) => Math.abs(v - got[k]) < 1e-6), `replay ${got} vs ${wanted}`);
});

test("a free ball falls under gravity before it lands", () => {
  const world = { version: "world/1", ground: {}, objects: [{ id: "ball", shape: { kind: "sphere", r: 0.03 }, pose: { pos: [0, 0, 1] }, material: { mass: 20, color: "#ff0000" } }], machines: [], metrics: [{ id: "h", kind: "max_height", target: "ball" }, { id: "p", kind: "position", target: "ball" }] };
  const c = compileWorld({ world, meshes: {} });
  engine.load(c);
  const sim = new Simulation(engine, c);
  const r = sim.runAll({ runId: "b", duration: 0.3 });
  const z = r.metrics.p.value[2];
  const expected = 1 - 0.5 * 9.81 * 0.3 * 0.3;
  assert.ok(Math.abs(z - expected) < 0.01, `z=${z} expected ${expected}`);
  assert.equal(r.metrics.h.value, 1);
});

test("a program error fails the run with its line, and world.stop ends it early", () => {
  const { world, meshes } = carWorld();
  const c = compileWorld({ world, meshes });
  engine.load(c);
  const bad = new Simulation(engine, c).runAll({ runId: "e", duration: 1, programs: [{ id: "p", name: "oops", source: `function loop({ machine }) { machine.motor("nope").speed(1); }` }] });
  assert.equal(bad.status, "failed");
  assert.match(bad.reason, /oops.*no motor "nope"/);
  engine.load(c);
  const early = new Simulation(engine, c).runAll({ runId: "s", duration: 5, programs: [{ id: "p", source: `function loop({ t, world }) { if (t >= 0.5) world.stop("enough"); }` }] });
  assert.equal(early.status, "stopped");
  assert.equal(early.reason, "enough");
  assert.ok(early.time < 0.6);
  assert.throws(() => compileProgram("this is not javascript"), /program/);
});

test("obstacles collide: a wall stops the car", () => {
  const { world, meshes } = carWorld({ objects: [{ id: "wall", shape: { kind: "box", size: [0.05, 0.6, 0.2] }, pose: { pos: [0.35, 0, 0.1] }, fixed: true, material: { color: "#888888" } }], metrics: [{ id: "dist", kind: "distance_from_start", target: "car.chassis" }, { id: "hit", kind: "touched", target: "car.wheelFL", other: "wall" }] });
  const c = compileWorld({ world, meshes });
  engine.load(c);
  const r = new Simulation(engine, c).runAll({ runId: "w", duration: 4, programs: [{ id: "p", source: `function loop({ machine }) { machine.motor("drive").speed(40); }` }] });
  assert.equal(r.status, "finished", r.reason);
  assert.ok(r.metrics.dist.value < 0.3, `stopped by the wall at ${r.metrics.dist.value}`);
  assert.equal(r.metrics.hit.value, true, r.metrics.hit.text);
});
