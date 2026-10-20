<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16585 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🚀 Publish Trigger.dev Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39367297497 — dark (conclusion: `failure`), 2026-10-20 04:00 UTC
- Dark since: 2026-10-08 04:02 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"f2b93ac859f203f4309037379364b9f4","message":"remove team member","spanId":"c78ba14d51745389","kind":0,"timestamp":1792469069155000,"duration":3195.683,"attributes":{"$transaction":true,"isolation_level":"Ser…

<details><summary>End of the job log</summary>

```
{"traceId":"8a29df160c25453c78b217fdf623fb05","parentId":"0c6bbf6fb194dcdf","message":"enqueue","spanId":"7bdf7a20f77784ad","kind":3,"timestamp":1792469067313000,"duration":991.487,"attributes":{"job_type":"schedule.tri…
{"traceId":"8a29df160c25453c78b217fdf623fb05","parentId":"197121321817e99f","message":"enqueueScheduledTask","spanId":"0c6bbf6fb194dcdf","kind":0,"timestamp":1792469067313000,"duration":1227.056,"attributes":{"instanceI…
{"traceId":"8a29df160c25453c78b217fdf623fb05","message":"registerNextTaskScheduleInstance","spanId":"197121321817e99f","kind":0,"timestamp":1792469067307000,"duration":7002.521,"attributes":{"instanceId":"cmvg5svuc0003y…
{"traceId":"719d48f85a29f9735561aefd7938f2ec","parentId":"5edb4f189183f6d0","message":"query","spanId":"e19ac34fa509f526","kind":0,"timestamp":1792469067845000,"duration":2176.623,"attributes":{"clickhouse.clientName":"…
{"traceId":"719d48f85a29f9735561aefd7938f2ec","parentId":"9f9b2a339210d203","message":"runsRepository.listRuns","spanId":"5edb4f189183f6d0","kind":0,"timestamp":1792469067844000,"duration":2428.403,"attributes":{"reposi…
{"traceId":"719d48f85a29f9735561aefd7938f2ec","message":"ApiRunListPresenter.call","spanId":"9f9b2a339210d203","kind":1,"timestamp":1792469067843000,"duration":3656.811,"attributes":{"db.datasource":"control-plane-write…
{"traceId":"f2b93ac859f203f4309037379364b9f4","message":"remove team member","spanId":"c78ba14d51745389","kind":0,"timestamp":1792469069155000,"duration":3195.683,"attributes":{"$transaction":true,"isolation_level":"Ser…
##[error]Process completed with exit code 1.
```

</details>

### 🚀 Publish Trigger.dev Docker (`.github/workflows/publish.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/39474093270 — dark (conclusion: `failure`), 2026-10-20 18:22 UTC
- Dark since: 2026-10-20 12:02 UTC (first run of the current streak)
- Job / step: `publish-webapp / publish` → `🐳 Build image and push to GitHub Container Registry`
- Likely cause: failed with: failed to solve: process "/bin/sh -c SENTRY_AUTH_TOKEN=$(cat /run/secrets/sentry_auth_token)     pnpm run build --filter=webapp..." did not complete successfully: exit code: 1

<details><summary>End of the job log</summary>

```
#99 80.90 Failed:    webapp#build
#99 80.90
#99 80.90  ERROR  run failed: command  exited (1)
#99 81.13  ELIFECYCLE  Command failed with exit code 1.
------
Build Summary: https://depot.dev/orgs/0qjnp57p6r/projects/g2k5ln95n6/builds/6jxc7p7xf0
failed to solve: process "/bin/sh -c SENTRY_AUTH_TOKEN=[redacted] /run/secrets/sentry_auth_token)     pnpm run build --filter=webapp..." did not complete successfully: exit code: 1
##[error]failed with: failed to solve: process "/bin/sh -c SENTRY_AUTH_TOKEN=[redacted] /run/secrets/sentry_auth_token)     pnpm run build --filter=webapp..." did not complete successfully: exit code: 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
