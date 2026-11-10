<!-- dark-draft: socketio/socket.io -->
<!-- draft-state: ready -->
# Upstream issue draft: socketio/socket.io

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/socketio/socket.io/issues/new
- **Stars:** 63240 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Build examples", "CI (engine.io)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Build examples (`.github/workflows/build-examples.yml`)

- Latest run on `main`: https://github.com/socketio/socket.io/actions/runs/42430119176 — dark (conclusion: `failure`), 2026-11-08 00:31 UTC
- Dark since: 2026-09-27 00:53 UTC (first run of the current streak)
- Job / step: `build-examples (typescript-check-public-exports)` → `Build typescript-check-public-exports`
- Likely cause: Cannot find name 'MapIterator'. Did you mean 'Iterator'?

<details><summary>End of the job log</summary>

```
Cache restored from key: node-cache-Linux-x64-npm-414f5236ce2c905e08dd2798142b59569797a301ed4ffe2ae08dd6b0c2b97a54
added 12 packages, and audited 13 packages in 2s
found 0 vulnerabilities
> typescript-check-public-exports@0.0.0 build
> npm run build-v4 && npm run build-v5 && npm run build-v6
> typescript-check-public-exports@0.0.0 build-v4
> ./node_modules/typescript-v4/bin/tsc -p tsconfig-v4.json
##[error]node_modules/engine.io-client/build/esm/globals.node.d.ts(17,20): error TS2552: Cannot find name 'MapIterator'. Did you mean 'Iterator'?
```

</details>

### CI (engine.io) (`.github/workflows/ci-engine.io.yml`)

- Latest run on `main`: https://github.com/socketio/socket.io/actions/runs/42800663674 — dark (conclusion: `failure`), 2026-11-10 10:37 UTC
- Dark since: 2026-11-10 10:22 UTC (first run of the current streak)
- Job / step: `test` → `Run tests`
- Likely cause: npm error command sh -c npm run compile && npm run format:check && npm run test:default && npm run test:compat-v3

<details><summary>End of the job log</summary>

```
npm error Lifecycle script `test` failed with error:
npm error code 1
npm error path /home/runner/work/socket.io/socket.io/packages/engine.io
npm error workspace engine.io@6.6.11
npm error location /home/runner/work/socket.io/socket.io/packages/engine.io
npm error command failed
npm error command sh -c npm run compile && npm run format:check && npm run test:default && npm run test:compat-v3
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining socket.io!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
