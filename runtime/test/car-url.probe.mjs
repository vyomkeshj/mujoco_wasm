// Load the Bracket car by URL into the runtime page in headless Chrome, as the app's tab does.
import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import os from "node:os"; import { fileURLToPath } from "node:url"; import { createRequire } from "node:module";
const require = createRequire("/home/vk/IdeaProjects/kinetic/package.json");
const puppeteer = require("puppeteer-core");
const here = path.dirname(fileURLToPath(import.meta.url)); const dist = path.join(here, "..", "dist");
const chrome = () => { const root = path.join(os.homedir(), ".cache", "puppeteer", "chrome"); const d = fs.readdirSync(root).filter((x) => x.startsWith("linux-")).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).at(-1); return path.join(root, d, "chrome-linux64", "chrome"); };
const types = { ".html": "text/html", ".js": "text/javascript", ".wasm": "application/wasm", ".json": "application/json" };
const server = http.createServer((req, res) => { const p = path.join(dist, decodeURIComponent(new URL(req.url, "http://x").pathname)); if (!p.startsWith(dist) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); res.end(); return; } res.writeHead(200, { "content-type": types[path.extname(p)] ?? "application/octet-stream" }); fs.createReadStream(p).pipe(res); });
await new Promise((r) => server.listen(0, "127.0.0.1", r)); const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({ executablePath: chrome(), headless: true, args: ["--no-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
const page = await browser.newPage(); await page.setViewport({ width: 1280, height: 720 });
page.on("console", (m) => { if (m.type() !== "log") console.log("  [page]", m.type(), m.text().slice(0, 300)); });
page.on("workercreated", (w) => { console.log("  [worker created]", w.url().slice(-30)); w.on("console", (m) => console.log("  [worker]", m.type(), m.text().slice(0, 300))); w.on("error", (e) => console.log("  [worker error]", e.message)); });
page.on("requestfailed", (r) => console.log("  [reqfail]", r.url().slice(0, 120), r.failure()?.errorText));
await page.evaluateOnNewDocument(() => { window.__msgs = []; window.addEventListener("message", (ev) => { if (ev.data && ev.data.esoulRunMachine === 1) window.__msgs.push(ev.data); }); });
const mode = process.env.MODE ?? ""; await page.goto(`${origin}/index.html?parent=${encodeURIComponent(origin)}${mode}`, { waitUntil: "load" });
await page.waitForFunction(() => window.__msgs.some((m) => m.type === "ready"), { timeout: 60000 });
const call = async (method, args, timeoutMs = 120000) => { const id = `${method}-${Math.random().toString(36).slice(2)}`; await page.evaluate((req) => window.postMessage(req, "*"), { esoulRunMachine: 1, id, method, args }); await page.waitForFunction((id) => window.__msgs.some((m) => m.id === id && "ok" in m), { timeout: timeoutMs }, id); return page.evaluate((id) => window.__msgs.find((m) => m.id === id && "ok" in m), id); };
const B = "https://6xnn2tqeafktjlyw.public.blob.vercel-storage.com/";
const meshes = { chassis: `${B}model-WTSvUuCkGGb5T3lK1oi6YpnmCIyixm.stl`, axle: `${B}model-l1mTha0b9ifAdlQLwFYTfGBgJy3N3j.stl`, wheelRL: `${B}Rear%20wheel%20L-Bic2C86NN5l3oR1aYHoPVuX133VFPH.stl`, wheelRR: `${B}Rear%20wheel%20R-RYEU3ZNvCv4ss7DodR8KFud2Gd2Bih.stl`, driveShaft: `${B}model-cYnVza6JOr9NOJC0ggqKUoU1WzK9as.stl`, steerLink: `${B}model-ZsHdvOkzpyFuxb4E7yXhaJKrUr1JSH.stl`, wheelFL: `${B}model-377rRX45sS0krgJpZdT2dHTQZiT7zx.stl`, wheelFR: `${B}model-LswQLQruSNdnqFVDCrrA6lAfo3XM3I.stl`, steerShaft: `${B}model-zot3qTSsiYSZFwo6dLK9dJ6OtYtRQR.stl` };
const body = (nodeId, name, key, collider, color) => ({ nodeId, name, mesh: { key }, collider, color });
const pkg = { version: "machine/1", name: "Bracket car", units: "mm", parts: [
  { id: "chassis", name: "Chassis", color: "#e03131", material: { density: 1240 }, bodies: [body("chassis", "Chassis", "chassis", "hull")] },
  { id: "rearLink", name: "Rear axle", material: { density: 1100, friction: 1.2 }, bodies: [body("axle", "Axle", "axle", "none", "#adb5bd"), body("wheelRL", "Rear wheel L", "wheelRL", "cylinder", "#1b1b1b"), body("wheelRR", "Rear wheel R", "wheelRR", "cylinder", "#1b1b1b")] },
  { id: "driveShaft", name: "Drive shaft", color: "#fcc419", material: { density: 2700 }, bodies: [body("driveShaft", "Shaft", "driveShaft", "none")] },
  { id: "steerLink", name: "Steering link", color: "#1c7ed6", material: { density: 1240 }, bodies: [body("steerLink", "Link", "steerLink", "hull")] },
  { id: "wheelFL", name: "Front wheel L", color: "#1b1b1b", material: { density: 1100, friction: 1.2 }, bodies: [body("wheelFL", "Wheel", "wheelFL", "cylinder")] },
  { id: "wheelFR", name: "Front wheel R", color: "#1b1b1b", material: { density: 1100, friction: 1.2 }, bodies: [body("wheelFR", "Wheel", "wheelFR", "cylinder")] },
  { id: "steerShaft", name: "Steering shaft", color: "#fcc419", material: { density: 2700 }, bodies: [body("steerShaft", "Shaft", "steerShaft", "none")] },
], joints: [
  { id: "rearAxle", type: "hinge", parent: "chassis", child: "rearLink", axis: { point: [-55, 0, 24], dir: [0, 1, 0] }, damping: 0.0002 },
  { id: "drive", type: "hinge", parent: "chassis", child: "driveShaft", axis: { point: [-55, 0, 48], dir: [0, 1, 0] }, damping: 0.00005 },
  { id: "steer", type: "hinge", parent: "chassis", child: "steerLink", axis: { point: [55, 0, 30], dir: [0, 0, 1] }, range: [-35, 35], damping: 0.001 },
  { id: "fl", type: "hinge", parent: "steerLink", child: "wheelFL", axis: { point: [55, 46, 24], dir: [0, 1, 0] }, damping: 0.0002 },
  { id: "fr", type: "hinge", parent: "steerLink", child: "wheelFR", axis: { point: [55, -46, 24], dir: [0, 1, 0] }, damping: 0.0002 },
  { id: "steerDrive", type: "hinge", parent: "chassis", child: "steerShaft", axis: { point: [31, 0, 42], dir: [0, 0, 1] }, damping: 0.00005 },
], motors: [{ id: "drive", joint: "drive", kind: "velocity", maxTorque: 0.05, maxSpeed: 60, gear: -1 }, { id: "steer", joint: "steerDrive", kind: "position", maxTorque: 0.05 }],
  gears: [{ id: "g1", driver: "drive", driven: "rearAxle", teeth: [8, 24] }, { id: "g2", driver: "steerDrive", driven: "steer", teeth: [8, 24] }],
  sensors: [{ id: "axleEnc", type: "encoder", joint: "rearAxle" }, { id: "gps", type: "gps", part: "chassis" }, { id: "eye", type: "camera", part: "chassis", position: [80, 0, 45], look: [1, 0, -0.25], fov: 60, width: 96, height: 72 }], ground: [] };
const world = { version: "world/1", ground: { friction: 1 }, objects: [], machines: [{ id: "car", package: pkg, pose: { pos: [0, 0, 0.0005] } }], metrics: [{ id: "distance", kind: "distance_from_start", target: "car.chassis" }, { id: "where", kind: "position", target: "car.chassis" }] };
const t0 = Date.now();
const one = await call("load", { world: { version: "world/1", ground: {}, objects: [{ id: "w", shape: { kind: "mesh", mesh: { key: "wheelRL" }, scale: 0.001 }, pose: { pos: [0, 0, 0.05] } }], machines: [] }, meshes: { wheelRL: meshes.wheelRL } }, 20000).catch((e) => ({ ok: false, error: `TIMEOUT ${e.message}` }));
console.log("one-mesh load:", one.ok ? `ok bodies ${one.result.bodies.length}` : one.error);
const load = await call("load", { world, meshes }, 40000).catch((e) => ({ ok: false, error: `TIMEOUT ${e.message}` }));
console.log(`load (${Date.now() - t0} ms):`, load.ok ? `bodies ${load.result.bodies.length} warnings ${JSON.stringify(load.result.warnings)} bounds ${JSON.stringify(load.result.bounds)}` : `ERROR ${load.error}`);
if (load.ok) {
  const src = fs.readFileSync(path.join(here, process.env.PROGRAM ?? "figure8.js"), "utf8");
  const duration = Number(process.env.DURATION ?? 12);
  const film = process.env.FILM ? { quality: process.env.FILM } : null;
  const run = await call("run", { runId: "f8", duration, seed: 1, realtime: false, programs: [{ id: "f8", source: src }], film }, 600000);
  console.log("run:", run.ok ? `${run.result.status} ${run.result.reason ?? ""} t=${run.result.time} camera=${run.result.camera} ${Object.values(run.result.metrics).map((m) => m.text).join(" · ")} custom=${JSON.stringify(run.result.custom)} logs=${run.result.logs.join(" | ")}` : `ERROR ${run.error}`);
  const filmOut = run.ok && run.result.outputs.find((o) => o.kind === "film");
  if (filmOut) {
    const parts = []; let offset = 0;
    for (;;) { const r = await call("read", { outputId: filmOut.id, offset, length: 1500000 }); parts.push(Buffer.from(r.result.base64, "base64")); offset += r.result.length; if (r.result.done) break; }
    const out = path.join(here, "..", "..", "..", "smoke-out", "car-figure8.webm");
    fs.writeFileSync(out, Buffer.concat(parts)); console.log(`film ${filmOut.bytes} B → ${out}`);
  }
  const snap = await call("snapshot", { width: 960, height: 540, camera: { kind: "preset", view: "top" } });
  if (snap.ok) { const r = await call("read", { outputId: snap.result.id, offset: 0, length: 2000000 }); fs.writeFileSync(path.join(here, "..", "..", "..", "smoke-out", "car-top.png"), Buffer.from(r.result.base64, "base64")); console.log("snapshot saved"); }
}
await browser.close(); server.close();
