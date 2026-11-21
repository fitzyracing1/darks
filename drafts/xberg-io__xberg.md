<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9606 · **Generated:** 2026-11-21T12:38:51.607Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44881586178 — dark (conclusion: `failure`), 2026-11-21 07:43 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate Publish workflow contracts`
- Likely cause: [release:test:contracts] ERROR task failed

<details><summary>End of the job log</summary>

```
    test()
    ~~~~^^
  File "/home/runner/work/xberg/xberg/scripts/ci/test_publish_workflow_contracts.py", line 1619, in test_standalone_sceptre_ort_ci_checks_its_independent_feature_closure
    assert len(legs) == 8, "retain all seven existing feature legs alongside Sceptre ORT"
           ^^^^^^^^^^^^^^
AssertionError: retain all seven existing feature legs alongside Sceptre ORT
[release:test:contracts] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44881585976 — dark (conclusion: `failure`), 2026-11-21 07:43 UTC
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
error[E0433]: cannot find `model_download` in the crate root
##[error]   --> crates/xberg/src/candidate_models/mod.rs:136:12
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44881585938 — dark (conclusion: `failure`), 2026-11-21 07:43 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run clippy`
- Likely cause: this pattern creates a reference to a reference (crates/xberg/src/core/image_encode/tests.rs:317)

<details><summary>End of the job log</summary>

```
    Checking wasm-bindgen-test-shared v0.2.130
    Checking swift-bridge v0.1.59
    Checking wasm-bindgen-test v0.3.80
    Checking xberg-php v1.4.2 (/home/runner/work/xberg/xberg/crates/xberg-php)
    Checking xberg-py v1.4.2 (/home/runner/work/xberg/xberg/crates/xberg-py)
    Checking xberg-jni v1.4.2 (/home/runner/work/xberg/xberg/crates/xberg-jni)
error: this pattern creates a reference to a reference
##[error]   --> crates/xberg/src/core/image_encode/tests.rs:317:66
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44877829596 — dark (conclusion: `failure`), 2026-11-21 06:55 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (core)` → `Run API contract tests with schemathesis`
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

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44878109223 — dark (conclusion: `failure`), 2026-11-21 06:59 UTC
- Dark since: 2026-11-21 06:55 UTC (first run of the current streak)
- Job / step: `Bats on macos-26` → `Run the shell contract tests`
- Likely cause: ok 783 WASM test runner should propagate the actual wasm-pack test failure

<details><summary>End of the job log</summary>

```
ok 782 WASM test runner should reject a failing executed POSIX probe rather than only checking the binary exists
ok 783 WASM test runner should propagate the actual wasm-pack test failure
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]Process completed with exit code 1.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44877844097 — dark (conclusion: `cancelled`), 2026-11-21 06:55 UTC
- Dark since: 2026-11-21 06:55 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
