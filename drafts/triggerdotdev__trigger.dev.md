<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16742 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🚀 Publish Trigger.dev Docker" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🚀 Publish Trigger.dev Docker** workflow (`.github/workflows/publish.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/42901509979 — dark (conclusion: `failure`), 2026-11-10 21:04 UTC
- Dark since: 2026-11-10 21:04 UTC (first run of the current streak)
- Job / step: `units / webapp / 🧪 Unit Tests: Webapp (2, 6)` → `🧪 Run Webapp Unit Tests`
- Likely cause: webapp#test: command (/home/runner/work/trigger.dev/trigger.dev/apps/webapp) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test --run --reporter=default --reporter=blob --shard=2/6 --passWithNoTests exited (1)

<details><summary>End of the job log</summary>

```
{"cronJobs":[{"job":"scanConcurrencySets","cron":"*/10 * * * *","jitterInMs":60000},{"job":"processMarkedRuns","cron":"*/5 * * * *","jitterInMs":30000}],"timestamp":"2026-11-10T21:06:13.722Z","name":"RunQueueWorker","me…
✅ Starting run engine worker
{"workers":1,"tasksPerWorker":10,"concurrency":{"workers":1,"tasksPerWorker":10,"limit":10},"timestamp":"2026-11-10T21:06:13.724Z","name":"RunEngineWorker","message":"Starting worker","level":"info"}
{"consumerCount":2,"drrQuantum":5,"defaultConcurrency":10,"consumersEnabled":true,"timestamp":"2026-11-10T21:06:13.725Z","name":"RunEngine","message":"BatchQueue initialized","level":"info"}
stdout | test/engine/triggerTask.mollifier.test.ts > RunEngineTriggerTaskService > mollifier · pass_through action does NOT call buffer.accept
{"timestamp":"2026-11-10T21:06:13.730Z","name":"RunQueue","message":"Subscribed to rq:redrive","level":"log"}
stdout | test/engine/triggerTask.mollifier.test.ts > RunEngineTriggerTaskService > mollifier · pass_through action does NOT call buffer.accept
##[error]webapp#test: command (/home/runner/work/trigger.dev/trigger.dev/apps/webapp) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test --run --reporter=default --reporter=blob --shard=2/6 --passWithNoTests ex…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
