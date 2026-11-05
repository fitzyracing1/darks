<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9536 · **Generated:** 2026-11-05T00:53:42.006Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI Integrations", "CI Lint", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41936981093 — dark (conclusion: `cancelled`), 2026-11-04 23:51 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Successfully downloaded libjpeg-turbo-libjpeg-turbo-3.2.0.tar.gz
-- Extracting source C:/xberg-vcpkg-5363acb7/downloads/libjpeg-turbo-libjpeg-turbo-3.2.0.tar.gz
-- Applying patch add-options-for-docs-headers.patch
-- Applying patch workaround_cmake_system_processor.patch
-- Applying patch system-dependency-fixes-pr-901.patch
-- Using source at C:/xberg-vcpkg-5363acb7/buildtrees/libjpeg-turbo/src/3.2.0-6292819c57.clean
-- Configuring x64-windows-static-md
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41930260610 — dark (conclusion: `cancelled`), 2026-11-04 23:01 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling minijinja v3.0.5
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41936981464 — dark (conclusion: `cancelled`), 2026-11-04 23:51 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: run cancelled in job "Alef-generated bindings freshness"

<details><summary>End of the job log</summary>

```
      of which 324 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 347 above)
    14 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 9203 file(s) opened, 699 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41936981092 — dark (conclusion: `cancelled`), 2026-11-04 23:51 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling similar v3.2.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=similar CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/similar-3.2.1 …
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=analysis,api,api-types,archives,auto-rotate,auto-rotate-types,captioning,chunking,chunking-tokenizers,clas…
[xberg-ffi 1.4.0] cargo:rerun-if-changed=src
[xberg-ffi 1.4.0] cargo:rerun-if-changed=cbindgen.toml
[xberg-ffi 1.4.0] cargo:rerun-if-env-changed=ALEF_EXPORT_GENERATED_HEADERS
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-aarch64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/x…
##[error]The operation was canceled.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41855988059 — dark (conclusion: `failure`), 2026-11-04 15:16 UTC
- Dark since: 2026-11-04 15:16 UTC (first run of the current streak)
- Job / step: `Bats on macos-26`
- Likely cause: The job was not acquired by Runner of type hosted even after multiple attempts

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
