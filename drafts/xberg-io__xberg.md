<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9580 · **Generated:** 2026-11-13T00:54:20.399Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43332942796 — dark (conclusion: `cancelled`), 2026-11-12 23:56 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name qrcode --edition=2021 /home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/qrcode-0.14.1/src/lib…
       Fresh dotenvy v0.15.7
       Fresh jpeg-encoder v0.7.1
     Running `/home/runner/work/xberg/xberg/target/debug/build/xberg-a054ddfffdc12d1a/build-script-build`
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name xberg_tesseract --edition=2024 crates/xberg-tesseract/src/lib.rs --error-format=json --json=diagnostic-render…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,fu…
     Running `sccache /home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,fu…
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43332942795 — dark (conclusion: `cancelled`), 2026-11-12 23:56 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=nom_exif CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/nom-exif-3.8.0…
   Compiling utoipa v6.0.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=utoipa CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/utoipa-6.0.0 CAR…
   Compiling xberg-paddle-ocr v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-paddle-ocr)
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg_paddle_ocr CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg-paddle-ocr CARGO_MANIFEST_PAT…
   Compiling xberg-ffi v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-ffi)
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=build_script_build CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg-ffi CARGO_MANIFEST_PATH=/ho…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43332942844 — dark (conclusion: `cancelled`), 2026-11-12 23:56 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling minijinja v3.1.0
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling pyo3-async-runtimes v0.30.0
   Compiling xberg-py v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-py)
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43332943289 — dark (conclusion: `cancelled`), 2026-11-12 23:56 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Run docs snippets gate`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
url_gzip_encoded_document.md                                 rust/rust    PASS       compile 356042ms
url_html_page_extract.md                                     rust/rust    PASS       compile 356042ms
url_recursive_document_urls.md                               rust/rust    PASS       compile 356042ms
url_remote_text_document.md                                  rust/rust    PASS       compile 356042ms
----------------------------------------------------------------------------------------------------
Checked at requested level: 856/1219 (70.2%) -- capability-capped 363, declared-capped 0, unavailable 0, downgraded 0, failed 0, skipped 0, errors 0 did not fully verify
Total: 1219  Passed: 1219  Downgraded: 0  Failed: 0  Skipped: 0  Errors: 0  Unavailable: 0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
