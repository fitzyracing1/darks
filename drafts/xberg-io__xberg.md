<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9607 · **Generated:** 2026-11-22T00:55:06.197Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44934556192 — dark (conclusion: `failure`), 2026-11-21 18:15 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: error: could not compile 'xberg' (lib test) due to 4 previous errors

<details><summary>End of the job log</summary>

```
      error: could not compile `xberg` (lib) due to 5 previous errors
      warning: build failed, waiting for other jobs to finish...
      error: could not compile `xberg` (lib test) due to 4 previous errors
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  ✓ pyrefly
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44934555999 — dark (conclusion: `failure`), 2026-11-21 18:15 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: function 'count_horizontal_rules_in' is never used (crates/xberg/src/pdf/rules.rs:55)

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.100.0-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=similar CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/similar-3.2.1 …
     Running `CARGO=/home/runner/.rustup/toolchains/1.100.0-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/x…
     Running `CARGO=/home/runner/.rustup/toolchains/1.100.0-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=analysis,api,api-types,archives,auto-rotate,auto-rotate-types,captioning,chunking,chunking-tokenizers,clas…
[xberg-ffi 1.4.2] cargo:rerun-if-changed=src
[xberg-ffi 1.4.2] cargo:rerun-if-changed=cbindgen.toml
[xberg-ffi 1.4.2] cargo:rerun-if-env-changed=ALEF_EXPORT_GENERATED_HEADERS
error: function `count_horizontal_rules_in` is never used
##[error]  --> crates/xberg/src/pdf/rules.rs:55:15
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44934555990 — dark (conclusion: `failure`), 2026-11-21 18:15 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04)` → `Run clippy`
- Likely cause: match expression looks like 'matches!' macro (crates/xberg/src/pdf/rules.rs:118)

<details><summary>End of the job log</summary>

```
    Checking serde-wasm-bindgen v0.6.5
   Compiling swift-bridge-macro v0.1.59
   Compiling wasm-bindgen-test-macro v0.3.80
    Checking wasm-bindgen-test-shared v0.2.130
    Checking swift-bridge v0.1.59
    Checking wasm-bindgen-test v0.3.80
error: function `count_horizontal_rules_in` is never used
##[error]  --> crates/xberg/src/pdf/rules.rs:55:15
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44919815523 — dark (conclusion: `failure`), 2026-11-21 15:33 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (core)` → `Build Docker image`
- Likely cause: buildx failed with: failed to build: failed to solve: Post "https://results-receiver.actions.githubusercontent.com/twirp/github.actions.results.api.v1.CacheService/GetCacheEntryDownloadURL": dial tcp 140.82.114.21:443: i/o timeout

<details><summary>End of the job log</summary>

```
#62 ERROR: Post "https://results-receiver.actions.githubusercontent.com/twirp/github.actions.results.api.v1.CacheService/GetCacheEntryDownloadURL": dial tcp 140.82.114.21:443: i/o timeout
------
 > exporting to GitHub Actions Cache:
------
ERROR: failed to build: failed to solve: Post "https://results-receiver.actions.githubusercontent.com/twirp/github.actions.results.api.v1.CacheService/GetCacheEntryDownloadURL": dial tcp 140.82.114.21:443: i/o timeout
builder-5f5725a3-1080-4b41-b0c9-a5422fdd0513/builder-5f5725a3-1080-4b41-b0c9-a5422fdd05130/qa22x25ajl9pbrk5mxaf2pwfg
Build summary supported!
##[error]buildx failed with: failed to build: failed to solve: Post "https://results-receiver.actions.githubusercontent.com/twirp/github.actions.results.api.v1.CacheService/GetCacheEntryDownloadURL": dial tcp 140.82.114…
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44934555985 — dark (conclusion: `failure`), 2026-11-21 18:15 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: function 'count_horizontal_rules_in' is never used (crates/xberg/src/pdf/rules.rs:55)

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling minijinja v3.1.0
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling pyo3-async-runtimes v0.30.0
error: function `count_horizontal_rules_in` is never used
##[error]  --> crates/xberg/src/pdf/rules.rs:55:15
```

</details>

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44927434282 — dark (conclusion: `failure`), 2026-11-21 16:58 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Decision log` → `Lint, format-check and lock-check the log`
- Likely cause: would add adrs/0016-link-the-windows-libheif-decoders-dynamically-to-meet-lgpl-3-0.md

<details><summary>End of the job log</summary>

```
}
Adding /home/runner/.local/share/mise/installs/github-goldziher-adrlint/0.5.2 to PATH
##[end-action id=__xberg-io_actions.__jdx_mise-action;outcome=success;conclusion=success;duration_ms=4944]
##[start-action display=Install the requested tools;id=__xberg-io_actions.__run_2]
##[end-action id=__xberg-io_actions.__run_2;outcome=skipped;conclusion=skipped;duration_ms=0]
adrlint: no problems found in 17 files checked
would add adrs/0016-link-the-windows-libheif-decoders-dynamically-to-meet-lgpl-3-0.md
##[error]Process completed with exit code 1.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44934556017 — dark (conclusion: `failure`), 2026-11-21 18:15 UTC
- Dark since: 2026-11-21 15:33 UTC (first run of the current streak)
- Job / step: `Focused pdf-ocr` → `Run exact regression tests`
- Likely cause: function 'count_horizontal_rules_in' is never used (crates/xberg/src/pdf/rules.rs:55)

<details><summary>End of the job log</summary>

```
   Compiling tokio-test v0.4.6
   Compiling tar v0.4.46
   Compiling qrcode v0.14.1
   Compiling dotenvy v0.15.7
   Compiling jpeg-encoder v0.7.1
   Compiling xberg-child-test v0.0.0 (/home/runner/work/xberg/xberg/crates/xberg/tests/support/child-process)
error: function `count_horizontal_rules_in` is never used
##[error]  --> crates/xberg/src/pdf/rules.rs:55:15
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
