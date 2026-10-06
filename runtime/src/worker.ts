// The worker owns the host: physics, programs, sensors and rendering, on a canvas the page handed over.
import { Host } from "./host";
import type { Notice, Request } from "./protocol";
import { TAG, errorText } from "./protocol";

type Incoming =
  | { kind: "init"; canvas: OffscreenCanvas; wasmUrl: string; width: number; height: number; dpr: number }
  | { kind: "request"; req: Request }
  | { kind: "input"; ev: { type: string; dx?: number; dy?: number; deltaY?: number; buttons?: number; shift?: boolean } }
  | { kind: "resize"; width: number; height: number; dpr: number }
  | { kind: "visible"; visible: boolean };

const scope = self as unknown as { postMessage: (m: unknown) => void; onmessage: ((e: MessageEvent<Incoming>) => void) | null };
let host: Host | null = null;
const queue: Request[] = [];

const post = (notice: Notice) => scope.postMessage({ kind: "notice", notice });

async function answer(req: Request): Promise<void> {
  if (!host) {
    queue.push(req);
    return;
  }
  try {
    const result = await host.handle(req);
    scope.postMessage({ kind: "reply", reply: { [TAG]: 1, id: req.id, ok: true, result } });
  } catch (err) {
    console.error(`runmachine ${req.method}:`, err);
    scope.postMessage({ kind: "reply", reply: { [TAG]: 1, id: req.id, ok: false, error: errorText(err) } });
  }
}

scope.onmessage = async (e: MessageEvent<Incoming>) => {
  const m = e.data;
  switch (m.kind) {
    case "init": {
      const h = new Host({ canvas: m.canvas, wasmUrl: m.wasmUrl, width: m.width, height: m.height, dpr: m.dpr, post, inWorker: true });
      try {
        await h.init();
        host = h;
        for (const q of queue.splice(0)) void answer(q);
      } catch (err) {
        post({ [TAG]: 1, type: "error", error: errorText(err) });
      }
      break;
    }
    case "request":
      void answer(m.req);
      break;
    case "input":
      host?.input(m.ev);
      break;
    case "resize":
      host?.resize(m.width, m.height, m.dpr);
      break;
    case "visible":
      host?.setVisible(m.visible);
      break;
  }
};
