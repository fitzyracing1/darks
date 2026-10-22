<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16597 · **Generated:** 2026-10-22T12:57:28.437Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🚀 Publish Trigger.dev Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39719974447 — dark (conclusion: `failure`), 2026-10-22 04:00 UTC
- Dark since: 2026-10-08 04:02 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"19b39c47ab7c2a644a2d53f1f90d2e30","message":"sessionsRepository.listSessions","spanId":"bab499bc80fc8097","kind":0,"timestamp":1792641849440000,"duration":2597.182,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
 Test Files  1 failed | 6 passed (7)
      Tests  2 failed | 247 passed (249)
   Start at  04:04:00
   Duration  9.50s (transform 446ms, setup 0ms, import 1.00s, tests 5.36s, environment 1ms)
Express server closed gracefully.
{"traceId":"19b39c47ab7c2a644a2d53f1f90d2e30","parentId":"bab499bc80fc8097","message":"query","spanId":"5a57f9c230686250","kind":0,"timestamp":1792641849441000,"duration":2102.65,"attributes":{"clickhouse.clientName":"c…
{"traceId":"19b39c47ab7c2a644a2d53f1f90d2e30","message":"sessionsRepository.listSessions","spanId":"bab499bc80fc8097","kind":0,"timestamp":1792641849440000,"duration":2597.182,"attributes":{"repository.name":"clickhouse…
##[error]Process completed with exit code 1.
```

</details>

### 🚀 Publish Trigger.dev Docker (`.github/workflows/publish.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39757964112 — dark (conclusion: `cancelled`), 2026-10-22 09:46 UTC
- Dark since: 2026-10-22 09:02 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
