<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16674 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/41271385707 — dark (conclusion: `failure`), 2026-11-01 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"f4bdc3eb7e4727affcf3beec7dbb7195","message":"sessionsRepository.listSessions","spanId":"5c3a81775d44be1d","kind":0,"timestamp":1793505812824000,"duration":2977.363,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
   Duration  9.77s (transform 728ms, setup 0ms, import 1.32s, tests 6.58s, environment 467ms)
Express server closed gracefully.
{"traceId":"5d9806f3a2e6bc8ed8ca1e4f262becb8","message":"regenerate root API key","spanId":"9c206acab81a9be9","kind":0,"timestamp":1793505811095000,"duration":9170.187,"attributes":{"$transaction":true,"max_wait":10000,…
{"traceId":"8015358e8ed170a705864c16009b6517","message":"ApiRetrieveRunPresenter.call","spanId":"1a2f47fd5d57b687","kind":1,"timestamp":1793505812151000,"duration":183.705,"attributes":{"$trigger.env.id":"cmvxb1xgr00amy…
{"traceId":"4224c98c1355ea0f2e7df6fe7e959c87","message":"ApiRetrieveRunPresenter.call","spanId":"d2bbad2656f22faf","kind":1,"timestamp":1793505812222000,"duration":179.578,"attributes":{"$trigger.env.id":"cmvxb1xir00bby…
{"traceId":"f4bdc3eb7e4727affcf3beec7dbb7195","parentId":"5c3a81775d44be1d","message":"query","spanId":"2a8314eee5e251de","kind":0,"timestamp":1793505812824000,"duration":2445.171,"attributes":{"clickhouse.clientName":"…
{"traceId":"f4bdc3eb7e4727affcf3beec7dbb7195","message":"sessionsRepository.listSessions","spanId":"5c3a81775d44be1d","kind":0,"timestamp":1793505812824000,"duration":2977.363,"attributes":{"repository.name":"clickhouse…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
