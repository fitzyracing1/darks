<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9437 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI Lint")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39678967777 — dark (conclusion: `cancelled`), 2026-10-21 21:27 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run no-ORT tract tests`
- Likely cause: cannot find value 'SOURCE_CODE_MIME_TYPE' in this scope (crates/xberg/src/core/mime.rs:1081)

<details><summary>End of the job log</summary>

```
   Compiling jotdown v0.10.0
   Compiling dotenvy v0.15.7
warning: xberg-tesseract@1.3.11: Library already available at expected location: /home/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-2ce077907f0d9cb7/out/leptonica/lib/libleptonica.a
warning: xberg-tesseract@1.3.11: Library already available at expected location: /home/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-2ce077907f0d9cb7/out/tesseract/lib/libtesseract.a
warning: xberg-tesseract@1.3.11: Linking with tesseract (static linking): tesseract
warning: xberg-tesseract@1.3.11: Linking with leptonica (static linking): leptonica
error[E0425]: cannot find value `SOURCE_CODE_MIME_TYPE` in this scope
##[error]    --> crates/xberg/src/core/mime.rs:1081:68
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39682381772 — dark (conclusion: `failure`), 2026-10-21 21:53 UTC
- Dark since: 2026-10-21 21:27 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
info: removing previous version of component rust-docs
info: removing previous version of component rustfmt
info: removing previous version of component clippy
info: downloading 8 components
info: rolling back changes
error: failed to install component: 'clippy-preview-x86_64-unknown-linux-gnu', detected conflict: 'bin/cargo-clippy'
task: Failed to run task "alef:verify": exit status 1
##[error]exit status 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
