<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16708 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/41770571894 — dark (conclusion: `failure`), 2026-11-04 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"fa2701132ae2c88c1fc9179ec43b07e2","message":"remove team member","spanId":"e56a9597968bc92a","kind":0,"timestamp":1793765125506000,"duration":4076.497,"attributes":{"$transaction":true,"isolation_level":"Ser…

<details><summary>End of the job log</summary>

```
   Start at  04:05:15
   Duration  10.28s (transform 419ms, setup 0ms, import 1.28s, tests 7.68s, environment 472ms)
Express server closed gracefully.
{"traceId":"3d21531a2872c983be874157a3606e6b","parentId":"64c563b8d4dd5ab8","message":"query","spanId":"b5344f4848ff8e9f","kind":0,"timestamp":1793765124793000,"duration":3262.195,"attributes":{"clickhouse.clientName":"…
{"traceId":"3d21531a2872c983be874157a3606e6b","message":"sessionsRepository.listSessions","spanId":"64c563b8d4dd5ab8","kind":0,"timestamp":1793765124793000,"duration":4140.948,"attributes":{"repository.name":"clickhouse…
{"traceId":"3c6e96dc3835b682a0122d48a7f7da7f","message":"sessionRunManager.claimSessionRun","spanId":"173945b3457ea786","kind":0,"timestamp":1793765124952000,"duration":2838.889,"attributes":{"$transaction":true,"max_wa…
{"traceId":"fa2701132ae2c88c1fc9179ec43b07e2","message":"remove team member","spanId":"e56a9597968bc92a","kind":0,"timestamp":1793765125506000,"duration":4076.497,"attributes":{"$transaction":true,"isolation_level":"Ser…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
