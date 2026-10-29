<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9459 · **Generated:** 2026-10-29T12:46:05.949Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40845746586 — dark (conclusion: `cancelled`), 2026-10-29 08:56 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `sccache rustc --crate-name qrcode --edition=2021 /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/qrcode-0.14.1/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,fu…
   Compiling dotenvy v0.15.7
     Running `sccache rustc --crate-name dotenvy --edition=2018 /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/dotenvy-0.15.7/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,…
     Running `sccache rustc --crate-name xberg_libwpd --edition=2024 crates/xberg-libwpd/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type lib --emit=dep-info,metadata…
     Running `/Users/runner/work/xberg/xberg/target/debug/build/xberg-76bd95f53dcdb4be/build-script-build`
     Running `sccache rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type rlib --emit=dep-info,metadata,link -C opt-…
     Running `sccache rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --emit=dep-info,link -C opt-level=1 -C embed-bitcode=no…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40857670236 — dark (conclusion: `failure`), 2026-10-29 10:27 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: mise ERROR Run with --verbose or MISE_VERBOSE=1 for more information

<details><summary>End of the job log</summary>

```
  benchmark:generate-gt             Generate markdown ground truth from PDFs using Gemini
  benchmark:import:omnidocbench     Import OmniDocBench into benchmark fixtures (run download:omnidocbench first)
  benchmark:local                   Local head-to-head PDF benchmark: xberg vs liteparse (+docling if installed) with per-document gap report
  benchmark:local:smoke             Quick smoke of the local head-to-head (small fixture shard) to validate the pipeline end-to-end
  ... and 256 more tasks. Run `mise tasks ls --all` to list all tasks.
mise ERROR Version: 2026.10.22 linux-x64 (2026-10-28)
mise ERROR Run with --verbose or MISE_VERBOSE=1 for more information
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40857670054 — dark (conclusion: `cancelled`), 2026-10-29 10:27 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `E2E (elixir)` → `Run e2e tests`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Downloaded windows-sys v0.59.0
  Downloaded windows-sys v0.61.2
  Downloaded windows-sys v0.52.0
  Downloaded winapi-i686-pc-windows-gnu v0.4.0
  Downloaded winapi-x86_64-pc-windows-gnu v0.4.0
  Downloaded windows v0.62.2
Compiling crate xberg_nif in release mode (native/xberg_nif)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
