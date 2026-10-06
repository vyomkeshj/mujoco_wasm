// RunMachine runtime — the shared vocabulary.
// Machine packages come from the CAD app (mm, the design pose); worlds and runs are RunMachine's own (metres).

export type XYZ = [number, number, number];
/** w, x, y, z — MuJoCo's order. */
export type Quat = [number, number, number, number];

// ------------------------------------------------------------------ the Machine package (machine/1)

export interface MeshRef {
  /** A workspace file id (the CAD export); the app resolves it to a URL before `load`. */
  fileId?: string;
  fileName?: string;
  /** A URL the runtime can fetch (resolved by the app), or a key into `meshes` given to the compiler. */
  url?: string;
  key?: string;
}

export type ColliderKind = "hull" | "box" | "sphere" | "cylinder" | "capsule" | "exact" | "none";
export type Collider =
  | ColliderKind
  | { kind: "cylinder"; axis: XYZ; radius: number; length: number; center: XYZ }
  | { kind: "sphere"; radius: number; center: XYZ }
  | { kind: "box"; size: XYZ; center: XYZ; quat?: Quat };

export interface Material {
  /** kg/m³ — used when `mass` is absent (default 1000). */
  density?: number;
  /** grams — the whole part; overrides density. */
  mass?: number;
  /** sliding friction coefficient (default 0.8; rubber ≈ 1.0). */
  friction?: number;
  /** 0 (dead) .. 1 (lively); a hint, P2. */
  bounce?: number;
}

export interface PartBody {
  nodeId: string;
  name: string;
  mesh: MeshRef;
  collider?: Collider;
  color?: string;
}

export interface Part {
  id: string;
  name: string;
  color?: string;
  bodies: PartBody[];
  material?: Material;
}

export type JointType = "hinge" | "slide" | "ball" | "free" | "fixed";

export interface Joint {
  id: string;
  type: JointType;
  /** A part id, or "world". */
  parent: string;
  child: string;
  /** World mm at the design pose. Required for hinge and slide; the anchor for ball. */
  axis?: { point: XYZ; dir: XYZ };
  /** degrees for hinge/ball, mm for slide. */
  range?: [number, number];
  /** N·m·s/rad (hinge) · N·s/m (slide) */
  damping?: number;
  /** N·m (hinge) · N (slide) — dry friction */
  friction?: number;
  spring?: { stiffness: number; rest: number };
  armature?: number;
}

export interface Motor {
  id: string;
  joint: string;
  kind: "velocity" | "position" | "torque";
  /** N·m (hinge) · N (slide) */
  maxTorque: number;
  /** rad/s (hinge) · mm/s (slide) — the control range of a velocity motor and the speed cap of a position motor. */
  maxSpeed?: number;
  gear?: number;
}

export interface Gear {
  id: string;
  /** joint ids */
  driver: string;
  driven: string;
  /** [driver teeth, driven teeth] → q_driven = −(t0/t1)·q_driver */
  teeth?: [number, number];
  /** q_driven = ratio·q_driver — positive for belts and chains */
  ratio?: number;
}

export type Sensor =
  | { id: string; type: "camera"; part: string; position: XYZ; look: XYZ; up?: XYZ; fov: number; width: number; height: number }
  | { id: string; type: "encoder"; joint: string }
  | { id: string; type: "imu"; part: string; position?: XYZ }
  | { id: string; type: "rangefinder"; part: string; position: XYZ; dir: XYZ; maxRange?: number }
  | { id: string; type: "touch"; part: string }
  | { id: string; type: "gps"; part: string };

export interface MachinePackage {
  version: "machine/1";
  name: string;
  units: "mm";
  source?: { app: string; nodeId: string; modelHash?: string; exportedAt?: string };
  parts: Part[];
  joints: Joint[];
  motors: Motor[];
  gears: Gear[];
  sensors: Sensor[];
  /** part ids welded to the world */
  ground: string[];
}

// ------------------------------------------------------------------ the World (world/1) — metres, kg, seconds

export interface Pose {
  pos?: XYZ;
  /** degrees, x then y then z (intrinsic xyz) */
  euler?: XYZ;
  quat?: Quat;
}

export type Shape =
  | { kind: "box"; size: XYZ }
  | { kind: "sphere"; r: number }
  | { kind: "cylinder"; r: number; h: number }
  | { kind: "capsule"; r: number; h: number }
  | { kind: "ramp"; w: number; l: number; h: number }
  | { kind: "mesh"; mesh: MeshRef; scale?: number; collider?: Collider };

export interface WorldObject {
  id: string;
  name?: string;
  shape: Shape;
  pose?: Pose;
  fixed?: boolean;
  material?: Material & { color?: string };
}

export interface PlacedMachine {
  id: string;
  package: MachinePackage;
  pose?: Pose;
  programs?: string[];
}

export type MetricKind =
  | "position"
  | "max_height"
  | "max_speed"
  | "distance_from_start"
  | "joint_angle"
  | "inside"
  | "touched"
  | "time_to";

export interface Metric {
  id: string;
  kind: MetricKind;
  /** `objectId`, `machineId.partId` (bodies), `machineId.jointId` (joint_angle), or a metric id (time_to) */
  target: string;
  /** inside: a world box */
  region?: { min: XYZ; max: XYZ };
  /** touched: the other body */
  other?: string;
}

export interface Ground {
  friction?: number;
  color?: string;
  size?: number;
}

export interface World {
  version: "world/1";
  gravity?: XYZ;
  /** seconds (default 0.001) */
  timestep?: number;
  ground?: Ground | null;
  objects: WorldObject[];
  machines: PlacedMachine[];
  metrics?: Metric[];
  look?: { sky?: string; floor?: string };
}

// ------------------------------------------------------------------ programs and runs

export interface Program {
  id: string;
  name?: string;
  source: string;
  /** control rate, Hz (default 50) */
  rate?: number;
  /** the machine this program drives (default: the first machine) */
  machine?: string;
}

export interface RunSpec {
  runId: string;
  seed?: number;
  /** seconds */
  duration: number;
  programs?: Program[];
  record?: { trajectoryRate?: number };
}

export interface MetricResult {
  id: string;
  kind: MetricKind;
  value: number | boolean | XYZ | null;
  unit?: string;
  text: string;
}

export interface RunResult {
  runId: string;
  status: "finished" | "stopped" | "failed";
  reason?: string;
  time: number;
  ticks: number;
  wallMs: number;
  metrics: Record<string, MetricResult>;
  custom: Record<string, number>;
  logs: string[];
  trajectory: Trajectory;
  warnings: string[];
}

/** Sampled poses of every body (and joint positions) over a run — what films and replays render. */
export interface Trajectory {
  bodies: string[];
  joints: string[];
  rate: number;
  /** per sample: [t, …poses (7 per body: x y z w qx qy qz), …joint q] */
  stride: number;
  samples: number;
  data: Float32Array;
}

// ------------------------------------------------------------------ the compiled world (engine-neutral)

export interface MeshData {
  /** triangle soup, 9 floats per triangle */
  positions: Float32Array;
  bbox: { min: XYZ; max: XYZ };
  /** volume centroid */
  centroid: XYZ;
  volume: number;
}

export type RenderGeom =
  | { kind: "mesh"; positions: Float32Array; color: string; visualOnly?: boolean }
  | { kind: "box" | "sphere" | "cylinder" | "capsule" | "plane"; size: XYZ; pos: XYZ; quat: Quat; color: string; visualOnly?: boolean };

export interface CompiledBody {
  /** the MJCF body name */
  name: string;
  /** `machineId.partId` or an object id */
  ref: string;
  machine?: string;
  part?: string;
  object?: string;
  /** world frame at the design pose, metres */
  origin: XYZ;
  geoms: RenderGeom[];
}

export interface CompiledJoint {
  name: string;
  ref: string;
  type: JointType;
  body: string;
  machine?: string;
}

export interface CompiledActuator {
  name: string;
  ref: string;
  machine: string;
  joint: string;
  kind: Motor["kind"];
  maxTorque: number;
  maxSpeed: number;
}

export interface CompiledSensor {
  name: string;
  ref: string;
  machine: string;
  type: Sensor["type"];
  /** MJCF sensor names that feed it, in order */
  mj: string[];
  camera?: { name: string; width: number; height: number; fov: number };
}

export interface CompiledWorld {
  mjcf: string;
  files: { name: string; bytes: Uint8Array }[];
  bodies: CompiledBody[];
  joints: CompiledJoint[];
  actuators: CompiledActuator[];
  sensors: CompiledSensor[];
  metrics: Metric[];
  timestep: number;
  gravity: XYZ;
  look: { sky: string; floor: string; groundSize: number; ground: boolean };
  warnings: string[];
}
