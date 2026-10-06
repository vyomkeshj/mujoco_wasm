// Drive the built runtime page in headless Chrome exactly as the headless bridge does: the page is its own
// parent, requests are posted to its window, replies and notices are collected from it.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { carWorld } from "./fixtures.mjs";
import { encodeStlBinary } from "../dist/core.mjs";

const require = createRequire("/home/vk/IdeaProjects/kinetic/package.json");
const puppeteer = require("puppeteer-core");
const here = path.dirname(fileURLToPath(import.meta.url));
// SMOKE_ROOT serves another tree (the repo, to drive a published runtime/versions/<N>/ with its shared wasm);
// SMOKE_PAGE is the page's path under it.
const dist = process.env.SMOKE_ROOT ? path.resolve(process.env.SMOKE_ROOT) : path.join(here, "..", "dist");
const pagePath = process.env.SMOKE_PAGE ?? "/index.html";
const outDir = process.env.SMOKE_OUT ?? path.join(here, "..", "..", "..", "smoke-out");
fs.mkdirSync(outDir, { recursive: true });

function findChrome() {
  const root = path.join(os.homedir(), ".cache", "puppeteer", "chrome");
  const dirs = fs.readdirSync(root).filter((d) => d.startsWith("linux-")).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const d = dirs.at(-1);
  if (!d) throw new Error("no Chrome for Testing in ~/.cache/puppeteer/chrome");
  return path.join(root, d, "chrome-linux64", "chrome");
}

const types = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".wasm": "application/wasm", ".json": "application/json", ".map": "application/json" };
const server = http.createServer((req, res) => {
  const p = path.join(dist, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!p.startsWith(dist) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "content-type": types[path.extname(p)] ?? "application/octet-stream", "cache-control": "no-store" });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({ executablePath: findChrome(), headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage", "--enable-unsafe-swiftshader", "--use-angle=swiftshader", "--window-size=1280,800"] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
page.on("console", (m) => { if (m.type() === "error" || m.type() === "warn") console.log("  [page]", m.type(), m.text().slice(0, 300)); });
page.on("pageerror", (e) => console.log("  [pageerror]", e.message));
page.on("workercreated", (w) => w.on("console", (m) => { if (m.type() !== "log") console.log("  [worker]", m.type(), m.text().slice(0, 400)); }));
page.on("response", (r) => { if (r.status() >= 400) console.log("  [http]", r.status(), r.url()); });
await page.evaluateOnNewDocument(() => {
  window.__msgs = [];
  window.addEventListener("message", (ev) => { if (ev.data && ev.data.esoulRunMachine === 1) window.__msgs.push(ev.data); });
});
const t0 = Date.now();
await page.goto(`${origin}${pagePath}?parent=${encodeURIComponent(origin)}`, { waitUntil: "load" });
await page.waitForFunction(() => window.__msgs.some((m) => m.type === "ready" || m.type === "error"), { timeout: 90_000 });
const ready = await page.evaluate(() => window.__msgs.find((m) => m.type === "ready" || m.type === "error"));
console.log(`ready in ${Date.now() - t0} ms:`, JSON.stringify(ready));
if (ready.type !== "ready") { await browser.close(); server.close(); process.exit(1); }

let seq = 0;
async function call(method, args, timeoutMs = 60_000) {
  const id = `${method}-${seq++}`;
  const t = Date.now();
  await page.evaluate((req) => window.postMessage(req, "*"), { esoulRunMachine: 1, id, method, args });
  await page.waitForFunction((id) => window.__msgs.some((m) => m.id === id && "ok" in m), { timeout: timeoutMs }, id);
  const reply = await page.evaluate((id) => window.__msgs.find((m) => m.id === id && "ok" in m), id);
  const ms = Date.now() - t;
  if (!reply.ok) throw new Error(`${method}: ${reply.error}`);
  return { result: reply.result, ms };
}
async function readOutput(outputId) {
  const parts = [];
  let offset = 0;
  for (;;) {
    const { result } = await call("read", { outputId, offset, length: 1_500_000 });
    parts.push(Buffer.from(result.base64, "base64"));
    offset += result.length;
    if (result.done) return { bytes: Buffer.concat(parts), mime: result.mime, name: result.name };
  }
}

const { world, meshes } = carWorld();
const meshSources = Object.fromEntries(Object.entries(meshes).map(([k, pos]) => [k, { base64: Buffer.from(encodeStlBinary(pos)).toString("base64") }]));
const load = await call("load", { world, meshes: meshSources });
console.log(`load ${load.ms} ms: bodies ${load.result.bodies.length}, cameras ${load.result.cameras}, warnings ${JSON.stringify(load.result.warnings)}`);

const run = await call("run", { runId: "smoke-1", duration: 3, seed: 1, realtime: false, programs: [{ id: "p", source: `function loop({ machine, t, log }) { machine.motor("drive").speed(30); machine.motor("steer").angle(t > 1.5 ? -40 : 0); const red = machine.sensor("eye").find("red"); if (t > 2.95) log("eye sees red:", red); }` }], film: { quality: "draft", speed: 1, camera: { kind: "orbit", turn: 30 } } }, 180_000);
console.log(`run ${run.ms} ms: status ${run.result.status} ${run.result.reason ?? ""} time ${run.result.time} wall ${run.result.wallMs} ms`);
console.log("  metrics:", Object.values(run.result.metrics).map((m) => m.text).join(" · "));
console.log("  logs:", run.result.logs.slice(-2).join(" | "));
console.log("  outputs:", run.result.outputs.map((o) => `${o.kind} ${o.bytes} B`).join(", "), "warnings:", run.result.warnings);

const snap = await call("snapshot", { width: 960, height: 540, camera: { kind: "follow", target: "car", distance: 0.6, elevation: 25 } });
const png = await readOutput(snap.result.id);
fs.writeFileSync(path.join(outDir, "snapshot.png"), png.bytes);
console.log(`snapshot ${snap.ms} ms: ${png.bytes.length} B → ${path.join(outDir, "snapshot.png")}`);
const film = run.result.outputs.find((o) => o.kind === "film");
if (film) {
  const webm = await readOutput(film.id);
  fs.writeFileSync(path.join(outDir, "run.webm"), webm.bytes);
  console.log(`film: ${webm.bytes.length} B → ${path.join(outDir, "run.webm")}`);
}
// runtime 6: a program drives the camera; the film is shot through it; settle answers a resting placement
const scripted = await call("run", { runId: "smoke-cam", duration: 2.5, seed: 1, realtime: false, programs: [{ id: "cam", source: `function loop({ machine, camera, t }) { machine.motor("drive").speed(30); machine.motor("steer").angle(t > 1 ? -50 : 0); camera.follow("car", { distance: 0.8, height: 0.4, azimuthDeg: 25 }); if (t > 2) camera.fov(55); }` }], film: { quality: "draft" } }, 180_000);
console.log(`scripted run ${scripted.ms} ms: status ${scripted.result.status} ${scripted.result.reason ?? ""} camera ${scripted.result.camera} lane ${scripted.result.trajectory.camera}`);
if (scripted.result.camera !== "scripted" || scripted.result.trajectory.camera !== true) throw new Error("the run did not record a scripted camera");
const scriptedFilm = scripted.result.outputs.find((o) => o.kind === "film");
if (!scriptedFilm) throw new Error(`no film of the scripted run: ${JSON.stringify(scripted.result.warnings)}`);
const sfilm = await readOutput(scriptedFilm.id);
fs.writeFileSync(path.join(outDir, "scripted.webm"), sfilm.bytes);
console.log(`scripted film: ${sfilm.bytes.length} B → ${path.join(outDir, "scripted.webm")}`);
const reattach = await call("camera", { kind: "scripted" });
console.log("camera scripted:", JSON.stringify(reattach.result));
if (reattach.result.scripted !== true) throw new Error("camera {kind:scripted} did not re-attach");
const settle = await call("settle", { machineId: "car", seconds: 0.5 });
console.log("settle car:", JSON.stringify(settle.result));
if (!settle.result.settled || Math.abs(settle.result.pose.pos[2]) > 0.01) throw new Error("the resting car should settle where it was placed");
const snapScripted = await call("snapshot", { width: 640, height: 360, camera: { kind: "scripted" } });
const pngS = await readOutput(snapScripted.result.id);
fs.writeFileSync(path.join(outDir, "snapshot-scripted.png"), pngS.bytes);
console.log(`scripted snapshot ${pngS.bytes.length} B`);
const probe = await call("probe", { bodies: ["car.chassis"] });
console.log("probe:", JSON.stringify(probe.result.bodies), "contacts", probe.result.contacts.length);
const live = await call("run", { runId: "smoke-live", duration: 1, realtime: true, speed: 4, programs: [{ id: "p", source: `function loop({ machine }) { machine.motor("drive").speed(-20); }` }] }, 60_000);
console.log(`realtime run at 4x: ${live.ms} ms wall for ${live.result.time} s sim, status ${live.result.status}`);
await browser.close();
server.close();
console.log("SMOKE OK");
