<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16761 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/43554494994 — dark (conclusion: `failure`), 2026-11-14 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"2cd8c3352bc49b9f0cbf761700711a4e","message":"sessionsRepository.listSessions","spanId":"7e820755c8ff00a5","kind":0,"timestamp":1794628973254000,"duration":2393.565,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
{"traceId":"dce81a05d88b5adf903cfb289d330bab","parentId":"b5988b8d6be2d1c7","message":"TriggerTaskService.call()","spanId":"c37de9d306ce11ce","kind":1,"timestamp":1794628972153000,"duration":8114.717,"attributes":{"$tri…
{"traceId":"dce81a05d88b5adf903cfb289d330bab","message":"BatchTriggerV3Service.call()","spanId":"b5988b8d6be2d1c7","kind":1,"timestamp":1794628972152000,"duration":11930.023,"attributes":{"$trigger.env.id":"cmwfvr59u005…
{"traceId":"2cd8c3352bc49b9f0cbf761700711a4e","parentId":"7e820755c8ff00a5","message":"query","spanId":"24ea17f8e6adf835","kind":0,"timestamp":1794628973254000,"duration":2194.63,"attributes":{"clickhouse.clientName":"c…
{"traceId":"2cd8c3352bc49b9f0cbf761700711a4e","message":"sessionsRepository.listSessions","spanId":"7e820755c8ff00a5","kind":0,"timestamp":1794628973254000,"duration":2393.565,"attributes":{"repository.name":"clickhouse…
{"traceId":"d10c53653e5ac5c88554c2d46933b9a4","message":"sessionRunManager.claimSessionRun","spanId":"68ff20080b550db2","kind":0,"timestamp":1794628973347000,"duration":2650.841,"attributes":{"$transaction":true,"max_wa…
{"traceId":"d5d07de8aac64b91a93883acd06433a7","parentId":"96165f69b7f6dd3c","message":"doFlushBatch","spanId":"8f5848df0e66a363","kind":0,"timestamp":1794628973803000,"duration":2218.425,"attributes":{"event_count":4,"d…
{"traceId":"d5d07de8aac64b91a93883acd06433a7","message":"flushBatch","spanId":"96165f69b7f6dd3c","kind":0,"timestamp":1794628973803000,"duration":2387.173,"attributes":{"flush_id":"7kPH85rEbc4b9b1gMXrtr","event_count":4…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
