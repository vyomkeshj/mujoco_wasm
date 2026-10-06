// A film is a render of a trajectory encoded with WebCodecs into WebM. Frames come from a callback so the
// caller (the host) drives the recorded engine and the renderer frame by frame.
import { ArrayBufferTarget, Muxer } from "webm-muxer";

export interface FilmPlan {
  width: number;
  height: number;
  fps: number;
  frames: number;
}

export function webcodecsAvailable(): boolean {
  return typeof VideoEncoder !== "undefined" && typeof VideoFrame !== "undefined";
}

async function pickCodec(width: number, height: number, fps: number): Promise<{ codec: string; muxCodec: "V_VP9" | "V_VP8" }> {
  const tries: { codec: string; muxCodec: "V_VP9" | "V_VP8" }[] = [
    { codec: "vp09.00.10.08", muxCodec: "V_VP9" },
    { codec: "vp8", muxCodec: "V_VP8" },
  ];
  for (const t of tries) {
    try {
      const s = await VideoEncoder.isConfigSupported({ codec: t.codec, width, height, framerate: fps, bitrate: 4_000_000 });
      if (s.supported) return t;
    } catch {
      /* next */
    }
  }
  throw new Error("this browser has no VP9 or VP8 video encoder (WebCodecs)");
}

/** Encode `plan.frames` frames produced by `frame(i)` (RGBA, top row first) into WebM bytes. */
export async function encodeFilm(plan: FilmPlan, frame: (i: number) => Uint8ClampedArray | Promise<Uint8ClampedArray>, onProgress?: (i: number) => void): Promise<Uint8Array> {
  if (!webcodecsAvailable()) throw new Error("films need WebCodecs (VideoEncoder); this browser has none");
  const { width, height, fps } = plan;
  if (width % 2 || height % 2) throw new Error("film width and height must be even");
  const { codec, muxCodec } = await pickCodec(width, height, fps);
  const target = new ArrayBufferTarget();
  const muxer = new Muxer({ target, video: { codec: muxCodec, width, height, frameRate: fps }, firstTimestampBehavior: "offset" });
  let failed: Error | null = null;
  const encoder = new VideoEncoder({
    output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
    error: (e) => { failed = e; },
  });
  encoder.configure({ codec, width, height, framerate: fps, bitrate: Math.round(width * height * fps * 0.12), latencyMode: "quality" });
  const usPerFrame = 1_000_000 / fps;
  for (let i = 0; i < plan.frames; i++) {
    if (failed) throw failed;
    const rgba = await frame(i);
    const vf = new VideoFrame(rgba, { format: "RGBA", codedWidth: width, codedHeight: height, timestamp: Math.round(i * usPerFrame), duration: Math.round(usPerFrame) });
    encoder.encode(vf, { keyFrame: i % (fps * 2) === 0 });
    vf.close();
    if (encoder.encodeQueueSize > 8) await new Promise((r) => setTimeout(r, 0));
    onProgress?.(i + 1);
  }
  await encoder.flush();
  encoder.close();
  if (failed) throw failed;
  muxer.finalize();
  return new Uint8Array(target.buffer);
}
