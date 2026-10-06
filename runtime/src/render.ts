// three.js over the compiled world: bodies as groups, geoms as meshes, a floor, lights, an orbit camera,
// sensor cameras into render targets, and frames read back for films and snapshots. z is up, as in MuJoCo.
import * as THREE from "three";
import type { CameraPose } from "./engine";
import type { CameraImage } from "./program";
import type { CompiledWorld, RenderGeom, XYZ } from "./types";

const Z_UP = new THREE.Vector3(0, 0, 1);

export interface OrbitState {
  target: THREE.Vector3;
  distance: number;
  azimuth: number;
  elevation: number;
  follow: string | null;
}

export class Renderer {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly orbit: OrbitState = { target: new THREE.Vector3(0, 0, 0.05), distance: 0.8, azimuth: -0.7, elevation: 0.45, follow: null };
  private groups = new Map<string, THREE.Group>();
  private bodyIndex = new Map<string, number>();
  private sensorCams = new Map<string, { cam: THREE.PerspectiveCamera; rt: THREE.WebGLRenderTarget; buf: Uint8Array; flipped: Uint8ClampedArray }>();
  private sun: THREE.DirectionalLight;
  private width: number;
  private height: number;
  private floor: THREE.Mesh | null = null;
  private grid: THREE.GridHelper | null = null;
  private captureRt: THREE.WebGLRenderTarget | null = null;

  constructor(canvas: HTMLCanvasElement | OffscreenCanvas, width: number, height: number, dpr = 1) {
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas as HTMLCanvasElement, antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.width = width;
    this.height = height;
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.005, 200);
    this.camera.up.copy(Z_UP);
    this.scene.background = new THREE.Color("#dfe9f3");
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 0.9));
    this.sun = new THREE.DirectionalLight(0xffffff, 2.2);
    this.sun.position.set(1.5, -2, 3);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0005;
    this.sun.shadow.normalBias = 0.002;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);
    this.applyOrbit();
  }

  resize(width: number, height: number, dpr = 1): void {
    this.width = width;
    this.height = height;
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  /** Rebuild the scene for a compiled world. */
  build(world: CompiledWorld): void {
    for (const g of this.groups.values()) this.scene.remove(g);
    this.groups.clear();
    this.bodyIndex.clear();
    for (const sc of this.sensorCams.values()) sc.rt.dispose();
    this.sensorCams.clear();
    if (this.floor) this.scene.remove(this.floor);
    if (this.grid) this.scene.remove(this.grid);
    this.scene.background = new THREE.Color(world.look.sky);
    this.scene.fog = new THREE.Fog(new THREE.Color(world.look.sky), 6, 40);
    const size = world.look.groundSize;
    if (world.look.ground) {
      this.floor = new THREE.Mesh(new THREE.PlaneGeometry(size * 2, size * 2), new THREE.MeshStandardMaterial({ color: new THREE.Color(world.look.floor), roughness: 0.95, metalness: 0 }));
      this.floor.receiveShadow = true;
      this.scene.add(this.floor);
      this.grid = new THREE.GridHelper(size * 2, size * 20, 0x9aa5b1, 0xb8c0c8);
      this.grid.rotation.x = Math.PI / 2;
      (this.grid.material as THREE.Material).transparent = true;
      (this.grid.material as THREE.Material).opacity = 0.35;
      this.grid.position.z = 0.0005;
      this.scene.add(this.grid);
    }
    const shadowExtent = Math.min(size, 6);
    const sc = this.sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -shadowExtent; sc.right = shadowExtent; sc.top = shadowExtent; sc.bottom = -shadowExtent;
    sc.near = 0.1; sc.far = 20;
    sc.updateProjectionMatrix();
    const allBounds = new THREE.Box3();
    for (const body of world.bodies) {
      if (body.name === "world") continue;
      const group = new THREE.Group();
      group.name = body.name;
      for (const geom of body.geoms) {
        const mesh = this.makeGeom(geom);
        if (mesh) group.add(mesh);
      }
      group.position.set(body.origin[0], body.origin[1], body.origin[2]);
      this.scene.add(group);
      this.groups.set(body.name, group);
      allBounds.expandByObject(group);
    }
    for (const s of world.sensors) {
      if (!s.camera) continue;
      const cam = new THREE.PerspectiveCamera(s.camera.fov, s.camera.width / s.camera.height, 0.003, 100);
      cam.matrixAutoUpdate = false;
      const rt = new THREE.WebGLRenderTarget(s.camera.width, s.camera.height, { depthBuffer: true });
      this.sensorCams.set(s.camera.name, { cam, rt, buf: new Uint8Array(s.camera.width * s.camera.height * 4), flipped: new Uint8ClampedArray(s.camera.width * s.camera.height * 4) });
    }
    if (!allBounds.isEmpty()) this.fit(allBounds);
  }

  private makeGeom(g: RenderGeom): THREE.Mesh | null {
    const color = new THREE.Color(g.color);
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.08 });
    if (g.visualOnly && g.kind !== "mesh") return null; // hidden collider primitives
    let geometry: THREE.BufferGeometry;
    const mesh = new THREE.Mesh();
    switch (g.kind) {
      case "mesh": {
        geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(g.positions.slice(), 3));
        geometry.computeVertexNormals();
        break;
      }
      case "box":
        geometry = new THREE.BoxGeometry(g.size[0], g.size[1], g.size[2]);
        break;
      case "sphere":
        geometry = new THREE.SphereGeometry(g.size[0], 32, 24);
        break;
      case "cylinder":
        geometry = new THREE.CylinderGeometry(g.size[0], g.size[0], g.size[1], 40);
        mesh.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
        break;
      case "capsule":
        geometry = new THREE.CapsuleGeometry(g.size[0], Math.max(0, g.size[1] - 2 * g.size[0]), 8, 24);
        mesh.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
        break;
      default:
        return null;
    }
    mesh.geometry = geometry;
    mesh.material = material;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    if (g.kind !== "mesh") {
      const q = new THREE.Quaternion(g.quat[1], g.quat[2], g.quat[3], g.quat[0]);
      mesh.quaternion.premultiply(q);
      mesh.position.set(g.pos[0], g.pos[1], g.pos[2]);
    }
    return mesh;
  }

  /** Poses from the engine (7 floats per body) in the engine's body order. */
  setPoses(bodies: string[], poses: Float32Array): void {
    for (let i = 0; i < bodies.length; i++) {
      const g = this.groups.get(bodies[i]);
      if (!g) continue;
      g.position.set(poses[i * 7], poses[i * 7 + 1], poses[i * 7 + 2]);
      g.quaternion.set(poses[i * 7 + 4], poses[i * 7 + 5], poses[i * 7 + 6], poses[i * 7 + 3]);
    }
  }

  bodyPosition(name: string): THREE.Vector3 | null {
    const g = this.groups.get(name);
    return g ? g.position.clone() : null;
  }

  // ---------------------------------------------------------------- the viewport camera

  applyOrbit(snap = false): void {
    const o = this.orbit;
    if (o.follow) {
      const p = this.groups.get(o.follow)?.position;
      if (p) o.target.lerp(p, snap ? 1 : 0.25);
    }
    const ce = Math.cos(o.elevation);
    this.camera.position.set(o.target.x + o.distance * ce * Math.cos(o.azimuth), o.target.y + o.distance * ce * Math.sin(o.azimuth), o.target.z + o.distance * Math.sin(o.elevation));
    this.camera.lookAt(o.target);
    this.sun.target.position.copy(o.target);
    this.sun.position.set(o.target.x + 1.5, o.target.y - 2, o.target.z + 3);
  }

  rotate(dx: number, dy: number): void {
    this.orbit.azimuth -= dx * 0.006;
    this.orbit.elevation = Math.max(-1.45, Math.min(1.5, this.orbit.elevation + dy * 0.006));
    this.applyOrbit();
  }

  pan(dx: number, dy: number): void {
    const o = this.orbit;
    const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrix, 0);
    const up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrix, 1);
    const k = o.distance * 0.0016;
    o.target.addScaledVector(right, -dx * k).addScaledVector(up, dy * k);
    o.follow = null;
    this.applyOrbit();
  }

  zoom(deltaY: number): void {
    this.orbit.distance = Math.max(0.02, Math.min(100, this.orbit.distance * Math.exp(deltaY * 0.0012)));
    this.applyOrbit();
  }

  lookAt(eye: XYZ, target: XYZ): void {
    const o = this.orbit;
    o.follow = null;
    o.target.set(target[0], target[1], target[2]);
    const d = new THREE.Vector3(eye[0] - target[0], eye[1] - target[1], eye[2] - target[2]);
    o.distance = Math.max(0.02, d.length());
    o.azimuth = Math.atan2(d.y, d.x);
    o.elevation = Math.asin(Math.max(-1, Math.min(1, d.z / o.distance)));
    this.applyOrbit();
  }

  fit(bounds?: THREE.Box3): void {
    const box = bounds ?? this.sceneBounds();
    if (box.isEmpty()) return;
    const c = box.getCenter(new THREE.Vector3());
    const r = Math.max(0.02, box.getSize(new THREE.Vector3()).length() / 2);
    this.orbit.target.copy(c);
    this.orbit.distance = r * 2.4;
    this.applyOrbit();
  }

  sceneBounds(): THREE.Box3 {
    const b = new THREE.Box3();
    for (const g of this.groups.values()) b.expandByObject(g);
    return b;
  }

  follow(body: string | null): void {
    this.orbit.follow = body;
    this.applyOrbit(true);
  }

  render(): void {
    this.applyOrbit();
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  }

  // ---------------------------------------------------------------- sensor cameras

  renderCamera(camera: { name: string; width: number; height: number; fov: number }, pose: CameraPose, _wantDepth: boolean): CameraImage {
    const sc = this.sensorCams.get(camera.name);
    if (!sc) throw new Error(`renderer has no camera "${camera.name}"`);
    const m = pose.mat;
    sc.cam.matrixWorld.set(m[0], m[1], m[2], pose.pos[0], m[3], m[4], m[5], pose.pos[1], m[6], m[7], m[8], pose.pos[2], 0, 0, 0, 1);
    sc.cam.matrixWorldInverse.copy(sc.cam.matrixWorld).invert();
    sc.cam.fov = pose.fovy;
    sc.cam.updateProjectionMatrix();
    this.renderer.setRenderTarget(sc.rt);
    this.renderer.render(this.scene, sc.cam);
    this.renderer.readRenderTargetPixels(sc.rt, 0, 0, camera.width, camera.height, sc.buf);
    this.renderer.setRenderTarget(null);
    flipRows(sc.buf, sc.flipped, camera.width, camera.height);
    return { width: camera.width, height: camera.height, rgba: sc.flipped };
  }

  // ---------------------------------------------------------------- frames for films and snapshots

  /** Render the viewport camera at an arbitrary size into RGBA bytes (top row first). */
  capture(width: number, height: number): Uint8ClampedArray {
    if (!this.captureRt || this.captureRt.width !== width || this.captureRt.height !== height) {
      this.captureRt?.dispose();
      this.captureRt = new THREE.WebGLRenderTarget(width, height, { depthBuffer: true, samples: 4 });
    }
    const aspect = this.camera.aspect;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.applyOrbit(true);
    this.renderer.setRenderTarget(this.captureRt);
    this.renderer.render(this.scene, this.camera);
    const buf = new Uint8Array(width * height * 4);
    this.renderer.readRenderTargetPixels(this.captureRt, 0, 0, width, height, buf);
    this.renderer.setRenderTarget(null);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    const out = new Uint8ClampedArray(width * height * 4);
    flipRows(buf, out, width, height);
    return out;
  }

  dispose(): void {
    for (const sc of this.sensorCams.values()) sc.rt.dispose();
    this.captureRt?.dispose();
    this.renderer.dispose();
  }
}

function flipRows(src: Uint8Array, dst: Uint8ClampedArray, width: number, height: number): void {
  const row = width * 4;
  for (let y = 0; y < height; y++) dst.set(src.subarray((height - 1 - y) * row, (height - y) * row), y * row);
}

/** RGBA bytes → PNG bytes through a 2D canvas (OffscreenCanvas in a worker, a canvas element on a page). */
export async function encodePng(rgba: Uint8ClampedArray, width: number, height: number): Promise<Uint8Array> {
  const canvas = typeof OffscreenCanvas !== "undefined" ? new OffscreenCanvas(width, height) : (() => { const c = document.createElement("canvas"); c.width = width; c.height = height; return c; })();
  const ctx = canvas.getContext("2d") as OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D | null;
  if (!ctx) throw new Error("no 2D context for the snapshot");
  ctx.putImageData(new ImageData(rgba as unknown as Uint8ClampedArray<ArrayBuffer>, width, height), 0, 0);
  const blob = "convertToBlob" in canvas ? await (canvas as OffscreenCanvas).convertToBlob({ type: "image/png" }) : await new Promise<Blob>((res, rej) => (canvas as HTMLCanvasElement).toBlob((b) => (b ? res(b) : rej(new Error("toBlob failed"))), "image/png"));
  return new Uint8Array(await blob.arrayBuffer());
}
