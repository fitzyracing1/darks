<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9511 · **Generated:** 2026-11-02T06:51:01.101Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Rust", "CI E2E", "CI Scripts", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41398260113 — dark (conclusion: `cancelled`), 2026-11-02 06:10 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 68%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_dec.cc.o
[ 69%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_enc.cc.o
[ 70%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/mask_image.cc.o
[ 71%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/image_item.cc.o
[ 72%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/grid.cc.o
[ 73%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/overlay.cc.o
[ 74%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/iden.cc.o
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41398260012 — dark (conclusion: `cancelled`), 2026-11-02 06:10 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
   Compiling chardetng v1.0.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=chardetng CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/chardetng-1.0…
   Compiling codepage v0.1.3
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=codepage CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/codepage-0.1.3…
   Compiling sse-stream v0.2.6
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=sse_stream CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/sse-stream-0…
##[error]The operation was canceled.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41393757790 — dark (conclusion: `cancelled`), 2026-11-02 05:23 UTC
- Dark since: 2026-11-02 02:20 UTC (first run of the current streak)
- Job / step: `Bats on ubuntu-latest` → `Run the shell contract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-scripts-refs/heads/main exists

<details><summary>End of the job log</summary>

```
ok 668 WASM test runner should reject a failing executed POSIX probe rather than only checking the binary exists
ok 669 WASM test runner should propagate the actual wasm-pack test failure
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41398260103 — dark (conclusion: `cancelled`), 2026-11-02 06:10 UTC
- Dark since: 2026-11-02 04:17 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling jsonschema v0.60.2
   Compiling rqrr-zeroize v0.10.1
   Compiling model2vec-rs v0.4.0
   Compiling liter-llm v2.4.4
   Compiling aes-gcm v0.11.1
   Compiling symphonia v0.6.1
   Compiling unhwp v0.23.1
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41398750240 — dark (conclusion: `cancelled`), 2026-11-02 06:15 UTC
- Dark since: 2026-11-02 04:52 UTC (first run of the current streak)
- Job / step: `Hand-declared FFI surfaces match the emitted header`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41398260178 — dark (conclusion: `cancelled`), 2026-11-02 06:10 UTC
- Dark since: 2026-11-02 06:10 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios)` → `cargo check xberg-dart`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking simplecss v0.2.2
    Checking parking_lot_core v0.10.0
   Compiling oslog v0.2.0
   Compiling dart-sys v4.1.5
    Checking astral-tl v0.8.0
    Checking object v0.40.0
    Checking roxmltree v0.21.2
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41398750241 — dark (conclusion: `cancelled`), 2026-11-02 06:15 UTC
- Dark since: 2026-11-02 06:10 UTC (first run of the current streak)
- Job / step: `docs / Build` → `Build site`
- Likely cause: Canceling since a higher priority waiting request for ci-docs-refs/heads/main exists

<details><summary>End of the job log</summary>

```
06:27:26   ├─ /404.html06:27:26 [WARN] [content] Entry docs → 404 was not found.
 (+24ms)
06:27:26   ├─ /cli/index.html (+3ms)
06:27:26   ├─ /concepts/index.html (+1ms)
06:27:26   ├─ /getting-started/index.html (+1ms)
06:27:26   ├─ /guides/index.html (+2ms)
06:27:26   ├─ /llms-full.txt (+40.83s)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
