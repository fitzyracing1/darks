<!-- dark-draft: Significant-Gravitas/AutoGPT -->
<!-- draft-state: resolved -->
# Upstream issue draft: Significant-Gravitas/AutoGPT

- **Status:** resolved — lit again (2026-11-26); nothing to file
- **Would be filed at:** https://github.com/Significant-Gravitas/AutoGPT/issues/new
- **Stars:** 188203 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "AutoGPT Platform - Backend CI" workflow failing on master since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **AutoGPT Platform - Backend CI** workflow (`.github/workflows/platform-backend-ci.yml`) on `master` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/Significant-Gravitas/AutoGPT/actions/runs/45743564690 — dark (conclusion: `failure`), 2026-11-26 02:36 UTC
- Dark since: 2026-11-26 02:36 UTC (first run of the current streak)
- Job / step: `test (3.12, remainder)` → `Test shard`
- Likely cause: 9 failed, 19451 passed, 95 skipped, 12 xfailed, 331 warnings in 1453.45s (0:24:13)

<details><summary>End of the job log</summary>

```
FAILED backend/api/features/orgs/routes_test.py::TestWorkspaceRoutes::test_get_team_wrong_org_returns_403 - RuntimeError: There is no current event loop in thread 'MainThread'.
FAILED backend/api/features/orgs/routes_test.py::TestWorkspaceRoutes::test_delete_team_wrong_org_returns_403 - RuntimeError: There is no current event loop in thread 'MainThread'.
FAILED backend/blocks/claude_code_cost_test.py::test_a_platform_sandbox_run_is_charged_its_walltime[reports-a-cost] - assert ('response', 'done') in [('error', "Claude Code reaches Anthropic through this AutoGPT server,…
FAILED backend/blocks/claude_code_cost_test.py::test_a_platform_sandbox_run_is_charged_its_walltime[reports-zero] - assert ('response', 'done') in [('error', "Claude Code reaches Anthropic through this AutoGPT server, s…
FAILED backend/blocks/claude_code_cost_test.py::test_a_platform_sandbox_run_is_charged_its_walltime[reports-no-cost] - assert ('response', 'done') in [('error', "Claude Code reaches Anthropic through this AutoGPT server…
FAILED backend/blocks/claude_code_cost_test.py::test_a_platform_sandbox_run_is_charged_its_walltime[not-json] - assert ('response', 'done') in [('error', "Claude Code reaches Anthropic through this AutoGPT server, so th…
9 failed, 19451 passed, 95 skipped, 12 xfailed, 331 warnings in 1453.45s (0:24:13)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AutoGPT!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
