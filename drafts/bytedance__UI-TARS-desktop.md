<!-- dark-draft: bytedance/UI-TARS-desktop -->
<!-- draft-state: ready -->
# Upstream issue draft: bytedance/UI-TARS-desktop

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/bytedance/UI-TARS-desktop/issues/new
- **Stars:** 39583 · **Generated:** 2026-11-09T06:54:36.072Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Scorecard supply-chain security" workflow failing on main since 2026-09-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Scorecard supply-chain security** workflow (`.github/workflows/scorecard.yml`) on `main` has been failing since 2026-09-14. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/bytedance/UI-TARS-desktop/actions/runs/41413094288 — dark (conclusion: `failure`), 2026-11-02 08:26 UTC
- Dark since: 2026-09-14 08:39 UTC (first run of the current streak)
- Job / step: `Scorecard analysis` → `Run analysis`
- Likely cause: 2026/11/02 08:27:38 error processing signature: error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification fa…

<details><summary>End of the job log</summary>

```
Wrote bundle to file /tmp/bundle490710588
2026/11/02 08:27:19 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/11/02 08:27:19 retrying in 1s...
2026/11/02 08:27:23 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/11/02 08:27:23 retrying in 3s...
2026/11/02 08:27:28 error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification failed: imposter commit: 59c2c…
2026/11/02 08:27:28 retrying in 10s...
2026/11/02 08:27:38 error processing signature: error sending scorecard results to webapp: http response 400, status: 400 Bad Request, error: {"code":400,"message":"workflow verification failed: workflow verification fa…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining UI-TARS-desktop!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
