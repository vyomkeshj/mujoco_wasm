// A synthetic car in the Bracket's layout (mm, design pose): the P0 vehicle before the CAD export exists.
import { boxMesh, cylinderMesh } from "../dist/core.mjs";

export function carPackage() {
  const body = (nodeId, name, mesh, collider, color) => ({ nodeId, name, mesh: { key: nodeId }, collider, color });
  const meshes = {
    plate: boxMesh([-75, -30, 30], [75, 30, 36]),
    bearingL: boxMesh([-61, 24, 18], [-49, 30, 30]),
    bearingR: boxMesh([-61, -30, 18], [-49, -24, 30]),
    driveMount: boxMesh([-63, 9, 36], [-47, 35, 40]),
    driveMotor: cylinderMesh([-55, 22, 48], 1, 8, 26),
    steerMotor: cylinderMesh([31, 0, 61], 2, 8, 26),
    axle: cylinderMesh([-55, 0, 24], 1, 3, 104),
    spur: cylinderMesh([-55, 5, 24], 1, 19.5, 6),
    wheelRL: cylinderMesh([-55, 46, 24], 1, 24, 12),
    wheelRR: cylinderMesh([-55, -46, 24], 1, 24, 12),
    driveShaft: cylinderMesh([-55, 3.5, 48], 1, 1.5, 11),
    drivePinion: cylinderMesh([-55, 5, 48], 1, 7.5, 6),
    beam: boxMesh([50, -40, 20], [60, 40, 28]),
    pivot: cylinderMesh([55, 0, 34], 2, 3, 20),
    stubL: cylinderMesh([55, 46, 24], 1, 3, 12),
    stubR: cylinderMesh([55, -46, 24], 1, 3, 12),
    pivotGear: cylinderMesh([55, 0, 40], 2, 19.5, 4),
    wheelFL: cylinderMesh([55, 46, 24], 1, 24, 12),
    wheelFR: cylinderMesh([55, -46, 24], 1, 24, 12),
    steerShaft: cylinderMesh([31, 0, 42], 2, 1.5, 12),
    steerPinion: cylinderMesh([31, 0, 40], 2, 7.5, 4),
  };
  const pkg = {
    version: "machine/1",
    name: "Test car",
    units: "mm",
    parts: [
      { id: "chassis", name: "Chassis", color: "#e03131", material: { density: 1240 }, bodies: [
        body("plate", "Chassis plate", "plate", "hull", "#e03131"), body("bearingL", "Bearing L", "bearingL", "hull", "#495057"), body("bearingR", "Bearing R", "bearingR", "hull", "#495057"),
        body("driveMount", "Drive mount", "driveMount", "hull", "#868e96"), body("driveMotor", "Drive motor", "driveMotor", "cylinder", "#2f3640"), body("steerMotor", "Steering motor", "steerMotor", "cylinder", "#2f3640"),
      ] },
      { id: "rearLink", name: "Rear axle link", material: { density: 1100, friction: 1.0 }, bodies: [
        body("axle", "Rear axle", "axle", "none", "#adb5bd"), body("spur", "Spur gear 24T", "spur", "none", "#15aabf"), body("wheelRL", "Rear wheel L", "wheelRL", "cylinder", "#1b1b1b"), body("wheelRR", "Rear wheel R", "wheelRR", "cylinder", "#1b1b1b"),
      ] },
      { id: "driveShaft", name: "Drive shaft", material: { density: 2700 }, bodies: [body("driveShaft", "Drive shaft", "driveShaft", "none", "#adb5bd"), body("drivePinion", "Drive pinion 8T", "drivePinion", "none", "#fcc419")] },
      { id: "steerLink", name: "Steering link", material: { density: 1240 }, bodies: [
        body("beam", "Steering beam", "beam", "hull", "#1c7ed6"), body("pivot", "Pivot pin", "pivot", "none", "#f08c00"), body("stubL", "Stub axle L", "stubL", "none", "#adb5bd"), body("stubR", "Stub axle R", "stubR", "none", "#adb5bd"), body("pivotGear", "Steering gear 24T", "pivotGear", "none", "#15aabf"),
      ] },
      { id: "wheelFL", name: "Front wheel L", material: { density: 1100, friction: 1.0 }, bodies: [body("wheelFL", "Front wheel L", "wheelFL", "cylinder", "#1b1b1b")] },
      { id: "wheelFR", name: "Front wheel R", material: { density: 1100, friction: 1.0 }, bodies: [body("wheelFR", "Front wheel R", "wheelFR", "cylinder", "#1b1b1b")] },
      { id: "steerShaft", name: "Steering shaft", material: { density: 2700 }, bodies: [body("steerShaft", "Steering shaft", "steerShaft", "none", "#adb5bd"), body("steerPinion", "Steering pinion 8T", "steerPinion", "none", "#fcc419")] },
    ],
    joints: [
      { id: "rearAxle", type: "hinge", parent: "chassis", child: "rearLink", axis: { point: [-55, 0, 24], dir: [0, 1, 0] }, damping: 0.0002 },
      { id: "drive", type: "hinge", parent: "chassis", child: "driveShaft", axis: { point: [-55, 0, 48], dir: [0, 1, 0] }, damping: 0.00005 },
      { id: "steer", type: "hinge", parent: "chassis", child: "steerLink", axis: { point: [55, 0, 30], dir: [0, 0, 1] }, range: [-35, 35], damping: 0.001 },
      { id: "fl", type: "hinge", parent: "steerLink", child: "wheelFL", axis: { point: [55, 46, 24], dir: [0, 1, 0] }, damping: 0.0002 },
      { id: "fr", type: "hinge", parent: "steerLink", child: "wheelFR", axis: { point: [55, -46, 24], dir: [0, 1, 0] }, damping: 0.0002 },
      { id: "steerDrive", type: "hinge", parent: "chassis", child: "steerShaft", axis: { point: [31, 0, 42], dir: [0, 0, 1] }, damping: 0.00005 },
    ],
    motors: [
      { id: "drive", joint: "drive", kind: "velocity", maxTorque: 0.05, maxSpeed: 60, gear: -1 },
      { id: "steer", joint: "steerDrive", kind: "position", maxTorque: 0.05 },
    ],
    gears: [
      { id: "g1", driver: "drive", driven: "rearAxle", teeth: [8, 24] },
      { id: "g2", driver: "steerDrive", driven: "steer", teeth: [8, 24] },
    ],
    sensors: [
      { id: "axleEnc", type: "encoder", joint: "rearAxle" },
      { id: "gps", type: "gps", part: "chassis" },
      { id: "eye", type: "camera", part: "chassis", position: [70, 0, 40], look: [1, 0, -0.2], fov: 60, width: 64, height: 48 },
    ],
    ground: [],
  };
  return { pkg, meshes };
}

export function carWorld(extra = {}) {
  const { pkg, meshes } = carPackage();
  const world = {
    version: "world/1",
    ground: { friction: 1.0 },
    objects: [],
    machines: [{ id: "car", package: pkg, pose: { pos: [0, 0, 0.0005] } }],
    metrics: [
      { id: "dist", kind: "distance_from_start", target: "car.chassis" },
      { id: "top", kind: "max_speed", target: "car.chassis" },
      { id: "steer", kind: "joint_angle", target: "car.steer" },
    ],
    ...extra,
  };
  return { world, meshes };
}
