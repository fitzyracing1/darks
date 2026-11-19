<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9603 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Rust", "CI E2E", "CI Lint", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44569172298 — dark (conclusion: `cancelled`), 2026-11-19 16:42 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest, static-embeddings link)` → `Build xberg test harness (ocr + static-embeddings, real MSVC link)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling toml_datetime v1.1.3+spec-1.1.0
   Compiling serde_spanned v1.1.3
   Compiling parking_lot_core v0.10.0
   Compiling nom v8.0.0
   Compiling astral-html v0.0.4
   Compiling toml_writer v1.2.0+spec-1.1.0
   Compiling finl_unicode v1.5.1
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44569172204 — dark (conclusion: `cancelled`), 2026-11-19 16:42 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling tiny-skia v0.12.0
   Compiling tree-sitter-language v0.1.9
   Compiling fraction v0.17.0
   Compiling ecb v0.2.1
   Compiling pem v3.0.6
   Compiling tracing-futures v0.2.5
   Compiling fancy-regex v0.20.2
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44569184824 — dark (conclusion: `cancelled`), 2026-11-19 16:42 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Plugin bundle freshness`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44569172149 — dark (conclusion: `cancelled`), 2026-11-19 16:42 UTC
- Dark since: 2026-11-18 22:06 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling minijinja v3.1.0
   Compiling jotdown v0.10.0
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951723 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)` → `cargo ndk check xberg-dart`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
    Checking base64 v0.22.1
    Checking quick-error v2.0.1
    Checking tract-data v0.23.10
    Checking zune-jpeg v0.5.15
    Checking transpose v0.2.3
    Checking num-rational v0.4.2
    Checking sharded-slab v0.1.7
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459952392 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44569071669 — dark (conclusion: `cancelled`), 2026-11-19 16:42 UTC
- Dark since: 2026-11-19 16:42 UTC (first run of the current streak)
- Job / step: `Bats on macos-26`
- Likely cause: Canceling since a higher priority waiting request for ci-scripts-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
