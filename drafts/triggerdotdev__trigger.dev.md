<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16748 · **Generated:** 2026-11-12T00:55:01.455Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/42956423378 — dark (conclusion: `failure`), 2026-11-11 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"b02110fa9e634000df2f77e2f88e5b73","message":"queryWithStats","spanId":"e3098eb62e0b51c3","kind":0,"timestamp":1794369824539000,"duration":2272.106,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…

<details><summary>End of the job log</summary>

```
   Start at  04:03:35
   Duration  9.31s (transform 561ms, setup 0ms, import 1.25s, tests 6.62s, environment 416ms)
Express server closed gracefully.
{"traceId":"a4ec5efed53d1f8ecc54117bb7bef75d","parentId":"8331c0aa4b30c6a2","message":"query","spanId":"bb4a34fdb2c606b5","kind":0,"timestamp":1794369823747000,"duration":2460,"attributes":{"clickhouse.clientName":"runs…
{"traceId":"a4ec5efed53d1f8ecc54117bb7bef75d","parentId":"6d41db39b6cd4b36","message":"runsRepository.listRuns","spanId":"8331c0aa4b30c6a2","kind":0,"timestamp":1794369823747000,"duration":3049.158,"attributes":{"reposi…
{"traceId":"a4ec5efed53d1f8ecc54117bb7bef75d","message":"ApiRunListPresenter.call","spanId":"6d41db39b6cd4b36","kind":1,"timestamp":1794369823744000,"duration":5768.796,"attributes":{"db.datasource":"control-plane-write…
{"traceId":"b02110fa9e634000df2f77e2f88e5b73","message":"queryWithStats","spanId":"e3098eb62e0b51c3","kind":0,"timestamp":1794369824539000,"duration":2272.106,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
