<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16634 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🚀 Publish Trigger.dev Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40447349222 — dark (conclusion: `failure`), 2026-10-27 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"4b1d11229a1acf284b9b3d35932ce285","message":"queryWithStats","spanId":"9f11dc80450bfea7","kind":0,"timestamp":1793073861081000,"duration":2905.723,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…

<details><summary>End of the job log</summary>

```
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"ede266254f10c0ed","message":"trigger","spanId":"894b3d05d163a164","kind":0,"timestamp":1793073859866000,"duration":12950.451,"attributes":{"friendlyId":"run_cmvq…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"37482b8691a63a76","message":"doFlushBatch","spanId":"6f6d8ffba2f95f9d","kind":0,"timestamp":1793073859879000,"duration":2424.295,"attributes":{"event_count":1,"d…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"ede266254f10c0ed","message":"flushBatch","spanId":"37482b8691a63a76","kind":0,"timestamp":1793073859879000,"duration":2925.551,"attributes":{"flush_id":"4RJmZutz…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","parentId":"8b2d81c74fb0fbfd","message":"RunEngineTriggerTaskService.call()","spanId":"ede266254f10c0ed","kind":0,"timestamp":1793073859859000,"duration":23078.545,"attribut…
{"traceId":"5b2e5f3f1bf6841e2c9ed4d866860aa3","message":"TriggerTaskService.call()","spanId":"8b2d81c74fb0fbfd","kind":1,"timestamp":1793073859857000,"duration":25191.153,"attributes":{"$trigger.env.id":"cmvq5voxy003typ…
{"traceId":"bfca77c363952c28fd4eba422286e378","message":"ApiRetrieveRunPresenter.call","spanId":"9609e5dec80accbf","kind":1,"timestamp":1793073860534000,"duration":109.807,"attributes":{"$trigger.env.id":"cmvq5vpgq00amy…
{"traceId":"4b1d11229a1acf284b9b3d35932ce285","message":"queryWithStats","spanId":"9f11dc80450bfea7","kind":0,"timestamp":1793073861081000,"duration":2905.723,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…
##[error]Process completed with exit code 1.
```

</details>

### 🚀 Publish Trigger.dev Docker (`.github/workflows/publish.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40594652205 — dark (conclusion: `failure`), 2026-10-27 22:25 UTC
- Dark since: 2026-10-27 22:25 UTC (first run of the current streak)
- Job / step: `units / packages / 🧪 Unit Tests: Packages (2, 3)` → `🧪 Run Package Unit Tests`
- Likely cause: @trigger.dev/core#test: command (/home/runner/work/trigger.dev/trigger.dev/packages/core) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test --run --reporter=default --reporter=blob --shard=2/3 --passWithNoTests exited (1)

<details><summary>End of the job log</summary>

```
 Test Files  1 failed | 27 passed (28)
      Tests  1 failed | 391 passed (392)
   Start at  22:26:36
   Duration  5.33s (transform 1.69s, setup 0ms, import 4.91s, tests 7.72s, environment 2ms)
blob report written to /home/runner/work/trigger.dev/trigger.dev/packages/core/.vitest-reports/blob-2-3.json
 ELIFECYCLE  Test failed. See above for more details.
[ERROR] command finished with error: command (/home/runner/work/trigger.dev/trigger.dev/packages/core) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test --run --reporter=default --reporter=blob --shard=2/3 --p…
##[error]@trigger.dev/core#test: command (/home/runner/work/trigger.dev/trigger.dev/packages/core) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test --run --reporter=default --reporter=blob --shard=2/3 --passW…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
