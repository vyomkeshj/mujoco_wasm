# RunMachine runtime

The physics runtime behind the ExternalSoul RunMachine app: MuJoCo (the official `@mujoco/mujoco` WASM) in a
worker, three.js in front of it, one postMessage bridge (`esoulRunMachine`) for whoever opens the page — the app's
iframe or the platform's headless browser.

```
npm run build:runtime      # runtime/dist/ — the moving latest (gitignored)
npm run test:runtime       # node tests over dist/core.mjs
npm run typecheck:runtime
node runtime/test/browser.smoke.mjs                     # headless Chrome over dist/
node runtime/release.mjs                                # publish dist/ as runtime/versions/<N>/ (committed)
runtime/publish.sh                                      # ALL of it: build, test, release, push, deploy Pages, wait until live — use this
SMOKE_ROOT=. SMOKE_PAGE=/runtime/versions/6/index.html node runtime/test/browser.smoke.mjs
```

## Pinned builds

An app pins `https://vyomkeshj.github.io/mujoco_wasm/runtime/versions/<N>/` and nothing pushed later changes what it
loads. `runtime/versions/<N>/` holds `index.html`, `page.js`, `worker.js`, `version.json`; the 10 MB `mujoco.wasm`
lives once per MuJoCo version in `runtime/wasm/<mujoco>/`, named by a `<meta name="runmachine-wasm">` tag in the
versioned page. `runtime/dist/` is the development build the Pages workflow also serves.

| runtime | what it added |
|---|---|
| 6 | scripted camera (`camera.*` in programs, camera lane in the trajectory, films through it), `settle`, programs name their machine, `world.shared`, versioned builds |
| 7 | a closed mesh weighs its own volume (`inertia="exact"`; an open one falls back to its hull and warns); a cylinder collider is refused for a body that fills under 60% of it (a cone, a cup, a shell); `engine.bodyMass`; `distanceTo("id")` |
| 5 | mesh fetches through a pool of two with retries |
| 4 | trail, replay (seek/play/pause), a watched camera as frames |
| 3 | pick, select, presets, bounds, live logs |

## Requests (`{ esoulRunMachine: 1, id, method, args }` → `{ id, ok, result | error }`)

`ping` · `load { world, meshes }` · `run { runId, duration, seed?, programs?, realtime?, speed?, film? }` ·
`control { action: pause|resume|speed|stop|step }` · `snapshot { width?, height?, camera? }` ·
`film { runId?, quality?, fps?, width?, height?, speed?, from?, to?, camera? }` · `read { outputId, offset, length }` ·
`result { runId }` · `probe { bodies? }` · `settle { machineId? | objectId?, seconds? }` · `camera {…}` ·
`select { ref }` · `pick { x, y }` · `trail { ref }` · `replay { action: seek|play|pause|stop, runId?, t?, speed? }` ·
`watch { sensor?, fps? }` · `world { mjcf? }` · `dispose`.

### settle (runtime 6)

`{ machineId?: string; objectId?: string; seconds?: number (0.5) }` → `{ ref, pose: { pos, quat }, moved, settled, seconds }`.
Simulates from the loaded state with no programs, answers the PLACEMENT pose (what the world would store as the
machine's or object's `pose`) that lands it where it came to rest, `moved` in metres, `settled` when it was still
(under 1 mm/s) at the end — then restores the engine exactly. Refused while a run is in progress.

### camera

`{ kind: "orbit"|"follow"|"lookAt"|"fit"|"preset"|"scripted", target?, eye?, lookAt?, view?, distance?, elevation?, turn?, rotate?, zoom? }`.
`scripted` puts the viewport back on the program's camera (the live run's, the replay's, or the last recording's final
shot) and keeps following it; any other kind, and any drag, wheel or double-click in the view, takes the view back.

## Programs

```js
function setup({ camera }) { camera.follow("car", { distance: 1.0, height: 0.45 }); }
function loop({ t, dt, tick, machine, machines, world, camera, log, random }) {
  machine.motor("drive").speed(40);                // rad/s on a velocity motor; .angle(deg) on a position motor
  machine.motor("steer").angle(-84);
  if (machine.sensor("eye").find("red")) log("seen");
  world.shared.lap = 1;                            // one object every program of the run shares
  if (t > 12) world.stop("done");
}
```

- `machine` is the program's machine: `program.machine` names it; unset it is the only machine, and with several the
  first use throws `program "x" does not say which machine it drives (machines: car, robot) — set machine, or use
  machines["car"]`. `machine: "*"` is a world program: no `machine`, every machine in `machines`.
- `camera` (runtime 6, sim time, deterministic): `follow(target, { distance 1.2, height 0.5, azimuthDeg 0 = behind,
  lag 0.5 })`, `lookAt(target)`, `at([x, y, z])`, `fov(deg)`, `frame([targets], { margin 1.2 })`,
  `path([{ t, at, lookAt? }], { loop?, ease: "linear"|"smooth" })`, `release()`. A target is a machine id, `"machine.part"`,
  an object id, or `[x, y, z]` in metres. `lag` is the fraction of the gap left after 20 ms, whatever the control rate.
  Once any `camera.*` call happens the run's result says `camera: "scripted"`, the trajectory carries a camera lane
  (pos 3, look 3, fov 1 per sample, Float32; bytes version 2 — a run without one still writes version 1), the viewport
  follows it until the viewer grabs the view, and `film`/`snapshot` default to `{ kind: "scripted" }` for that run.
