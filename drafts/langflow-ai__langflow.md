<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 155923 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Storybook to GitHub Pages" workflow failing on main since 2026-09-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Storybook to GitHub Pages** workflow (`.github/workflows/deploy-storybook.yml`) on `main` has been failing since 2026-09-16. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
