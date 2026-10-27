<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16631 · **Generated:** 2026-10-27T18:39:56.972Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40447349222 — dark (conclusion: `failure`), 2026-10-27 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"4b1d11229a1acf284b9b3d35932ce285","message":"queryWithStats","spanId":"9f11dc80450bfea7","kind":0,"timestamp":1793073861081000,"duration":2905.723,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…

<details><summary>End of the job log</summary>

```
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"ede266254f10c0ed","message":"trigger","spanId":"894b3d05d163a164","kind":0,"timestamp":1793073859866000,"duration":12950.451,"attributes":{"friendlyId":"run_cmvq…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"37482b8691a63a76","message":"doFlushBatch","spanId":"6f6d8ffba2f95f9d","kind":0,"timestamp":1793073859879000,"duration":2424.295,"attributes":{"event_count":1,"d…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"ede266254f10c0ed","message":"flushBatch","spanId":"37482b8691a63a76","kind":0,"timestamp":1793073859879000,"duration":2925.551,"attributes":{"flush_id":"4RJmZutz…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"8b2d81c74fb0fbfd","message":"RunEngineTriggerTaskService.call()","spanId":"ede266254f10c0ed","kind":0,"timestamp":1793073859859000,"duration":23078.545,"attribut…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","message":"TriggerTaskService.call()","spanId":"8b2d81c74fb0fbfd","kind":1,"timestamp":1793073859857000,"duration":25191.153,"attributes":{"$trigger.env.id":"cmvq5voxy003typ…
{"traceId":"bfca77c363952c28fd4eba422286e378","message":"ApiRetrieveRunPresenter.call","spanId":"9609e5dec80accbf","kind":1,"timestamp":1793073860534000,"duration":109.807,"attributes":{"$trigger.env.id":"cmvq5vpgq00amy…
{"traceId":"4b1d11229a1acf284b9b3d35932ce285","message":"queryWithStats","spanId":"9f11dc80450bfea7","kind":0,"timestamp":1793073861081000,"duration":2905.723,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
