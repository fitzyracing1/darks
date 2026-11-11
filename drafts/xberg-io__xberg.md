<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9577 · **Generated:** 2026-11-11T18:38:34.380Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43055186760 — dark (conclusion: `cancelled`), 2026-11-11 16:07 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard` → `Setup Rust`
- Likely cause: run cancelled in job "Chunking scaling guard"

<details><summary>End of the job log</summary>

```
Err:5 mirror+file:/etc/apt/apt-mirrors.txt noble-updates/universe amd64 protobuf-compiler amd64 3.21.12-8.2ubuntu0.4
  Temporary failure resolving 'azure.archive.ubuntu.com'
E: Failed to fetch mirror+file:/etc/apt/apt-mirrors.txt/pool/main/p/protobuf/libprotobuf32t64_3.21.12-8.2ubuntu0.4_amd64.deb  Temporary failure resolving 'azure.archive.ubuntu.com'
E: Failed to fetch mirror+file:/etc/apt/apt-mirrors.txt/pool/main/p/protobuf/libprotoc32t64_3.21.12-8.2ubuntu0.4_amd64.deb  Temporary failure resolving 'azure.archive.ubuntu.com'
E: Failed to fetch mirror+file:/etc/apt/apt-mirrors.txt/pool/main/p/protobuf/libprotobuf-dev_3.21.12-8.2ubuntu0.4_amd64.deb  Temporary failure resolving 'azure.archive.ubuntu.com'
E: Failed to fetch mirror+file:/etc/apt/apt-mirrors.txt/pool/universe/p/protobuf/protobuf-compiler_3.21.12-8.2ubuntu0.4_amd64.deb  Temporary failure resolving 'azure.archive.ubuntu.com'
E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?
##[error]Process completed with exit code 100.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43071937925 — dark (conclusion: `cancelled`), 2026-11-11 17:50 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling minijinja v3.1.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=minijinja CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/minijinja-3.1…
   Compiling similar v3.2.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=similar CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/similar-3.2.1 C…
   Compiling org v0.3.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=org CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/org-0.3.1 CARGO_MAN…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/xb…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43055187030 — dark (conclusion: `cancelled`), 2026-11-11 16:07 UTC
- Dark since: 2026-11-11 04:03 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling alloc-no-stdlib v2.0.4
   Compiling strength_reduce v0.2.4
   Compiling napi-build v2.6.0
   Compiling transpose v0.2.3
   Compiling alloc-stdlib v0.2.4
   Compiling stringprep v0.1.5
   Compiling candle-core v0.11.1
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43071936189 — dark (conclusion: `cancelled`), 2026-11-11 17:50 UTC
- Dark since: 2026-11-11 11:24 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  ⋯ still running: cargo-clippy (315.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (375.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (435.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (495.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (555.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (615.0s elapsed, killed at 1800.0s)
  ⋯ still running: cargo-clippy (675.1s elapsed, killed at 1800.0s)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
