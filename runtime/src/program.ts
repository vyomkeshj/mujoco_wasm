// Programs: small JavaScript controllers compiled once per run and called at the control rate.
// The sandbox is the worker (no DOM, no esoul), the page's CSP (no network) and these shadowed names.

export interface ProgramHooks {
  setup?: (ctx: unknown) => void;
  loop?: (ctx: unknown) => void;
}

const SHADOWED = ["fetch", "XMLHttpRequest", "WebSocket", "importScripts", "postMessage", "self", "window", "globalThis", "document", "navigator", "indexedDB", "caches", "Worker", "SharedArrayBuffer", "Atomics", "Function"];

/** Compile a program source into its hooks. `export function loop` and plain `function loop` both work. */
export function compileProgram(source: string, name = "program"): ProgramHooks {
  const src = source.replace(/^\s*export\s+(?=(async\s+)?function|const|let|var|class)/gm, "");
  const body = `"use strict";\n${src}\n;return { setup: typeof setup === "function" ? setup : undefined, loop: typeof loop === "function" ? loop : undefined };`;
  let factory: (...args: unknown[]) => ProgramHooks;
  try {
    factory = new Function(...SHADOWED, body) as (...args: unknown[]) => ProgramHooks;
  } catch (err) {
    throw new Error(`${name}: ${(err as Error).message}`);
  }
  let hooks: ProgramHooks;
  try {
    hooks = factory(...SHADOWED.map(() => undefined));
  } catch (err) {
    throw new Error(`${name} threw while loading: ${(err as Error).message}`);
  }
  if (!hooks.loop && !hooks.setup) throw new Error(`${name}: define function loop(ctx) { … } (and optionally setup(ctx))`);
  return hooks;
}

/** Mulberry32 — a small seeded generator so a run with the same seed repeats. */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ------------------------------------------------------------------ camera images for programs

export interface CameraImage {
  width: number;
  height: number;
  /** RGBA, top row first */
  rgba: Uint8ClampedArray;
  depth?: Float32Array;
}

export type ColorQuery = string | { hue: [number, number]; sat?: number; val?: number };

const NAMED: Record<string, [number, number]> = {
  red: [-20, 20], orange: [20, 45], yellow: [45, 70], green: [70, 170], cyan: [170, 200], blue: [200, 260], purple: [260, 300], magenta: [300, 340], pink: [300, 345],
};

/** The largest-by-count blob of a colour: its centre (0..1, y down) and its share of the image, or null. */
export function findColor(img: CameraImage, query: ColorQuery): { x: number; y: number; area: number; count: number } | null {
  let hue: [number, number] | null = null;
  let satMin = 0.45, valMin = 0.25;
  let want: "white" | "black" | null = null;
  if (typeof query === "string") {
    const q = query.toLowerCase();
    if (q === "white") want = "white";
    else if (q === "black") want = "black";
    else if (NAMED[q]) hue = NAMED[q];
    else throw new Error(`unknown colour "${query}" (red, orange, yellow, green, cyan, blue, purple, magenta, white, black, or {hue:[a,b]})`);
  } else {
    hue = query.hue;
    if (query.sat !== undefined) satMin = query.sat;
    if (query.val !== undefined) valMin = query.val;
  }
  const { width, height, rgba } = img;
  let count = 0, sx = 0, sy = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = rgba[i] / 255, g = rgba[i + 1] / 255, b = rgba[i + 2] / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const v = max, s = max > 0 ? (max - min) / max : 0;
      let hit = false;
      if (want === "white") hit = s < 0.15 && v > 0.8;
      else if (want === "black") hit = v < 0.15;
      else if (hue && s >= satMin && v >= valMin) {
        const d = max - min;
        let h = 0;
        if (d > 0) {
          if (max === r) h = 60 * (((g - b) / d) % 6);
          else if (max === g) h = 60 * ((b - r) / d + 2);
          else h = 60 * ((r - g) / d + 4);
        }
        if (h < 0) h += 360;
        const [a, c] = hue;
        hit = a < 0 ? h >= a + 360 || h <= c : h >= a && h <= c;
      }
      if (hit) {
        count++;
        sx += x;
        sy += y;
      }
    }
  }
  if (!count) return null;
  return { x: (sx / count + 0.5) / width, y: (sy / count + 0.5) / height, area: count / (width * height), count };
}
