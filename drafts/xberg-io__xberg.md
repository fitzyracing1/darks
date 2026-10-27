<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9451 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872678 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872252 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: The run was canceled by @Goldziher.

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872253 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard`
- Likely cause: The run was canceled by @Goldziher.

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872255 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-26 19:36 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: The run was canceled by @Goldziher.

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872268 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-26 19:57 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)`
- Likely cause: The run was canceled by @Goldziher.

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872697 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-26 19:57 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872239 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-27 00:03 UTC (first run of the current streak)
- Job / step: `Docker (cli)`
- Likely cause: The run was canceled by @Goldziher.

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872280 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-27 00:03 UTC (first run of the current streak)
- Job / step: `Shell formatting`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
