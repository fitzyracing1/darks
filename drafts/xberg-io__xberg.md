<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9568 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42720793332 — dark (conclusion: `cancelled`), 2026-11-09 23:28 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `/home/runner/work/xberg/xberg/target/debug/build/xberg-4b8daa1e978b88a6/build-script-build`
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name xberg_tesseract --edition=2024 crates/xberg-tesseract/src/lib.rs --error-format=json --json=diagnostic-rendere…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,fut…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,fut…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name text_quality --edition=2024 crates/xberg/benches/text_quality.rs --error-format=json --json=diagnostic-rendere…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name batch_config_resolution --edition=2024 crates/xberg/benches/batch_config_resolution.rs --error-format=json --j…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name concurrency_scaling --edition=2024 crates/xberg/benches/concurrency_scaling.rs --error-format=json --json=diag…
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42720793764 — dark (conclusion: `cancelled`), 2026-11-09 23:28 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling jotdown v0.10.0
   Compiling minijinja v3.0.5
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling similar v3.2.1
   Compiling org v0.3.1
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42720793349 — dark (conclusion: `cancelled`), 2026-11-09 23:28 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
