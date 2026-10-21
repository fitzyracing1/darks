<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16592 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39541696892 — dark (conclusion: `failure`), 2026-10-21 04:00 UTC
- Dark since: 2026-10-08 04:02 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"1e7175bf930ea80dba8bd66f3235ce37","message":"enqueue","spanId":"4a16d0138bffa7ff","kind":3,"timestamp":1792555431888000,"duration":418.306,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms"…

<details><summary>End of the job log</summary>

```
{"traceId":"4dade64ce9dadffd520c55ecf2370093","parentId":"6a361f3c0ccecab7","message":"enqueueMessage","spanId":"8c8c76255b577f10","kind":3,"timestamp":1792555431468000,"duration":520.34,"attributes":{"messaging.operati…
{"traceId":"4dade64ce9dadffd520c55ecf2370093","parentId":"2fff1e641e5bb8fb","message":"trigger","spanId":"6a361f3c0ccecab7","kind":0,"timestamp":1792555431464000,"duration":4656.605,"attributes":{"friendlyId":"run_cmvhl…
{"traceId":"4dade64ce9dadffd520c55ecf2370093","parentId":"47b3efccd8dd8775","message":"doFlushBatch","spanId":"3add1d1806b0dea4","kind":0,"timestamp":1792555431469000,"duration":952.992,"attributes":{"event_count":1,"de…
{"traceId":"4dade64ce9dadffd520c55ecf2370093","parentId":"2fff1e641e5bb8fb","message":"flushBatch","spanId":"47b3efccd8dd8775","kind":0,"timestamp":1792555431469000,"duration":1021.662,"attributes":{"flush_id":"ftPjVdDj…
{"traceId":"4dade64ce9dadffd520c55ecf2370093","parentId":"3141a8105ad5aa14","message":"RunEngineTriggerTaskService.call()","spanId":"2fff1e641e5bb8fb","kind":0,"timestamp":1792555431463000,"duration":6981.056,"attribute…
{"traceId":"4dade64ce9dadffd520c55ecf2370093","message":"TriggerTaskService.call()","spanId":"3141a8105ad5aa14","kind":1,"timestamp":1792555431462000,"duration":7573.443,"attributes":{"$trigger.env.id":"cmvhl7z1800kc5zu…
{"traceId":"1e7175bf930ea80dba8bd66f3235ce37","message":"enqueue","spanId":"4a16d0138bffa7ff","kind":3,"timestamp":1792555431888000,"duration":418.306,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms"…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
