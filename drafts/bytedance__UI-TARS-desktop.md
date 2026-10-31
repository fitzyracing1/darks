<!-- dark-draft: bytedance/UI-TARS-desktop -->
<!-- draft-state: ready -->
# Upstream issue draft: bytedance/UI-TARS-desktop

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/bytedance/UI-TARS-desktop/issues/new
- **Stars:** 39464 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Scorecard supply-chain security", "UI-TARS E2E Test", "secretlint")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Scorecard supply-chain security (`.github/workflows/scorecard.yml`)

- Latest run on `main`: https://github.com/bytedance/UI-TARS-desktop/actions/runs/40294705998 — dark (conclusion: `failure`), 2026-10-26 08:47 UTC
- Dark since: 2026-09-14 08:39 UTC (first run of the current streak)
- Job / step: `Scorecard analysis` → `Run analysis`
- Likely cause: 2026/10/26 08:48:18 error processing signature: error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification fa…

<details><summary>End of the job log</summary>

```
MEUCICZQU8Z5rQmYWQbfVLMeV2i723tCYYZWbLMd4LTFWg6uAiEA45xBGReF+u5KrbYoDx/mP5mHxSoRrge0VCgSzG5R78c=
2026/10/26 08:47:59 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/10/26 08:47:59 retrying in 1s...
2026/10/26 08:48:03 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/10/26 08:48:03 retrying in 3s...
2026/10/26 08:48:08 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/10/26 08:48:08 retrying in 10s...
2026/10/26 08:48:18 error processing signature: error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification fa…
```

</details>

### UI-TARS E2E Test (`.github/workflows/e2e-ui-tars.yml`)

- Latest run on `main`: https://github.com/bytedance/UI-TARS-desktop/actions/runs/37870052826 — dark (conclusion: `cancelled`), 2026-10-09 01:29 UTC
- Dark since: 2026-09-24 03:55 UTC (first run of the current streak)
- Job / step: `E2E (macos-13)`
- Likely cause: The job has exceeded the maximum execution time while awaiting a runner for 24h0m0s

### secretlint (`.github/workflows/secretlint.yml`)

- Latest run on `main`: https://github.com/bytedance/UI-TARS-desktop/actions/runs/37870053723 — dark (conclusion: `startup_failure`), 2026-10-09 01:29 UTC
- Dark since: 2026-09-24 03:55 UTC (first run of the current streak)
- Likely cause: run startup_failure

If this is already known or expected, feel free to close. Thanks for maintaining UI-TARS-desktop!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
