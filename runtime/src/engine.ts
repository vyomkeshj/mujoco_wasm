// The engine seam: what the loop, programs, sensors, metrics and films talk to. MuJoCo is the first adapter;
// RecordedEngine replays a trajectory (films, scrubbing, tests) through the same interface.
import type { MainModule, MjData, MjModel, MjVFS } from "@mujoco/mujoco";
import type { CompiledWorld, Quat, Trajectory, XYZ } from "./types";

export interface LoadReport {
  bodies: string[];
  joints: string[];
  actuators: string[];
  sensors: string[];
  cameras: string[];
  nq: number;
  nv: number;
}

export interface Contact {
  /** body names */
  a: string;
  b: string;
  dist: number;
  pos: XYZ;
}

export interface CameraPose {
  pos: XYZ;
  /** row-major 3×3 world←camera */
  mat: number[];
  fovy: number;
}

export interface Engine {
  readonly name: string;
  readonly version: string;
  readonly timestep: number;
  load(world: CompiledWorld): LoadReport;
  reset(): void;
  step(n: number): void;
  time(): number;
  /** body names in pose order */
  bodyNames(): string[];
  /** 7 floats per body: x y z, w qx qy qz */
  poses(out: Float32Array): void;
  bodyPos(name: string): XYZ;
  bodyQuat(name: string): Quat;
  joint(name: string): { q: number; qd: number };
  jointNames(): string[];
  jointQ(out: Float32Array): void;
  setCtrl(name: string, value: number): void;
  ctrl(name: string): number;
  sensor(name: string): Float64Array;
  cameraPose(name: string): CameraPose;
  contacts(): Contact[];
  applyForce(body: string, force: XYZ, point: XYZ): void;
  save(): Float64Array;
  restore(state: Float64Array): void;
  dispose(): void;
}

type Module = MainModule;
let modulePromise: Promise<Module> | null = null;

export interface MujocoOptions {
  /** where mujoco.wasm is served (the browser bundle); node resolves it itself */
  wasmUrl?: string;
  /** an already-loaded module (tests) */
  module?: Module;
}

/** Load the official bindings once per process. */
export async function loadMujocoModule(opts: MujocoOptions = {}): Promise<Module> {
  if (opts.module) return opts.module;
  if (!modulePromise) {
    modulePromise = (async () => {
      const factory = (await import("@mujoco/mujoco")).default as (o?: unknown) => Promise<Module>;
      const options = opts.wasmUrl
        ? { locateFile: (path: string, prefix: string) => (path.endsWith(".wasm") ? opts.wasmUrl : prefix + path) }
        : undefined;
      return factory(options);
    })();
  }
  return modulePromise;
}

export class MujocoEngine implements Engine {
  readonly name = "mujoco";
  readonly version: string;
  timestep = 0.001;
  private model: MjModel | null = null;
  private data: MjData | null = null;
  private vfs: MjVFS | null = null;
  private bodyIds = new Map<string, number>();
  private bodyList: string[] = [];
  private jointIds = new Map<string, number>();
  private jointList: string[] = [];
  private actIds = new Map<string, number>();
  private sensorIds = new Map<string, number>();
  private camIds = new Map<string, number>();
  private geomBody: Int32Array = new Int32Array(0);

  private constructor(private readonly mj: Module) {
    this.version = "3.15.0";
  }

  static async create(opts: MujocoOptions = {}): Promise<MujocoEngine> {
    return new MujocoEngine(await loadMujocoModule(opts));
  }

  private m(): MjModel {
    if (!this.model) throw new Error("no world loaded");
    return this.model;
  }
  private d(): MjData {
    if (!this.data) throw new Error("no world loaded");
    return this.data;
  }

  load(world: CompiledWorld): LoadReport {
    this.dispose();
    const mj = this.mj;
    const vfs = new mj.MjVFS();
    for (const f of world.files) vfs.addBuffer(f.name, f.bytes);
    let spec;
    try {
      spec = mj.parseXMLString(world.mjcf, vfs);
    } catch (err) {
      vfs.delete();
      throw new Error(`the world did not parse: ${mujocoError(err)}`);
    }
    let model: MjModel;
    try {
      model = mj.mj_compile(spec, vfs);
    } catch (err) {
      spec.delete();
      vfs.delete();
      throw new Error(`the world did not compile: ${mujocoError(err)}`);
    }
    spec.delete();
    this.vfs = vfs;
    this.model = model;
    this.data = new mj.MjData(model);
    this.timestep = model.opt.timestep;
    const obj = mj.mjtObj;
    const names = (type: number, n: number): string[] => {
      const out: string[] = [];
      for (let i = 0; i < n; i++) out.push(mj.mj_id2name(model, type, i) || `#${i}`);
      return out;
    };
    this.bodyList = names(obj.mjOBJ_BODY.value, model.nbody);
    this.bodyIds = new Map(this.bodyList.map((n, i) => [n, i]));
    this.jointList = names(obj.mjOBJ_JOINT.value, model.njnt);
    this.jointIds = new Map(this.jointList.map((n, i) => [n, i]));
    const acts = names(obj.mjOBJ_ACTUATOR.value, model.nu);
    this.actIds = new Map(acts.map((n, i) => [n, i]));
    const sens = names(obj.mjOBJ_SENSOR.value, model.nsensor);
    this.sensorIds = new Map(sens.map((n, i) => [n, i]));
    const cams = names(obj.mjOBJ_CAMERA.value, model.ncam);
    this.camIds = new Map(cams.map((n, i) => [n, i]));
    this.geomBody = Int32Array.from(model.geom_bodyid as ArrayLike<number>);
    mj.mj_forward(model, this.data);
    return { bodies: this.bodyList.slice(), joints: this.jointList.slice(), actuators: acts, sensors: sens, cameras: cams, nq: model.nq, nv: model.nv };
  }

  reset(): void {
    this.mj.mj_resetData(this.m(), this.d());
    this.mj.mj_forward(this.m(), this.d());
  }

  step(n: number): void {
    const m = this.m(), d = this.d();
    for (let i = 0; i < n; i++) this.mj.mj_step(m, d);
  }

  time(): number {
    return this.d().time;
  }

  bodyNames(): string[] {
    return this.bodyList;
  }

  poses(out: Float32Array): void {
    const d = this.d();
    const xpos = d.xpos as Float64Array, xquat = d.xquat as Float64Array;
    const n = this.bodyList.length;
    for (let b = 0; b < n; b++) {
      out[b * 7] = xpos[b * 3];
      out[b * 7 + 1] = xpos[b * 3 + 1];
      out[b * 7 + 2] = xpos[b * 3 + 2];
      out[b * 7 + 3] = xquat[b * 4];
      out[b * 7 + 4] = xquat[b * 4 + 1];
      out[b * 7 + 5] = xquat[b * 4 + 2];
      out[b * 7 + 6] = xquat[b * 4 + 3];
    }
  }

  private bid(name: string): number {
    const id = this.bodyIds.get(name);
    if (id === undefined) throw new Error(`unknown body "${name}" (bodies: ${this.bodyList.filter((b) => b !== "world").join(", ")})`);
    return id;
  }

  bodyPos(name: string): XYZ {
    const b = this.bid(name);
    const xpos = this.d().xpos as Float64Array;
    return [xpos[b * 3], xpos[b * 3 + 1], xpos[b * 3 + 2]];
  }

  bodyQuat(name: string): Quat {
    const b = this.bid(name);
    const xq = this.d().xquat as Float64Array;
    return [xq[b * 4], xq[b * 4 + 1], xq[b * 4 + 2], xq[b * 4 + 3]];
  }

  private jid(name: string): number {
    const id = this.jointIds.get(name);
    if (id === undefined) throw new Error(`unknown joint "${name}" (joints: ${this.jointList.join(", ")})`);
    return id;
  }

  joint(name: string): { q: number; qd: number } {
    const j = this.jid(name);
    const m = this.m(), d = this.d();
    const qa = (m.jnt_qposadr as Int32Array)[j], da = (m.jnt_dofadr as Int32Array)[j];
    return { q: (d.qpos as Float64Array)[qa], qd: (d.qvel as Float64Array)[da] };
  }

  jointNames(): string[] {
    return this.jointList;
  }

  jointQ(out: Float32Array): void {
    const m = this.m(), d = this.d();
    const qpos = d.qpos as Float64Array, adr = m.jnt_qposadr as Int32Array;
    for (let j = 0; j < this.jointList.length; j++) out[j] = qpos[adr[j]];
  }

  setCtrl(name: string, value: number): void {
    const id = this.actIds.get(name);
    if (id === undefined) throw new Error(`unknown motor "${name}" (motors: ${[...this.actIds.keys()].join(", ") || "none"})`);
    if (!Number.isFinite(value)) throw new Error(`motor "${name}": the target must be a finite number (got ${value})`);
    const m = this.m();
    const range = m.actuator_ctrlrange as Float64Array;
    const lo = range[id * 2], hi = range[id * 2 + 1];
    const v = lo < hi ? Math.min(hi, Math.max(lo, value)) : value;
    (this.d().ctrl as Float64Array)[id] = v;
  }

  ctrl(name: string): number {
    const id = this.actIds.get(name);
    if (id === undefined) throw new Error(`unknown motor "${name}"`);
    return (this.d().ctrl as Float64Array)[id];
  }

  sensor(name: string): Float64Array {
    const id = this.sensorIds.get(name);
    if (id === undefined) throw new Error(`unknown sensor "${name}"`);
    const m = this.m();
    const adr = (m.sensor_adr as Int32Array)[id], dim = (m.sensor_dim as Int32Array)[id];
    return (this.d().sensordata as Float64Array).slice(adr, adr + dim);
  }

  cameraPose(name: string): CameraPose {
    const id = this.camIds.get(name);
    if (id === undefined) throw new Error(`unknown camera "${name}" (cameras: ${[...this.camIds.keys()].join(", ") || "none"})`);
    const d = this.d(), m = this.m();
    const p = d.cam_xpos as Float64Array, r = d.cam_xmat as Float64Array;
    return { pos: [p[id * 3], p[id * 3 + 1], p[id * 3 + 2]], mat: Array.from(r.subarray(id * 9, id * 9 + 9)), fovy: (m.cam_fovy as Float64Array)[id] };
  }

  contacts(): Contact[] {
    const d = this.d();
    const vec = d.contact;
    const out: Contact[] = [];
    try {
      const n = vec.size();
      for (let i = 0; i < n; i++) {
        const c = vec.get(i);
        if (!c) continue;
        const pos = c.pos as ArrayLike<number>;
        out.push({ a: this.bodyList[this.geomBody[c.geom1]], b: this.bodyList[this.geomBody[c.geom2]], dist: c.dist, pos: [pos[0], pos[1], pos[2]] });
      }
    } finally {
      vec.delete();
    }
    return out;
  }

  applyForce(body: string, force: XYZ, point: XYZ): void {
    const b = this.bid(body);
    this.mj.mj_applyFT(this.m(), this.d(), [...force], [0, 0, 0], [...point], b, this.d().qfrc_applied);
  }

  clearForces(): void {
    (this.d().qfrc_applied as Float64Array).fill(0);
  }

  save(): Float64Array {
    const spec = this.mj.mjtState.mjSTATE_INTEGRATION.value;
    const out = new Float64Array(this.mj.mj_stateSize(this.m(), spec));
    this.mj.mj_getState(this.m(), this.d(), out, spec);
    return out;
  }

  restore(state: Float64Array): void {
    const spec = this.mj.mjtState.mjSTATE_INTEGRATION.value;
    this.mj.mj_setState(this.m(), this.d(), Array.from(state), spec);
    this.mj.mj_forward(this.m(), this.d());
  }

  dispose(): void {
    this.data?.delete();
    this.model?.delete();
    this.vfs?.delete();
    this.data = null;
    this.model = null;
    this.vfs = null;
    this.bodyIds.clear();
    this.jointIds.clear();
    this.actIds.clear();
    this.sensorIds.clear();
    this.camIds.clear();
    this.bodyList = [];
    this.jointList = [];
  }
}

function mujocoError(err: unknown): string {
  const msg = err instanceof Error ? err.message : typeof err === "string" ? err : typeof err === "number" ? `engine error code ${err}` : (() => { try { return JSON.stringify(err); } catch { return String(err); } })();
  return msg.replace(/^MuJoCo Error:\s*/i, "").trim();
}

/** Replays a trajectory: the same reads, no physics. `step` advances time by the engine timestep. */
export class RecordedEngine implements Engine {
  readonly name = "recorded";
  readonly version = "1";
  readonly timestep: number;
  private t = 0;
  private world: CompiledWorld | null = null;
  constructor(private readonly traj: Trajectory, timestep = 0.001) {
    this.timestep = timestep;
  }
  load(world: CompiledWorld): LoadReport {
    this.world = world;
    return { bodies: this.traj.bodies.slice(), joints: this.traj.joints.slice(), actuators: [], sensors: [], cameras: [], nq: 0, nv: 0 };
  }
  reset(): void {
    this.t = 0;
  }
  step(n: number): void {
    this.t += n * this.timestep;
  }
  seek(t: number): void {
    this.t = Math.max(0, t);
  }
  time(): number {
    return this.t;
  }
  duration(): number {
    return (this.traj.samples - 1) / this.traj.rate;
  }
  private sampleIndex(): number {
    const i = Math.round(this.t * this.traj.rate);
    return Math.max(0, Math.min(this.traj.samples - 1, i));
  }
  bodyNames(): string[] {
    return this.traj.bodies;
  }
  poses(out: Float32Array): void {
    const i = this.sampleIndex();
    const base = i * this.traj.stride + 1;
    out.set(this.traj.data.subarray(base, base + this.traj.bodies.length * 7));
  }
  bodyPos(name: string): XYZ {
    const b = this.traj.bodies.indexOf(name);
    if (b < 0) throw new Error(`unknown body "${name}"`);
    const base = this.sampleIndex() * this.traj.stride + 1 + b * 7;
    const d = this.traj.data;
    return [d[base], d[base + 1], d[base + 2]];
  }
  bodyQuat(name: string): Quat {
    const b = this.traj.bodies.indexOf(name);
    if (b < 0) throw new Error(`unknown body "${name}"`);
    const base = this.sampleIndex() * this.traj.stride + 1 + b * 7 + 3;
    const d = this.traj.data;
    return [d[base], d[base + 1], d[base + 2], d[base + 3]];
  }
  joint(name: string): { q: number; qd: number } {
    const j = this.traj.joints.indexOf(name);
    if (j < 0) throw new Error(`unknown joint "${name}"`);
    const i = this.sampleIndex();
    const at = (k: number) => this.traj.data[k * this.traj.stride + 1 + this.traj.bodies.length * 7 + j];
    const q = at(i);
    const qd = i > 0 ? (q - at(i - 1)) * this.traj.rate : 0;
    return { q, qd };
  }
  jointNames(): string[] {
    return this.traj.joints;
  }
  jointQ(out: Float32Array): void {
    const base = this.sampleIndex() * this.traj.stride + 1 + this.traj.bodies.length * 7;
    out.set(this.traj.data.subarray(base, base + this.traj.joints.length));
  }
  setCtrl(): void {
    /* a recording has no motors to drive */
  }
  ctrl(): number {
    return 0;
  }
  sensor(name: string): Float64Array {
    throw new Error(`a recording has no live sensors ("${name}")`);
  }
  cameraPose(name: string): CameraPose {
    const cam = this.world?.sensors.find((s) => s.camera?.name === name);
    if (!cam) throw new Error(`unknown camera "${name}"`);
    throw new Error("camera poses are not recorded yet");
  }
  contacts(): Contact[] {
    return [];
  }
  applyForce(): void {
    /* no physics */
  }
  save(): Float64Array {
    return Float64Array.of(this.t);
  }
  restore(state: Float64Array): void {
    this.t = state[0] ?? 0;
  }
  dispose(): void {
    this.world = null;
  }
}

// ------------------------------------------------------------------ trajectory bytes

export function encodeTrajectory(t: Trajectory): Uint8Array {
  const header = new TextEncoder().encode(JSON.stringify({ v: 1, bodies: t.bodies, joints: t.joints, rate: t.rate, stride: t.stride, samples: t.samples }));
  const out = new Uint8Array(4 + header.length + t.data.byteLength);
  new DataView(out.buffer).setUint32(0, header.length, true);
  out.set(header, 4);
  out.set(new Uint8Array(t.data.buffer, t.data.byteOffset, t.data.byteLength), 4 + header.length);
  return out;
}

export function decodeTrajectory(bytes: Uint8Array): Trajectory {
  const n = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getUint32(0, true);
  const h = JSON.parse(new TextDecoder().decode(bytes.subarray(4, 4 + n))) as { v: number; bodies: string[]; joints: string[]; rate: number; stride: number; samples: number };
  if (h.v !== 1) throw new Error(`unknown trajectory version ${h.v}`);
  const body = bytes.subarray(4 + n);
  const data = new Float32Array(body.byteLength / 4);
  new Uint8Array(data.buffer).set(body);
  return { bodies: h.bodies, joints: h.joints, rate: h.rate, stride: h.stride, samples: h.samples, data };
}
