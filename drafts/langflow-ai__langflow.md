<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156775 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Deploy Storybook to GitHub Pages", "Cross-Bundle Test", "Store pytest durations", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Storybook to GitHub Pages (`.github/workflows/deploy-storybook.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/44160401480 — dark (conclusion: `failure`), 2026-11-17 19:36 UTC
- Dark since: 2026-09-16 01:11 UTC (first run of the current streak)
- Job / step: `Deploy Storybook` → `Deploy to GitHub Pages`
- Likely cause: Error: Failed to create deployment (status: 400) with build version 7296958064e7dde5a0a71b0afce2d4510c6d5ada. Request ID 24C2:36E96:109A579:344B896:6AFCAD4B Responded with: Missing environment. Ensure your workflow's deployment job has an e

<details><summary>End of the job log</summary>

```
Found 1 artifact(s)
Creating Pages deployment with payload:
{
	"artifact_id": 14363870300,
	"pages_build_version": "7296958064e7dde5a0a71b0afce2d4510c6d5ada",
	"oidc_token": "***"
}
##[error]Creating Pages deployment failed
```

</details>

### Cross-Bundle Test (`.github/workflows/cross-bundle-test.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/43815980710 — dark (conclusion: `failure`), 2026-11-16 06:19 UTC
- Dark since: 2026-10-26 06:25 UTC (first run of the current streak)
- Job / step: `src/bundles/google (py3.12)` → `Run the bundle's own tests`
- Likely cause: =========== 2 failed, 174 passed, 6 deselected, 2 warnings in 5.89s ============

<details><summary>End of the job log</summary>

```
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
=========================== short test summary info ============================
FAILED src/bundles/google/tests/test_workspace_network_errors.py::test_network_failures_are_actionable_without_replaying_the_action[False-failure0-timeout-timed out] - assert TimeoutError('private-payload user@example.c…
 +  where TimeoutError('private-payload user@example.com https://example.com/private?token=[redacted] = IntegrationNetworkError("Langflow could not reach gmail.googleapis.com (request timed out). Check this server's outbo…
FAILED src/bundles/google/tests/test_workspace_network_errors.py::test_network_failures_are_actionable_without_replaying_the_action[True-failure0-timeout-timed out] - assert TimeoutError('private-payload user@example.co…
 +  where TimeoutError('private-payload user@example.com https://example.com/private?token=[redacted] = IntegrationNetworkError("Langflow could not reach gmail.googleapis.com (request timed out). Check this server's outbo…
=========== 2 failed, 174 passed, 6 deselected, 2 warnings in 5.89s ============
##[error]Process completed with exit code 1.
```

</details>

### Store pytest durations (`.github/workflows/store_pytest_durations.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/43819883349 — dark (conclusion: `failure`), 2026-11-16 06:53 UTC
- Dark since: 2026-11-16 06:53 UTC (first run of the current streak)
- Job / step: `measure (main) / Unit Tests - Python 3.15 - Group 1` → `Install the project`
- Likely cause: error: The requested interpreter resolved to Python 3.15.0, which is incompatible with the project's Python requirement: '>=3.10, <3.15'.

<details><summary>End of the job log</summary>

```
- lfx-paddle: >=3.10, <3.15
- lfx-serpingapi: >=3.10, <3.15
- lfx-serply: >=3.10, <3.15
- lfx-slack: >=3.10, <3.15
- lfx-toolguard: >=3.10, <3.15
- lfx-valkey: >=3.10, <3.15
- lfx-vllm: >=3.10, <3.15
##[error]Process completed with exit code 2.
```

</details>

### GP Download Translations (`.github/workflows/gp-download.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/44416930500 — dark (conclusion: `failure`), 2026-11-18 23:00 UTC
- Dark since: 2026-11-16 23:01 UTC (first run of the current streak)
- Job / step: `Download translations from Globalization Pipeline` → `Download translations from GP`
- Likely cause: FAILED languages: ['fr', 'ja', 'es', 'de', 'pt', 'zh-Hans']

<details><summary>End of the job log</summary>

```
Downloading 'de' translations...
  Error downloading 'de': 401 Client Error: Unauthorized for url: https://g11n-pipeline-api.straker.global/translate/rest/langflow-test/v2/bundles/langflow-ui/de
Downloading 'pt' translations...
  Error downloading 'pt': 401 Client Error: Unauthorized for url: https://g11n-pipeline-api.straker.global/translate/rest/langflow-test/v2/bundles/langflow-ui/pt
Downloading 'zh-Hans' translations...
  Error downloading 'zh-Hans': 401 Client Error: Unauthorized for url: https://g11n-pipeline-api.straker.global/translate/rest/langflow-test/v2/bundles/langflow-ui/zh-Hans
FAILED languages: ['fr', 'ja', 'es', 'de', 'pt', 'zh-Hans']
##[error]Process completed with exit code 1.
```

</details>

### Nightly Build (`.github/workflows/nightly_build.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/44207308638 — dark (conclusion: `failure`), 2026-11-18 00:22 UTC
- Dark since: 2026-11-18 00:22 UTC (first run of the current streak)
- Job / step: `Run Frontend Tests - Linux / Live provider smoke tests` → `Run live-provider smoke tests`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
Removing the temp database
tempDbPath /home/runner/work/langflow/langflow/src/frontend/temp
Temp database directory does not exist, skipping removal
  1 failed
    [chromium] › tests/live/admin-upgrade-repair.spec.ts:16:5 › distinguishes report imports and explains running-version history @release @database
  2 skipped
  3 passed (4.5m)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
