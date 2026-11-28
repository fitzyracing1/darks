<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156989 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Deploy Storybook to GitHub Pages", "GP Download Translations", "Nightly Build", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Storybook to GitHub Pages (`.github/workflows/deploy-storybook.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/45445024191 — dark (conclusion: `failure`), 2026-11-24 17:07 UTC
- Dark since: 2026-09-16 01:11 UTC (first run of the current streak)
- Job / step: `Deploy Storybook` → `Deploy to GitHub Pages`
- Likely cause: Error: Failed to create deployment (status: 400) with build version 6c9aea6f5d5f47a76a25e8e3e1b4779a4f83d522. Request ID 409B:49A4E:19EFC81:51EDA6E:6B05C4DC Responded with: Missing environment. Ensure your workflow's deployment job has an e

<details><summary>End of the job log</summary>

```
Found 1 artifact(s)
Creating Pages deployment with payload:
{
	"artifact_id": 14943824757,
	"pages_build_version": "6c9aea6f5d5f47a76a25e8e3e1b4779a4f83d522",
	"oidc_token": "***"
}
##[error]Creating Pages deployment failed
```

</details>

### GP Download Translations (`.github/workflows/gp-download.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/46080012552 — dark (conclusion: `failure`), 2026-11-27 23:00 UTC
- Dark since: 2026-11-16 23:01 UTC (first run of the current streak)
- Job / step: `Download translations from Globalization Pipeline` → `Download translations from GP`
- Likely cause: FAILED languages: ['fr', 'ja', 'es', 'de', 'pt', 'zh-Hans', 'tr']

<details><summary>End of the job log</summary>

```
Downloading 'pt' translations...
  Error downloading 'pt': 401 Client Error: Unauthorized for url: https://g11n-pipeline-api.straker.global/translate/rest/langflow-test/v2/bundles/langflow-ui/pt
Downloading 'zh-Hans' translations...
  Error downloading 'zh-Hans': 401 Client Error: Unauthorized for url: https://g11n-pipeline-api.straker.global/translate/rest/langflow-test/v2/bundles/langflow-ui/zh-Hans
Downloading 'tr' translations...
  Error downloading 'tr': 401 Client Error: Unauthorized for url: https://g11n-pipeline-api.straker.global/translate/rest/langflow-test/v2/bundles/langflow-ui/tr
FAILED languages: ['fr', 'ja', 'es', 'de', 'pt', 'zh-Hans', 'tr']
##[error]Process completed with exit code 1.
```

</details>

### Nightly Build (`.github/workflows/nightly_build.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/45728206452 — dark (conclusion: `failure`), 2026-11-26 00:21 UTC
- Dark since: 2026-11-18 00:22 UTC (first run of the current streak)
- Likely cause: cause not readable (GET /repos/langflow-ai/langflow/actions/runs/45728206452/jobs?filter=latest&per_)

### Mend (`.github/workflows/mend.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/46038755846 — dark (conclusion: `failure`), 2026-11-27 17:03 UTC
- Dark since: 2026-11-27 17:03 UTC (first run of the current streak)
- Job / step: `mend-scan` → `Export Python deps for Mend`
- Likely cause: your requirements are unsatisfiable.

<details><summary>End of the job log</summary>

```
Trying to restore cache from GitHub Actions cache with key: setup-uv-2-x86_64-unknown-linux-gnu-ubuntu-26.04-3.12.16-be95da31be1baf32d25a8995254a454b8e8f20dfb3c8162ec547963fb44abd7a
No GitHub Actions cache found for key: setup-uv-2-x86_64-unknown-linux-gnu-ubuntu-26.04-3.12.16-be95da31be1baf32d25a8995254a454b8e8f20dfb3c8162ec547963fb44abd7a
  × No solution found when resolving dependencies:
  ╰─▶ Because there is no version of ibm-db{platform_machine != 'aarch64' or
      sys_platform != 'linux'}==3.2.9 and you require ibm-db{platform_machine
      != 'aarch64' or sys_platform != 'linux'}==3.2.9, we can conclude that
      your requirements are unsatisfiable.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
