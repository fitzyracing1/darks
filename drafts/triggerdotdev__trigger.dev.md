<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16729 · **Generated:** 2026-11-08T06:41:39.628Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/42445037559 — dark (conclusion: `failure`), 2026-11-08 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"63bab5113a712d375ca1260a0144a2cf","message":"ApiRunListPresenter.call","spanId":"29234c4ac23a34f5","kind":1,"timestamp":1794110565460000,"duration":7683.849,"attributes":{"db.datasource":"control-plane-write…

<details><summary>End of the job log</summary>

```
{"traceId":"929e5e74b8eefb8fefb6638bc47e4126","message":"registerNextTaskScheduleInstance","spanId":"457a6727edfc5304","kind":0,"timestamp":1794110564969000,"duration":8628.526,"attributes":{"instanceId":"cmw7b3vqf000h0…
{"traceId":"63bab5113a712d375ca1260a0144a2cf","parentId":"2936eaae0b2d9293","message":"query","spanId":"d3b9b228789e72cf","kind":0,"timestamp":1794110565465000,"duration":3388.075,"attributes":{"clickhouse.clientName":"…
{"traceId":"63bab5113a712d375ca1260a0144a2cf","parentId":"29234c4ac23a34f5","message":"runsRepository.listRuns","spanId":"2936eaae0b2d9293","kind":0,"timestamp":1794110565464000,"duration":4130.211,"attributes":{"reposi…
{"traceId":"63bab5113a712d375ca1260a0144a2cf","message":"ApiRunListPresenter.call","spanId":"29234c4ac23a34f5","kind":1,"timestamp":1794110565460000,"duration":7683.849,"attributes":{"db.datasource":"control-plane-write…
{"traceId":"2f2bf3f074cb0fc9504cb81702cef24c","message":"ApiRetrieveRunPresenter.call","spanId":"68495171bf117f75","kind":1,"timestamp":1794110565793000,"duration":159.981,"attributes":{"$trigger.env.id":"cmw7b3wd200am0…
{"traceId":"2f6870e5b4fbecfec4fd4cbe5745bc4e","parentId":"b94578eee4e475ac","message":"doFlushBatch","spanId":"d1c36592d62f9a90","kind":0,"timestamp":1794110566361000,"duration":1220.537,"attributes":{"event_count":1,"d…
{"traceId":"2f6870e5b4fbecfec4fd4cbe5745bc4e","message":"flushBatch","spanId":"b94578eee4e475ac","kind":0,"timestamp":1794110566361000,"duration":1347.065,"attributes":{"flush_id":"2N7KvKrGMQoxjdX2N-zVu","event_count":1…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
