// The host: one object that owns the engine, the world, the renderer and the run loop. It runs inside the
// worker (OffscreenCanvas) or on the page (fallback); either way it answers the same requests.
import { compileWorld, meshKey } from "./compile";
import { MujocoEngine, RecordedEngine, encodeTrajectory, type Engine } from "./engine";
import { encodeFilm, webcodecsAvailable } from "./film";
import type { CameraArgs, FilmArgs, LoadArgs, MeshSource, Notice, OutputInfo, Request, RunArgs } from "./protocol";
import { TAG } from "./protocol";
import { Renderer, encodePng } from "./render";
import { Simulation } from "./sim";
import type { CompiledWorld, RunResult, Trajectory, World, XYZ } from "./types";
import { RUNTIME_NAME, RUNTIME_VERSION } from "./core";

export interface HostOptions {
  wasmUrl: string;
  width: number;
  height: number;
  dpr: number;
  canvas: HTMLCanvasElement | OffscreenCanvas;
  post: (notice: Notice) => void;
  inWorker: boolean;
}

interface Output {
  info: OutputInfo;
  bytes: Uint8Array;
}

interface LiveRun {
  spec: RunArgs;
  sim: Simulation;
  realtime: boolean;
  resolve: (r: RunResult) => void;
  reject: (e: Error) => void;
  wallStart: number;
  simAtStart: number;
  lastProgress: number;
}

const MAX_OUTPUT_BYTES = 200 * 1024 * 1024;

export class Host {
  private engine: MujocoEngine | null = null;
  private compiled: CompiledWorld | null = null;
  private renderer: Renderer | null = null;
  private sim: Simulation | null = null;
  private run: LiveRun | null = null;
  private outputs = new Map<string, Output>();
  private outputBytes = 0;
  private results = new Map<string, { result: RunResult; trajectory: Trajectory }>();
  private playing = false;
  private speed = 1;
  private visible = true;
  private frameHandle: number | null = null;
  private poseBuf = new Float32Array(0);
  private lastFrame = 0;
  private meshCache = new Map<string, Uint8Array>();
  private outputSeq = 0;

  constructor(private readonly o: HostOptions) {}

  async init(): Promise<void> {
    this.engine = await MujocoEngine.create({ wasmUrl: this.o.wasmUrl });
    this.renderer = new Renderer(this.o.canvas, this.o.width, this.o.height, this.o.dpr);
    this.renderer.render();
    this.o.post({ [TAG]: 1, type: "ready", runtime: RUNTIME_VERSION, name: RUNTIME_NAME, engines: [`mujoco@${this.engine.version}`], caps: { offscreen: typeof OffscreenCanvas !== "undefined", webcodecs: webcodecsAvailable(), worker: this.o.inWorker } });
    this.schedule();
  }

  // ---------------------------------------------------------------- requests

  async handle(req: Request): Promise<unknown> {
    const a = (req.args ?? {}) as Record<string, unknown>;
    switch (req.method) {
      case "ping":
        return { runtime: RUNTIME_VERSION, name: RUNTIME_NAME, engines: this.engine ? [`mujoco@${this.engine.version}`] : [], loaded: !!this.compiled, playing: this.playing, t: this.sim?.time ?? 0 };
      case "load":
        return this.load(a as unknown as LoadArgs);
      case "run":
        return this.startRun(a as unknown as RunArgs);
      case "control":
        return this.control(a);
      case "snapshot":
        return this.snapshot(a);
      case "film":
        return this.film(a as unknown as FilmArgs & { runId?: string });
      case "read":
        return this.read(a);
      case "result":
        return this.resultOf(String(a.runId ?? ""));
      case "probe":
        return this.probe(a);
      case "camera":
        return this.camera(a as CameraArgs & { rotate?: { dx: number; dy: number }; zoom?: number });
      case "world":
        return this.describeWorld(!!a.mjcf);
      case "dispose":
        this.disposeWorld();
        return { ok: true };
      default:
        throw new Error(`unknown method "${req.method}" (ping, load, run, control, snapshot, film, read, result, probe, camera, world, dispose)`);
    }
  }

  private need(): { engine: MujocoEngine; compiled: CompiledWorld; renderer: Renderer; sim: Simulation } {
    if (!this.engine || !this.renderer) throw new Error("the runtime is still booting");
    if (!this.compiled || !this.sim) throw new Error("no world is loaded: call load first");
    return { engine: this.engine, compiled: this.compiled, renderer: this.renderer, sim: this.sim };
  }

  private async fetchMesh(key: string, src: MeshSource): Promise<Uint8Array> {
    const cached = this.meshCache.get(key);
    if (cached) return cached;
    let bytes: Uint8Array;
    if (typeof src === "object" && "base64" in src) bytes = b64decode(src.base64);
    else {
      const url = typeof src === "string" ? src : src.url;
      const res = await fetch(url, { mode: "cors", credentials: "omit" });
      if (!res.ok) throw new Error(`mesh "${key}": ${res.status} ${res.statusText} fetching ${url}`);
      bytes = new Uint8Array(await res.arrayBuffer());
    }
    this.meshCache.set(key, bytes);
    if (this.meshCache.size > 400) this.meshCache.delete(this.meshCache.keys().next().value as string);
    return bytes;
  }

  private async load(args: LoadArgs) {
    if (!this.engine || !this.renderer) throw new Error("the runtime is still booting");
    const world = args.world as World;
    if (!world || typeof world !== "object") throw new Error("load needs a world");
    const sources = args.meshes ?? {};
    const keys = new Set<string>();
    for (const m of world.machines ?? []) for (const p of m.package?.parts ?? []) for (const b of p.bodies ?? []) keys.add(meshKey(b.mesh));
    for (const o of world.objects ?? []) if (o.shape?.kind === "mesh") keys.add(meshKey(o.shape.mesh));
    const meshes: Record<string, Uint8Array> = {};
    await Promise.all([...keys].map(async (k) => {
      const src = sources[k];
      if (!src) throw new Error(`mesh "${k}" has no source in meshes (a URL or base64)`);
      meshes[k] = await this.fetchMesh(k, src);
    }));
    this.stopLoop();
    const compiled = compileWorld({ world, meshes });
    const report = this.engine.load(compiled);
    this.compiled = compiled;
    const r = this.renderer;
    this.sim = new Simulation(this.engine, compiled, { cameraRenderer: { render: (cam, pose, depth) => r.renderCamera(cam, pose, depth) } });
    this.renderer.build(compiled);
    this.poseBuf = new Float32Array(report.bodies.length * 7);
    this.engine.poses(this.poseBuf);
    this.renderer.setPoses(report.bodies, this.poseBuf);
    this.renderer.render();
    this.playing = false;
    this.run = null;
    this.notifyState();
    return {
      ...report,
      warnings: compiled.warnings,
      machines: [...new Set(compiled.bodies.map((b) => b.machine).filter(Boolean))],
      actuatorRefs: compiled.actuators.map((x) => ({ ref: x.ref, kind: x.kind, maxTorque: x.maxTorque, maxSpeed: x.maxSpeed })),
      sensorRefs: compiled.sensors.map((x) => ({ ref: x.ref, type: x.type })),
      jointRefs: compiled.joints.map((x) => ({ ref: x.ref, type: x.type })),
      bodyRefs: compiled.bodies.map((x) => x.ref).filter((r) => r !== "world"),
      timestep: compiled.timestep,
    };
  }

  private disposeWorld(): void {
    this.stopLoop();
    this.run = null;
    this.sim = null;
    this.compiled = null;
    this.engine?.dispose();
    this.playing = false;
  }

  // ---------------------------------------------------------------- runs

  private startRun(args: RunArgs): Promise<unknown> {
    const { sim, compiled } = this.need();
    if (this.run) throw new Error(`a run is in progress (${this.run.spec.runId}): control stop first`);
    if (typeof args.runId !== "string" || !args.runId) throw new Error("run needs a runId");
    const duration = Number(args.duration);
    if (!(duration >= 0)) throw new Error("run needs a duration in seconds (0 = until stopped)");
    const realtime = args.realtime ?? !this.o.inWorker ? !!args.realtime : !!args.realtime;
    this.speed = args.speed && args.speed > 0 ? args.speed : 1;
    sim.begin({ runId: args.runId, seed: args.seed, duration: duration > 0 ? duration : Number.POSITIVE_INFINITY, programs: args.programs ?? [], record: args.record });
    return new Promise((resolve, reject) => {
      this.run = { spec: args, sim, realtime, resolve, reject, wallStart: now(), simAtStart: 0, lastProgress: 0 };
      this.playing = true;
      this.notifyState();
      if (realtime) this.schedule();
      else void this.runFast(compiled);
    });
  }

  /** Not paced: step in slices so progress can be reported and the thread stays answerable. */
  private async runFast(_compiled: CompiledWorld): Promise<void> {
    const run = this.run;
    if (!run) return;
    const slice = 0.5; // seconds of simulation per slice
    try {
      while (this.run === run) {
        const until = run.sim.progress.t + slice;
        let more = true;
        while (more && run.sim.progress.t < until) more = run.sim.tick();
        this.progress(run);
        if (!more) break;
        await new Promise((r) => setTimeout(r, 0));
      }
      if (this.run === run) this.finish(run);
    } catch (err) {
      if (this.run === run) this.fail(run, err as Error);
    }
  }

  private progress(run: LiveRun): void {
    const t = run.sim.progress.t;
    const wall = (now() - run.wallStart) / 1000;
    const rtf = wall > 0 ? t / wall : 0;
    if (now() - run.lastProgress > 250) {
      run.lastProgress = now();
      this.o.post({ [TAG]: 1, type: "progress", runId: run.spec.runId, t, duration: run.spec.duration, rtf });
    }
  }

  private finish(run: LiveRun): void {
    const result = run.sim.end();
    const traj = result.trajectory;
    const info = this.keepOutput(`traj-${run.spec.runId}`, "trajectory", "application/octet-stream", encodeTrajectory(traj), `${run.spec.runId}.traj`);
    this.results.set(run.spec.runId, { result, trajectory: traj });
    if (this.results.size > 4) this.results.delete(this.results.keys().next().value as string);
    this.run = null;
    this.playing = false;
    this.notifyState();
    this.o.post({ [TAG]: 1, type: "run-finished", runId: run.spec.runId, status: result.status, reason: result.reason });
    const summary = this.summary(result);
    const reply = async () => {
      const outputs: OutputInfo[] = [info];
      if (run.spec.film) {
        try {
          outputs.push(await this.renderFilm(run.spec.runId, run.spec.film));
        } catch (err) {
          (summary as { warnings: string[] }).warnings.push(`film: ${(err as Error).message}`);
        }
      }
      return { ...summary, outputs };
    };
    reply().then((r) => run.resolve(r as unknown as RunResult), (e) => run.reject(e as Error));
  }

  private fail(run: LiveRun, err: Error): void {
    this.run = null;
    this.playing = false;
    this.notifyState();
    this.o.post({ [TAG]: 1, type: "run-finished", runId: run.spec.runId, status: "failed", reason: err.message });
    run.reject(err);
  }

  private summary(r: RunResult) {
    const { trajectory, ...rest } = r;
    return { ...rest, trajectory: { bodies: trajectory.bodies.length, joints: trajectory.joints.length, rate: trajectory.rate, samples: trajectory.samples }, warnings: r.warnings.slice() };
  }

  private resultOf(runId: string) {
    const r = this.results.get(runId);
    if (!r) throw new Error(`no result for run "${runId}" here (results kept: ${[...this.results.keys()].join(", ") || "none"})`);
    return this.summary(r.result);
  }

  private control(a: Record<string, unknown>) {
    const action = String(a.action ?? "");
    switch (action) {
      case "pause":
        this.playing = false;
        break;
      case "resume":
      case "play":
        if (!this.run) throw new Error("nothing to resume: start a run");
        this.playing = true;
        if (this.run) this.run.wallStart = now() - (this.run.sim.progress.t / this.speed) * 1000;
        break;
      case "speed":
        this.speed = Math.max(0.01, Math.min(16, Number(a.speed ?? 1)));
        if (this.run) this.run.wallStart = now() - (this.run.sim.progress.t / this.speed) * 1000;
        break;
      case "stop": {
        const run = this.run;
        if (!run) throw new Error("no run to stop");
        run.sim.stop(String(a.reason ?? "stopped"));
        if (run.realtime) this.finish(run);
        break;
      }
      case "step": {
        const run = this.run;
        if (!run) throw new Error("no run to step");
        this.playing = false;
        const n = Math.max(1, Math.min(1000, Number(a.ticks ?? 1)));
        for (let i = 0; i < n; i++) if (!run.sim.tick()) break;
        this.renderNow();
        if (run.sim.done) this.finish(run);
        break;
      }
      default:
        throw new Error(`unknown control "${action}" (pause, resume, speed, stop, step)`);
    }
    this.notifyState();
    return { playing: this.playing, speed: this.speed, t: this.sim?.time ?? 0 };
  }

  private notifyState(): void {
    this.o.post({ [TAG]: 1, type: "state", playing: this.playing, t: this.sim?.time ?? 0, runId: this.run?.spec.runId ?? null, speed: this.speed });
  }

  // ---------------------------------------------------------------- the frame loop

  setVisible(v: boolean): void {
    this.visible = v;
    if (v) this.schedule();
  }

  resize(width: number, height: number, dpr: number): void {
    this.renderer?.resize(width, height, dpr);
    this.renderNow();
  }

  input(ev: { type: string; dx?: number; dy?: number; deltaY?: number; buttons?: number; shift?: boolean }): void {
    const r = this.renderer;
    if (!r) return;
    if (ev.type === "drag") {
      if (ev.buttons === 2 || ev.shift) r.pan(ev.dx ?? 0, ev.dy ?? 0);
      else r.rotate(ev.dx ?? 0, ev.dy ?? 0);
    } else if (ev.type === "wheel") r.zoom(ev.deltaY ?? 0);
    else if (ev.type === "fit") r.fit();
    this.renderNow();
  }

  private schedule(): void {
    if (this.frameHandle !== null) return;
    const raf = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (cb: (t: number) => void) => setTimeout(() => cb(now()), 16) as unknown as number;
    this.frameHandle = raf((t) => {
      this.frameHandle = null;
      this.frame(t);
    });
  }

  private stopLoop(): void {
    this.playing = false;
  }

  private frame(t: number): void {
    const run = this.run;
    if (run && run.realtime && this.playing) {
      const target = ((now() - run.wallStart) / 1000) * this.speed;
      let ticks = 0;
      try {
        while (run.sim.progress.t < target && ticks < 400) {
          if (!run.sim.tick()) break;
          ticks++;
        }
      } catch (err) {
        this.fail(run, err as Error);
      }
      if (this.run === run) {
        this.progress(run);
        if (run.sim.done) this.finish(run);
      }
    }
    if (t - this.lastFrame > 12) {
      this.renderNow();
      this.lastFrame = t;
    }
    if (this.visible || (this.run && this.playing)) this.schedule();
  }

  private renderNow(): void {
    if (!this.renderer || !this.engine || !this.compiled) {
      this.renderer?.render();
      return;
    }
    this.engine.poses(this.poseBuf);
    this.renderer.setPoses(this.engine.bodyNames(), this.poseBuf);
    this.renderer.render();
  }

  // ---------------------------------------------------------------- outputs

  private keepOutput(id: string, kind: OutputInfo["kind"], mime: string, bytes: Uint8Array, name: string): OutputInfo {
    const oid = `${id}-${(this.outputSeq++).toString(36)}`;
    const info: OutputInfo = { id: oid, kind, mime, bytes: bytes.byteLength, name };
    this.outputs.set(oid, { info, bytes });
    this.outputBytes += bytes.byteLength;
    while (this.outputBytes > MAX_OUTPUT_BYTES && this.outputs.size > 1) {
      const first = this.outputs.keys().next().value as string;
      this.outputBytes -= this.outputs.get(first)?.bytes.byteLength ?? 0;
      this.outputs.delete(first);
    }
    return info;
  }

  private read(a: Record<string, unknown>) {
    const id = String(a.outputId ?? "");
    const out = this.outputs.get(id);
    if (!out) throw new Error(`no output "${id}" (kept: ${[...this.outputs.keys()].join(", ") || "none"})`);
    const offset = Math.max(0, Number(a.offset ?? 0));
    const length = Math.max(0, Math.min(Number(a.length ?? 1_000_000), out.bytes.byteLength - offset));
    const chunk = out.bytes.subarray(offset, offset + length);
    return { id, offset, length, total: out.bytes.byteLength, base64: b64encode(chunk), done: offset + length >= out.bytes.byteLength, mime: out.info.mime, name: out.info.name };
  }

  private async snapshot(a: Record<string, unknown>) {
    const { renderer } = this.need();
    const width = even(Number(a.width ?? 1280)), height = even(Number(a.height ?? 720));
    if (a.camera) this.camera(a.camera as CameraArgs);
    this.renderNow();
    const rgba = renderer.capture(width, height);
    const png = await encodePng(rgba, width, height);
    const info = this.keepOutput("snap", "snapshot", "image/png", png, `snapshot-${Date.now()}.png`);
    return { ...info, t: this.sim?.time ?? 0 };
  }

  private async film(a: FilmArgs & { runId?: string }) {
    const runId = a.runId ?? [...this.results.keys()].pop();
    if (!runId) throw new Error("no run to film: run first");
    return this.renderFilm(runId, a);
  }

  private async renderFilm(runId: string, a: FilmArgs): Promise<OutputInfo> {
    const { renderer, compiled, engine } = this.need();
    const rec = this.results.get(runId);
    if (!rec) throw new Error(`no result for run "${runId}"`);
    const q = a.quality ?? "draft";
    const preset = q === "youtube" ? { w: 1920, h: 1080, fps: 60 } : q === "share" ? { w: 1280, h: 720, fps: 30 } : { w: 640, h: 360, fps: 24 };
    const width = even(a.width ?? preset.w), height = even(a.height ?? preset.h), fps = a.fps ?? preset.fps;
    const speed = a.speed && a.speed > 0 ? a.speed : 1;
    const traj = rec.trajectory;
    const total = (traj.samples - 1) / traj.rate;
    const from = Math.max(0, a.from ?? 0), to = Math.min(total, a.to ?? total);
    const frames = Math.max(1, Math.floor(((to - from) / speed) * fps));
    if (frames > 20_000) throw new Error(`that film would be ${frames} frames; shorten it or lower the fps`);
    const replay = new RecordedEngine(traj, compiled.timestep);
    replay.load(compiled);
    const saved = this.poseBuf.slice();
    const savedOrbit = { ...renderer.orbit, target: renderer.orbit.target.clone() };
    const cam = a.camera ?? { kind: "follow" };
    const followBody = cam.target ? this.bodyNameOf(cam.target) : compiled.bodies.find((b) => b.machine)?.name ?? null;
    const poses = new Float32Array(traj.bodies.length * 7);
    try {
      const bytes = await encodeFilm({ width, height, fps, frames }, (i) => {
        const t = from + (i / fps) * speed;
        replay.seek(t);
        replay.poses(poses);
        renderer.setPoses(traj.bodies, poses);
        if (cam.kind === "orbit") {
          renderer.orbit.follow = followBody;
          renderer.orbit.azimuth = (savedOrbit.azimuth ?? 0) + ((cam.turn ?? 20) * Math.PI / 180) * (i / fps);
          if (cam.distance) renderer.orbit.distance = cam.distance;
          if (cam.elevation !== undefined) renderer.orbit.elevation = (cam.elevation * Math.PI) / 180;
        } else if (cam.kind === "lookAt" && cam.eye && cam.lookAt) {
          renderer.lookAt(cam.eye, cam.lookAt);
        } else if (cam.kind === "fit") {
          renderer.orbit.follow = null;
        } else {
          renderer.orbit.follow = followBody;
          if (cam.distance) renderer.orbit.distance = cam.distance;
          if (cam.elevation !== undefined) renderer.orbit.elevation = (cam.elevation * Math.PI) / 180;
        }
        return renderer.capture(width, height);
      });
      return this.keepOutput(`film-${runId}`, "film", "video/webm", bytes, `${runId}.webm`);
    } finally {
      Object.assign(renderer.orbit, savedOrbit);
      renderer.orbit.target.copy(savedOrbit.target);
      renderer.setPoses(engine.bodyNames(), saved);
      renderer.render();
    }
  }

  // ---------------------------------------------------------------- reads

  private bodyNameOf(ref: string): string | null {
    const c = this.compiled;
    if (!c) return null;
    return c.bodies.find((b) => b.ref === ref || b.name === ref)?.name ?? c.bodies.find((b) => b.machine === ref)?.name ?? null;
  }

  private probe(a: Record<string, unknown>) {
    const { engine, compiled, sim } = this.need();
    const want = Array.isArray(a.bodies) ? (a.bodies as string[]) : compiled.bodies.filter((b) => b.name !== "world").map((b) => b.ref);
    const bodies: Record<string, { position: XYZ; quat: number[] }> = {};
    for (const ref of want) {
      const name = this.bodyNameOf(ref);
      if (!name) throw new Error(`unknown body "${ref}" (bodies: ${compiled.bodies.map((b) => b.ref).filter((r) => r !== "world").join(", ")})`);
      bodies[ref] = { position: engine.bodyPos(name).map(r4) as XYZ, quat: engine.bodyQuat(name).map(r4) };
    }
    const joints: Record<string, { q: number; qd: number }> = {};
    for (const j of compiled.joints) {
      if (j.type === "free") continue;
      const v = engine.joint(j.name);
      joints[j.ref] = { q: r4(v.q), qd: r4(v.qd) };
    }
    const refOf = (n: string) => compiled.bodies.find((b) => b.name === n)?.ref ?? n;
    const contacts = a.contacts === false ? [] : engine.contacts().slice(0, 50).map((c) => ({ a: refOf(c.a), b: refOf(c.b), dist: r4(c.dist) }));
    return { t: r4(sim.time), playing: this.playing, runId: this.run?.spec.runId ?? null, bodies, joints, contacts };
  }

  private camera(a: CameraArgs & { rotate?: { dx: number; dy: number }; zoom?: number }) {
    const { renderer } = this.need();
    if (a.rotate) renderer.rotate(a.rotate.dx, a.rotate.dy);
    if (a.zoom) renderer.zoom(a.zoom);
    if (a.kind === "fit") renderer.fit();
    if (a.kind === "lookAt" && a.eye && a.lookAt) renderer.lookAt(a.eye, a.lookAt);
    if (a.kind === "follow") renderer.follow(a.target ? this.bodyNameOf(a.target) : null);
    if (a.distance) renderer.orbit.distance = a.distance;
    if (a.elevation !== undefined) renderer.orbit.elevation = (a.elevation * Math.PI) / 180;
    this.renderNow();
    const o = renderer.orbit;
    return { target: [o.target.x, o.target.y, o.target.z].map(r4), distance: r4(o.distance), azimuth: r4(o.azimuth), elevation: r4(o.elevation), follow: o.follow };
  }

  private describeWorld(withMjcf: boolean) {
    const { compiled } = this.need();
    return {
      bodies: compiled.bodies.filter((b) => b.name !== "world").map((b) => ({ ref: b.ref, machine: b.machine, part: b.part, object: b.object, geoms: b.geoms.length })),
      joints: compiled.joints.map((j) => ({ ref: j.ref, type: j.type })),
      actuators: compiled.actuators.map((x) => ({ ref: x.ref, kind: x.kind, maxTorque: x.maxTorque, maxSpeed: x.maxSpeed })),
      sensors: compiled.sensors.map((s) => ({ ref: s.ref, type: s.type, camera: s.camera ? { width: s.camera.width, height: s.camera.height, fov: s.camera.fov } : undefined })),
      metrics: compiled.metrics,
      timestep: compiled.timestep,
      gravity: compiled.gravity,
      warnings: compiled.warnings,
      mjcf: withMjcf ? compiled.mjcf : undefined,
    };
  }
}

const r4 = (n: number) => Math.round(n * 10000) / 10000;
const even = (n: number) => Math.max(2, Math.round(n / 2) * 2);
const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());

function b64encode(bytes: Uint8Array): string {
  let s = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) s += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunk)));
  return btoa(s);
}
function b64decode(s: string): Uint8Array {
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
