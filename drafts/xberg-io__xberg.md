<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9581 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43214400228 — dark (conclusion: `cancelled`), 2026-11-12 12:03 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run no-ORT tract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling dirs v7.0.0
   Compiling codepage v0.1.3
   Compiling fs2 v0.4.3
   Compiling jotdown v0.10.0
   Compiling jpeg-encoder v0.7.1
   Compiling hex v0.4.3
   Compiling dotenvy v0.15.7
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43214400308 — dark (conclusion: `cancelled`), 2026-11-12 12:03 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    = note: `-D dead-code` implied by `-D warnings`
    = help: to override `-D warnings` add `#[expect(dead_code)]` or `#[allow(dead_code)]`
    = note: the `dead_code` lint ignores `-D warnings`
   Compiling symphonia-codec-pcm v0.6.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=symphonia_codec_pcm CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/sy…
[xberg-tesseract 1.4.0] [ 65%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/maxpool.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_CONFIG_H -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-d9d040932e7c72ed/out/third_party/tess…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43216021274 — dark (conclusion: `failure`), 2026-11-12 12:14 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: -- Configuring incomplete, errors occurred!

<details><summary>End of the job log</summary>

```
     "/usr/lib/x86_64-linux-gnu/cmake/AOM/AOMTargets.cmake"
  but not all the files it references.
Call Stack (most recent call first):
  /usr/lib/x86_64-linux-gnu/cmake/AOM/AOMConfig.cmake:43 (include)
  cmake/modules/FindAOM.cmake:1 (find_package)
  CMakeLists.txt:239 (find_package)
-- Configuring incomplete, errors occurred!
##[error]Process completed with exit code 1.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43214400885 — dark (conclusion: `cancelled`), 2026-11-12 12:03 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Install system dependencies (libheif for cargo-clippy)`
- Likely cause: run cancelled in job "validate / Validate (poly)"

<details><summary>End of the job log</summary>

```
     "/usr/lib/x86_64-linux-gnu/cmake/AOM/AOMTargets.cmake"
  but not all the files it references.
Call Stack (most recent call first):
  /usr/lib/x86_64-linux-gnu/cmake/AOM/AOMConfig.cmake:43 (include)
  cmake/modules/FindAOM.cmake:1 (find_package)
  CMakeLists.txt:239 (find_package)
-- Configuring incomplete, errors occurred!
##[error]Process completed with exit code 1.
```

</details>

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43205553310 — dark (conclusion: `failure`), 2026-11-12 11:01 UTC
- Dark since: 2026-11-12 11:01 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding` → `Provision selected runtime`
- Likely cause: -- Configuring incomplete, errors occurred!

<details><summary>End of the job log</summary>

```
     "/usr/lib/x86_64-linux-gnu/cmake/AOM/AOMTargets.cmake"
  but not all the files it references.
Call Stack (most recent call first):
  /usr/lib/x86_64-linux-gnu/cmake/AOM/AOMConfig.cmake:43 (include)
  cmake/modules/FindAOM.cmake:1 (find_package)
  CMakeLists.txt:239 (find_package)
-- Configuring incomplete, errors occurred!
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
