// The simulation loop: control ticks over an engine, programs, sensors, metrics, the trajectory.
// Host-agnostic — node tests, the worker and the headless page all drive it the same way.
import { CameraDirector, type CameraPoseLane, type CameraScene } from "./camera";
import type { CameraPose, Engine } from "./engine";
import { MetricTracker } from "./metrics";
import { compileProgram, findColor, seededRandom, type CameraImage, type ColorQuery, type ProgramHooks } from "./program";
import type { CompiledBody, CompiledSensor, CompiledWorld, Program, Quat, RunResult, RunSpec, Trajectory, XYZ } from "./types";
import * as V from "./vec";

export interface CameraRenderer {
  render(camera: { name: string; width: number; height: number; fov: number }, pose: CameraPose, wantDepth: boolean): CameraImage;
}

export interface SimOptions {
  cameraRenderer?: CameraRenderer;
  now?: () => number;
  maxLogs?: number;
  /** a program tick slower than this, this many times in a row, fails the run */
  tickBudgetMs?: number;
  slowTicksAllowed?: number;
}

const DEG = 180 / Math.PI;

interface LoadedProgram {
  program: Program;
  hooks: ProgramHooks;
  /** the machine the program drives; null for a world program; "?" when it did not say and there are several */
  machine: string | null;
}

const AMBIGUOUS = "?";
const DEFAULT_CAMERA: CameraPoseLane = { pos: [1.2, -1.2, 0.7], look: [0, 0, 0.05], fov: 42 };

class RunStopped extends Error {}

export class Simulation {
  private readonly now: () => number;
  private spec: RunSpec | null = null;
  private programs: LoadedProgram[] = [];
  private tracker: MetricTracker | null = null;
  private k = 1;
  private dt = 0.02;
  private ticks = 0;
  private sampleEvery = 1;
  private samples: Float32Array[] = [];
  private sampleRate = 60;
  private poseBuf: Float32Array;
  private qBuf: Float32Array;
  private prevPoses: Float32Array;
  private logs: string[] = [];
  private droppedLogs = 0;
  private custom: Record<string, number> = {};
  private stopReason: string | null = null;
  private failure: string | null = null;
  private startedAt = 0;
  private slowTicks = 0;
  private cameraCache = new Map<string, CameraImage>();
  private random: () => number = Math.random;
  private warnings: string[] = [];
  private contextCache = new Map<string, unknown>();
  private director: CameraDirector;
  private cameraSamples: Float32Array[] = [];
  private shared: Record<string, unknown> = {};
  private readonly radii = new Map<string, number>();
  readonly bodyNames: string[];

  constructor(readonly engine: Engine, readonly world: CompiledWorld, private readonly opts: SimOptions = {}) {
    this.now = opts.now ?? (() => (typeof performance !== "undefined" ? performance.now() : Date.now()));
    this.bodyNames = engine.bodyNames();
    this.poseBuf = new Float32Array(this.bodyNames.length * 7);
    this.prevPoses = new Float32Array(this.bodyNames.length * 7);
    this.qBuf = new Float32Array(engine.jointNames().length);
    for (const b of world.bodies) this.radii.set(b.name, bodyRadius(b));
    this.director = new CameraDirector(this.cameraScene(), DEFAULT_CAMERA);
  }

  /** What the camera director reads: positions and headings by the world's refs. */
  private cameraScene(): CameraScene {
    const sim = this;
    return {
      machineBodies(id) {
        if (!sim.machineIds().includes(id)) return null;
        const root = sim.rootBodyOf(id);
        const rest = sim.world.bodies.filter((b) => b.machine === id && b.name !== root).map((b) => b.name);
        return root ? [root, ...rest] : rest;
      },
      bodyOf(ref) { return sim.bodyName(ref); },
      bodyPos(name) { return sim.engine.bodyPos(name); },
      bodyQuat(name) { return sim.engine.bodyQuat(name); },
      bodyRadius(name) { return sim.radii.get(name) ?? 0.02; },
    };
  }

  /** A machine's root body: the one its free joint moves (the compiler lists bodies children-first). */
  rootBodyOf(machine: string): string | null {
    const free = this.world.joints.find((j) => j.machine === machine && j.type === "free");
    if (free) return free.body;
    const parts = this.world.bodies.filter((b) => b.machine === machine);
    return parts.length ? parts[parts.length - 1].name : null;
  }

  /** The scripted camera's pose now (the viewer's start pose until a program moves it). */
  cameraPose(): CameraPoseLane {
    return this.director.pose();
  }
  /** True once a program has taken the camera in this run. */
  get cameraScripted(): boolean {
    return this.director.active;
  }

  // ---------------------------------------------------------------- lookups by the world's refs

  bodyName(ref: string): string | null {
    return this.world.bodies.find((b) => b.ref === ref)?.name ?? null;
  }
  jointName(ref: string): string | null {
    return this.world.joints.find((j) => j.ref === ref)?.name ?? null;
  }
  machineIds(): string[] {
    return [...new Set(this.world.bodies.map((b) => b.machine).filter((m): m is string => !!m))];
  }

  // ---------------------------------------------------------------- lifecycle

  begin(spec: RunSpec): void {
    this.spec = spec;
    this.engine.reset();
    const programs = spec.programs ?? [];
    const rate = programs.reduce((r, p) => Math.min(r, p.rate ?? 50), 50);
    const h = this.engine.timestep;
    this.k = Math.max(1, Math.round(1 / (rate * h)));
    this.dt = this.k * h;
    const trajRate = spec.record?.trajectoryRate ?? 60;
    this.sampleEvery = Math.max(1, Math.round(1 / (this.dt * trajRate)));
    this.sampleRate = 1 / (this.dt * this.sampleEvery);
    this.ticks = 0;
    this.samples = [];
    this.logs = [];
    this.drainedLogs = 0;
    this.droppedLogs = 0;
    this.custom = {};
    this.stopReason = null;
    this.failure = null;
    this.slowTicks = 0;
    this.warnings = this.world.warnings.slice();
    this.contextCache.clear();
    this.random = seededRandom(spec.seed ?? 1);
    this.shared = {};
    this.cameraSamples = [];
    this.director = new CameraDirector(this.cameraScene(), spec.camera ?? DEFAULT_CAMERA);
    this.tracker = new MetricTracker(this.world.metrics, (r) => this.bodyName(r), (r) => this.jointName(r));
    const machines = this.machineIds();
    this.programs = programs.map((p) => {
      let machine: string | null;
      if (p.machine === "*") machine = null; // a world program: sees every machine, drives none by itself
      else if (p.machine) {
        if (!machines.includes(p.machine)) throw new Error(`program "${p.name ?? p.id}" drives machine "${p.machine}", which is not in the world (machines: ${machines.join(", ") || "none"})`);
        machine = p.machine;
      } else machine = machines.length === 1 ? machines[0] : machines.length > 1 ? AMBIGUOUS : null;
      return { program: p, hooks: compileProgram(p.source, p.name ?? p.id), machine };
    });
    this.engine.poses(this.prevPoses);
    this.engine.poses(this.poseBuf);
    this.tracker.update(this.engine, 0, 0);
    this.startedAt = this.now();
    for (const lp of this.programs) {
      if (!lp.hooks.setup) continue;
      try {
        lp.hooks.setup(this.context(lp));
      } catch (err) {
        if (err instanceof RunStopped) break;
        this.failure = `program "${lp.program.name ?? lp.program.id}" failed in setup: ${(err as Error).message}`;
        return;
      }
    }
    this.sample();
  }

  get done(): boolean {
    if (!this.spec) return true;
    if (this.failure || this.stopReason !== null) return true;
    return this.ticks * this.dt >= this.spec.duration - 1e-9;
  }

  get time(): number {
    return this.engine.time();
  }

  get progress(): { t: number; ticks: number; duration: number } {
    return { t: this.ticks * this.dt, ticks: this.ticks, duration: this.spec?.duration ?? 0 };
  }

  stop(reason: string): void {
    if (this.stopReason === null) this.stopReason = reason;
  }

  /** One control tick: programs, then physics, then metrics and the sample. False when the run is over. */
  tick(): boolean {
    if (this.done) return false;
    const t0 = this.now();
    this.cameraCache.clear();
    const eng = this.engine as Engine & { clearForces?: () => void };
    eng.clearForces?.();
    for (const lp of this.programs) {
      if (!lp.hooks.loop) continue;
      try {
        lp.hooks.loop(this.context(lp));
      } catch (err) {
        if (err instanceof RunStopped) break;
        this.failure = `program "${lp.program.name ?? lp.program.id}" failed at ${(this.ticks * this.dt).toFixed(2)} s: ${(err as Error).message}`;
        return false;
      }
    }
    const programMs = this.now() - t0;
    const budget = this.opts.tickBudgetMs ?? 50;
    if (programMs > budget) {
      this.slowTicks++;
      if (this.slowTicks >= (this.opts.slowTicksAllowed ?? 10)) {
        this.failure = `program too slow: ${programMs.toFixed(0)} ms per tick at ${(1 / this.dt).toFixed(0)} Hz (budget ${budget} ms)`;
        return false;
      }
    } else this.slowTicks = 0;
    this.prevPoses.set(this.poseBuf);
    this.engine.step(this.k);
    this.ticks++;
    const t = this.ticks * this.dt;
    this.engine.poses(this.poseBuf);
    this.tracker?.update(this.engine, t, this.dt);
    try {
      this.director.update(this.dt, t);
    } catch (err) {
      this.failure = `camera failed at ${t.toFixed(2)} s: ${(err as Error).message}`;
      return false;
    }
    if (this.ticks % this.sampleEvery === 0) this.sample();
    return !this.done;
  }

  private sample(): void {
    const nb = this.bodyNames.length, nj = this.qBuf.length;
    const row = new Float32Array(1 + nb * 7 + nj);
    row[0] = this.ticks * this.dt;
    this.engine.poses(this.poseBuf);
    row.set(this.poseBuf, 1);
    this.engine.jointQ(this.qBuf);
    row.set(this.qBuf, 1 + nb * 7);
    this.samples.push(row);
    const c = this.director.pose();
    this.cameraSamples.push(Float32Array.of(c.pos[0], c.pos[1], c.pos[2], c.look[0], c.look[1], c.look[2], c.fov));
  }

  end(): RunResult {
    if (!this.spec) throw new Error("begin() first");
    const t = this.ticks * this.dt;
    const nb = this.bodyNames.length, nj = this.qBuf.length;
    const stride = 1 + nb * 7 + nj;
    const data = new Float32Array(stride * this.samples.length);
    this.samples.forEach((row, i) => data.set(row, i * stride));
    const trajectory: Trajectory = { bodies: this.bodyNames.slice(), joints: this.engine.jointNames().slice(), rate: this.sampleRate, stride, samples: this.samples.length, data };
    if (this.director.active) {
      const cam = new Float32Array(7 * this.cameraSamples.length);
      this.cameraSamples.forEach((row, i) => cam.set(row, i * 7));
      trajectory.camera = cam;
    }
    const logs = this.droppedLogs ? [...this.logs, `… ${this.droppedLogs} more lines not kept`] : this.logs.slice();
    const metrics = this.tracker ? this.tracker.results(this.engine, t) : {};
    const status = this.failure ? "failed" : this.stopReason !== null ? "stopped" : "finished";
    return {
      runId: this.spec.runId,
      status,
      reason: this.failure ?? this.stopReason ?? undefined,
      time: Math.round(t * 1e6) / 1e6,
      ticks: this.ticks,
      wallMs: Math.round(this.now() - this.startedAt),
      metrics,
      custom: { ...this.custom },
      logs,
      trajectory,
      warnings: this.warnings.slice(),
      camera: this.director.active ? "scripted" : "free",
    };
  }

  /** Begin, tick to the end, end. */
  runAll(spec: RunSpec): RunResult {
    this.begin(spec);
    while (this.tick()) {
      /* until done */
    }
    return this.end();
  }

  /** Log lines written since the last drain (for a live console). */
  private drainedLogs = 0;
  drainLogs(): string[] {
    const out = this.logs.slice(this.drainedLogs);
    this.drainedLogs = this.logs.length;
    return out;
  }

  /** Current poses for a renderer (7 floats per body, the engine's body order). */
  poses(out: Float32Array): void {
    this.engine.poses(out);
  }

  // ---------------------------------------------------------------- the program API

  private log(...args: unknown[]): void {
    const max = this.opts.maxLogs ?? 2000;
    const text = args.map((a) => (typeof a === "string" ? a : safeJson(a))).join(" ");
    if (this.logs.length >= max) {
      this.droppedLogs++;
      return;
    }
    this.logs.push(`${(this.ticks * this.dt).toFixed(2)}s ${text}`);
  }

  private bodyVelocity(name: string): XYZ {
    const i = this.bodyNames.indexOf(name);
    if (i < 0) throw new Error(`unknown body "${name}"`);
    if (this.ticks === 0) return [0, 0, 0];
    const a = this.prevPoses, b = this.poseBuf;
    return [(b[i * 7] - a[i * 7]) / this.dt, (b[i * 7 + 1] - a[i * 7 + 1]) / this.dt, (b[i * 7 + 2] - a[i * 7 + 2]) / this.dt];
  }

  private bodyHandle(ref: string) {
    const name = this.bodyName(ref);
    if (!name) throw new Error(`unknown body "${ref}" (bodies: ${this.world.bodies.map((b) => b.ref).filter((r) => r !== "world").join(", ")})`);
    const eng = this.engine;
    const self = this;
    return {
      ref,
      get position(): XYZ { return eng.bodyPos(name); },
      get quat(): Quat { return eng.bodyQuat(name); },
      get velocity(): XYZ { return self.bodyVelocity(name); },
      get speed(): number { return V.len(self.bodyVelocity(name)); },
      get height(): number { return eng.bodyPos(name)[2]; },
      push(force: XYZ, point?: XYZ) { eng.applyForce(name, force, point ?? eng.bodyPos(name)); },
      distanceTo(other: { position: XYZ } | XYZ): number {
        const p = Array.isArray(other) ? other : other.position;
        return V.len(V.sub(eng.bodyPos(name), p));
      },
    };
  }

  private sensorHandle(s: CompiledSensor) {
    const eng = this.engine;
    const sim = this;
    switch (s.type) {
      case "encoder":
        return {
          get angle(): number { return eng.sensor(s.mj[0])[0] * DEG; },
          get speed(): number { return eng.sensor(s.mj[1])[0] * DEG; },
          get radians(): number { return eng.sensor(s.mj[0])[0]; },
        };
      case "imu":
        return {
          get accel(): XYZ { return Array.from(eng.sensor(s.mj[0])) as XYZ; },
          get gyro(): XYZ { return Array.from(eng.sensor(s.mj[1])) as XYZ; },
        };
      case "rangefinder":
        return {
          get distance(): number { return eng.sensor(s.mj[0])[0]; },
          get hit(): boolean { return eng.sensor(s.mj[0])[0] >= 0; },
        };
      case "touch":
        return {
          get force(): number { return eng.sensor(s.mj[0])[0]; },
          get touching(): boolean { return eng.sensor(s.mj[0])[0] > 0; },
        };
      case "gps":
        return {
          get position(): XYZ { return Array.from(eng.sensor(s.mj[0])) as XYZ; },
          get velocity(): XYZ { return Array.from(eng.sensor(s.mj[1])) as XYZ; },
        };
      case "camera": {
        const cam = s.camera as NonNullable<CompiledSensor["camera"]>;
        return {
          width: cam.width,
          height: cam.height,
          image(opts?: { depth?: boolean }): CameraImage { return sim.cameraImage(cam, !!opts?.depth); },
          find(color: ColorQuery) { return findColor(sim.cameraImage(cam, false), color); },
          depth(): Float32Array | undefined { return sim.cameraImage(cam, true).depth; },
        };
      }
      default:
        throw new Error(`sensor "${s.ref}": unknown type`);
    }
  }

  private cameraImage(cam: NonNullable<CompiledSensor["camera"]>, wantDepth: boolean): CameraImage {
    const key = `${cam.name}:${wantDepth ? "d" : "c"}`;
    const hit = this.cameraCache.get(key) ?? (wantDepth ? undefined : this.cameraCache.get(`${cam.name}:d`));
    if (hit) return hit;
    const r = this.opts.cameraRenderer;
    if (!r) throw new Error(`camera "${cam.name}" cannot see here: this host has no renderer (run in the tab or headless)`);
    const img = r.render(cam, this.engine.cameraPose(cam.name), wantDepth);
    this.cameraCache.set(key, img);
    return img;
  }

  private machineHandle(id: string) {
    const w = this.world;
    const eng = this.engine;
    const sim = this;
    const motors = w.actuators.filter((a) => a.machine === id);
    const joints = w.joints.filter((j) => j.machine === id);
    const sensors = w.sensors.filter((s) => s.machine === id);
    const parts = w.bodies.filter((b) => b.machine === id);
    const motorNames = motors.map((a) => a.ref.slice(id.length + 1));
    return {
      id,
      motors: motorNames,
      joints: joints.map((j) => j.ref.slice(id.length + 1)),
      sensors: sensors.map((s) => s.ref.slice(id.length + 1)),
      parts: parts.map((b) => b.part as string),
      motor(name: string) {
        const a = motors.find((x) => x.ref === `${id}.${name}`);
        if (!a) throw new Error(`machine "${id}" has no motor "${name}" (motors: ${motorNames.join(", ") || "none"})`);
        const slide = joints.find((j) => j.ref === a.joint)?.type === "slide";
        const h = {
          kind: a.kind,
          maxTorque: a.maxTorque,
          maxSpeed: a.maxSpeed,
          /** rad/s (hinge) · mm/s (slide) — velocity motors */
          speed(v: number) { if (a.kind !== "velocity") throw new Error(`motor "${name}" is a ${a.kind} motor: use ${a.kind === "position" ? "angle(deg)" : "torque(Nm)"}`); eng.setCtrl(a.name, slide ? v * 0.001 : v); return h; },
          rpm(v: number) { return h.speed((v * 2 * Math.PI) / 60); },
          /** degrees (hinge) · mm (slide) — position motors */
          angle(deg: number) { if (a.kind !== "position") throw new Error(`motor "${name}" is a ${a.kind} motor: use ${a.kind === "velocity" ? "speed(rad/s)" : "torque(Nm)"}`); eng.setCtrl(a.name, slide ? deg * 0.001 : deg / DEG); return h; },
          position(mm: number) { return h.angle(mm); },
          torque(v: number) { if (a.kind !== "torque") throw new Error(`motor "${name}" is a ${a.kind} motor: use ${a.kind === "velocity" ? "speed(rad/s)" : "angle(deg)"}`); eng.setCtrl(a.name, v); return h; },
          set(v: number) { eng.setCtrl(a.name, v); return h; },
          stop() { eng.setCtrl(a.name, 0); return h; },
          get target(): number { return eng.ctrl(a.name); },
        };
        return h;
      },
      joint(name: string) {
        const j = joints.find((x) => x.ref === `${id}.${name}`);
        if (!j) throw new Error(`machine "${id}" has no joint "${name}" (joints: ${joints.map((x) => x.ref.slice(id.length + 1)).join(", ") || "none"})`);
        return {
          type: j.type,
          get angle(): number { return eng.joint(j.name).q * (j.type === "slide" ? 1000 : DEG); },
          get speed(): number { return eng.joint(j.name).qd * (j.type === "slide" ? 1000 : DEG); },
          get radians(): number { return eng.joint(j.name).q; },
        };
      },
      sensor(name: string) {
        const s = sensors.find((x) => x.ref === `${id}.${name}`);
        if (!s) throw new Error(`machine "${id}" has no sensor "${name}" (sensors: ${sensors.map((x) => x.ref.slice(id.length + 1)).join(", ") || "none"})`);
        return sim.sensorHandle(s);
      },
      part(name: string) {
        return sim.bodyHandle(`${id}.${name}`);
      },
      get position(): XYZ {
        const root = sim.rootBodyOf(id);
        return root ? eng.bodyPos(root) : [0, 0, 0];
      },
      get velocity(): XYZ {
        const root = sim.rootBodyOf(id);
        return root ? sim.bodyVelocity(root) : [0, 0, 0];
      },
      get quat(): Quat {
        const root = sim.rootBodyOf(id);
        return root ? eng.bodyQuat(root) : [1, 0, 0, 0];
      },
    };
  }

  private context(lp: LoadedProgram): unknown {
    const key = lp.program.id;
    const cached = this.contextCache.get(key) as Record<string, unknown> | undefined;
    if (cached) {
      cached.t = this.ticks * this.dt;
      cached.tick = this.ticks;
      return cached;
    }
    const sim = this;
    const machines: Record<string, unknown> = {};
    for (const id of this.machineIds()) machines[id] = this.machineHandle(id);
    const world = {
      get time(): number { return sim.ticks * sim.dt; },
      gravity: this.world.gravity,
      object(id: string) { return sim.bodyHandle(id); },
      body(ref: string) { return sim.bodyHandle(ref); },
      machine(id: string) {
        const m = machines[id];
        if (!m) throw new Error(`no machine "${id}" (machines: ${Object.keys(machines).join(", ") || "none"})`);
        return m;
      },
      contacts(): { a: string; b: string; pos: XYZ }[] {
        const refOf = (n: string) => sim.world.bodies.find((b) => b.name === n)?.ref ?? n;
        return sim.engine.contacts().map((c) => ({ a: refOf(c.a), b: refOf(c.b), pos: c.pos }));
      },
      stop(reason = "stopped by the program") {
        sim.stop(String(reason));
        throw new RunStopped(reason);
      },
      metric(name: string, value: number) {
        if (typeof name !== "string" || !Number.isFinite(value)) throw new Error("metric(name, number)");
        sim.custom[name] = value;
      },
      /** one plain object every program of the run shares — a blackboard, reset per run */
      shared: this.shared,
    };
    const name = lp.program.name ?? lp.program.id;
    const machine = lp.machine === AMBIGUOUS
      ? new Proxy({}, { get(_t, prop) { if (prop === "then" || typeof prop === "symbol") return undefined; throw new Error(`program "${name}" does not say which machine it drives (machines: ${Object.keys(machines).join(", ")}) — set machine, or use machines["${Object.keys(machines)[0]}"]`); } })
      : lp.machine ? machines[lp.machine] : undefined;
    const ctx: Record<string, unknown> = {
      t: this.ticks * this.dt,
      dt: this.dt,
      tick: this.ticks,
      machine,
      machines,
      world,
      camera: this.director.api(),
      log: (...a: unknown[]) => this.log(...a),
      random: () => this.random(),
      Math,
    };
    this.contextCache.set(key, ctx);
    return ctx;
  }
}

/** A body's bounding radius from what it draws, metres — for framing shots. */
function bodyRadius(b: CompiledBody): number {
  let r = 0;
  for (const g of b.geoms) {
    if (g.kind === "mesh") {
      const p = g.positions;
      let m = 0;
      for (let i = 0; i < p.length; i += 3) m = Math.max(m, p[i] * p[i] + p[i + 1] * p[i + 1] + p[i + 2] * p[i + 2]);
      r = Math.max(r, Math.sqrt(m));
    } else if (g.kind === "sphere") r = Math.max(r, V.len(g.pos) + g.size[0]);
    else if (g.kind === "box") r = Math.max(r, V.len(g.pos) + V.len(g.size) / 2);
    else if (g.kind === "cylinder" || g.kind === "capsule") r = Math.max(r, V.len(g.pos) + Math.hypot(g.size[0], g.size[1] / 2));
  }
  return r || 0.02;
}

function safeJson(v: unknown): string {
  try {
    return JSON.stringify(v, (_k, x) => (typeof x === "number" ? Math.round(x * 1000) / 1000 : x)) ?? String(v);
  } catch {
    return String(v);
  }
}
