<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156580 · **Generated:** 2026-11-13T00:54:20.399Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Deploy Storybook to GitHub Pages", "Cross-Bundle Test", "A11y / IBM Equal Access Scans")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Storybook to GitHub Pages (`.github/workflows/deploy-storybook.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/42892406169 — dark (conclusion: `failure`), 2026-11-10 20:09 UTC
- Dark since: 2026-09-16 01:11 UTC (first run of the current streak)
- Job / step: `Deploy Storybook` → `Deploy to GitHub Pages`
- Likely cause: Error: Failed to create deployment (status: 400) with build version 5abad254f9cd8589e1f95b57e207dfb7840b5d61. Request ID 4889:114872:B7835:13E48A:6AF37A6E Responded with: Missing environment. Ensure your workflow's deployment job has an env

<details><summary>End of the job log</summary>

```
Found 1 artifact(s)
Creating Pages deployment with payload:
{
	"artifact_id": 13797624935,
	"pages_build_version": "5abad254f9cd8589e1f95b57e207dfb7840b5d61",
	"oidc_token": "***"
}
##[error]Creating Pages deployment failed
```

</details>

### Cross-Bundle Test (`.github/workflows/cross-bundle-test.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/42572056954 — dark (conclusion: `failure`), 2026-11-09 06:16 UTC
- Dark since: 2026-10-26 06:25 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### A11y / IBM Equal Access Scans (`.github/workflows/a11y-scan.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/43139921752 — dark (conclusion: `failure`), 2026-11-12 02:13 UTC
- Dark since: 2026-11-12 02:13 UTC (first run of the current streak)
- Job / step: `Python route scan (real backend, nightly)` → `Run Python Route Scan`
- Likely cause: No files were found with the provided path: python-route-scan. No artifacts will be uploaded.

<details><summary>End of the job log</summary>

```
    )
    ^
  File "/home/runner/work/_temp/setup-uv-cache/archive-v0/tS0utWamxF_AdjLh/lib/python3.13/site-packages/playwright/_impl/_connection.py", line 563, in wrap_api_call
    raise rewrite_error(error, f"{parsed_st['apiName']}: {error}") from None
playwright._impl._errors.TimeoutError: Page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/flows", waiting until "domcontentloaded"
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
