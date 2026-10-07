import { test } from "node:test";
import assert from "node:assert/strict";
import { compileWorld, MujocoEngine, boxMesh, isClosedMesh } from "../dist/core.mjs";

const engine = await MujocoEngine.create();

// A 40 mm box with 2 mm walls: a closed shell whose solid hull is ~4.5× heavier than it is.
const outer = boxMesh([-20, -20, 0], [20, 20, 40]);
const inner = boxMesh([-18, -18, 2], [18, 18, 38]);
const flipped = new Float32Array(inner.length);
for (let t = 0; t < inner.length; t += 9) { flipped.set(inner.subarray(t, t + 3), t); flipped.set(inner.subarray(t + 6, t + 9), t + 3); flipped.set(inner.subarray(t + 3, t + 6), t + 6); }
const hollow = new Float32Array([...outer, ...flipped]);
const open = outer.subarray(0, outer.length - 9);
const world = (mesh) => ({
  version: "world/1", ground: {}, objects: [], metrics: [],
  machines: [{ id: "m", pose: { pos: [0, 0, 0.001] }, package: { version: "machine/1", name: "box", units: "mm",
    parts: [{ id: "shell", name: "Shell", bodies: [{ nodeId: "s", name: "Shell", mesh: { key: "s" }, collider: "hull" }] }],
    joints: [], motors: [], gears: [], sensors: [], ground: [] } }],
});

test("a closed hollow shell weighs its own volume, not its hull (the Luxo shade)", () => {
  assert.equal(isClosedMesh(hollow), true);
  const c = compileWorld({ world: world(hollow), meshes: { s: hollow } });
  assert.match(c.mjcf, /inertia="exact"/);
  engine.load(c);
  const grams = engine.bodyMass("m.shell") * 1000;
  const shell = (40 * 40 * 40 - 36 * 36 * 36) / 1000; // cm³ → g at 1000 kg/m³
  assert.ok(Math.abs(grams - shell) < 0.5, `${grams.toFixed(2)} g, the shell is ${shell} g (the hull would be 64 g)`);
});

test("an open mesh falls back to its hull and says so", () => {
  assert.equal(isClosedMesh(open), false);
  const c = compileWorld({ world: world(open), meshes: { s: open } });
  assert.match(c.mjcf, /inertia="convex"/);
  assert.ok(c.warnings.some((w) => /not a closed solid/.test(w)), c.warnings.join("; "));
});
