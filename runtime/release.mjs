// Publish the built runtime under a path that never changes: runtime/versions/<N>/ (the page, the worker, the
// html, version.json) plus one copy of MuJoCo's wasm per MuJoCo version in runtime/wasm/<mujoco>/ shared by every
// runtime version. An app pins https://vyomkeshj.github.io/mujoco_wasm/runtime/versions/<N>/ and a later push to
// the fork cannot change what it loads; runtime/dist/ stays the moving latest for development.
//
//   node runtime/build.mjs && node runtime/release.mjs          (refuses to overwrite a published version)
//   node runtime/release.mjs --force                            (rewrite the current version's folder)
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, "dist");
const meta = JSON.parse(readFileSync(join(dist, "version.json"), "utf8"));
const n = Number(/runmachine\.(\d+)/.exec(meta.runtimeVersion)?.[1]);
if (!n) throw new Error(`dist/version.json names no runtime version: ${JSON.stringify(meta)}`);
const out = join(here, "versions", String(n));
const force = process.argv.includes("--force");
if (existsSync(out) && !force) throw new Error(`runtime/versions/${n} is already published; bump RUNTIME_VERSION in src/core.ts (or --force to rewrite it)`);
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

// the wasm, once per MuJoCo version
const wasmDir = join(here, "wasm", meta.mujoco);
mkdirSync(wasmDir, { recursive: true });
if (!existsSync(join(wasmDir, "mujoco.wasm"))) copyFileSync(join(dist, "mujoco.wasm"), join(wasmDir, "mujoco.wasm"));

// the bundles, without their source-map pointers (the maps are not published)
for (const f of ["page.js", "worker.js"]) {
  const src = readFileSync(join(dist, f), "utf8").replace(/\n\/\/# sourceMappingURL=.*\s*$/, "\n");
  writeFileSync(join(out, f), src);
}
// the page names its wasm: two folders up, by MuJoCo version
const html = readFileSync(join(dist, "index.html"), "utf8").replace("<title>", `<meta name="runmachine-wasm" content="../../wasm/${meta.mujoco}/mujoco.wasm">\n<title>`);
if (!html.includes("runmachine-wasm")) throw new Error("index.html has no <title> to anchor the wasm meta tag");
writeFileSync(join(out, "index.html"), html);
writeFileSync(join(out, "version.json"), JSON.stringify({ ...meta, path: `runtime/versions/${n}/`, wasm: `runtime/wasm/${meta.mujoco}/mujoco.wasm` }));
console.log(`runtime ${n} published → runtime/versions/${n}/ (wasm: runtime/wasm/${meta.mujoco}/)`);
