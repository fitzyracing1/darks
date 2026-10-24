<!-- dark-draft: farion1231/cc-switch -->
<!-- draft-state: ready -->
# Upstream issue draft: farion1231/cc-switch

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/farion1231/cc-switch/issues/new
- **Stars:** 148139 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "WSL2 Nightly" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **WSL2 Nightly** workflow (`.github/workflows/wsl2-nightly.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/farion1231/cc-switch/actions/runs/40004956196 — dark (conclusion: `failure`), 2026-10-23 18:38 UTC
- Dark since: 2026-10-22 18:36 UTC (first run of the current streak)
- Job / step: `Backend Lib Suite (Windows + WSL2 home)` → `Run lib tests against WSL2-backed home`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
        PASS [   0.018s] (3828/3830) cc-switch usage_script::tests::test_custom_template_allows_http_lan_request_with_different_base_url
        PASS [   0.018s] (3829/3830) cc-switch usage_script::tests::test_https_bypass_prevention
        PASS [   0.017s] (3830/3830) cc-switch usage_script::tests::test_port_comparison
────────────
     Summary [ 486.825s] 3830 tests run: 3829 passed, 1 failed, 115 skipped
  TRY 3 FAIL [   6.451s] (3574/3830) cc-switch session_manager::providers::agy::tests::agy_binary_only_sessions_keep_index_metadata_without_fabricated_transcripts
error: test run failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cc-switch!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
