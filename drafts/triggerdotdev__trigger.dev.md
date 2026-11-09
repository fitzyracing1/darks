<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16734 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/42559440200 — dark (conclusion: `failure`), 2026-11-09 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"fc2fd707f05d0fc4866437148dfc7df7","message":"sessionsRepository.listSessions","spanId":"91e0408dee583bb5","kind":0,"timestamp":1794197034974000,"duration":2439.075,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
{"traceId":"fdd5e6d09dfba1b6e873db108a3079ff","parentId":"debcc769409f6f2f","message":"flushBatch","spanId":"cc49894f74e5dd31","kind":0,"timestamp":1794197033791000,"duration":1576.787,"attributes":{"flush_id":"wbgPZG_t…
{"traceId":"fdd5e6d09dfba1b6e873db108a3079ff","parentId":"0f4bb50d09cd1ee6","message":"RunEngineTriggerTaskService.call()","spanId":"debcc769409f6f2f","kind":0,"timestamp":1794197033784000,"duration":8456.526,"attribute…
{"traceId":"fdd5e6d09dfba1b6e873db108a3079ff","parentId":"2ed685d1bb605c86","message":"TriggerTaskService.call()","spanId":"0f4bb50d09cd1ee6","kind":1,"timestamp":1794197033783000,"duration":9188.198,"attributes":{"$tri…
{"traceId":"fdd5e6d09dfba1b6e873db108a3079ff","message":"BatchTriggerV3Service.call()","spanId":"2ed685d1bb605c86","kind":1,"timestamp":1794197033782000,"duration":13187.548,"attributes":{"$trigger.env.id":"cmw8ql7hs005…
{"traceId":"8a54e534fa1603cd858561ebf756a111","message":"queryWithStats","spanId":"86bd436596b3f4ef","kind":0,"timestamp":1794197034825000,"duration":2472.017,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…
{"traceId":"fc2fd707f05d0fc4866437148dfc7df7","parentId":"91e0408dee583bb5","message":"query","spanId":"c2eac4cc0a7bcbc3","kind":0,"timestamp":1794197034974000,"duration":2157.243,"attributes":{"clickhouse.clientName":"…
{"traceId":"fc2fd707f05d0fc4866437148dfc7df7","message":"sessionsRepository.listSessions","spanId":"91e0408dee583bb5","kind":0,"timestamp":1794197034974000,"duration":2439.075,"attributes":{"repository.name":"clickhouse…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
