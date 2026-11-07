<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9557 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Lint")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42286070696 — dark (conclusion: `failure`), 2026-11-06 20:10 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (wasm-target, wasm32)` → `cargo check -p xberg --no-default-features --features wasm-target --target wasm32-unknown-unknown`
- Likely cause: function 'render_pdf_ocr_page_with_dpi' is never used (crates/xberg/src/pdf/render.rs:1064)

<details><summary>End of the job log</summary>

```
   Compiling xberg-tesseract v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-tesseract)
warning: xberg-tesseract@1.4.0: Patch command failed, will apply programmatic fixups.
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
error: unused variable: `ocr_images_absent`
##[error]    --> crates/xberg/src/extractors/pdf/mod.rs:1356:9
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42286070649 — dark (conclusion: `cancelled`), 2026-11-06 20:10 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `E2E (python)` → `Run e2e tests`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Finished `release` profile [optimized] target(s) in 11m 06s
Using CPython 3.15.2 interpreter at: /home/runner/.local/share/mise/installs/python/3.15.2/bin/python3
Creating virtual environment at: .venv
Resolved 11 packages in 1ms
   Building xberg-e2e @ file:///home/runner/work/xberg/xberg/e2e/python
   Building xberg @ file:///home/runner/work/xberg/xberg/packages/python
      Built xberg-e2e @ file:///home/runner/work/xberg/xberg/e2e/python
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42305052245 — dark (conclusion: `failure`), 2026-11-06 22:29 UTC
- Dark since: 2026-11-06 20:10 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
      of which 324 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 347 above)
    14 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 9445 file(s) opened, 757 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
