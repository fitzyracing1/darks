<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16721 · **Generated:** 2026-11-06T18:37:41.328Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/42159940703 — dark (conclusion: `failure`), 2026-11-06 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"8b4ec7473c51a7fa40e701eff4b6ad10","message":"sessionsRepository.listSessions","spanId":"62d3524a4a78b837","kind":0,"timestamp":1793937788078000,"duration":2091.041,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
Express server closed gracefully.
{"traceId":"f749b26bcbabe03af0f36f98c87a01e6","parentId":"574123d7dae9e3a6","message":"enqueue","spanId":"b69b958364e620ff","kind":3,"timestamp":1793937786483000,"duration":36855.377,"attributes":{"job_type":"schedule.t…
{"traceId":"f749b26bcbabe03af0f36f98c87a01e6","parentId":"e3577100218b6801","message":"enqueueScheduledTask","spanId":"574123d7dae9e3a6","kind":0,"timestamp":1793937786483000,"duration":37309.593,"attributes":{"instance…
{"traceId":"f749b26bcbabe03af0f36f98c87a01e6","message":"registerNextTaskScheduleInstance","spanId":"e3577100218b6801","kind":0,"timestamp":1793937786469000,"duration":51089.291,"attributes":{"instanceId":"cmw4g8mza0003…
{"traceId":"8b4ec7473c51a7fa40e701eff4b6ad10","parentId":"62d3524a4a78b837","message":"query","spanId":"df96f76374b82663","kind":0,"timestamp":1793937788079000,"duration":1884.241,"attributes":{"clickhouse.clientName":"…
{"traceId":"8b4ec7473c51a7fa40e701eff4b6ad10","message":"sessionsRepository.listSessions","spanId":"62d3524a4a78b837","kind":0,"timestamp":1793937788078000,"duration":2091.041,"attributes":{"repository.name":"clickhouse…
{"traceId":"9933f1ebaa5e235467dbc49852a9433e","message":"sessionRunManager.claimSessionRun","spanId":"62e2441f0e0aef5e","kind":0,"timestamp":1793937788125000,"duration":1960.104,"attributes":{"$transaction":true,"max_wa…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
