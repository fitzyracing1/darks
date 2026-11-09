<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9566 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42601479796 — dark (conclusion: `cancelled`), 2026-11-09 10:31 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test retained_table_keeps_noisy_budget_clamped_page_quiet ... ok
test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.22s
     Running `/home/runner/work/xberg/xberg/target/debug/deps/pdf_ocr_caption_2530-7aa0ab9866483b19`
running 3 tests
test helpers::tests::test_get_test_documents_dir ... ok
test helpers::tests::test_test_documents_available ... ok
test preserves_the_full_docling_caption_as_prose_on_page_nine_and_in_structure has been running for over 60 seconds
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42601479784 — dark (conclusion: `cancelled`), 2026-11-09 10:31 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `E2E (node)` → `Run e2e tests`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling dbase v0.8.0
   Compiling moka v0.12.16
   Compiling crawlberg v1.12.4
   Compiling calamine v0.38.0
   Compiling serde_toon_format v0.2.0
   Compiling scrypt v0.12.0
   Compiling xberg-native-pdf v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-native-pdf)
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42601479827 — dark (conclusion: `cancelled`), 2026-11-09 10:31 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build and stage Java binding`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling thread_local v1.1.10
   Compiling typewit v1.15.2
   Compiling fax v0.2.7
   Compiling outref v0.5.2
   Compiling vsimd v0.8.0
   Compiling nu-ansi-term v0.50.3
   Compiling pxfm v0.1.30
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
