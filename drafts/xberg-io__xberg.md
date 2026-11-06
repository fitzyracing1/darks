<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9546 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42137019429 — dark (conclusion: `cancelled`), 2026-11-06 00:28 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (wasm-target, wasm32)` → `cargo check -p xberg --no-default-features --features wasm-target --target wasm32-unknown-unknown`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking xberg-native-pdf v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-native-pdf)
    Checking xberg-gliner v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-gliner)
warning: xberg-tesseract@1.4.0: Patch command failed, will apply programmatic fixups.
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.4.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42137019423 — dark (conclusion: `cancelled`), 2026-11-06 00:28 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 57%] Building C object src/CMakeFiles/leptonica.dir/pdfio2.c.o
[ 57%] Building C object src/CMakeFiles/leptonica.dir/pdfio2stub.c.o
[ 58%] Building C object src/CMakeFiles/leptonica.dir/pix1.c.o
[ 59%] Building C object src/CMakeFiles/leptonica.dir/pix2.c.o
[ 59%] Building C object src/CMakeFiles/leptonica.dir/pix3.c.o
[ 60%] Building C object src/CMakeFiles/leptonica.dir/pix4.c.o
[ 60%] Building C object src/CMakeFiles/leptonica.dir/pix5.c.o
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42137019512 — dark (conclusion: `cancelled`), 2026-11-06 00:28 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42137020465 — dark (conclusion: `cancelled`), 2026-11-06 00:28 UTC
- Dark since: 2026-11-05 18:52 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Install system dependencies (libheif for cargo-clippy)`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 23%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/fontinfo.cpp.o
[ 23%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/image.cpp.o
[ 23%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/imagedata.cpp.o
[ 24%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/linlsq.cpp.o
[ 24%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/matrix.cpp.o
[ 25%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/mod128.cpp.o
[ 25%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/normalis.cpp.o
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
