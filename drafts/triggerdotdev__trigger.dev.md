<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16579 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🚀 Publish Trigger.dev Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39197370471 — dark (conclusion: `failure`), 2026-10-19 04:00 UTC
- Dark since: 2026-10-08 04:02 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"acd1f7a937af1234fdb57e7665162d5e","parentId":"031b6faec17d2cdc","message":"enqueue","spanId":"f80ecb83cd3983d3","kind":3,"timestamp":1792382623497000,"duration":171.356,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"acd1f7a937af1234fdb57e7665162d5e","parentId":"031b6faec17d2cdc","message":"enqueueMessage","spanId":"afda6dbf800aef25","kind":3,"timestamp":1792382623497000,"duration":356.728,"attributes":{"messaging.operat…
{"traceId":"acd1f7a937af1234fdb57e7665162d5e","parentId":"750419d2bbf9ca7f","message":"trigger","spanId":"031b6faec17d2cdc","kind":0,"timestamp":1792382623495000,"duration":3281.41,"attributes":{"friendlyId":"run_cmveqc…
{"traceId":"acd1f7a937af1234fdb57e7665162d5e","parentId":"3546e21d2916edae","message":"doFlushBatch","spanId":"8361bddef02de26c","kind":0,"timestamp":1792382623498000,"duration":947.201,"attributes":{"event_count":1,"de…
{"traceId":"acd1f7a937af1234fdb57e7665162d5e","parentId":"750419d2bbf9ca7f","message":"flushBatch","spanId":"3546e21d2916edae","kind":0,"timestamp":1792382623498000,"duration":1021.353,"attributes":{"flush_id":"AXu4lD1x…
{"traceId":"acd1f7a937af1234fdb57e7665162d5e","parentId":"5a378907d0dc0144","message":"RunEngineTriggerTaskService.call()","spanId":"750419d2bbf9ca7f","kind":0,"timestamp":1792382623493000,"duration":5648.371,"attribute…
{"traceId":"acd1f7a937af1234fdb57e7665162d5e","parentId":"34200c704c02f552","message":"TriggerTaskService.call()","spanId":"5a378907d0dc0144","kind":1,"timestamp":1792382623493000,"duration":6178.991,"attributes":{"$tri…
{"traceId":"acd1f7a937af1234fdb57e7665162d5e","message":"BatchTriggerV3Service.call()","spanId":"34200c704c02f552","kind":1,"timestamp":1792382623486000,"duration":14819.171,"attributes":{"$trigger.env.id":"cmveqc3js005…
##[error]Process completed with exit code 1.
```

</details>

### 🚀 Publish Trigger.dev Docker (`.github/workflows/publish.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39294872223 — dark (conclusion: `failure`), 2026-10-19 17:31 UTC
- Dark since: 2026-10-19 17:31 UTC (first run of the current streak)
- Job / step: `units / internal / 🧪 Unit Tests: Internal (2)` → `🧪 Run Internal Unit Tests (machine 2/2)`
- Likely cause: internal unit test shard 15/24 failed

<details><summary>End of the job log</summary>

```
 ✓  @internal/run-engine  src/run-queue/tests/mixedVersionSnapshotRoute.test.ts (4 tests) 4ms
 ✓  @internal/dashboard-agent  src/watch-narration.test.ts (6 tests) 3ms
 Test Files  18 passed (18)
      Tests  512 passed (512)
   Start at  17:42:00
   Duration  71.49s (transform 3.88s, setup 26ms, import 12.65s, tests 57.14s, environment 1ms)
blob report written to /home/runner/work/trigger.dev/trigger.dev/.vitest-reports/blob-14-24.json
##[error]internal unit test shard 15/24 failed
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
