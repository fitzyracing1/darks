<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28226 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/run-tests.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/40585612294 — dark (conclusion: `failure`), 2026-10-27 21:18 UTC
- Dark since: 2026-10-27 21:18 UTC (first run of the current streak)
- Job / step: `Tests: Python 3.12 on ubuntu-latest` → `Run unit tests`
- Likely cause: = 1 failed, 10083 passed, 3 skipped, 3 xfailed, 100 warnings in 90.63s (0:01:30) =

<details><summary>End of the job log</summary>

```
0.51s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[500-legacy]
0.51s call     tests/server/http/test_session_idle_timeout.py::test_default_timeout_frees_session_capacity[False]
0.51s call     tests/server/http/test_session_idle_timeout.py::test_default_timeout_frees_session_capacity[True]
0.51s call     tests/client/transports/test_config_timeout.py::test_entry_timeout_limits_requests[sse-False-1]
=========================== short test summary info ============================
FAILED tests/client/test_sse.py::TestTimeout::test_timeout - anyio.BrokenResourceError
= 1 failed, 10083 passed, 3 skipped, 3 xfailed, 100 warnings in 90.63s (0:01:30) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
