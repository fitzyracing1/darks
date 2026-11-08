<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9564 · **Generated:** 2026-11-08T06:41:39.628Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42445073696 — dark (conclusion: `cancelled`), 2026-11-08 04:01 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Clippy full ORT surface (layout + OCR + ML)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking xet-client v1.8.0
   Compiling libheif-sys v5.3.1+1.23.1
   Compiling serde v1.0.229
    Checking rand_distr v0.6.0
   Compiling g2gen v1.2.2
    Checking imageproc v0.27.0
    Checking exr v1.74.2
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42445073666 — dark (conclusion: `cancelled`), 2026-11-08 04:01 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg 1.4.0] cargo::rerun-if-env-changed=XBERG_BUILD_ID
[xberg 1.4.0] cargo::rerun-if-changed=/home/runner/work/xberg/xberg/crates/xberg/src
[xberg 1.4.0] cargo::rerun-if-changed=/home/runner/work/xberg/xberg/crates/xberg/Cargo.toml
[xberg 1.4.0] cargo::rerun-if-changed=/home/runner/work/xberg/xberg/.git/HEAD
[xberg 1.4.0] cargo::rerun-if-changed=/home/runner/work/xberg/xberg/.git/index
[xberg 1.4.0] cargo::rustc-env=XBERG_BUILD_ID=d28b86ddd1e521471b6a01b2d183a5184d221c47
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/x…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42445073695 — dark (conclusion: `cancelled`), 2026-11-08 04:01 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling four-cc v0.4.0
   Compiling fallible-iterator v0.3.0
   Compiling opentelemetry-semantic-conventions v0.33.1
   Compiling xberg v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg)
   Compiling fax v0.3.0
   Compiling finl_unicode v1.5.0
   Compiling qcms v0.3.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
