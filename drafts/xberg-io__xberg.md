<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9458 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Lint", "CI Rust", "CI Integrations", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40758649459 — dark (conclusion: `failure`), 2026-10-28 19:55 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate benchmark scripts`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/xberg/xberg/scripts/ci/benchmarks/validate-workflow-matrix.py", line 175, in parse_matrix
    raise ValueError(f"{job}: matrix dimension {key!r} has no values")
ValueError: bench-unstructured: matrix dimension 'cohort' has no values
----------------------------------------------------------------------
Ran 8 tests in 0.022s
FAILED (errors=2)
task: Failed to run task "benchmark:validate:scripts": exit status 1
##[error]exit status 1
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40758648887 — dark (conclusion: `failure`), 2026-10-28 19:55 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard` → `Chunking pipeline tests (release)`
- Likely cause: function 'extract_bytes' is never used (crates/xberg/src/core/extractor/bytes.rs:66)

<details><summary>End of the job log</summary>

```
   Compiling wiremock v0.6.5
   Compiling safetensors v0.8.0
   Compiling tar v0.4.46
   Compiling serial_test v4.0.1
   Compiling tokio-test v0.4.6
   Compiling qrcode v0.14.1
error: function `extract_bytes` is never used
##[error]  --> crates/xberg/src/core/extractor/bytes.rs:66:21
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40758648816 — dark (conclusion: `failure`), 2026-10-28 19:55 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `Node` → `Test integrations against local Node binding`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
      8|
 ❯ tests/reader.test.ts:3:1
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 1 passed (2)
      Tests  7 passed (7)
   Start at  21:49:05
   Duration  444ms (import 80%, transform 17%, tests 2%, worker 1%)
##[error]Error: Failed to resolve entry for package "@xberg-io/xberg". The package may have incorrect main/module/exports specified in its package.json.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40758648854 — dark (conclusion: `failure`), 2026-10-28 19:55 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `E2E (python)` → `Run e2e tests`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
[python] =========================== short test summary info ============================
[python] FAILED tests/test_stub_conformance.py::test_stub_declares_only_members_present_at_runtime - AssertionError: declared in the stub but absent at runtime: ['DoctorCheck.pass_', 'Registry.global_', 'TierStrategy.TI…
[python] assert not ['DoctorCheck.pass_', 'Registry.global_', 'TierStrategy.TIER1']
[python] ======================== 1 failed, 110 passed in 3.43s =========================
ERROR test failed: python — Command failed: cd e2e/python && uv run --no-sync python -m pytest tests/ -q (env: LD_LIBRARY_PATH, CRAWLBERG_ALLOW_PRIVATE_NETWORK, RUST_MIN_STACK)
ERROR Command failed: cd e2e/python && uv run --no-sync python -m pytest tests/ -q (env: LD_LIBRARY_PATH, CRAWLBERG_ALLOW_PRIVATE_NETWORK, RUST_MIN_STACK)
task: Failed to run task "python:e2e": exit status 1
##[error]exit status 1
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40758648952 — dark (conclusion: `failure`), 2026-10-28 19:55 UTC
- Dark since: 2026-10-28 18:22 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios)` → `cargo check xberg-dart`
- Likely cause: unresolved import 'libc::RTM_IFINFO2'

<details><summary>End of the job log</summary>

```
    Checking git-version v0.3.9
    Checking metrics v0.24.6
    Checking rustfft v6.4.1
    Checking inout v0.2.5
   Compiling darling_macro v0.24.1
    Checking sysinfo v0.39.6
error[E0432]: unresolved import `libc::RTM_IFINFO2`
##[error] --> /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/sysinfo-0.39.6/src/unix/apple/network.rs:4:77
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40758648856 — dark (conclusion: `failure`), 2026-10-28 19:55 UTC
- Dark since: 2026-10-28 19:55 UTC (first run of the current streak)
- Job / step: `Bats on macos-26` → `Run the shell contract tests`
- Likely cause: ok 226 sync should preserve the vendored helper when the source fetch fails

<details><summary>End of the job log</summary>

```
ok 233 Tesseract cache setup should isolate both cache directories by label and preserve existing files
ok 234 Tesseract cache setup should reject a missing label without creating directories
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /Users/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
