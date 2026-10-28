<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16636 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🚀 Publish Trigger.dev Docker", "🗺️ Observability Map")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40629910937 — dark (conclusion: `failure`), 2026-10-28 04:01 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"00bddace81af1f0a80d54a030b8d9c15","parentId":"c3e74736ada70443","message":"enqueue","spanId":"f263ad52e6fdda6c","kind":3,"timestamp":1793160264267000,"duration":457.533,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"00bddace81af1f0a80d54a030b8d9c15","parentId":"c3e74736ada70443","message":"enqueue","spanId":"f263ad52e6fdda6c","kind":3,"timestamp":1793160264267000,"duration":457.533,"attributes":{"job_type":"expireRun","…
{"traceId":"00bddace81af1f0a80d54a030b8d9c15","parentId":"c3e74736ada70443","message":"enqueueMessage","spanId":"10da9db12712f032","kind":3,"timestamp":1793160264267000,"duration":599.812,"attributes":{"messaging.operat…
{"traceId":"00bddace81af1f0a80d54a030b8d9c15","parentId":"52e0e0f3b61de26e","message":"trigger","spanId":"c3e74736ada70443","kind":0,"timestamp":1793160264262000,"duration":6326.233,"attributes":{"friendlyId":"run_cmvrl…
{"traceId":"00bddace81af1f0a80d54a030b8d9c15","parentId":"173627d48867ea09","message":"doFlushBatch","spanId":"b33ebdc86abe2a0d","kind":0,"timestamp":1793160264268000,"duration":1089.665,"attributes":{"event_count":1,"d…
{"traceId":"00bddace81af1f0a80d54a030b8d9c15","parentId":"52e0e0f3b61de26e","message":"flushBatch","spanId":"173627d48867ea09","kind":0,"timestamp":1793160264268000,"duration":1206.817,"attributes":{"flush_id":"YG2S4a37…
{"traceId":"00bddace81af1f0a80d54a030b8d9c15","parentId":"6395594704428d18","message":"RunEngineTriggerTaskService.call()","spanId":"52e0e0f3b61de26e","kind":0,"timestamp":1793160264260000,"duration":9310.122,"attribute…
{"traceId":"00bddace81af1f0a80d54a030b8d9c15","message":"TriggerTaskService.call()","spanId":"6395594704428d18","kind":1,"timestamp":1793160264259000,"duration":10108.487,"attributes":{"$trigger.env.id":"cmvrlbn0d003y31…
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

### 🗺️ Observability Map (`.github/workflows/observability-map.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40626447269 — dark (conclusion: `failure`), 2026-10-28 03:23 UTC
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
   Start at  03:24:32
   Duration  121.32s (transform 112ms, setup 0ms, import 261ms, tests 120.98s, environment 0ms)
##[error]AssertionError: expected [ 'api.v2.packets.$.ts' ] to deeply equal []
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
