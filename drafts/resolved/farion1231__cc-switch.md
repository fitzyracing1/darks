<!-- dark-draft: farion1231/cc-switch -->
<!-- draft-state: resolved -->
# Upstream issue draft: farion1231/cc-switch

- **Status:** resolved — lit again (2026-10-22); nothing to file
- **Would be filed at:** https://github.com/farion1231/cc-switch/issues/new
- **Stars:** 147237 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "WSL2 Nightly" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **WSL2 Nightly** workflow (`.github/workflows/wsl2-nightly.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/farion1231/cc-switch/actions/runs/39654367562 — dark (conclusion: `failure`), 2026-10-21 18:37 UTC
- Dark since: 2026-10-20 18:37 UTC (first run of the current streak)
- Job / step: `Backend Lib Suite (Windows + WSL2 home)` → `Run lib tests against WSL2-backed home`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
        PASS [   0.019s] (3765/3767) cc-switch usage_script::tests::test_custom_template_allows_http_lan_request_with_different_base_url
        PASS [   0.020s] (3766/3767) cc-switch usage_script::tests::test_https_bypass_prevention
        PASS [   0.018s] (3767/3767) cc-switch usage_script::tests::test_port_comparison
────────────
     Summary [ 469.658s] 3767 tests run: 3766 passed, 1 failed, 113 skipped
  TRY 3 FAIL [   6.706s] (3514/3767) cc-switch session_manager::providers::agy::tests::agy_binary_only_sessions_keep_index_metadata_without_fabricated_transcripts
error: test run failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cc-switch!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
