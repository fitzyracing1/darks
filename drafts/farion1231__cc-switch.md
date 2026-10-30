<!-- dark-draft: farion1231/cc-switch -->
<!-- draft-state: ready -->
# Upstream issue draft: farion1231/cc-switch

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/farion1231/cc-switch/issues/new
- **Stars:** 150168 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "WSL2 Nightly" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **WSL2 Nightly** workflow (`.github/workflows/wsl2-nightly.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/farion1231/cc-switch/actions/runs/40745689394 — dark (conclusion: `failure`), 2026-10-28 18:30 UTC
- Dark since: 2026-10-22 18:36 UTC (first run of the current streak)
- Job / step: `Backend Lib Suite (Windows + WSL2 home)` → `Run lib tests against WSL2-backed home`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
  TRY 3 FAIL [   6.551s] (3289/4008) cc-switch services::session_usage_agy::native_models::tests::skips_missing_references_and_malformed_metadata
  TRY 3 FAIL [   6.617s] (3290/4008) cc-switch services::session_usage_agy::native_models::tests::uses_step_references_including_zero_instead_of_generation_order
  TRY 3 FAIL [   6.531s] (3297/4008) cc-switch services::session_usage_agy::tests::native_models_backfill_unknown_rows_without_changing_tokens_or_deduplication
  TRY 3 FAIL [   6.673s] (3298/4008) cc-switch services::session_usage_agy::tests::native_models_do_not_replace_explicit_models_or_selection_events
  TRY 3 FAIL [   6.613s] (3299/4008) cc-switch services::session_usage_agy::tests::native_tiered_ids_share_the_model_selection_bucket_and_price
  TRY 3 FAIL [   6.393s] (3742/4008) cc-switch session_manager::providers::agy::tests::agy_binary_only_sessions_keep_index_metadata_without_fabricated_transcripts
error: test run failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cc-switch!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
