<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9542 · **Generated:** 2026-11-05T18:40:12.982Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42073307545 — dark (conclusion: `cancelled`), 2026-11-05 17:18 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest, static-embeddings link)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
-- Extracting source C:/xberg-vcpkg-5363acb7/downloads/libjpeg-turbo-libjpeg-turbo-3.2.0.tar.gz
-- Applying patch add-options-for-docs-headers.patch
-- Applying patch workaround_cmake_system_processor.patch
-- Applying patch system-dependency-fixes-pr-901.patch
-- Using source at C:/xberg-vcpkg-5363acb7/buildtrees/libjpeg-turbo/src/3.2.0-6292819c57.clean
-- Configuring x64-windows-static-md
-- Building x64-windows-static-md-dbg
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42073307818 — dark (conclusion: `cancelled`), 2026-11-05 17:18 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling similar v3.2.1
   Compiling minijinja v3.0.5
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling pyo3-async-runtimes v0.30.0
   Compiling xberg-py v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-py)
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42073308280 — dark (conclusion: `cancelled`), 2026-11-05 17:18 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=icu_locale_fallback CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/icu…
   Compiling geo-clipper v0.9.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=geo_clipper CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/geo-clipper…
[xberg-tesseract 1.4.0] [ 33%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/params_training_featdef.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [ 34%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/pdblock.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
##[error]The operation was canceled.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023309764 — dark (conclusion: `failure`), 2026-11-05 11:58 UTC
- Dark since: 2026-11-05 11:58 UTC (first run of the current streak)
- Job / step: `Bats on macos-26` → `Run the shell contract tests`
- Likely cause: ok 679 WASM test runner should propagate the actual wasm-pack test failure

<details><summary>End of the job log</summary>

```
ok 678 WASM test runner should reject a failing executed POSIX probe rather than only checking the binary exists
ok 679 WASM test runner should propagate the actual wasm-pack test failure
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]Process completed with exit code 1.
```

</details>

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023309756 — dark (conclusion: `failure`), 2026-11-05 11:58 UTC
- Dark since: 2026-11-05 11:58 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding` → `Verify selected C ABI, decoder and actual Rust floor wrapper`
- Likely cause: [rust:check:libheif-runtime] ERROR task failed

<details><summary>End of the job log</summary>

```
    result = func(*args)
             ^^^^^^^^^^^
  File "/usr/lib/python3.12/urllib/request.py", line 639, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 504: Gateway Time-out
Finished in 11.40s
[rust:check:libheif-runtime] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
