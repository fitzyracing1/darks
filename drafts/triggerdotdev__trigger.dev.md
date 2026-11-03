<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16701 · **Generated:** 2026-11-03T06:44:54.436Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/41575551174 — dark (conclusion: `failure`), 2026-11-03 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"0f2b5080493c5ded890e239ec44c7e08","parentId":"3258fa3d229b3e0e","message":"enqueue","spanId":"75068bbe12b73bf2","kind":3,"timestamp":1793678611773000,"duration":285.308,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"0f2b5080493c5ded890e239ec44c7e08","parentId":"fe5b89dde541b7c8","message":"RunEngineTriggerTaskService.call()","spanId":"61765f81b401a414","kind":0,"timestamp":1793678611768000,"duration":6728.365,"attribute…
{"traceId":"0f2b5080493c5ded890e239ec44c7e08","parentId":"ff8cfee8b0986976","message":"TriggerTaskService.call()","spanId":"fe5b89dde541b7c8","kind":1,"timestamp":1793678611768000,"duration":7364.825,"attributes":{"$tri…
{"traceId":"0f2b5080493c5ded890e239ec44c7e08","message":"BatchTriggerV3Service.call()","spanId":"ff8cfee8b0986976","kind":1,"timestamp":1793678611766000,"duration":10775.696,"attributes":{"$trigger.env.id":"cmw05xmi9005…
{"traceId":"1ef3548ae7d2eb0f5bf57145a6075434","message":"ApiRetrieveRunPresenter.call","spanId":"256dd2ca7e8fd07c","kind":1,"timestamp":1793678612220000,"duration":90.851,"attributes":{"$trigger.env.id":"cmw05xmus00b10s…
{"traceId":"0b1731b16dd09f7f4df14c562003bc00","message":"ApiRetrieveRunPresenter.call","spanId":"0ad27009d964ca18","kind":1,"timestamp":1793678612271000,"duration":94.148,"attributes":{"$trigger.env.id":"cmw05xmw700bq0s…
{"traceId":"e61265eaf5e66bfa0d6e7a3d1d3d91cb","parentId":"fd922349eeed24aa","message":"doFlushBatch","spanId":"988614d8709972b6","kind":0,"timestamp":1793678613275000,"duration":2527.555,"attributes":{"event_count":4,"d…
{"traceId":"e61265eaf5e66bfa0d6e7a3d1d3d91cb","message":"flushBatch","spanId":"fd922349eeed24aa","kind":0,"timestamp":1793678613275000,"duration":2706.843,"attributes":{"flush_id":"J0A8Ve6uGIsE2zGEfs9Oc","event_count":4…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
