<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16774 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/43801468823 — dark (conclusion: `failure`), 2026-11-16 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"e59e8a7a408ab9d2bbe65c3d15b533dd","message":"sessionsRepository.listSessions","spanId":"949927c34c02a7a2","kind":0,"timestamp":1794801828492000,"duration":2410.117,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
{"traceId":"f5b4bd3daf716d186449267d36ceeffb","parentId":"4ed1bc6a2f983b90","message":"RunEngineTriggerTaskService.call()","spanId":"95b9d28c4b250c5b","kind":0,"timestamp":1794801827488000,"duration":7293.219,"attribute…
{"traceId":"f5b4bd3daf716d186449267d36ceeffb","parentId":"bdd8e488d6aa8762","message":"TriggerTaskService.call()","spanId":"4ed1bc6a2f983b90","kind":1,"timestamp":1794801827487000,"duration":7926.241,"attributes":{"$tri…
{"traceId":"f5b4bd3daf716d186449267d36ceeffb","message":"BatchTriggerV3Service.call()","spanId":"bdd8e488d6aa8762","kind":1,"timestamp":1794801827479000,"duration":18695.305,"attributes":{"$trigger.env.id":"cmwiqo1aq005…
{"traceId":"6fe42e9533fb762322afbcfd77344ccc","message":"CreateBatchService.createBatch()","spanId":"68debc794db6e5dd","kind":1,"timestamp":1794801827587000,"duration":2481.912,"attributes":{"$trigger.env.id":"cmwiqo1dp…
{"traceId":"b5afcda22c8861f154167d9acbbac566","message":"ApiRetrieveRunPresenter.call","spanId":"05671a0c61ba3d92","kind":1,"timestamp":1794801827899000,"duration":421.814,"attributes":{"$trigger.env.id":"cmwiqo1m900ah2…
{"traceId":"e59e8a7a408ab9d2bbe65c3d15b533dd","parentId":"949927c34c02a7a2","message":"query","spanId":"00f2124df8c98997","kind":0,"timestamp":1794801828492000,"duration":2215.28,"attributes":{"clickhouse.clientName":"c…
{"traceId":"e59e8a7a408ab9d2bbe65c3d15b533dd","message":"sessionsRepository.listSessions","spanId":"949927c34c02a7a2","kind":0,"timestamp":1794801828492000,"duration":2410.117,"attributes":{"repository.name":"clickhouse…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
