<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156860 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Deploy Storybook to GitHub Pages", "Store pytest durations", "GP Download Translations", +1 more)
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

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/45080870313 — dark (conclusion: `failure`), 2026-11-22 23:00 UTC
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

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/45088580511 — dark (conclusion: `failure`), 2026-11-23 00:24 UTC
- Dark since: 2026-11-18 00:22 UTC (first run of the current streak)
- Likely cause: cause not readable (GET /repos/langflow-ai/langflow/actions/runs/45088580511/jobs?filter=latest&per_)

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
