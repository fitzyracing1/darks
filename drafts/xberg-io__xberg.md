<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9516 · **Generated:** 2026-11-03T06:44:54.436Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41569251703 — dark (conclusion: `failure`), 2026-11-03 02:57 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: unnecessary use of 'clone' to create a slice from a reference (crates/xberg/src/rendering/markdown/parenthesis_roundtrip_tests.rs:150)

<details><summary>End of the job log</summary>

```
    Checking criterion v0.8.2
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
    Checking dotenvy v0.15.7
error: unnecessary use of `clone` to create a slice from a reference
##[error]   --> crates\xberg\src\rendering\markdown\parenthesis_roundtrip_tests.rs:150:5
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41569251907 — dark (conclusion: `failure`), 2026-11-03 02:57 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Python (py3.11.18)` → `Test integrations against local Xberg wheel`
- Likely cause: [integrations:ci:test:python-all] ERROR task failed

<details><summary>End of the job log</summary>

```
E       xberg.IoError: IO error: No such file or directory (os error 2)
.venv/lib/python3.11/site-packages/xberg/api.py:3813: IoError
=========================== short test summary info ============================
FAILED tests/test_tools.py::test_extract_tool_file_not_found - xberg.IoError: IO error: No such file or directory (os error 2)
FAILED tests/test_tools.py::test_metadata_tool_file_not_found - xberg.IoError: IO error: No such file or directory (os error 2)
2 failed, 33 passed in 4.11s
[integrations:ci:test:python-all] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41567180815 — dark (conclusion: `cancelled`), 2026-11-03 02:36 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling org v0.3.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=org CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/org-0.3.1 CARGO_MAN…
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=analysis,api,api-types,archives,auto-rotate,auto-rotate-types,captioning,chunking,chunking-tokenizers,class…
[xberg-ffi 1.4.0] cargo:rerun-if-changed=src
[xberg-ffi 1.4.0] cargo:rerun-if-changed=cbindgen.toml
[xberg-ffi 1.4.0] cargo:rerun-if-env-changed=ALEF_EXPORT_GENERATED_HEADERS
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/xb…
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41569252302 — dark (conclusion: `failure`), 2026-11-03 02:57 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
Generated files drifted from a fresh render detected (this run's backends would emit different content than the owned bytes on disk -- rerun the owning stage, e.g. `alef generate`/`alef all`/`alef docs`, to refresh it):
  /home/runner/work/xberg/xberg/packages/elixir/README.md
  /home/runner/work/xberg/xberg/packages/php/README.md
  /home/runner/work/xberg/xberg/packages/ruby/README.md
  /home/runner/work/xberg/xberg/packages/swift/README.md
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
