import type { MeshData, XYZ } from "./types";

/** Binary or ASCII STL → a triangle soup (9 floats per triangle). */
export function parseStl(bytes: Uint8Array): Float32Array {
  const head = new TextDecoder().decode(bytes.subarray(0, Math.min(bytes.length, 80))).trimStart();
  const binaryCount = bytes.length >= 84 ? new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getUint32(80, true) : -1;
  const looksBinary = bytes.length >= 84 && 84 + binaryCount * 50 === bytes.length;
  if (!looksBinary && head.startsWith("solid")) return parseAsciiStl(new TextDecoder().decode(bytes));
  if (!looksBinary) throw new Error(`not an STL file (${bytes.length} bytes)`);
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const out = new Float32Array(binaryCount * 9);
  let o = 84;
  for (let t = 0; t < binaryCount; t++) {
    o += 12; // normal
    for (let k = 0; k < 9; k++) {
      out[t * 9 + k] = dv.getFloat32(o, true);
      o += 4;
    }
    o += 2; // attribute byte count
  }
  return out;
}

function parseAsciiStl(text: string): Float32Array {
  const nums: number[] = [];
  const re = /vertex\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) nums.push(Number(m[1]), Number(m[2]), Number(m[3]));
  if (nums.length % 9 !== 0) throw new Error("ASCII STL: vertex count is not a multiple of 3");
  return Float32Array.from(nums);
}

export function encodeStlBinary(positions: Float32Array): Uint8Array {
  const tris = positions.length / 9;
  const buf = new ArrayBuffer(84 + tris * 50);
  const dv = new DataView(buf);
  new Uint8Array(buf, 0, 80).set(new TextEncoder().encode("RunMachine body-frame mesh").subarray(0, 80));
  dv.setUint32(80, tris, true);
  let o = 84;
  for (let t = 0; t < tris; t++) {
    const p = positions.subarray(t * 9, t * 9 + 9);
    // flat normal
    const ux = p[3] - p[0], uy = p[4] - p[1], uz = p[5] - p[2];
    const vx = p[6] - p[0], vy = p[7] - p[1], vz = p[8] - p[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l; ny /= l; nz /= l;
    dv.setFloat32(o, nx, true); dv.setFloat32(o + 4, ny, true); dv.setFloat32(o + 8, nz, true);
    o += 12;
    for (let k = 0; k < 9; k++) { dv.setFloat32(o, p[k], true); o += 4; }
    dv.setUint16(o, 0, true);
    o += 2;
  }
  return new Uint8Array(buf);
}

export function meshData(positions: Float32Array): MeshData {
  if (positions.length < 9) throw new Error("empty mesh");
  const min: XYZ = [Infinity, Infinity, Infinity];
  const max: XYZ = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < positions.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      const v = positions[i + k];
      if (v < min[k]) min[k] = v;
      if (v > max[k]) max[k] = v;
    }
  }
  // signed tetrahedra against the bbox centre (robust for open or inverted meshes)
  const c0: XYZ = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
  let vol = 0;
  const cen = [0, 0, 0];
  for (let t = 0; t < positions.length; t += 9) {
    const ax = positions[t] - c0[0], ay = positions[t + 1] - c0[1], az = positions[t + 2] - c0[2];
    const bx = positions[t + 3] - c0[0], by = positions[t + 4] - c0[1], bz = positions[t + 5] - c0[2];
    const cx = positions[t + 6] - c0[0], cy = positions[t + 7] - c0[1], cz = positions[t + 8] - c0[2];
    const v = (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
    vol += v;
    cen[0] += v * (ax + bx + cx) / 4;
    cen[1] += v * (ay + by + cy) / 4;
    cen[2] += v * (az + bz + cz) / 4;
  }
  const volume = Math.abs(vol);
  const centroid: XYZ = volume > 1e-12
    ? [c0[0] + cen[0] / vol, c0[1] + cen[1] / vol, c0[2] + cen[2] / vol]
    : c0;
  return { positions, bbox: { min, max }, centroid, volume };
}

/** (v − offset) · scale, a new array. */
export function transformPositions(positions: Float32Array, offset: XYZ, s: number): Float32Array {
  const out = new Float32Array(positions.length);
  for (let i = 0; i < positions.length; i += 3) {
    out[i] = (positions[i] - offset[0]) * s;
    out[i + 1] = (positions[i + 1] - offset[1]) * s;
    out[i + 2] = (positions[i + 2] - offset[2]) * s;
  }
  return out;
}

// ---- small test-friendly generators (mm)

export function boxMesh(min: XYZ, max: XYZ): Float32Array {
  const [x0, y0, z0] = min;
  const [x1, y1, z1] = max;
  const c: XYZ[] = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
  const quads = [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]];
  const out: number[] = [];
  for (const [a, b, cc, d] of quads) out.push(...c[a], ...c[b], ...c[cc], ...c[a], ...c[cc], ...c[d]);
  return Float32Array.from(out);
}

/** A cylinder along `axis` (x|y|z) centred at `center`, radius r, length L, n facets. */
export function cylinderMesh(center: XYZ, axis: 0 | 1 | 2, r: number, L: number, n = 24): Float32Array {
  const out: number[] = [];
  const u = (axis + 1) % 3, v = (axis + 2) % 3;
  const pt = (a: number, h: number): XYZ => {
    const p: XYZ = [0, 0, 0];
    p[axis] = center[axis] + h;
    p[u] = center[u] + r * Math.cos(a);
    p[v] = center[v] + r * Math.sin(a);
    return p;
  };
  const cap = (h: number, flip: boolean): XYZ => { const p: XYZ = [...center] as XYZ; p[axis] += h; return flip ? p : p; };
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
    const p00 = pt(a0, -L / 2), p10 = pt(a1, -L / 2), p01 = pt(a0, L / 2), p11 = pt(a1, L / 2);
    out.push(...p00, ...p10, ...p11, ...p00, ...p11, ...p01);          // side
    out.push(...cap(L / 2, false), ...p01, ...p11);                     // top
    out.push(...cap(-L / 2, true), ...p10, ...p00);                     // bottom
  }
  return Float32Array.from(out);
}

/** A UV sphere, n segments around, n/2 rings. */
export function sphereMesh(center: XYZ, r: number, n = 24): Float32Array {
  const out: number[] = [];
  const rings = Math.max(3, Math.floor(n / 2));
  const pt = (i: number, j: number): XYZ => {
    const phi = (j / rings) * Math.PI, th = (i / n) * Math.PI * 2;
    return [center[0] + r * Math.sin(phi) * Math.cos(th), center[1] + r * Math.sin(phi) * Math.sin(th), center[2] + r * Math.cos(phi)];
  };
  for (let j = 0; j < rings; j++) {
    for (let i = 0; i < n; i++) {
      const a = pt(i, j), b = pt(i + 1, j), c = pt(i + 1, j + 1), d = pt(i, j + 1);
      if (j > 0) out.push(...a, ...d, ...c);
      if (j < rings - 1) out.push(...a, ...c, ...b);
    }
  }
  return Float32Array.from(out);
}

export function primitiveMesh(p: { kind: "box"; min: XYZ; max: XYZ } | { kind: "cylinder"; center: XYZ; axis: "x" | "y" | "z"; r: number; length: number } | { kind: "sphere"; center: XYZ; r: number }): Float32Array {
  if (p.kind === "box") return boxMesh(p.min, p.max);
  if (p.kind === "cylinder") return cylinderMesh(p.center, p.axis === "x" ? 0 : p.axis === "y" ? 1 : 2, p.r, p.length);
  return sphereMesh(p.center, p.r);
}
