<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9468 · **Generated:** 2026-10-30T18:36:41.749Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41103610680 — dark (conclusion: `cancelled`), 2026-10-30 18:03 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41103610306 — dark (conclusion: `cancelled`), 2026-10-30 18:03 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling model2vec-rs v0.3.0
   Compiling liter-llm v2.4.2
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-e9dc4fa51a2fa58d/out/leptonica/lib/libleptonica.a
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-e9dc4fa51a2fa58d/out/tesseract/lib/libtesseract.a
warning: xberg-tesseract@1.4.0: Linking with tesseract (static linking): tesseract
warning: xberg-tesseract@1.4.0: Linking with leptonica (static linking): leptonica
   Compiling mail-parser v0.11.9
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41103610287 — dark (conclusion: `cancelled`), 2026-10-30 18:03 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling org v0.3.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=org CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/org-0.3.1 CARGO_MAN…
   Compiling minijinja v3.0.5
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=minijinja CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/minijinja-3.0…
   Compiling jotdown v0.10.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=jotdown CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/jotdown-0.10.0 …
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=xberg CARGO_MANIFEST_DIR=/home/runner/work/xberg/xberg/crates/xberg CARGO_MANIFEST_PATH=/home/runner/work/xb…
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41106106339 — dark (conclusion: `cancelled`), 2026-10-30 18:20 UTC
- Dark since: 2026-10-30 05:08 UTC (first run of the current streak)
- Job / step: `AI governance validation`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
