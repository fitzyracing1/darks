<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9516 · **Generated:** 2026-11-03T12:42:36.291Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41623898201 — dark (conclusion: `cancelled`), 2026-11-03 11:00 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run clippy`
- Likely cause: unnecessary use of 'clone' to create a slice from a reference (crates/xberg/src/rendering/markdown/parenthesis_roundtrip_tests.rs:150)

<details><summary>End of the job log</summary>

```
   Compiling wasm-bindgen-test-macro v0.3.80
    Checking wasm-bindgen-test-shared v0.2.130
    Checking swift-bridge v0.1.59
    Checking wasm-bindgen-test v0.3.80
    Checking xberg-py v1.4.0 (/Users/runner/work/xberg/xberg/crates/xberg-py)
    Checking xberg-php v1.4.0 (/Users/runner/work/xberg/xberg/crates/xberg-php)
error: unnecessary use of `clone` to create a slice from a reference
##[error]   --> crates/xberg/src/rendering/markdown/parenthesis_roundtrip_tests.rs:150:5
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41623898130 — dark (conclusion: `cancelled`), 2026-11-03 11:00 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling minijinja v3.0.5
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling pyo3-async-runtimes v0.30.0
   Compiling xberg-py v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-py)
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41623898198 — dark (conclusion: `cancelled`), 2026-11-03 11:00 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling similar v3.2.1
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling minijinja v3.0.5
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41629877330 — dark (conclusion: `failure`), 2026-11-03 11:43 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate Publish workflow contracts`
- Likely cause: [release:test:contracts] ERROR task failed

<details><summary>End of the job log</summary>

```
    test()
    ~~~~^^
  File "/home/runner/work/xberg/xberg/scripts/ci/test_publish_workflow_contracts.py", line 774, in test_swift_macos_builds_pin_the_deployment_target_to_the_manifest_floor
    assert pinned[1] == f"{floor}.0"
           ^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError
[release:test:contracts] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
