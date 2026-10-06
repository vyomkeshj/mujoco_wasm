import type { Quat, XYZ } from "./types";

export const add = (a: XYZ, b: XYZ): XYZ => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: XYZ, b: XYZ): XYZ => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const scale = (a: XYZ, s: number): XYZ => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a: XYZ, b: XYZ): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a: XYZ, b: XYZ): XYZ => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const len = (a: XYZ): number => Math.hypot(a[0], a[1], a[2]);
export function norm(a: XYZ): XYZ {
  const l = len(a);
  if (l < 1e-12) throw new Error("zero-length vector");
  return [a[0] / l, a[1] / l, a[2] / l];
}

export const QUAT_ID: Quat = [1, 0, 0, 0];

export function quatMul(a: Quat, b: Quat): Quat {
  const [aw, ax, ay, az] = a;
  const [bw, bx, by, bz] = b;
  return [
    aw * bw - ax * bx - ay * by - az * bz,
    aw * bx + ax * bw + ay * bz - az * by,
    aw * by - ax * bz + ay * bw + az * bx,
    aw * bz + ax * by - ay * bx + az * bw,
  ];
}

export function quatFromAxisAngle(axis: XYZ, angle: number): Quat {
  const u = norm(axis);
  const s = Math.sin(angle / 2);
  return [Math.cos(angle / 2), u[0] * s, u[1] * s, u[2] * s];
}

/** Intrinsic x-y-z Euler angles in degrees → quaternion (w x y z). */
export function quatFromEulerDeg(e: XYZ): Quat {
  const r = (d: number) => (d * Math.PI) / 180;
  const qx = quatFromAxisAngle([1, 0, 0], r(e[0]));
  const qy = quatFromAxisAngle([0, 1, 0], r(e[1]));
  const qz = quatFromAxisAngle([0, 0, 1], r(e[2]));
  return quatMul(quatMul(qx, qy), qz);
}

export function rotate(q: Quat, v: XYZ): XYZ {
  const [w, x, y, z] = q;
  // v' = v + 2w(u×v) + 2u×(u×v)
  const u: XYZ = [x, y, z];
  const c1 = cross(u, v);
  const c2 = cross(u, c1);
  return [v[0] + 2 * (w * c1[0] + c2[0]), v[1] + 2 * (w * c1[1] + c2[1]), v[2] + 2 * (w * c1[2] + c2[2])];
}

/** The rotation taking +z to `dir`. */
export function quatZTo(dir: XYZ): Quat {
  const d = norm(dir);
  const z: XYZ = [0, 0, 1];
  const c = dot(z, d);
  if (c > 1 - 1e-9) return [1, 0, 0, 0];
  if (c < -1 + 1e-9) return [0, 1, 0, 0]; // 180° about x
  const axis = cross(z, d);
  return quatFromAxisAngle(axis, Math.acos(Math.max(-1, Math.min(1, c))));
}

export function quatNormalize(q: Quat): Quat {
  const l = Math.hypot(q[0], q[1], q[2], q[3]) || 1;
  return [q[0] / l, q[1] / l, q[2] / l, q[3] / l];
}

export function poseQuat(p?: { euler?: XYZ; quat?: Quat }): Quat {
  if (p?.quat) return quatNormalize(p.quat);
  if (p?.euler) return quatFromEulerDeg(p.euler);
  return QUAT_ID;
}

/** A number for MJCF: short, never exponent form, never "-0". */
export function fmt(n: number): string {
  if (!Number.isFinite(n)) throw new Error(`not a finite number: ${n}`);
  const s = Number(n.toFixed(7)).toString();
  if (s.includes("e")) return n.toFixed(9).replace(/0+$/, "").replace(/\.$/, "");
  return s === "-0" ? "0" : s;
}
export const fmt3 = (v: readonly number[]): string => v.map(fmt).join(" ");
