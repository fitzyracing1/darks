<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16766 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/43674855230 — dark (conclusion: `failure`), 2026-11-15 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"548a097b2610d232d1907746a678d6a3","message":"ApiRunListPresenter.call","spanId":"82b475406bc87753","kind":1,"timestamp":1794715359347000,"duration":5197.77,"attributes":{"db.datasource":"control-plane-writer…

<details><summary>End of the job log</summary>

```
      Tests  4 failed | 261 passed (265)
   Start at  04:02:31
   Duration  8.81s (transform 632ms, setup 0ms, import 1.20s, tests 6.71s, environment 375ms)
Express server closed gracefully.
{"traceId":"548a097b2610d232d1907746a678d6a3","parentId":"0d8b227711d34414","message":"query","spanId":"da227e880e33eab7","kind":0,"timestamp":1794715359349000,"duration":2465.613,"attributes":{"clickhouse.clientName":"…
{"traceId":"548a097b2610d232d1907746a678d6a3","parentId":"82b475406bc87753","message":"runsRepository.listRuns","spanId":"0d8b227711d34414","kind":0,"timestamp":1794715359349000,"duration":2936.703,"attributes":{"reposi…
{"traceId":"548a097b2610d232d1907746a678d6a3","message":"ApiRunListPresenter.call","spanId":"82b475406bc87753","kind":1,"timestamp":1794715359347000,"duration":5197.77,"attributes":{"db.datasource":"control-plane-writer…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
