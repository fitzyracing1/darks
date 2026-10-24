<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9441 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Integrations", "CI E2E", "CI Rust")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40067520318 — dark (conclusion: `cancelled`), 2026-10-24 05:45 UTC
- Dark since: 2026-10-24 05:24 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling geo-clipper v0.9.0
   Compiling ghash v0.6.0
   Compiling realfft v3.5.0
   Compiling toml v0.8.23
   Compiling skrifa v0.49.0
   Compiling harfrust v0.15.0
   Compiling hayro-jpeg2000 v0.4.1
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40066139601 — dark (conclusion: `cancelled`), 2026-10-24 05:24 UTC
- Dark since: 2026-10-24 05:24 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling minijinja v3.0.3
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=minijinja CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/minijinja-3.0…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=analysis,api,api-types,archives,auto-rotate,auto-rotate-types,captioning,chunking,chunking-tokenizers,class…
[xberg-ffi 1.4.0] cargo:rerun-if-changed=src
[xberg-ffi 1.4.0] cargo:rerun-if-changed=cbindgen.toml
[xberg-ffi 1.4.0] cargo:rerun-if-env-changed=ALEF_EXPORT_GENERATED_HEADERS
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/xb…
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40066139611 — dark (conclusion: `cancelled`), 2026-10-24 05:24 UTC
- Dark since: 2026-10-24 05:24 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking num-rational v0.4.2
   Compiling phf_macros v0.14.0
    Checking colored v3.1.1
   Compiling onig_sys v69.9.3
   Compiling filetime v0.2.29
    Checking const-str v1.1.0
    Checking typed-path v0.12.4
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
