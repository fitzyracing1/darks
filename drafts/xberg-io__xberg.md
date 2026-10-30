<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9466 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41007216464 — dark (conclusion: `cancelled`), 2026-10-30 05:13 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `xberg-cli feature leg (pdf-ocr)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41007216640 — dark (conclusion: `cancelled`), 2026-10-30 05:13 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling similar v3.2.1
   Compiling minijinja v3.0.4
   Compiling pyo3-async-runtimes v0.30.0
   Compiling xberg-py v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-py)
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41007216412 — dark (conclusion: `cancelled`), 2026-10-30 05:13 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Uploaded bytes 461373440
Uploaded bytes 468376190
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact is 31518ba2173ec88b3914daad0a65cfc653b868c53aa7cfc4f5f834843b244a3c
Finalizing artifact upload
Artifact ffi-aarch64-unknown-linux-gnu successfully finalized. Artifact ID 12958078090
Artifact ffi-aarch64-unknown-linux-gnu has been successfully uploaded! Final size is 468376190 bytes. Artifact ID is 12958078090
Artifact download URL: https://github.com/xberg-io/xberg/actions/runs/41007216412/artifacts/12958078090
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41007216360 — dark (conclusion: `cancelled`), 2026-10-30 05:13 UTC
- Dark since: 2026-10-30 05:08 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)` → `cargo ndk check xberg-dart`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking org v0.3.1
    Checking minijinja v3.0.4
warning: xberg-dart@1.4.0: flutter_rust_bridge_codegen regeneration skipped by default -- using the committed generated bridge. Run `alef generate` to regenerate it (with alef's full post-processing). Set ALEF_FRB_REGEN…
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/aarch64-linux-android/debug/build/xberg-tesseract-fb4bd6111ac9edba/out/leptonica/lib/libleptonica.a
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/aarch64-linux-android/debug/build/xberg-tesseract-fb4bd6111ac9edba/out/tesseract/lib/libtesseract.a
warning: xberg-tesseract@1.4.0: Linking with tesseract (static linking): tesseract
warning: xberg-tesseract@1.4.0: Linking with leptonica (static linking): leptonica
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41012377786 — dark (conclusion: `cancelled`), 2026-10-30 06:08 UTC
- Dark since: 2026-10-30 05:08 UTC (first run of the current streak)
- Job / step: `Docs snippets gate`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41007216379 — dark (conclusion: `failure`), 2026-10-30 05:13 UTC
- Dark since: 2026-10-30 05:13 UTC (first run of the current streak)
- Job / step: `validate` → `Run xberg-io/actions/validate-ai-rulez@v1`
- Likely cause: risk (advisory, never fails the run): high (score 75/100)

<details><summary>End of the job log</summary>

```
  AR752 sbom-lock-out-of-sync        1
  AR981 lock-source-drift            2
risk (advisory, never fails the run): high (score 75/100)
  high       25  .ai-rulez/ai-rulez.lock
  high       25  .ai-rulez/skills/alef-generated-bindings
  high       25  .ai-rulez/skills/xberg-release
AI-Rulez validation failed: Command '('ai-rulez', '-C', '/home/runner/work/xberg/xberg/.ai-rulez', 'validate', '--strict', '--no-local')' returned non-zero exit status 2.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
