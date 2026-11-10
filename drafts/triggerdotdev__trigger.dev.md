<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16738 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/42753089617 — dark (conclusion: `failure`), 2026-11-10 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"87c96b7a1991a835e66968f07a51230b","message":"enqueue","spanId":"be42fc0284db174f","kind":3,"timestamp":1794283438076000,"duration":337.547,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms"…

<details><summary>End of the job log</summary>

```
{"traceId":"b544c8558d4ce7c37f48648e4b19e772","message":"ack","spanId":"464eb9c9d9fe4b5a","kind":0,"timestamp":1794283436242000,"duration":3140.828,"attributes":{"job_id":"processBulkAction-cmwa6141k0010v6vojnbh6i8q"},"…
{"traceId":"af57bd774b23cda72ca13191c2595d4b","parentId":"ad1f0490a7771e0c","message":"enqueue","spanId":"907c6120fb343198","kind":3,"timestamp":1794283436455000,"duration":2015.514,"attributes":{"job_type":"schedule.tr…
{"traceId":"af57bd774b23cda72ca13191c2595d4b","parentId":"3e42b6bf37d1447f","message":"enqueueScheduledTask","spanId":"ad1f0490a7771e0c","kind":0,"timestamp":1794283436455000,"duration":2121.404,"attributes":{"instanceI…
{"traceId":"af57bd774b23cda72ca13191c2595d4b","message":"registerNextTaskScheduleInstance","spanId":"3e42b6bf37d1447f","kind":0,"timestamp":1794283436448000,"duration":9248.764,"attributes":{"instanceId":"cmwa6147x0009v…
{"traceId":"9db05efc1ad3b37ff0618cee7de95f2e","parentId":"db16098a388d449e","message":"query","spanId":"81d0c09fdc3eb31e","kind":0,"timestamp":1794283437696000,"duration":1922.418,"attributes":{"clickhouse.clientName":"…
{"traceId":"9db05efc1ad3b37ff0618cee7de95f2e","message":"sessionsRepository.listSessions","spanId":"db16098a388d449e","kind":0,"timestamp":1794283437695000,"duration":2100.424,"attributes":{"repository.name":"clickhouse…
{"traceId":"87c96b7a1991a835e66968f07a51230b","message":"enqueue","spanId":"be42fc0284db174f","kind":3,"timestamp":1794283438076000,"duration":337.547,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms"…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
