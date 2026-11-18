<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16777 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44014137672 — dark (conclusion: `failure`), 2026-11-17 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"58a6345bd43a3696989c44281d0516a3","parentId":"61bb7c097389c8e6","message":"enqueue","spanId":"5d1b2767a6974ecd","kind":3,"timestamp":1794888162288000,"duration":647.659,"attributes":{"job_type":"schedule.tri…

<details><summary>End of the job log</summary>

```
Express server closed gracefully.
{"traceId":"44a042a8b243edb6c63ca0613193548b","message":"ApiRunResultPresenter.call","spanId":"3d3208172d8eeeb0","kind":1,"timestamp":1794888162057000,"duration":4895.171,"attributes":{"$trigger.env.id":"cmwk62hdb001159…
{"traceId":"8740f5f2bd70f8975a24aac064fc3f07","parentId":"0fa44de771977df6","message":"query","spanId":"a84f50486fa8d85e","kind":0,"timestamp":1794888162203000,"duration":6125.667,"attributes":{"clickhouse.clientName":"…
{"traceId":"8740f5f2bd70f8975a24aac064fc3f07","message":"runsRepository.countRuns","spanId":"0fa44de771977df6","kind":0,"timestamp":1794888162202000,"duration":6745.923,"attributes":{"repository.name":"clickhouse","orga…
{"traceId":"58a6345bd43a3696989c44281d0516a3","parentId":"61bb7c097389c8e6","message":"enqueue","spanId":"5d1b2767a6974ecd","kind":3,"timestamp":1794888162288000,"duration":647.659,"attributes":{"job_type":"schedule.tri…
{"traceId":"58a6345bd43a3696989c44281d0516a3","parentId":"b2a12878c7afb5f6","message":"enqueueScheduledTask","spanId":"61bb7c097389c8e6","kind":0,"timestamp":1794888162288000,"duration":803.291,"attributes":{"instanceId…
{"traceId":"58a6345bd43a3696989c44281d0516a3","message":"registerNextTaskScheduleInstance","spanId":"b2a12878c7afb5f6","kind":0,"timestamp":1794888162279000,"duration":9882.526,"attributes":{"instanceId":"cmwk62hnp000h5…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
