<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9437 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI E2E", "CI Rust", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39636193345 — dark (conclusion: `cancelled`), 2026-10-21 16:35 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `E2E (go)` → `Run e2e tests`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling extended v0.1.0
   Compiling unscanny v0.1.0
   Compiling data-encoding v2.11.1
   Compiling tokenizers v0.23.2
   Compiling symphonia-format-riff v0.6.1
   Compiling jsonwebtoken v11.1.0
   Compiling hf-hub v1.0.0
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39636193341 — dark (conclusion: `cancelled`), 2026-10-21 16:35 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `Rust (macos-latest)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name qrcode --edition=2021 /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/qrcode-0.14.1/src/lib.rs…
   Compiling dotenvy v0.15.7
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name dotenvy --edition=2018 /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/dotenvy-0.15.7/src/lib.…
     Running `/Users/runner/work/xberg/xberg/target/debug/build/xberg-3f861773c87e5506/build-script-build`
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name xberg_libwpd --edition=2024 crates/xberg-libwpd/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,ar…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39636193294 — dark (conclusion: `cancelled`), 2026-10-21 16:35 UTC
- Dark since: 2026-10-21 10:16 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build and stage Java binding`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling hf-xet v1.7.0
   Compiling clipper-sys v0.8.0
   Compiling brotli-decompressor v5.0.3
   Compiling icu_casemap_data v2.3.0
   Compiling icu_locale_fallback_data v2.3.0
   Compiling clap v4.6.7
   Compiling aws-smithy-http v0.64.2
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
