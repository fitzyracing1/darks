<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9562 · **Generated:** 2026-11-07T18:36:17.303Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42398179157 — dark (conclusion: `cancelled`), 2026-11-07 17:49 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run ./.github/actions/qualify-ocr-orientation`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running tests/ocr_explicit_sideways_2496.rs (target/debug/deps/ocr_explicit_sideways_2496-c3fd148be316053a)
running 15 tests
test cached_context_changed_during_extraction_is_not_written ... ok
test cached_engine_bytes_recover_when_osd_is_installed_without_changing_the_configuration ... ok
test cached_file_recovers_when_osd_is_installed_without_changing_the_configuration ... ok
test caller_psm1_word_elements_on_an_upside_down_page_carry_no_internal_marker ... ok
test explicit_language_block_recovers_the_counterclockwise_source_grid ... ok
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42398179156 — dark (conclusion: `cancelled`), 2026-11-07 17:49 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling minijinja v3.0.5
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=minijinja CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/minijinja-3.0…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=analysis,api,api-types,archives,auto-rotate,auto-rotate-types,captioning,chunking,chunking-tokenizers,class…
[xberg-ffi 1.4.0] cargo:rerun-if-changed=src
[xberg-ffi 1.4.0] cargo:rerun-if-changed=cbindgen.toml
[xberg-ffi 1.4.0] cargo:rerun-if-env-changed=ALEF_EXPORT_GENERATED_HEADERS
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/xb…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42398179220 — dark (conclusion: `cancelled`), 2026-11-07 17:49 UTC
- Dark since: 2026-11-07 11:34 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling similar v3.2.1
   Compiling minijinja v3.0.5
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
