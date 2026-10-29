<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9460 · **Generated:** 2026-10-29T06:47:23.232Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Lint", "CI Rust", "CI Integrations", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40821941111 — dark (conclusion: `cancelled`), 2026-10-29 05:11 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate benchmark scripts`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/xberg/xberg/scripts/ci/benchmarks/validate-workflow-matrix.py", line 175, in parse_matrix
    raise ValueError(f"{job}: matrix dimension {key!r} has no values")
ValueError: bench-unstructured: matrix dimension 'cohort' has no values
----------------------------------------------------------------------
Ran 8 tests in 0.029s
FAILED (errors=2)
task: Failed to run task "benchmark:validate:scripts": exit status 1
##[error]exit status 1
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40821940764 — dark (conclusion: `cancelled`), 2026-10-29 05:11 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest, static-embeddings link)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Building libde265:x64-windows-static-md@1.1.3...
Downloading https://github.com/strukturag/libde265/archive/v1.1.3.tar.gz -> strukturag-libde265-v1.1.3.tar.gz
Successfully downloaded strukturag-libde265-v1.1.3.tar.gz
-- Extracting source C:/xberg-vcpkg-5363acb7/downloads/strukturag-libde265-v1.1.3.tar.gz
-- Applying patch fix-linkage.patch
-- Using source at C:/xberg-vcpkg-5363acb7/buildtrees/libde265/src/v1.1.3-12fadf1eaf.clean
-- Configuring x64-windows-static-md
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40821940756 — dark (conclusion: `cancelled`), 2026-10-29 05:11 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling aes v0.9.3
   Compiling libz-sys v1.1.30
   Compiling gemm-f64 v0.19.0
   Compiling gemm-c64 v0.19.0
   Compiling gemm-c32 v0.19.0
   Compiling cfg-expr v0.20.10
   Compiling aws-smithy-async v1.3.1
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40821940658 — dark (conclusion: `cancelled`), 2026-10-29 05:11 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-tesseract 1.4.0] [ 30%] Building C object src/CMakeFiles/leptonica.dir/edge.c.o
[xberg-tesseract 1.4.0] cd /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-547ad9c009f4808d/out/build/src && /usr/bin/cc -DHAVE_CONFIG_H -I/home/runner/work/xberg/xberg/target/release/build/xberg-tess…
[xberg-tesseract 1.4.0] [ 30%] Building C object src/CMakeFiles/leptonica.dir/encoding.c.o
[xberg-tesseract 1.4.0] cd /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-547ad9c009f4808d/out/build/src && /usr/bin/cc -DHAVE_CONFIG_H -I/home/runner/work/xberg/xberg/target/release/build/xberg-tess…
   Compiling strum_macros v0.27.2
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=strum_macros CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/strum_mac…
[xberg-tesseract 1.4.0] [ 31%] Building C object src/CMakeFiles/leptonica.dir/enhance.c.o
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40822762628 — dark (conclusion: `failure`), 2026-10-29 05:19 UTC
- Dark since: 2026-10-28 18:22 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios-sim)` → `cargo check xberg-dart`
- Likely cause: unresolved import 'libc::RTM_IFINFO2'

<details><summary>End of the job log</summary>

```
    Checking rustfft v6.4.1
    Checking inout v0.2.5
   Compiling darling_macro v0.24.1
    Checking whoami v2.1.3
    Checking rustls-webpki v0.103.16
    Checking sysinfo v0.39.6
error[E0432]: unresolved import `libc::RTM_IFINFO2`
##[error] --> /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/sysinfo-0.39.6/src/unix/apple/network.rs:4:77
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40822762489 — dark (conclusion: `failure`), 2026-10-29 05:19 UTC
- Dark since: 2026-10-28 19:55 UTC (first run of the current streak)
- Job / step: `Bats on ubuntu-latest` → `Run the shell contract tests`
- Likely cause: ok 379 sync should preserve the vendored helper when the source fetch fails

<details><summary>End of the job log</summary>

```
       in test file scripts/tests/bats/integration_node_binding_artifacts.bats, line 34)
BW01: `run`'s command `task build` exited with code 127, indicating 'Command not found'. Use run's return code checks, e.g. `run -127`, to fix this message.
      (from function `run' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 442,
       in test file scripts/tests/bats/integration_node_binding_artifacts.bats, line 50)
BW01: `run`'s command `task build` exited with code 127, indicating 'Command not found'. Use run's return code checks, e.g. `run -127`, to fix this message.
      (from function `run' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 442,
       in test file scripts/tests/bats/integration_node_binding_artifacts.bats, line 58)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
