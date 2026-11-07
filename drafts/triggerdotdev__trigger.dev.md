<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16727 · **Generated:** 2026-11-07T18:36:17.303Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/42336533476 — dark (conclusion: `failure`), 2026-11-07 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"55e651f9eff62fd205024f7eb81e98a5","parentId":"6dbcd9728046e568","message":"enqueue","spanId":"c859b7cc5bf49548","kind":3,"timestamp":1794024184551000,"duration":286.82,"attributes":{"job_type":"expireRun","j…

<details><summary>End of the job log</summary>

```
{"traceId":"55e651f9eff62fd205024f7eb81e98a5","parentId":"6dbcd9728046e568","message":"enqueue","spanId":"c859b7cc5bf49548","kind":3,"timestamp":1794024184551000,"duration":286.82,"attributes":{"job_type":"expireRun","j…
{"traceId":"55e651f9eff62fd205024f7eb81e98a5","parentId":"6dbcd9728046e568","message":"enqueueMessage","spanId":"5990606e380f38a9","kind":3,"timestamp":1794024184552000,"duration":481.957,"attributes":{"messaging.operat…
{"traceId":"55e651f9eff62fd205024f7eb81e98a5","parentId":"69f523c0b44de445","message":"trigger","spanId":"6dbcd9728046e568","kind":0,"timestamp":1794024184549000,"duration":3162.141,"attributes":{"friendlyId":"run_cmw5v…
{"traceId":"55e651f9eff62fd205024f7eb81e98a5","parentId":"532ca0e734610407","message":"doFlushBatch","spanId":"1211c85af6ce7fdf","kind":0,"timestamp":1794024184552000,"duration":774.367,"attributes":{"event_count":1,"de…
{"traceId":"55e651f9eff62fd205024f7eb81e98a5","parentId":"69f523c0b44de445","message":"flushBatch","spanId":"532ca0e734610407","kind":0,"timestamp":1794024184552000,"duration":878.393,"attributes":{"flush_id":"vNEHZyxFu…
{"traceId":"55e651f9eff62fd205024f7eb81e98a5","parentId":"fa4a97bc532fa065","message":"RunEngineTriggerTaskService.call()","spanId":"69f523c0b44de445","kind":0,"timestamp":1794024184548000,"duration":5315.643,"attribute…
{"traceId":"55e651f9eff62fd205024f7eb81e98a5","message":"TriggerTaskService.call()","spanId":"fa4a97bc532fa065","kind":1,"timestamp":1794024184547000,"duration":5828.589,"attributes":{"$trigger.env.id":"cmw5vog6500kwv3u…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
