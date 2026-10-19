<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28137 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/run-tests.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/39297153847 — dark (conclusion: `failure`), 2026-10-19 17:47 UTC
- Dark since: 2026-10-19 17:47 UTC (first run of the current streak)
- Job / step: `Tests: Python 3.10 on windows-latest` → `Run unit tests`
- Likely cause: = 1 failed, 9472 passed, 65 skipped, 3 xfailed, 67 warnings in 218.47s (0:03:38) =

<details><summary>End of the job log</summary>

```
1.32s call     tests/server/providers/proxy/test_header_options.py::test_proxy_header_forwarding_can_be_selected[http-None]
1.31s call     tests/server/providers/proxy/test_header_options.py::test_proxy_header_forwarding_can_be_selected[http-True]
1.31s call     tests/server/providers/proxy/test_header_options.py::test_proxy_header_forwarding_can_be_selected[single-False]
1.30s call     tests/server/providers/proxy/test_header_options.py::test_proxy_header_forwarding_can_be_selected[single-True]
=========================== short test summary info ===========================
FAILED tests/cli/deploy/test_credentials.py::test_windows_credential_state_allows_only_the_current_user - worker 'gw0' crashed while running 'tests/cli/deploy/test_credentials.py::test_windows_credential_state_allows_on…
= 1 failed, 9472 passed, 65 skipped, 3 xfailed, 67 warnings in 218.47s (0:03:38) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
