<!-- dark-draft: bytedance/UI-TARS-desktop -->
<!-- draft-state: ready -->
# Upstream issue draft: bytedance/UI-TARS-desktop

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/bytedance/UI-TARS-desktop/issues/new
- **Stars:** 39313 · **Generated:** 2026-10-19T00:45:03.964Z
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

- Latest run on `main`: https://github.com/bytedance/UI-TARS-desktop/actions/runs/38226688698 — dark (conclusion: `failure`), 2026-10-12 08:56 UTC
- Dark since: 2026-09-14 08:39 UTC (first run of the current streak)
- Job / step: `Scorecard analysis` → `Run analysis`
- Likely cause: 2026/10/12 08:57:40 error processing signature: error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification fa…

<details><summary>End of the job log</summary>

```
MEYCIQCEwiWXKDVLUJ+xFoZMJ/gr5LNR8hF61blcsND9CYkvgAIhAJPT/API0fUjlZo/ztL2w9lyrzI1hXdLsIIFhGR0UG2i
2026/10/12 08:57:20 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/10/12 08:57:20 retrying in 1s...
2026/10/12 08:57:23 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/10/12 08:57:23 retrying in 3s...
2026/10/12 08:57:30 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/10/12 08:57:30 retrying in 10s...
2026/10/12 08:57:40 error processing signature: error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification fa…
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
