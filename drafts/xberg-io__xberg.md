<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9532 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Rust", "CI Integrations", "CI Lint", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41884625097 — dark (conclusion: `cancelled`), 2026-11-04 18:11 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (pdf)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41884625052 — dark (conclusion: `cancelled`), 2026-11-04 18:11 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling minijinja v3.0.5
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41884625835 — dark (conclusion: `cancelled`), 2026-11-04 18:11 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `Docs snippets gate`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41884625104 — dark (conclusion: `cancelled`), 2026-11-04 18:11 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41855988059 — dark (conclusion: `failure`), 2026-11-04 15:16 UTC
- Dark since: 2026-11-04 15:16 UTC (first run of the current streak)
- Job / step: `Bats on macos-26`
- Likely cause: The job was not acquired by Runner of type hosted even after multiple attempts

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41884625046 — dark (conclusion: `cancelled`), 2026-11-04 18:11 UTC
- Dark since: 2026-11-04 17:49 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)` → `cargo ndk check xberg-dart`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
warning: xberg-dart@1.4.0: flutter_rust_bridge_codegen regeneration skipped by default -- using the committed generated bridge. Run `alef generate` to regenerate it (with alef's full post-processing). Set ALEF_FRB_REGEN…
    Checking xet-core-structures v1.8.0
    Checking xet-client v1.8.0
    Checking xet-data v1.8.0
    Checking hf-xet v1.8.0
    Checking hf-hub v1.0.0
    Checking sceptre v0.10.1
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41884625636 — dark (conclusion: `cancelled`), 2026-11-04 18:11 UTC
- Dark since: 2026-11-04 18:11 UTC (first run of the current streak)
- Job / step: `docs / Deploy`
- Likely cause: Canceling since a higher priority waiting request for ci-docs-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
