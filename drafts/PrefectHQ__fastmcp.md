<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28206 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Upgrade checks" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Upgrade checks** workflow (`.github/workflows/run-upgrade-checks.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/40257686015 — dark (conclusion: `failure`), 2026-10-26 02:09 UTC
- Dark since: 2026-10-26 02:09 UTC (first run of the current streak)
- Job / step: `Tests: Python 3.14 on windows-latest` → `Run unit tests`
- Likely cause: = 1 failed, 9795 passed, 65 skipped, 3 xfailed, 106 warnings in 189.61s (0:03:09) =

<details><summary>End of the job log</summary>

```
0.68s call     tests/server/test_mrtr_guards.py::TestMultiServerConfigEraMirroring::test_explicit_mode_overrides_mirroring
0.64s call     tests/server/providers/proxy/test_proxy_server.py::TestProxyForwardingAppliesToEveryBackendClient::test_multi_server_config_target_forwards
0.63s call     tests/utilities/json_schema_type/test_generated_classes.py::TestClassCache::test_classes_referencing_a_large_definition_are_charged_for_it[True]
=========================== short test summary info ===========================
FAILED tests/utilities/test_version_check.py::TestFetchLatestVersion::test_fetch_invalid_proxy_environment - AssertionError: assert '4.1.3' is None
 +  where '4.1.3' = _fetch_latest_version()
= 1 failed, 9795 passed, 65 skipped, 3 xfailed, 106 warnings in 189.61s (0:03:09) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
