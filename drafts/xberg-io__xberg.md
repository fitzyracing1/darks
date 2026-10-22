<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9439 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- CI Lint (`.github/workflows/ci-lint.yaml`): [issue #2126](https://github.com/xberg-io/xberg/issues/2126) "release: publish 1.3.11 after upstream ZIP fixes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39821963596 — dark (conclusion: `cancelled`), 2026-10-22 17:21 UTC
- Dark since: 2026-10-21 04:31 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test test_docling_references_not_headings ... ok
test test_multipage_no_noise ... ok
test test_multipage_clean_output ... ok
test test_pdf_structure_reading_order ... ok
test test_681693_same_line_words_keep_spaces ... ok
test test_tj_positioned_runs_keep_interword_spaces ... ok
test test_nougat_014_layout_extraction_completes ... ok
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39821963671 — dark (conclusion: `cancelled`), 2026-10-22 17:21 UTC
- Dark since: 2026-10-22 01:05 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling lru v0.19.0
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling xberg-cli v1.3.11 (/home/runner/work/xberg/xberg/crates/xberg-cli)
   Compiling similar v3.2.0
   Compiling minijinja v3.0.2
   Compiling clap_complete v4.6.11
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39821963702 — dark (conclusion: `cancelled`), 2026-10-22 17:21 UTC
- Dark since: 2026-10-22 04:36 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build Node package`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling ident_case v1.0.1
   Compiling strsim v0.11.1
   Compiling icu_collections v2.4.0
   Compiling regex v1.13.1
   Compiling encoding_rs v0.8.42
   Compiling lazy_static v1.5.1
   Compiling http-body-util v0.1.5
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
