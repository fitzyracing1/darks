<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9437 · **Generated:** 2026-10-21T12:55:24.472Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI E2E", "CI Rust", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39586943966 — dark (conclusion: `cancelled`), 2026-10-21 10:45 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `E2E (wasm)` → `Pre-build mock-server for Go and wasm e2e`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling xberg-libheif v1.3.11 (/home/runner/work/xberg/xberg/crates/xberg-libheif)
   Compiling rusqlite v0.40.2
   Compiling axum v0.8.9
   Compiling mathemascii v0.4.0
   Compiling v_htmlescape v0.17.0
   Compiling crawlberg v1.11.1
   Compiling bitvec v1.1.1
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39586943884 — dark (conclusion: `cancelled`), 2026-10-21 10:45 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `/home/runner/work/xberg/xberg/target/debug/build/xberg-b25a3c0232af2989/build-script-build`
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name xberg_tesseract --edition=2024 crates/xberg-tesseract/src/lib.rs --error-format=json --json=diagnostic-rendere…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name source_archive_test --edition=2024 crates/xberg-tesseract/tests/source_archive_test.rs --error-format=json --j…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name integration_test --edition=2024 crates/xberg-tesseract/tests/integration_test.rs --error-format=json --json=di…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name native_abi_test --edition=2024 crates/xberg-tesseract/tests/native_abi_test.rs --error-format=json --json=diag…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name source_cache_test --edition=2024 crates/xberg-tesseract/tests/source_cache_test.rs --error-format=json --json=…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,fut…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39586943934 — dark (conclusion: `cancelled`), 2026-10-21 10:45 UTC
- Dark since: 2026-10-21 10:16 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.0
   Compiling minijinja v3.0.1
   Compiling nohash-hasher v0.2.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
