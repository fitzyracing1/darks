<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 156295 · **Generated:** 2026-11-03T18:36:41.394Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Deploy Storybook to GitHub Pages", "Mend", "Cross-Bundle Test", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Storybook to GitHub Pages (`.github/workflows/deploy-storybook.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/41563175743 — dark (conclusion: `failure`), 2026-11-03 01:58 UTC
- Dark since: 2026-09-16 01:11 UTC (first run of the current streak)
- Job / step: `Deploy Storybook` → `Deploy to GitHub Pages`
- Likely cause: Error: Failed to create deployment (status: 400) with build version 600fcef39ee46335844607840ee8250fbc015aba. Request ID C019:10FDDF:1B2EBF0:58DAD27:6AE94090 Responded with: Missing environment. Ensure your workflow's deployment job has an 

<details><summary>End of the job log</summary>

```
Found 1 artifact(s)
Creating Pages deployment with payload:
{
	"artifact_id": 13197267742,
	"pages_build_version": "600fcef39ee46335844607840ee8250fbc015aba",
	"oidc_token": "***"
}
##[error]Creating Pages deployment failed
```

</details>

### Mend (`.github/workflows/mend.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/41571288298 — dark (conclusion: `failure`), 2026-11-03 03:17 UTC
- Dark since: 2026-10-22 20:38 UTC (first run of the current streak)
- Job / step: `mend-scan` → `Run Mend Scan`
- Likely cause: [ERROR] [2026-11-03 03:34:32,816 +0000] - Process finished with exit code ERROR (-1)

<details><summary>End of the job log</summary>

```
======================================================================================================================================================
Fetch Configuration                                  COMPLETED                  00:00:00.501               --------
======================================================================================================================================================
Elapsed running time:                                                           00:00:00.501
======================================================================================================================================================
Process finished with exit code ERROR (-1)
[ERROR] [2026-11-03 03:34:32,816 +0000] - Process finished with exit code ERROR (-1)
##[error]Process completed with exit code 255.
```

</details>

### Cross-Bundle Test (`.github/workflows/cross-bundle-test.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/41398915115 — dark (conclusion: `failure`), 2026-11-02 06:16 UTC
- Dark since: 2026-10-26 06:25 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### A11y / IBM Equal Access Scans (`.github/workflows/a11y-scan.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/41564891999 — dark (conclusion: `failure`), 2026-11-03 02:14 UTC
- Dark since: 2026-11-02 02:15 UTC (first run of the current streak)
- Job / step: `Playwright scan runner (shard 8)` → `Run IBM Equal Access Scans`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
  Slow test file: [chromium] › tests/core/regression/multi-edit-conflict.spec.ts (5.3m)
  Consider running tests from slow files in parallel. See: https://playwright.dev/docs/test-parallel
  1 failed
    [chromium] › tests/core/features/triggers-schedule.spec.ts:17:7 › Schedule trigger lifecycle › user can enable, test, inspect, replay, pause, resume and delete a schedule trigger @release @workspace @api
  1 flaky
    [chromium] › tests/a11y/triggers.a11y.spec.ts:124:7 › Triggers route accessibility › scans the empty triggers page @release @workspace
  26 passed (10.9m)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
