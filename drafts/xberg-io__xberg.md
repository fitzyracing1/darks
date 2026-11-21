<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9605 · **Generated:** 2026-11-21T06:41:51.202Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- CI Lint (`.github/workflows/ci-lint.yaml`): [issue #3343](https://github.com/xberg-io/xberg/issues/3343) "ci(lint): enforce cargo-deny on the shipped feature graphs and remove stale exceptions"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI E2E", "CI Rust", "CI Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44842112910 — dark (conclusion: `failure`), 2026-11-21 00:11 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `E2E (wasm)` → `Run e2e tests`
- Likely cause: cannot find function 'strip_fallback_furniture_in_page_points' in this scope (crates/xberg/src/extractors/pdf/ocr/pipeline.rs:4308)

<details><summary>End of the job log</summary>

```
warning: xberg-tesseract@1.4.2: Patch command failed, will apply programmatic fixups.
warning: xberg-tesseract@1.4.2: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.2: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.2: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.2: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: ignoring -C extra-filename flag due to -o flag
error[E0425]: cannot find function `strip_fallback_furniture_in_page_points` in this scope
##[error]    --> crates/xberg/src/extractors/pdf/ocr/pipeline.rs:4308:13
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44842112087 — dark (conclusion: `failure`), 2026-11-21 00:11 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04)` → `Clippy formula recognition cell`
- Likely cause: cannot find function 'strip_fallback_furniture_in_page_points' in this scope (crates/xberg/src/extractors/pdf/ocr/pipeline.rs:4308)

<details><summary>End of the job log</summary>

```
    Checking jsonschema v0.61.2
    Checking criterion v0.8.2
    Checking zip v9.7.0
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking qrcode v0.14.1
error[E0425]: cannot find function `strip_fallback_furniture_in_page_points` in this scope
##[error]    --> crates/xberg/src/extractors/pdf/ocr/pipeline.rs:4308:13
```

</details>

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

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
