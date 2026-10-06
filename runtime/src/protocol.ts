// The bridge: an iframe's parent (the RunMachine app) or the platform's headless bridge talks to the runtime page
// over postMessage. Requests carry an id; replies echo it; notices have a type. One shape for both hosts.
export const TAG = "esoulRunMachine" as const;
export const PROTOCOL = 1 as const;

export interface Request {
  [TAG]: 1;
  id: string;
  method: string;
  args?: Record<string, unknown>;
}
export type Reply =
  | { [TAG]: 1; id: string; ok: true; result: unknown }
  | { [TAG]: 1; id: string; ok: false; error: string };

export interface Caps {
  offscreen: boolean;
  webcodecs: boolean;
  worker: boolean;
}
export type Notice =
  | { [TAG]: 1; type: "ready"; runtime: number; name: string; engines: string[]; caps: Caps }
  | { [TAG]: 1; type: "error"; error: string }
  | { [TAG]: 1; type: "progress"; runId: string; t: number; duration: number; rtf: number }
  | { [TAG]: 1; type: "state"; playing: boolean; t: number; runId: string | null; speed: number }
  | { [TAG]: 1; type: "run-finished"; runId: string; status: string; reason?: string };

export function isRequest(m: unknown): m is Request {
  const r = m as Partial<Request> | null;
  return !!r && r[TAG] === 1 && typeof r.id === "string" && typeof r.method === "string";
}

/** A mesh handed to `load`: a URL the runtime fetches, or inline bytes (base64). */
export type MeshSource = string | { base64: string } | { url: string };

export interface LoadArgs {
  world: unknown;
  meshes?: Record<string, MeshSource>;
}

export interface RunArgs {
  runId: string;
  /** seconds; 0 = until `control stop` */
  duration: number;
  seed?: number;
  programs?: { id: string; name?: string; source: string; rate?: number; machine?: string }[];
  record?: { trajectoryRate?: number };
  /** paced to the wall clock in the viewport (default true in a tab, false headless) */
  realtime?: boolean;
  speed?: number;
  /** also render a film of the run when it ends */
  film?: FilmArgs | null;
}

export interface FilmArgs {
  fps?: number;
  width?: number;
  height?: number;
  /** 1 = real time, 0.25 = slow motion */
  speed?: number;
  from?: number;
  to?: number;
  camera?: CameraArgs;
  quality?: "draft" | "share" | "youtube";
}

export interface CameraArgs {
  kind?: "orbit" | "follow" | "lookAt" | "fit";
  target?: string;
  eye?: [number, number, number];
  lookAt?: [number, number, number];
  /** orbit: degrees per second */
  turn?: number;
  distance?: number;
  elevation?: number;
}

export interface OutputInfo {
  id: string;
  kind: "trajectory" | "film" | "snapshot";
  mime: string;
  bytes: number;
  name: string;
}

/** One honest line for any thrown value: an Error's message, a string, an Emscripten pointer, an object. */
export function errorText(err: unknown): string {
  if (err instanceof Error) return err.message || err.name || "error";
  if (typeof err === "string") return err;
  if (typeof err === "number") return `the engine threw (code ${err}); the world may be invalid`;
  if (err && typeof err === "object") {
    const o = err as { message?: unknown; error?: unknown };
    if (typeof o.message === "string") return o.message;
    if (typeof o.error === "string") return o.error;
    try { return JSON.stringify(err).slice(0, 500); } catch { /* fall through */ }
  }
  return String(err);
}
