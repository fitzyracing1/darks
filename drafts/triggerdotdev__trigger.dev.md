<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16573 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-08. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
