<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9584 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43586140608 — dark (conclusion: `cancelled`), 2026-11-14 10:37 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust pdfium engine (real library)` → `Run pdfium engine test (real library required, not skip-on-absence)`
- Likely cause: use of partially moved value: 'base' (crates/xberg/src/pdf/native/hierarchy/script_evidence/tests.rs:41)

<details><summary>End of the job log</summary>

```
   Compiling dotenvy v0.15.7
   Compiling urlencoding v2.1.3
   Compiling pastey v0.2.3
   Compiling jpeg-encoder v0.7.1
   Compiling hex v0.4.3
   Compiling jotdown v0.10.0
error[E0382]: use of partially moved value: `base`
##[error]  --> crates/xberg/src/pdf/native/hierarchy/script_evidence/tests.rs:41:26
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43586140517 — dark (conclusion: `cancelled`), 2026-11-14 10:37 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=jotdown CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/jotdown-0.10.0…
   Compiling org v0.3.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=org CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/org-0.3.1 CARGO_MA…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=strsim CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/strsim-0.11.1 C…
OSA, Damerau-Levenshtein, Jaro, Jaro-Winkler, and Sørensen-Dice.
' CARGO_PKG_HOMEPAGE='https://github.com/rapidfuzz/strsim-rs' CARGO_PKG_LICENSE=MIT CARGO_PKG_LICENSE_FILE='' CARGO_PKG_NAME=strsim CARGO_PKG_README=README.md CARGO_PKG_REPOSITORY='https://github.com/rapidfuzz/strsim-rs…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/x…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43586140591 — dark (conclusion: `cancelled`), 2026-11-14 10:37 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling similar v3.2.1
   Compiling minijinja v3.1.0
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling pyo3-async-runtimes v0.30.0
   Compiling xberg-py v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-py)
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43588584805 — dark (conclusion: `failure`), 2026-11-14 11:08 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: error: could not compile 'xberg' (lib test) due to 1 previous error

<details><summary>End of the job log</summary>

```
      error: could not compile `xberg` (lib) due to 1 previous error
      warning: build failed, waiting for other jobs to finish...
      error: could not compile `xberg` (lib test) due to 1 previous error
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  ✓ pyrefly
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
