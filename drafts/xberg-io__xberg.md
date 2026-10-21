<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9437 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI E2E", "CI Rust")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39544548120 — dark (conclusion: `cancelled`), 2026-10-21 04:31 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=resvg CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/resvg-0.48.1 CARG…
[xberg-tesseract 1.3.11] [ 88%] Building CXX object CMakeFiles/libtesseract.dir/src/textord/tovars.cpp.o
[xberg-tesseract 1.3.11] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xb…
[xberg-tesseract 1.3.11] [ 88%] Building CXX object CMakeFiles/libtesseract.dir/src/textord/underlin.cpp.o
[xberg-tesseract 1.3.11] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xb…
   Compiling jsonschema v0.59.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=jsonschema CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/jsonschema-0…
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39544548114 — dark (conclusion: `cancelled`), 2026-10-21 04:31 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run no-ORT tract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling jotdown v0.10.0
   Compiling dotenvy v0.15.7
   Compiling hex v0.4.3
warning: xberg-tesseract@1.3.11: Library already available at expected location: /home/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-6d3e89577db03f3d/out/leptonica/lib/libleptonica.a
warning: xberg-tesseract@1.3.11: Library already available at expected location: /home/runner/work/xberg/xberg/target/debug/build/xberg-tesseract-6d3e89577db03f3d/out/tesseract/lib/libtesseract.a
warning: xberg-tesseract@1.3.11: Linking with tesseract (static linking): tesseract
warning: xberg-tesseract@1.3.11: Linking with leptonica (static linking): leptonica
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
