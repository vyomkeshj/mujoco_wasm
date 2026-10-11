#!/usr/bin/env bash
# Publish a runtime version END TO END: build, test, release runtime/versions/<N>/, push, deploy Pages, and do not
# return until https://vyomkeshj.github.io/mujoco_wasm/runtime/versions/<N>/version.json answers 200.
# Why: this fork's Pages deploy never runs on push (0 push-triggered runs, ever); runtime 7 was pushed, pinned by
# RunMachine, and 404'd — the app's boot waited 90 s for a page that did not exist. An app may pin a version only
# after this script says it is live.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build:runtime
npm run test:runtime
node runtime/test/browser.smoke.mjs
node runtime/release.mjs "$@"
# version.json names the runtime as "runmachine.<N>" (the same parse release.mjs uses); an empty N must stop here
N=$(node -e "const m=/runmachine\.(\d+)/.exec(JSON.parse(require('fs').readFileSync('runtime/dist/version.json','utf8')).runtimeVersion||'');console.log(m?m[1]:'')")
[ -n "$N" ] || { echo "runtime/dist/version.json names no runtime version" >&2; exit 1; }
git add runtime/versions/"$N" runtime/README.md
git diff --cached --quiet || git commit -m "runtime $N: published build"
git push origin HEAD:main
gh workflow run main.yml -R vyomkeshj/mujoco_wasm --ref main
URL="https://vyomkeshj.github.io/mujoco_wasm/runtime/versions/$N/version.json"
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$URL?t=$(date +%s)")
  [ "$code" = 200 ] && { echo "runtime $N is live: $URL"; exit 0; }
  sleep 6
done
echo "runtime $N is NOT live after 4 min ($URL answers $code) — do not pin it" >&2; exit 1
