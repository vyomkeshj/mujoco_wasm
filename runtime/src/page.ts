// The runtime page: a canvas, a worker (or the host itself when OffscreenCanvas is missing), input
// forwarding, and the bridge to whoever opened it (`?parent=<origin>`): the RunMachine app's iframe
// parent, or the platform's headless browser, where the page is its own parent.
import { Host } from "./host";
import { isRequest, TAG, errorText, type Notice, type Reply, type Request } from "./protocol";

const params = new URLSearchParams(location.search);
const parentOrigin = params.get("parent") ?? location.origin;
const target: Window = window.parent && window.parent !== window ? window.parent : window;

const status = document.getElementById("status") as HTMLDivElement;
const canvas = document.getElementById("view") as HTMLCanvasElement;
const setStatus = (text: string) => {
  status.textContent = text;
  status.style.display = text ? "block" : "none";
};

function send(msg: Reply | Notice): void {
  target.postMessage(msg, parentOrigin);
}

const size = () => ({ width: Math.max(2, Math.floor(innerWidth)), height: Math.max(2, Math.floor(innerHeight)), dpr: Math.min(2, devicePixelRatio || 1) });
const wasmUrl = new URL("./mujoco.wasm", import.meta.url).href;

type Transport = {
  request: (req: Request) => void;
  input: (ev: Record<string, unknown>) => void;
  resize: () => void;
  visible: (v: boolean) => void;
};

let transport: Transport;
const useWorker = typeof OffscreenCanvas !== "undefined" && "transferControlToOffscreen" in canvas && params.get("worker") !== "0";

if (useWorker) {
  const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
  const s = size();
  canvas.width = s.width;
  canvas.height = s.height;
  const off = canvas.transferControlToOffscreen();
  worker.postMessage({ kind: "init", canvas: off, wasmUrl, ...s }, [off]);
  worker.onmessage = (e: MessageEvent<{ kind: "reply"; reply: Reply } | { kind: "notice"; notice: Notice }>) => {
    const m = e.data;
    if (m.kind === "reply") send(m.reply);
    else {
      if (m.notice.type === "ready") setStatus("");
      if (m.notice.type === "error") setStatus(`the physics engine failed to start: ${m.notice.error}`);
      send(m.notice);
    }
  };
  worker.onerror = (e) => {
    setStatus(`the physics worker failed: ${e.message}`);
    send({ [TAG]: 1, type: "error", error: e.message });
  };
  transport = {
    request: (req) => worker.postMessage({ kind: "request", req }),
    input: (ev) => worker.postMessage({ kind: "input", ev }),
    resize: () => worker.postMessage({ kind: "resize", ...size() }),
    visible: (v) => worker.postMessage({ kind: "visible", visible: v }),
  };
} else {
  const s = size();
  canvas.width = s.width * s.dpr;
  canvas.height = s.height * s.dpr;
  const host = new Host({ canvas, wasmUrl, ...s, post: (n) => { if (n.type === "ready") setStatus(""); send(n); }, inWorker: false });
  const ready = host.init().catch((err: unknown) => {
    setStatus(`the physics engine failed to start: ${errorText(err)}`);
    send({ [TAG]: 1, type: "error", error: errorText(err) });
  });
  transport = {
    request: async (req) => {
      await ready;
      try {
        send({ [TAG]: 1, id: req.id, ok: true, result: await host.handle(req) });
      } catch (err) {
        send({ [TAG]: 1, id: req.id, ok: false, error: errorText(err) });
      }
    },
    input: (ev) => host.input(ev as { type: string }),
    resize: () => { const z = size(); host.resize(z.width, z.height, z.dpr); },
    visible: (v) => host.setVisible(v),
  };
}

setStatus("loading the physics engine…");

window.addEventListener("message", (ev: MessageEvent) => {
  if (ev.origin !== parentOrigin) return;
  if (!isRequest(ev.data)) return;
  transport.request(ev.data);
});

// pointer input → the orbit camera
let dragging = false, lastX = 0, lastY = 0, buttons = 0;
canvas.addEventListener("pointerdown", (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; buttons = e.buttons; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  transport.input({ type: "drag", dx: e.clientX - lastX, dy: e.clientY - lastY, buttons, shift: e.shiftKey });
  lastX = e.clientX;
  lastY = e.clientY;
});
const endDrag = () => { dragging = false; };
canvas.addEventListener("pointerup", endDrag);
canvas.addEventListener("pointercancel", endDrag);
canvas.addEventListener("wheel", (e) => { e.preventDefault(); transport.input({ type: "wheel", deltaY: e.deltaY }); }, { passive: false });
canvas.addEventListener("dblclick", () => transport.input({ type: "fit" }));
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
// touch: one finger orbits (pointer events cover it); two fingers pinch to zoom
let pinch = 0;
canvas.addEventListener("touchstart", (e) => { if (e.touches.length === 2) pinch = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); }, { passive: true });
canvas.addEventListener("touchmove", (e) => {
  if (e.touches.length !== 2) return;
  const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
  if (pinch > 0) transport.input({ type: "wheel", deltaY: (pinch - d) * 4 });
  pinch = d;
}, { passive: true });

window.addEventListener("resize", () => transport.resize());
document.addEventListener("visibilitychange", () => transport.visible(document.visibilityState === "visible"));
