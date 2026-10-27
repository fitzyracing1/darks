<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156061 · **Generated:** 2026-10-27T12:57:18.218Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Deploy Storybook to GitHub Pages", "Mend", "Cross-Bundle Test", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Storybook to GitHub Pages (`.github/workflows/deploy-storybook.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/39491949865 — dark (conclusion: `failure`), 2026-10-20 20:26 UTC
- Dark since: 2026-09-16 01:11 UTC (first run of the current streak)
- Job / step: `Deploy Storybook` → `Deploy to GitHub Pages`
- Likely cause: Error: Failed to create deployment (status: 400) with build version bcd1e4aaf0b396186e52b93b3625438133842122. Request ID 6401:167ECF:D4D9C:150D34:6AD7CF22 Responded with: Missing environment. Ensure your workflow's deployment job has an env

<details><summary>End of the job log</summary>

```
Found 1 artifact(s)
Creating Pages deployment with payload:
{
	"artifact_id": 12295243931,
	"pages_build_version": "bcd1e4aaf0b396186e52b93b3625438133842122",
	"oidc_token": "***"
}
##[error]Creating Pages deployment failed
```

</details>

### Mend (`.github/workflows/mend.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/39850641469 — dark (conclusion: `failure`), 2026-10-22 20:38 UTC
- Dark since: 2026-10-22 20:38 UTC (first run of the current streak)
- Job / step: `mend-scan` → `Run Mend Scan`
- Likely cause: [ERROR] [2026-10-22 20:55:53,971 +0000] - Process finished with exit code ERROR (-1)

<details><summary>End of the job log</summary>

```
======================================================================================================================================================
Fetch Configuration                                  COMPLETED                  00:00:00.389               --------
======================================================================================================================================================
Elapsed running time:                                                           00:00:00.389
======================================================================================================================================================
Process finished with exit code ERROR (-1)
[ERROR] [2026-10-22 20:55:53,971 +0000] - Process finished with exit code ERROR (-1)
##[error]Process completed with exit code 255.
```

</details>

### Cross-Bundle Test (`.github/workflows/cross-bundle-test.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/40279758044 — dark (conclusion: `failure`), 2026-10-26 06:25 UTC
- Dark since: 2026-10-26 06:25 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### GP Download Translations (`.github/workflows/gp-download.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/40416774534 — dark (conclusion: `failure`), 2026-10-26 23:01 UTC
- Dark since: 2026-10-26 23:01 UTC (first run of the current streak)
- Job / step: `Download translations from Globalization Pipeline` → `Download translations from GP`
- Likely cause: FAILED languages: ['fr', 'ja', 'es', 'de', 'pt', 'zh-Hans']

<details><summary>End of the job log</summary>

```
Downloading 'de' translations...
  Error downloading 'de': HTTPSConnectionPool(host='g11n-pipeline-api.straker.global', port=443): Max retries exceeded with url: /translate/rest/langflow-test/v2/bundles/langflow-ui/de (Caused by ConnectTimeoutError(<HT…
Downloading 'pt' translations...
  Error downloading 'pt': HTTPSConnectionPool(host='g11n-pipeline-api.straker.global', port=443): Max retries exceeded with url: /translate/rest/langflow-test/v2/bundles/langflow-ui/pt (Caused by ConnectTimeoutError(<HT…
Downloading 'zh-Hans' translations...
  Error downloading 'zh-Hans': HTTPSConnectionPool(host='g11n-pipeline-api.straker.global', port=443): Max retries exceeded with url: /translate/rest/langflow-test/v2/bundles/langflow-ui/zh-Hans (Caused by ConnectTimeou…
FAILED languages: ['fr', 'ja', 'es', 'de', 'pt', 'zh-Hans']
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
