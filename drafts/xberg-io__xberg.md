<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9526 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI Integrations", "CI Lint", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41739545244 — dark (conclusion: `cancelled`), 2026-11-03 23:29 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Post Setup Rust`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
##[end-action id=__4c00c5ac-331e-4258-ad14-eb8a1f7d1ff0.cache-tesseract-windows;outcome=success;conclusion=success;duration_ms=185]
##[start-action display=Set up mise;id=__5559a11b-4338-4ee1-aba6-eaec5110e56f.__xberg-io_actions]
##[start-action display=Install mise and tools;id=__5559a11b-4338-4ee1-aba6-eaec5110e56f.__xberg-io_actions.__jdx_mise-action]
##[end-action id=__5559a11b-4338-4ee1-aba6-eaec5110e56f.__xberg-io_actions.__jdx_mise-action;outcome=success;conclusion=success;duration_ms=287]
##[end-action id=__5559a11b-4338-4ee1-aba6-eaec5110e56f.__xberg-io_actions;outcome=success;conclusion=success;duration_ms=311]
##[start-action display=Cache Rust build artifacts;id=__5559a11b-4338-4ee1-aba6-eaec5110e56f.cache-rust]
[command]"C:\Program Files\Git\usr\bin\tar.exe" --posix -cf cache.tzst --exclude cache.tzst -P -C D:/a/xberg/xberg --files-from manifest.txt --force-local --use-compress-program "zstd -T0"
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41739545290 — dark (conclusion: `cancelled`), 2026-11-03 23:29 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41739545514 — dark (conclusion: `cancelled`), 2026-11-03 23:29 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `Generated e2e suites freshness`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41739545421 — dark (conclusion: `cancelled`), 2026-11-03 23:29 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
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

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41739545279 — dark (conclusion: `cancelled`), 2026-11-03 23:29 UTC
- Dark since: 2026-11-03 22:40 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios)`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41739545757 — dark (conclusion: `cancelled`), 2026-11-03 23:29 UTC
- Dark since: 2026-11-03 23:13 UTC (first run of the current streak)
- Job / step: `docs / Deploy`
- Likely cause: Canceling since a higher priority waiting request for ci-docs-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
