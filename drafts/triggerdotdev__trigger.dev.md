<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16650 · **Generated:** 2026-10-29T12:46:05.949Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🗺️ Observability Map")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40815337915 — dark (conclusion: `failure`), 2026-10-29 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"6650c0cbebeb4b56ee7414c76f9728d4","parentId":"0bdc6b8561aa3558","message":"enqueue","spanId":"f6cfdc8fead6cddb","kind":3,"timestamp":1793246628424000,"duration":261.863,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"6650c0cbebeb4b56ee7414c76f9728d4","parentId":"0bdc6b8561aa3558","message":"enqueueMessage","spanId":"013d6b0b811babdc","kind":3,"timestamp":1793246628424000,"duration":449.767,"attributes":{"messaging.operat…
{"traceId":"6650c0cbebeb4b56ee7414c76f9728d4","parentId":"5c90e0ad810f5136","message":"trigger","spanId":"0bdc6b8561aa3558","kind":0,"timestamp":1793246628421000,"duration":3529.925,"attributes":{"friendlyId":"run_cmvt0…
{"traceId":"6650c0cbebeb4b56ee7414c76f9728d4","parentId":"4319112ca841562d","message":"doFlushBatch","spanId":"617e1a6ed55f0d8c","kind":0,"timestamp":1793246628425000,"duration":819.653,"attributes":{"event_count":1,"de…
{"traceId":"6650c0cbebeb4b56ee7414c76f9728d4","parentId":"5c90e0ad810f5136","message":"flushBatch","spanId":"4319112ca841562d","kind":0,"timestamp":1793246628425000,"duration":911.817,"attributes":{"flush_id":"xRwkIEY0T…
{"traceId":"6650c0cbebeb4b56ee7414c76f9728d4","parentId":"255b448b26b0dc0e","message":"RunEngineTriggerTaskService.call()","spanId":"5c90e0ad810f5136","kind":0,"timestamp":1793246628420000,"duration":5764.562,"attribute…
{"traceId":"6650c0cbebeb4b56ee7414c76f9728d4","message":"TriggerTaskService.call()","spanId":"255b448b26b0dc0e","kind":1,"timestamp":1793246628419000,"duration":6338.903,"attributes":{"$trigger.env.id":"cmvt0qq0u00krulu…
{"traceId":"c41e109a9ba7aa9c16e6c492494daf88","message":"sessionRunManager.claimSessionRun","spanId":"98eb1fc011ba34df","kind":0,"timestamp":1793246628426000,"duration":1450.921,"attributes":{"$transaction":true,"max_wa…
##[error]Process completed with exit code 1.
```

</details>

### 🗺️ Observability Map (`.github/workflows/observability-map.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40811896173 — dark (conclusion: `failure`), 2026-10-29 03:23 UTC
- Dark since: 2026-10-28 03:23 UTC (first run of the current streak)
- Job / step: `🧬 Mutation corpus` → `🧬 Run the corpus`
- Likely cause: AssertionError: expected [ 'api.v2.packets.$.ts' ] to deeply equal [] (internal-packages/observability-map/src/mutationCorpus.test.ts:287)

<details><summary>End of the job log</summary>

```
    288|   });
    289|
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed (1)
      Tests  1 failed | 55 passed | 2 expected fail (58)
   Start at  03:24:30
   Duration  119.41s (transform 108ms, setup 0ms, import 247ms, tests 119.08s, environment 0ms)
##[error]AssertionError: expected [ 'api.v2.packets.$.ts' ] to deeply equal []
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
