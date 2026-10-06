// Build the RunMachine runtime: a node core (tests) and the browser page + worker, next to the wasm.
import { build } from "esbuild";
import { copyFileSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, "dist");
mkdirSync(dist, { recursive: true });
const pkg = JSON.parse(readFileSync(join(here, "..", "package.json"), "utf8"));
const core = readFileSync(join(here, "src", "core.ts"), "utf8");
const version = Number(/RUNTIME_VERSION = (\d+)/.exec(core)?.[1] ?? 0);
const mujocoVersion = JSON.parse(readFileSync(join(here, "..", "node_modules", "@mujoco", "mujoco", "package.json"), "utf8")).version;
const define = { __RUNTIME_VERSION__: String(version), __MUJOCO_VERSION__: JSON.stringify(mujocoVersion) };

await build({ entryPoints: [join(here, "src", "core.ts")], bundle: true, format: "esm", platform: "node", target: "node20", outfile: join(dist, "core.mjs"), external: ["@mujoco/mujoco"], define, sourcemap: true, logLevel: "warning" });

const browser = (entry, out) => build({
  entryPoints: [join(here, "src", entry)], bundle: true, format: "esm", platform: "browser", target: ["es2022"], outfile: join(dist, out), define, sourcemap: true, external: ["module", "fs", "path", "url", "crypto", "worker_threads", "ws", "child_process"], minify: process.env.NODE_ENV === "production", logLevel: "warning",
});
if (existsSync(join(here, "src", "page.ts"))) await browser("page.ts", "page.js");
if (existsSync(join(here, "src", "worker.ts"))) await browser("worker.ts", "worker.js");
copyFileSync(join(here, "..", "node_modules", "@mujoco", "mujoco", "mujoco.wasm"), join(dist, "mujoco.wasm"));
if (existsSync(join(here, "index.html"))) copyFileSync(join(here, "index.html"), join(dist, "index.html"));
writeFileSync(join(dist, "version.json"), JSON.stringify({ runtimeVersion: `runmachine.${version}`, mujoco: mujocoVersion }));
console.log(`runtime ${version} built → ${dist}`);
