<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16751 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/43151943884 — dark (conclusion: `failure`), 2026-11-12 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"7b871313b614944ffc035c633830eee4","parentId":"aa79ef6069cc19cd","message":"enqueue","spanId":"35f84e9d25838f95","kind":3,"timestamp":1794456156979000,"duration":316.948,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"7b871313b614944ffc035c633830eee4","parentId":"aa79ef6069cc19cd","message":"enqueue","spanId":"35f84e9d25838f95","kind":3,"timestamp":1794456156979000,"duration":316.948,"attributes":{"job_type":"expireRun","…
{"traceId":"7b871313b614944ffc035c633830eee4","parentId":"aa79ef6069cc19cd","message":"enqueueMessage","spanId":"38a3f5cb25c909cb","kind":3,"timestamp":1794456156979000,"duration":463.174,"attributes":{"messaging.operat…
{"traceId":"7b871313b614944ffc035c633830eee4","parentId":"70386b2bf49d2e03","message":"trigger","spanId":"aa79ef6069cc19cd","kind":0,"timestamp":1794456156977000,"duration":3042.238,"attributes":{"friendlyId":"run_cmwd0…
{"traceId":"7b871313b614944ffc035c633830eee4","parentId":"49cb5820554f90ec","message":"doFlushBatch","spanId":"48672db319ae252a","kind":0,"timestamp":1794456156980000,"duration":695.341,"attributes":{"event_count":1,"de…
{"traceId":"7b871313b614944ffc035c633830eee4","parentId":"70386b2bf49d2e03","message":"flushBatch","spanId":"49cb5820554f90ec","kind":0,"timestamp":1794456156980000,"duration":792.415,"attributes":{"flush_id":"lH_TaGmuh…
{"traceId":"7b871313b614944ffc035c633830eee4","parentId":"181224edea0edc16","message":"RunEngineTriggerTaskService.call()","spanId":"70386b2bf49d2e03","kind":0,"timestamp":1794456156976000,"duration":5053.493,"attribute…
{"traceId":"7b871313b614944ffc035c633830eee4","message":"TriggerTaskService.call()","spanId":"181224edea0edc16","kind":1,"timestamp":1794456156975000,"duration":5546.392,"attributes":{"$trigger.env.id":"cmwd0v48900krw9q…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
