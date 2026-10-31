<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9469 · **Generated:** 2026-10-31T00:51:41.679Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41144256914 — dark (conclusion: `cancelled`), 2026-10-30 23:24 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (email)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41144256830 — dark (conclusion: `cancelled`), 2026-10-30 23:24 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling minijinja v3.0.5
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling jotdown v0.10.0
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41144256919 — dark (conclusion: `cancelled`), 2026-10-30 23:24 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling xberg-gliner v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-gliner)
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling xet-data v1.8.0
   Compiling hf-xet v1.8.0
   Compiling hf-hub v1.0.0
   Compiling xberg-candle-ocr v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-candle-ocr)
   Compiling sceptre v0.8.2
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41144257304 — dark (conclusion: `cancelled`), 2026-10-30 23:24 UTC
- Dark since: 2026-10-30 05:08 UTC (first run of the current streak)
- Job / step: `Submodule gitlinks reachable`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
