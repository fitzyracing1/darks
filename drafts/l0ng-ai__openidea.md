<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9288 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Plugin index")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/44117076692 — dark (conclusion: `failure`), 2026-11-17 15:40 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Run cargo nextest run --workspace --no-fail-fast`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
        PASS [   2.342s] (4792/4792) openidea logging::tests::panic_record_names_thread_location_and_message
────────────
     Summary [ 381.066s] 4792 tests run: 4789 passed, 3 failed, 108 skipped
        FAIL [   0.014s] ( 707/4792) ide-dap js_cdp::tests::a_session_that_goes_away_switches_interception_off
        FAIL [   0.044s] (2833/4792) ide-lsp::mock_server a_project_update_attaches_maven_generated_sources_before_rechecking
        FAIL [   0.077s] (3512/4792) ide-sdk jdtls_workspaces::tests::a_started_server_marks_its_workspace_again
error: test run failed
##[error]Process completed with exit code 1.
```

</details>

### Plugin index (`.github/workflows/plugins-index.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/44104459005 — dark (conclusion: `cancelled`), 2026-11-17 14:33 UTC
- Dark since: 2026-11-17 14:33 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
