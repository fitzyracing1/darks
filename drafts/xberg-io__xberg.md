<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9531 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Integrations", "CI Lint", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41823772400 — dark (conclusion: `cancelled`), 2026-11-04 11:47 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Successfully downloaded tukaani-project-xz-v5.8.4.tar.gz
-- Extracting source C:/xberg-vcpkg-5363acb7/downloads/tukaani-project-xz-v5.8.4.tar.gz
-- Applying patch build-tools.patch
-- Using source at C:/xberg-vcpkg-5363acb7/buildtrees/liblzma/src/v5.8.4-19a8d00df7.clean
-- Configuring x64-windows-static-md
-- Building x64-windows-static-md-dbg
-- Building x64-windows-static-md-rel
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41823772462 — dark (conclusion: `cancelled`), 2026-11-04 11:47 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling similar v3.2.1
   Compiling minijinja v3.0.5
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41826717600 — dark (conclusion: `failure`), 2026-11-04 12:08 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: error: could not compile 'xberg-node' (lib) due to 32 previous errors

<details><summary>End of the job log</summary>

```
      error: could not compile `xberg-node` (lib test) due to 32 previous errors
      warning: build failed, waiting for other jobs to finish...
      error: could not compile `xberg-node` (lib) due to 32 previous errors
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  ✓ pyrefly
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41823772477 — dark (conclusion: `cancelled`), 2026-11-04 11:47 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg 1.4.0] cargo::rustc-env=XBERG_BUILD_ID=14e16467b2c6d2496b3d8a8320c5af3cdc6c77bc
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=rmcp CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/rmcp-3.8.0 CARGO_M…
   Compiling aes-gcm v0.11.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=aes_gcm CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/aes-gcm-0.11.1 …
Authenticated Encryption with Associated Data (AEAD) Cipher
with optional architecture-specific hardware acceleration
' CARGO_PKG_HOMEPAGE='' CARGO_PKG_LICENSE='Apache-2.0 OR MIT' CARGO_PKG_LICENSE_FILE='' CARGO_PKG_NAME=aes-gcm CARGO_PKG_README=README.md CARGO_PKG_REPOSITORY='https://github.com/RustCrypto/AEADs' CARGO_PKG_RUST_VERSION…
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
