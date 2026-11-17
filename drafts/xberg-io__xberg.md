<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9597 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "ADRs", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44103538921 — dark (conclusion: `cancelled`), 2026-11-17 14:28 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04)` → `Run clippy`
- Likely cause: very complex type used. Consider factoring parts into 'type' definitions (crates/xberg/src/pdf/structure/pipeline/linked_footnote_tests.rs:93)

<details><summary>End of the job log</summary>

```
   Compiling wasm-bindgen-test-macro v0.3.80
    Checking wasm-bindgen-test-shared v0.2.130
    Checking swift-bridge v0.1.59
    Checking wasm-bindgen-test v0.3.80
    Checking xberg-php v1.4.1 (/home/runner/work/xberg/xberg/crates/xberg-php)
    Checking xberg-py v1.4.1 (/home/runner/work/xberg/xberg/crates/xberg-py)
error: very complex type used. Consider factoring parts into `type` definitions
##[error] --> crates/xberg/src/pdf/structure/pipeline/linked_footnote_tests.rs:6:16
```

</details>

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44103538947 — dark (conclusion: `cancelled`), 2026-11-17 14:28 UTC
- Dark since: 2026-11-17 08:05 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling xberg-cli v1.4.1 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling jotdown v0.10.0
   Compiling similar v3.2.1
   Compiling org v0.3.1
   Compiling minijinja v3.1.0
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
