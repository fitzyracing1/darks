<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28405 · **Generated:** 2026-11-13T00:54:20.399Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Upgrade checks (`.github/workflows/run-upgrade-checks.yml`): [issue #6443](https://github.com/PrefectHQ/fastmcp/issues/6443) "Upgrade checks failing on main branch"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/run-tests.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/43338085284 — dark (conclusion: `failure`), 2026-11-13 00:34 UTC
- Dark since: 2026-11-11 23:34 UTC (first run of the current streak)
- Job / step: `Tests: Python 3.14 on windows-latest` → `Run unit tests`
- Likely cause: = 1 failed, 11321 passed, 70 skipped, 3 xfailed, 132 warnings in 213.90s (0:03:33) =

<details><summary>End of the job log</summary>

```
0.73s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[0-legacy]
0.72s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[None-legacy]
0.72s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[0-auto]
0.72s call     tests/client/group/test_client_group.py::test_from_config_applies_entry_timeout[None-auto]
=========================== short test summary info ===========================
FAILED tests/cli/test_client_commands.py::TestBuildClient::test_encrypted_oauth_reused_by_fresh_client[sse-oauth] - assert not [<WarningMessage {message : ResourceWarning("unclosed <socket.socket fd=1500, family=2, type…
= 1 failed, 11321 passed, 70 skipped, 3 xfailed, 132 warnings in 213.90s (0:03:33) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
