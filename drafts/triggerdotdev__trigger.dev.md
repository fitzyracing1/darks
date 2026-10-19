<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16569 · **Generated:** 2026-10-19T01:07:32.637Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39095605995 — dark (conclusion: `failure`), 2026-10-18 04:00 UTC
- Dark since: 2026-10-08 04:02 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"9586259e4f4033801903d387c813453c","message":"enqueue","spanId":"40172c621afd8515","kind":3,"timestamp":1792296229952000,"duration":356.436,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms"…

<details><summary>End of the job log</summary>

```
{"traceId":"37b7f9ac356091b0c0122f85c895be7b","parentId":"df7a3c2fbf4b213e","message":"enqueueMessage","spanId":"4917829e64da6cb0","kind":3,"timestamp":1792296229616000,"duration":478.999,"attributes":{"messaging.operat…
{"traceId":"37b7f9ac356091b0c0122f85c895be7b","parentId":"16a286c28f31e05f","message":"trigger","spanId":"df7a3c2fbf4b213e","kind":0,"timestamp":1792296229613000,"duration":3477.48,"attributes":{"friendlyId":"run_cmvdaw…
{"traceId":"37b7f9ac356091b0c0122f85c895be7b","parentId":"bcd7e0122da40e8f","message":"doFlushBatch","spanId":"f571937238fdf358","kind":0,"timestamp":1792296229616000,"duration":1064.981,"attributes":{"event_count":1,"d…
{"traceId":"37b7f9ac356091b0c0122f85c895be7b","parentId":"16a286c28f31e05f","message":"flushBatch","spanId":"bcd7e0122da40e8f","kind":0,"timestamp":1792296229616000,"duration":1177.976,"attributes":{"flush_id":"SAKPRfAY…
{"traceId":"37b7f9ac356091b0c0122f85c895be7b","parentId":"3b40dd92da9d4852","message":"RunEngineTriggerTaskService.call()","spanId":"16a286c28f31e05f","kind":0,"timestamp":1792296229611000,"duration":6261.914,"attribute…
{"traceId":"37b7f9ac356091b0c0122f85c895be7b","message":"TriggerTaskService.call()","spanId":"3b40dd92da9d4852","kind":1,"timestamp":1792296229610000,"duration":7174.897,"attributes":{"$trigger.env.id":"cmvdawdlv00kwvfz…
{"traceId":"9586259e4f4033801903d387c813453c","message":"enqueue","spanId":"40172c621afd8515","kind":3,"timestamp":1792296229952000,"duration":356.436,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms"…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
