<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156123 · **Generated:** 2026-10-29T06:47:23.232Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Deploy Storybook to GitHub Pages", "Mend", "Cross-Bundle Test")
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

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
