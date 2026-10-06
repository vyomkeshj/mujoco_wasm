// The scripted camera: a program says where the viewer's camera is and what it looks at, per control tick, in
// SIM time — so a film of the run and the live viewport see the same shots, and the same seed gives the same
// film twice. No three.js here: this is pure maths over body poses; the renderer applies the pose it is given.
import type { Quat, XYZ } from "./types";
import * as V from "./vec";

/** A machine id ("car"), a part ("car.chassis"), an object id ("ball"), or a point in metres. */
export type Target = string | XYZ;

export interface CameraPoseLane {
  pos: XYZ;
  look: XYZ;
  /** vertical field of view, degrees */
  fov: number;
}

export interface FollowOptions {
  distance?: number;
  height?: number;
  /** degrees around the target: 0 = behind it (the target's own heading when it is a machine or part) */
  azimuthDeg?: number;
  /** 0 (snap) .. 1 (very slow): the fraction of the distance left after 20 ms */
  lag?: number;
}

export interface PathKey {
  t: number;
  at: XYZ;
  lookAt?: Target;
}

export interface PathOptions {
  loop?: boolean;
  ease?: "linear" | "smooth";
}

/** What the director needs from the world: positions, headings and sizes of the things a Target names. */
export interface CameraScene {
  /** body names of a machine (its root first), or null when the id is not a machine */
  machineBodies(id: string): string[] | null;
  /** the body behind a ref ("car.chassis", "ball"), or null */
  bodyOf(ref: string): string | null;
  bodyPos(name: string): XYZ;
  bodyQuat(name: string): Quat;
  /** a bounding radius for framing, metres */
  bodyRadius(name: string): number;
}

type Mode =
  | { kind: "free" }
  | { kind: "follow"; target: Target; distance: number; height: number; azimuth: number; lag: number }
  | { kind: "fixed" }
  | { kind: "frame"; targets: Target[]; margin: number }
  | { kind: "path"; keys: PathKey[]; loop: boolean; ease: "linear" | "smooth" };

const DEG = Math.PI / 180;

export class CameraDirector {
  private mode: Mode = { kind: "free" };
  private pos: XYZ;
  private look: XYZ;
  private fovDeg: number;
  private lookTarget: Target | null = null;
  private calls = 0;
  /** the first pose the viewer had; `release()` goes back to free, the pose holds */
  constructor(private readonly scene: CameraScene, start: CameraPoseLane = { pos: [1.2, -1.2, 0.7], look: [0, 0, 0.05], fov: 42 }) {
    this.pos = [...start.pos] as XYZ;
    this.look = [...start.look] as XYZ;
    this.fovDeg = start.fov;
  }

  /** True once a program has scripted the camera in this run. */
  get active(): boolean {
    return this.calls > 0;
  }
  get scripted(): boolean {
    return this.mode.kind !== "free";
  }

  pose(): CameraPoseLane {
    return { pos: [...this.pos] as XYZ, look: [...this.look] as XYZ, fov: this.fovDeg };
  }

  // ---------------------------------------------------------------- the program API

  api() {
    const d = this;
    return {
      follow(target: Target, opts: FollowOptions = {}) {
        d.check(target, "follow");
        d.calls++;
        d.mode = { kind: "follow", target, distance: num(opts.distance, 1.2, "distance"), height: num(opts.height, 0.5, "height"), azimuth: num(opts.azimuthDeg, 0, "azimuthDeg") * DEG, lag: clamp01(num(opts.lag, 0.5, "lag")) };
        d.lookTarget = target;
      },
      lookAt(target: Target) {
        d.check(target, "lookAt");
        d.calls++;
        d.lookTarget = target;
        if (d.mode.kind === "free") d.mode = { kind: "fixed" };
      },
      at(p: XYZ) {
        if (!isXYZ(p)) throw new Error("camera.at([x, y, z]) takes metres");
        d.calls++;
        d.pos = [p[0], p[1], p[2]];
        d.mode = { kind: "fixed" };
      },
      fov(deg: number) {
        if (!(deg >= 5 && deg <= 150)) throw new Error(`camera.fov(deg): 5..150 (got ${deg})`);
        d.calls++;
        d.fovDeg = deg;
      },
      frame(targets: Target[], opts: { margin?: number } = {}) {
        if (!Array.isArray(targets) || !targets.length) throw new Error("camera.frame([targets]) needs at least one target");
        for (const t of targets) d.check(t, "frame");
        d.calls++;
        d.mode = { kind: "frame", targets: targets.slice(), margin: num(opts.margin, 1.2, "margin") };
        d.lookTarget = null;
      },
      path(keys: PathKey[], opts: PathOptions = {}) {
        if (!Array.isArray(keys) || !keys.length) throw new Error("camera.path([{ t, at, lookAt }]) needs at least one key");
        const sorted = keys.map((k, i) => {
          if (!k || typeof k.t !== "number" || !isXYZ(k.at)) throw new Error(`camera.path: key ${i} needs { t (s), at: [x, y, z] }`);
          if (k.lookAt !== undefined) d.check(k.lookAt, "path");
          return { t: k.t, at: [k.at[0], k.at[1], k.at[2]] as XYZ, lookAt: k.lookAt };
        }).sort((a, b) => a.t - b.t);
        d.calls++;
        d.mode = { kind: "path", keys: sorted, loop: !!opts.loop, ease: opts.ease === "smooth" ? "smooth" : "linear" };
      },
      release() {
        d.calls++;
        d.mode = { kind: "free" };
        d.lookTarget = null;
      },
      get position(): XYZ { return [...d.pos] as XYZ; },
      get target(): XYZ { return [...d.look] as XYZ; },
    };
  }

  private check(target: Target, what: string): void {
    if (isXYZ(target)) return;
    if (typeof target !== "string" || !target) throw new Error(`camera.${what}: a target is a machine id, "machine.part", an object id, or [x, y, z]`);
    if (!this.scene.machineBodies(target) && !this.scene.bodyOf(target)) throw new Error(`camera.${what}: nothing is called "${target}" in this world`);
  }

  // ---------------------------------------------------------------- per tick, in sim time

  private point(target: Target): XYZ {
    if (isXYZ(target)) return [target[0], target[1], target[2]];
    const mb = this.scene.machineBodies(target);
    if (mb && mb.length) return this.scene.bodyPos(mb[0]);
    const b = this.scene.bodyOf(target);
    if (!b) throw new Error(`camera: "${target}" is not in the world any more`);
    return this.scene.bodyPos(b);
  }

  /** The yaw (about z) of a machine or part, radians; 0 for a point or an object. */
  private heading(target: Target): number {
    if (isXYZ(target)) return 0;
    const mb = this.scene.machineBodies(target);
    const b = mb && mb.length ? mb[0] : this.scene.bodyOf(target);
    if (!b) return 0;
    const q = this.scene.bodyQuat(b);
    const [w, x, y, z] = q;
    return Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z));
  }

  update(dt: number, t: number): void {
    const m = this.mode;
    if (m.kind === "free") return;
    if (m.kind === "follow") {
      const p = this.point(m.target);
      const yaw = this.heading(m.target) + m.azimuth + Math.PI; // behind the target, by default
      const want: XYZ = [p[0] + Math.cos(yaw) * m.distance, p[1] + Math.sin(yaw) * m.distance, p[2] + m.height];
      // smoothing in sim time: `lag` is the fraction of the gap left after 20 ms, whatever the control rate
      const keep = m.lag <= 0 ? 0 : Math.pow(m.lag, dt / 0.02);
      this.pos = [want[0] + (this.pos[0] - want[0]) * keep, want[1] + (this.pos[1] - want[1]) * keep, want[2] + (this.pos[2] - want[2]) * keep];
      this.look = this.lookTarget ? this.point(this.lookTarget) : p;
      return;
    }
    if (m.kind === "fixed") {
      if (this.lookTarget) this.look = this.point(this.lookTarget);
      return;
    }
    if (m.kind === "frame") {
      // the box around everything named (a body counts with its radius), seen from the camera's current direction
      const lo: XYZ = [Infinity, Infinity, Infinity], hi: XYZ = [-Infinity, -Infinity, -Infinity];
      const grow = (p: XYZ, r: number) => { for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], p[k] - r); hi[k] = Math.max(hi[k], p[k] + r); } };
      for (const tg of m.targets) {
        if (isXYZ(tg)) { grow(tg, 0.02); continue; }
        const mb = this.scene.machineBodies(tg);
        const names = mb && mb.length ? mb : [this.scene.bodyOf(tg) as string];
        for (const n of names) grow(this.scene.bodyPos(n), this.scene.bodyRadius(n));
      }
      const c: XYZ = [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2];
      const r = Math.max(0.02, V.len(V.sub(hi, lo)) / 2);
      const dir = V.sub(this.pos, this.look);
      const d = V.len(dir) > 1e-6 ? V.norm(dir) : ([0.6, -0.6, 0.5] as XYZ);
      const dist = (r * m.margin) / Math.sin((this.fovDeg * DEG) / 2);
      this.look = c;
      this.pos = V.add(c, V.scale(d, Math.max(0.05, dist)));
      return;
    }
    if (m.kind === "path") {
      const { at, lookAt } = evaluatePath(m.keys, t, { loop: m.loop, ease: m.ease });
      this.pos = at;
      if (lookAt !== undefined) this.look = this.point(lookAt);
      else if (this.lookTarget) this.look = this.point(this.lookTarget);
    }
  }
}

/** Where a path puts the camera at `t`: keys interpolate, the first holds before, the last holds after (or it loops). */
export function evaluatePath(keys: PathKey[], t: number, opts: PathOptions = {}): { at: XYZ; lookAt?: Target } {
  if (!keys.length) throw new Error("an empty path");
  const first = keys[0], last = keys[keys.length - 1];
  let time = t;
  if (opts.loop && last.t > first.t) {
    const span = last.t - first.t;
    time = first.t + (((t - first.t) % span) + span) % span;
  }
  if (time <= first.t) return { at: [...first.at] as XYZ, lookAt: first.lookAt };
  if (time >= last.t) return { at: [...last.at] as XYZ, lookAt: last.lookAt };
  let i = 0;
  while (i < keys.length - 1 && keys[i + 1].t <= time) i++;
  const a = keys[i], b = keys[i + 1];
  const span = b.t - a.t;
  let u = span > 0 ? (time - a.t) / span : 1;
  if (opts.ease === "smooth") u = u * u * (3 - 2 * u);
  const at: XYZ = [a.at[0] + (b.at[0] - a.at[0]) * u, a.at[1] + (b.at[1] - a.at[1]) * u, a.at[2] + (b.at[2] - a.at[2]) * u];
  const la = a.lookAt, lb = b.lookAt;
  let lookAt: Target | undefined;
  if (isXYZ(la) && isXYZ(lb)) lookAt = [la[0] + (lb[0] - la[0]) * u, la[1] + (lb[1] - la[1]) * u, la[2] + (lb[2] - la[2]) * u];
  else lookAt = u < 0.5 ? (la ?? lb) : (lb ?? la);
  return { at, lookAt };
}

export function isXYZ(v: unknown): v is XYZ {
  return Array.isArray(v) && v.length === 3 && v.every((n) => typeof n === "number" && Number.isFinite(n));
}

function num(v: number | undefined, dflt: number, what: string): number {
  if (v === undefined) return dflt;
  if (typeof v !== "number" || !Number.isFinite(v)) throw new Error(`camera: ${what} must be a number`);
  return v;
}
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
