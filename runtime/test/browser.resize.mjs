// Runtime 8: a resize that lands while the engine is still loading must not be lost.
// The page starts in a 0x0 iframe (as RunMachine's app frame can be while it lays out or animates open), the
// iframe grows to 960x540 during the ~10 MB wasm download, then a world is loaded and the view is measured.
// Before runtime 8 the worker dropped that resize: the scene rendered into a 2x2 canvas stretched to fill the
// frame — a featureless grey/blue gradient with "ready" and every button looking fine.
// Run against a published version: SMOKE_ROOT=<repo> SMOKE_PAGE=/runtime/versions/7/index.html (expected to FAIL).
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
const root = process.env.SMOKE_ROOT ? path.resolve(process.env.SMOKE_ROOT) : path.join(here, "..", "dist");
const pagePath = process.env.SMOKE_PAGE ?? "/index.html";
function findChrome() {
  const r = path.join(os.homedir(), ".cache", "puppeteer", "chrome");
  const d = fs.readdirSync(r).filter((x) => x.startsWith("linux-")).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).at(-1);
  return path.join(r, d, "chrome-linux64", "chrome");
}
const types = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".wasm": "application/wasm", ".json": "application/json" };
const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/__host.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<!doctype html><body style="margin:0;background:#000"><iframe id="f" style="border:0;width:0;height:0;display:block" src="${pagePath}?parent=${encodeURIComponent(origin)}"></iframe></body>`);
    return;
  }
  const p = path.join(root, decodeURIComponent(u.pathname));
  if (!p.startsWith(root) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); res.end(); return; }
  // the wasm takes seconds over a real network; locally it is instant and the race never opens
  const delay = path.extname(p) === ".wasm" ? Number(process.env.WASM_DELAY_MS ?? 3000) : 0;
  setTimeout(() => {
    res.writeHead(200, { "content-type": types[path.extname(p)] ?? "application/octet-stream", "cache-control": "no-store" });
    fs.createReadStream(p).pipe(res);
  }, delay);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({ executablePath: findChrome(), headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
let failed = false;
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.evaluateOnNewDocument(() => {
    window.__msgs = [];
    window.addEventListener("message", (ev) => { if (ev.data && ev.data.esoulRunMachine === 1) window.__msgs.push(ev.data); });
  });
  await page.goto(`${origin}/__host.html`, { waitUntil: "domcontentloaded" });
  await new Promise((r) => setTimeout(r, 250));
  const early = await page.evaluate(() => window.__msgs.some((m) => m.type === "ready"));
  if (early) console.log("note: the engine was ready before the iframe grew — the race was not exercised");
  await page.evaluate(() => { const f = document.getElementById("f"); f.style.width = "960px"; f.style.height = "540px"; });
  await page.waitForFunction(() => window.__msgs.some((m) => m.type === "ready" || m.type === "error"), { timeout: 90_000 });
  const { world, meshes } = carWorld();
  const meshSources = Object.fromEntries(Object.entries(meshes).map(([k, pos]) => [k, { base64: Buffer.from(encodeStlBinary(pos)).toString("base64") }]));
  await page.evaluate((req) => document.getElementById("f").contentWindow.postMessage(req, "*"), { esoulRunMachine: 1, id: "load-1", method: "load", args: { world, meshes: meshSources } });
  await page.waitForFunction(() => window.__msgs.some((m) => m.id === "load-1" && "ok" in m), { timeout: 60_000 });
  await new Promise((r) => setTimeout(r, 1200));
  const png = await (await page.$("#f")).screenshot({ encoding: "base64" });
  const edges = await page.evaluate(async (b64) => {
    const img = new Image(); img.src = `data:image/png;base64,${b64}`; await img.decode();
    const c = document.createElement("canvas"); c.width = img.width; c.height = img.height;
    const g = c.getContext("2d"); g.drawImage(img, 0, 0);
    const d = g.getImageData(0, 0, c.width, c.height).data; let n = 0, tot = 0;
    for (let y = 0; y < c.height; y += 2) for (let x = 1; x < c.width; x += 2) {
      const i = (y * c.width + x) * 4, j = i - 4; tot++;
      if (Math.abs(d[i] - d[j]) + Math.abs(d[i + 1] - d[j + 1]) + Math.abs(d[i + 2] - d[j + 2]) > 24) n++;
    }
    return n / tot;
  }, png);
  fs.writeFileSync(path.join(here, "..", "..", "..", "smoke-out-resize.png"), Buffer.from(png, "base64"));
  console.log(`edge fraction ${(edges * 100).toFixed(2)} % (a stretched 2x2 canvas has ~0)`);
  if (edges < 0.003) { console.error("FAIL: the view is a featureless gradient — the first resize was lost"); failed = true; }
  else console.log("PASS: the view is drawn at the frame's size");
} finally {
  await browser.close(); server.close();
}
process.exit(failed ? 1 : 0);
