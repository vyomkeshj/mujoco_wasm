import type { Engine } from "./engine";
import type { Metric, MetricResult, XYZ } from "./types";
import * as V from "./vec";

interface Track {
  m: Metric;
  body: string | null;
  joint: string | null;
  start: XYZ | null;
  prev: XYZ | null;
  maxHeight: number;
  maxSpeed: number;
  firstAt: number | null;
  value: boolean;
}

/** Evaluates the world's metrics at every control tick and words them at the end. */
export class MetricTracker {
  private tracks: Track[] = [];
  constructor(metrics: Metric[], private readonly bodyName: (ref: string) => string | null, private readonly jointName: (ref: string) => string | null) {
    for (const m of metrics) {
      const body = m.kind === "time_to" || m.kind === "joint_angle" ? null : bodyName(m.target);
      const joint = m.kind === "joint_angle" ? jointName(m.target) : null;
      this.tracks.push({ m, body, joint, start: null, prev: null, maxHeight: -Infinity, maxSpeed: 0, firstAt: null, value: false });
    }
  }

  update(engine: Engine, t: number, dt: number): void {
    const contacts = this.tracks.some((tr) => tr.m.kind === "touched") ? engine.contacts() : [];
    for (const tr of this.tracks) {
      if (tr.body) {
        const p = engine.bodyPos(tr.body);
        if (!tr.start) tr.start = p;
        if (p[2] > tr.maxHeight) tr.maxHeight = p[2];
        if (tr.prev && dt > 0) {
          const v = V.len(V.sub(p, tr.prev)) / dt;
          if (v > tr.maxSpeed) tr.maxSpeed = v;
        }
        tr.prev = p;
        if (tr.m.kind === "inside" && tr.m.region) {
          const { min, max } = tr.m.region;
          const inside = p[0] >= min[0] && p[0] <= max[0] && p[1] >= min[1] && p[1] <= max[1] && p[2] >= min[2] && p[2] <= max[2];
          tr.value = inside;
          if (inside && tr.firstAt === null) tr.firstAt = t;
        }
        if (tr.m.kind === "touched" && tr.m.other) {
          const other = this.bodyName(tr.m.other);
          const hit = contacts.some((c) => (c.a === tr.body && c.b === other) || (c.b === tr.body && c.a === other));
          if (hit) {
            tr.value = true;
            if (tr.firstAt === null) tr.firstAt = t;
          }
        }
      }
    }
    for (const tr of this.tracks) {
      if (tr.m.kind !== "time_to") continue;
      const ref = this.tracks.find((x) => x.m.id === tr.m.target);
      if (ref && ref.firstAt !== null && tr.firstAt === null) tr.firstAt = ref.firstAt;
    }
  }

  results(engine: Engine, t: number): Record<string, MetricResult> {
    const out: Record<string, MetricResult> = {};
    const r3 = (n: number) => Math.round(n * 1000) / 1000;
    for (const tr of this.tracks) {
      const m = tr.m;
      const label = m.target;
      let res: MetricResult;
      switch (m.kind) {
        case "position": {
          const p = tr.body ? engine.bodyPos(tr.body) : [0, 0, 0];
          const v: XYZ = [r3(p[0]), r3(p[1]), r3(p[2])];
          res = { id: m.id, kind: m.kind, value: v, unit: "m", text: `${label} is at (${v.join(", ")}) m` };
          break;
        }
        case "max_height":
          res = { id: m.id, kind: m.kind, value: r3(tr.maxHeight), unit: "m", text: `${label} reached ${r3(tr.maxHeight)} m` };
          break;
        case "max_speed":
          res = { id: m.id, kind: m.kind, value: r3(tr.maxSpeed), unit: "m/s", text: `${label} moved at up to ${r3(tr.maxSpeed)} m/s` };
          break;
        case "distance_from_start": {
          const p = tr.body ? engine.bodyPos(tr.body) : [0, 0, 0];
          const d = tr.start ? r3(V.len(V.sub(p as XYZ, tr.start))) : 0;
          res = { id: m.id, kind: m.kind, value: d, unit: "m", text: `${label} ended ${d} m from where it started` };
          break;
        }
        case "joint_angle": {
          const j = tr.joint ? engine.joint(tr.joint) : { q: 0, qd: 0 };
          const deg = r3((j.q * 180) / Math.PI);
          res = { id: m.id, kind: m.kind, value: deg, unit: "deg", text: `${label} is at ${deg}°` };
          break;
        }
        case "inside":
          res = { id: m.id, kind: m.kind, value: tr.value, text: tr.value ? `${label} is inside the region${tr.firstAt !== null ? ` (since ${r3(tr.firstAt)} s)` : ""}` : `${label} is not inside the region` };
          break;
        case "touched":
          res = { id: m.id, kind: m.kind, value: tr.value, text: tr.value ? `${label} touched ${m.other} at ${r3(tr.firstAt ?? 0)} s` : `${label} never touched ${m.other}` };
          break;
        case "time_to":
          res = { id: m.id, kind: m.kind, value: tr.firstAt, unit: "s", text: tr.firstAt !== null ? `${m.target} happened at ${r3(tr.firstAt)} s` : `${m.target} did not happen in ${r3(t)} s` };
          break;
        default:
          res = { id: m.id, kind: m.kind, value: null, text: `${m.kind}: not computed` };
      }
      out[m.id] = res;
    }
    return out;
  }
}
