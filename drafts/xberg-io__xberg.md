<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9472 · **Generated:** 2026-10-31T12:37:42.482Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41187629962 — dark (conclusion: `cancelled`), 2026-10-31 09:10 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name pdf_picture_ocr_text --edition=2024 crates/xberg/tests/pdf_picture_ocr_text.rs --error-format=json --json=diagnos…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name ocr_table_right_aligned_amounts --edition=2024 crates/xberg/tests/ocr_table_right_aligned_amounts.rs --error-form…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name issue_122_citation_detail_dropped --edition=2024 crates/xberg/tests/issue_122_citation_detail_dropped.rs --error-…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name diagram_dot_pdf --edition=2024 crates/xberg/tests/diagram_dot_pdf.rs --error-format=json --json=diagnostic-render…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name footnote_reference_placement --edition=2024 crates/xberg/tests/footnote_reference_placement.rs --error-format=jso…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name issue_141_fictionbook_footnotes --edition=2024 crates/xberg/tests/issue_141_fictionbook_footnotes.rs --error-form…
     Running `sccache /Users/runner/.rustup/toolchains/1.99.1-aarch64-apple-darwin/bin/rustc --crate-name issue_270_config_validation_beyond_env --edition=2024 crates/xberg/tests/issue_270_config_validation_beyond_env.r…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41187629952 — dark (conclusion: `cancelled`), 2026-10-31 09:10 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Java (spring-ai)`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41187629958 — dark (conclusion: `cancelled`), 2026-10-31 09:10 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `E2E (swift)` → `Run e2e tests (swift, instrumented)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
warning: xberg-libwpd@1.4.0:   255 |         BOOST_PROTO_TRANSFORM_(PrimitiveTransform, X)
warning: xberg-libwpd@1.4.0:       |         ^~~~~~~~~~~~~~~~~~~~~~
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-e17425b3b3cc2064/out/leptonica/lib/libleptonica.a
warning: xberg-tesseract@1.4.0: Library already available at expected location: /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-e17425b3b3cc2064/out/tesseract/lib/libtesseract.a
warning: xberg-tesseract@1.4.0: Linking with tesseract (static linking): tesseract
warning: xberg-tesseract@1.4.0: Linking with leptonica (static linking): leptonica
   Compiling xberg v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg)
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41187630237 — dark (conclusion: `failure`), 2026-10-31 09:10 UTC
- Dark since: 2026-10-30 05:08 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Validate benchmark scripts`
- Likely cause: [benchmark:validate:scripts] ERROR task failed

<details><summary>End of the job log</summary>

```
----------------------------------------------------------------------
Ran 69 tests in 4.620s
OK
[benchmark:validate:scripts] $ scripts/ci/benchmarks/validate-workflow-build-config.sh
benchmark workflow validation failed: standalone harness validation must check out the dispatched benchmark revision
Finished in 5.09s
[benchmark:validate:scripts] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
