<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16665 · **Generated:** 2026-10-30T18:36:41.749Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/41000510476 — dark (conclusion: `failure`), 2026-10-30 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"c6925bf77d71036664a93fbedb812184","message":"sessionsRepository.listSessions","spanId":"35e0bfbe08d7386e","kind":0,"timestamp":1793333036639000,"duration":2151.227,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
Express server closed gracefully.
{"traceId":"1a9fd970f83d6a3125f5ef8ecc268c23","parentId":"066cc3a84c2e3a92","message":"enqueue","spanId":"3a87c2f0c30185b8","kind":3,"timestamp":1793333035566000,"duration":976.451,"attributes":{"job_type":"schedule.tri…
{"traceId":"1a9fd970f83d6a3125f5ef8ecc268c23","parentId":"58e18065fa10a090","message":"enqueueScheduledTask","spanId":"066cc3a84c2e3a92","kind":0,"timestamp":1793333035566000,"duration":1224.349,"attributes":{"instanceI…
{"traceId":"1a9fd970f83d6a3125f5ef8ecc268c23","message":"registerNextTaskScheduleInstance","spanId":"58e18065fa10a090","kind":0,"timestamp":1793333035560000,"duration":7109.37,"attributes":{"instanceId":"cmvug6q7a000l0a…
{"traceId":"05db17827f0519e5b136ad97c03c0e1c","message":"ApiRetrieveRunPresenter.call","spanId":"4cb5852388018f10","kind":1,"timestamp":1793333036179000,"duration":99.046,"attributes":{"$trigger.env.id":"cmvug6qob00bq0a…
{"traceId":"c6925bf77d71036664a93fbedb812184","parentId":"35e0bfbe08d7386e","message":"query","spanId":"eb7e7be6989d4160","kind":0,"timestamp":1793333036639000,"duration":1922.085,"attributes":{"clickhouse.clientName":"…
{"traceId":"c6925bf77d71036664a93fbedb812184","message":"sessionsRepository.listSessions","spanId":"35e0bfbe08d7386e","kind":0,"timestamp":1793333036639000,"duration":2151.227,"attributes":{"repository.name":"clickhouse…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
