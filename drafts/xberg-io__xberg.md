<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9550 · **Generated:** 2026-11-06T12:41:11.038Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42192812188 — dark (conclusion: `cancelled`), 2026-11-06 09:08 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `sccache rustc --crate-name dotenvy --edition=2018 /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/dotenvy-0.15.7/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,…
   Compiling jpeg-encoder v0.7.1
     Running `sccache rustc --crate-name jpeg_encoder --edition=2024 /Users/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/jpeg-encoder-0.7.1/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,a…
     Running `/Users/runner/work/xberg/xberg/target/debug/build/xberg-76bd95f53dcdb4be/build-script-build`
     Running `sccache rustc --crate-name xberg_libwpd --edition=2024 crates/xberg-libwpd/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type lib --emit=dep-info,metadata…
     Running `sccache rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type rlib --emit=dep-info,metadata,link -C opt-…
     Running `sccache rustc --crate-name xberg --edition=2024 crates/xberg/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --emit=dep-info,link -C opt-level=1 -C embed-bitcode=no…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42192812051 — dark (conclusion: `cancelled`), 2026-11-06 09:08 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build and stage Java binding`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling fs2 v0.4.3
   Compiling memmap2 v0.9.12
   Compiling similar v3.2.1
   Compiling minijinja v3.0.5
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42192812213 — dark (conclusion: `cancelled`), 2026-11-06 09:08 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `E2E (node)` → `Run e2e tests`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling org v0.3.1
   Compiling minijinja v3.0.5
   Compiling jotdown v0.10.0
   Compiling nohash-hasher v0.2.0
   Compiling similar v3.2.1
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
