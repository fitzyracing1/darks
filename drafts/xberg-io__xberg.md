<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9564 · **Generated:** 2026-11-08T00:55:40.555Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42421238077 — dark (conclusion: `failure`), 2026-11-07 22:34 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (wasm-target, wasm32)` → `cargo check -p xberg --no-default-features --features wasm-target --target wasm32-unknown-unknown`
- Likely cause: cannot find value 'tall_source_candidate' in this scope (crates/xberg/src/extractors/pdf/ocr/pipeline.rs:1726)

<details><summary>End of the job log</summary>

```
warning: xberg-tesseract@1.4.0: Patch command failed, will apply programmatic fixups.
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: ignoring -C extra-filename flag due to -o flag
error[E0433]: cannot find `tall_source` in `super`
##[error]    --> crates/xberg/src/extractors/pdf/ocr/pipeline.rs:1724:29
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42421238073 — dark (conclusion: `cancelled`), 2026-11-07 22:34 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `E2E (wasm)` → `Run e2e tests`
- Likely cause: cannot find value 'tall_source_candidate' in this scope (crates/xberg/src/extractors/pdf/ocr/pipeline.rs:1726)

<details><summary>End of the job log</summary>

```
warning: xberg-tesseract@1.4.0: Patch command failed, will apply programmatic fixups.
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: ignoring -C extra-filename flag due to -o flag
error[E0433]: cannot find `tall_source` in `super`
##[error]    --> crates/xberg/src/extractors/pdf/ocr/pipeline.rs:1724:29
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
