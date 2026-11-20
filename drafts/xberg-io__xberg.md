<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9603 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Lint", "CI Integrations", "CI E2E", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44792810481 — dark (conclusion: `cancelled`), 2026-11-20 18:26 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Hand-declared FFI surfaces match the emitted header`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44792809991 — dark (conclusion: `cancelled`), 2026-11-20 18:26 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44792809977 — dark (conclusion: `cancelled`), 2026-11-20 18:26 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Setting up libtesseract-dev:arm64 (5.3.4-1build5) ...
Setting up tesseract-ocr (5.3.4-1build5) ...
Processing triggers for fontconfig (2.15.0-1.1ubuntu2) ...
Processing triggers for libc-bin (2.39-0ubuntu8.12) ...
Processing triggers for man-db (2.12.0-4build2) ...
Not building database; man-db/auto-update is not 'true'.
Processing triggers for install-info (7.1-3build2) ...
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44792810241 — dark (conclusion: `cancelled`), 2026-11-20 18:26 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44711470031 — dark (conclusion: `failure`), 2026-11-20 09:31 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Run API contract tests with schemathesis`
- Likely cause: Failed to establish a new connection: [Errno 111] Connection refused

<details><summary>End of the job log</summary>

```
━━━━━━━━━━━━━━━━━━━━
 ❌  Failed to load specification from http://localhost:8000/openapi.json after
 0.02s
 Schema Loading Error
 Connection failed
     Failed to establish a new connection: [Errno 111] Connection refused
Tip: Use `--wait-for-schema=NUM` to wait up to NUM seconds for schema availability.
##[error]Process completed with exit code 2.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44792810333 — dark (conclusion: `cancelled`), 2026-11-20 18:26 UTC
- Dark since: 2026-11-20 18:26 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44792809934 — dark (conclusion: `cancelled`), 2026-11-20 18:26 UTC
- Dark since: 2026-11-20 18:26 UTC (first run of the current streak)
- Job / step: `Focused pdf-table-paint` → `Run exact regression tests`
- Likely cause: Canceling since a higher priority waiting request for ci-focused-pr-refs/heads/main-regressions exists

<details><summary>End of the job log</summary>

```
   Compiling wiremock v0.6.5
   Compiling tokio-test v0.4.6
   Compiling tar v0.4.46
   Compiling ort v2.0.0-rc.15
   Compiling v_htmlescape v1.0.0
   Compiling infer v0.22.0
   Compiling lopdf v0.45.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
