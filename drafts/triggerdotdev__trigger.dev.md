<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16716 · **Generated:** 2026-11-05T18:40:12.982Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/41965122889 — dark (conclusion: `failure`), 2026-11-05 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"86aad258a6230e0b4a3acad56142151a","parentId":"3a929e878c0dd784","message":"enqueue","spanId":"6b0362008e615a04","kind":3,"timestamp":1793851420147000,"duration":3040.512,"attributes":{"job_type":"schedule.tr…

<details><summary>End of the job log</summary>

```
Express server closed gracefully.
{"traceId":"4498b29bce6e6d46e7957eda6e21f08f","parentId":"b617386c31732467","message":"enqueue","spanId":"3c7d3559aadd3026","kind":3,"timestamp":1793851420052000,"duration":2496.138,"attributes":{"job_type":"schedule.tr…
{"traceId":"4498b29bce6e6d46e7957eda6e21f08f","parentId":"20a813f429c18310","message":"enqueueScheduledTask","spanId":"b617386c31732467","kind":0,"timestamp":1793851420052000,"duration":2835.867,"attributes":{"instanceI…
{"traceId":"4498b29bce6e6d46e7957eda6e21f08f","message":"registerNextTaskScheduleInstance","spanId":"20a813f429c18310","kind":0,"timestamp":1793851420044000,"duration":10812.769,"attributes":{"instanceId":"cmw30ti8a0009…
{"traceId":"86aad258a6230e0b4a3acad56142151a","parentId":"3a929e878c0dd784","message":"enqueue","spanId":"6b0362008e615a04","kind":3,"timestamp":1793851420147000,"duration":3040.512,"attributes":{"job_type":"schedule.tr…
{"traceId":"86aad258a6230e0b4a3acad56142151a","parentId":"8fb12216250685c4","message":"enqueueScheduledTask","spanId":"3a929e878c0dd784","kind":0,"timestamp":1793851420147000,"duration":3252.811,"attributes":{"instanceI…
{"traceId":"86aad258a6230e0b4a3acad56142151a","message":"registerNextTaskScheduleInstance","spanId":"8fb12216250685c4","kind":0,"timestamp":1793851420139000,"duration":11830.794,"attributes":{"instanceId":"cmw30tiax000h…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
