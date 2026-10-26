<!-- dark-draft: farion1231/cc-switch -->
<!-- draft-state: ready -->
# Upstream issue draft: farion1231/cc-switch

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/farion1231/cc-switch/issues/new
- **Stars:** 148742 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("WSL2 Nightly", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### WSL2 Nightly (`.github/workflows/wsl2-nightly.yml`)

- Latest run on `main`: https://github.com/farion1231/cc-switch/actions/runs/40221883713 — dark (conclusion: `failure`), 2026-10-25 18:34 UTC
- Dark since: 2026-10-22 18:36 UTC (first run of the current streak)
- Job / step: `Backend Lib Suite (Windows + WSL2 home)` → `Run lib tests against WSL2-backed home`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
  TRY 3 FAIL [   6.601s] (3171/3881) cc-switch services::session_usage_agy::native_models::tests::skips_missing_references_and_malformed_metadata
  TRY 3 FAIL [   6.527s] (3172/3881) cc-switch services::session_usage_agy::native_models::tests::uses_step_references_including_zero_instead_of_generation_order
  TRY 3 FAIL [   6.563s] (3179/3881) cc-switch services::session_usage_agy::tests::native_models_backfill_unknown_rows_without_changing_tokens_or_deduplication
  TRY 3 FAIL [   6.384s] (3180/3881) cc-switch services::session_usage_agy::tests::native_models_do_not_replace_explicit_models_or_selection_events
  TRY 3 FAIL [   6.563s] (3181/3881) cc-switch services::session_usage_agy::tests::native_tiered_ids_share_the_model_selection_bucket_and_price
  TRY 3 FAIL [   6.566s] (3619/3881) cc-switch session_manager::providers::agy::tests::agy_binary_only_sessions_keep_index_metadata_without_fabricated_transcripts
error: test run failed
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/farion1231/cc-switch/actions/runs/40281720259 — dark (conclusion: `failure`), 2026-10-26 06:45 UTC
- Dark since: 2026-10-26 05:16 UTC (first run of the current streak)
- Job / step: `Backend Checks (windows-latest)` → `Clippy`
- Likely cause: error: could not compile 'cc-switch' (lib) due to 1 previous error

<details><summary>End of the job log</summary>

```
   |
19 | pub const OPENER_FILENAME: &str = ".open-url";
   |           ^^^^^^^^^^^^^^^
   |
   = note: `-D dead-code` implied by `-D warnings`
   = help: to override `-D warnings` add `#[expect(dead_code)]` or `#[allow(dead_code)]`
error: could not compile `cc-switch` (lib) due to 1 previous error
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cc-switch!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
