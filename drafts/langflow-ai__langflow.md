<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156973 · **Generated:** 2026-11-27T00:52:53.857Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Deploy Storybook to GitHub Pages", "GP Download Translations", "Nightly Build")
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

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/45908320437 — dark (conclusion: `failure`), 2026-11-26 23:00 UTC
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

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/45916331000 — dark (conclusion: `failure`), 2026-11-27 00:22 UTC
- Dark since: 2026-11-18 00:22 UTC (first run of the current streak)
- Job / step: `create-nightly-tag` → `Commit tag`
- Likely cause: Tag push failed. Check if the tag already exists. Exiting the workflow.

<details><summary>End of the job log</summary>

```
+ git push origin v1.14.0.dev40
To https://github.com/langflow-ai/langflow
 ! [remote rejected]       v1.14.0.dev40 -> v1.14.0.dev40 (Unable to determine if workflow can be created or updated due to timeout; `workflows` scope may be required.)
error: failed to push some refs to 'https://github.com/langflow-ai/langflow'
+ echo 'Tag push failed. Check if the tag already exists. Exiting the workflow.'
Tag push failed. Check if the tag already exists. Exiting the workflow.
+ exit 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
