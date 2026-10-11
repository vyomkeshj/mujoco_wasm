// Everything a host (node tests, the worker, the page) needs, without three.js.
export * from "./types";
export * as vec from "./vec";
export { parseStl, encodeStlBinary, meshData, transformPositions, boxMesh, cylinderMesh, sphereMesh, primitiveMesh } from "./stl";
export { compileWorld, meshKey, isClosedMesh, type CompileInput } from "./compile";
export { MujocoEngine, RecordedEngine, loadMujocoModule, encodeTrajectory, decodeTrajectory, type Engine, type LoadReport, type Contact, type CameraPose } from "./engine";
export { compileProgram, seededRandom, findColor, type CameraImage, type ColorQuery, type ProgramHooks } from "./program";
export { MetricTracker } from "./metrics";
export { Simulation, type CameraRenderer, type SimOptions } from "./sim";
export { CameraDirector, evaluatePath, type CameraPoseLane, type CameraScene, type Target, type PathKey } from "./camera";
export { settlePose, type SettleResult } from "./settle";
export const RUNTIME_VERSION = 8;
export const RUNTIME_NAME = "runmachine";
