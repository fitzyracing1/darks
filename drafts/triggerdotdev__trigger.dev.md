<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16701 · **Generated:** 2026-11-03T00:52:20.983Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/41386083109 — dark (conclusion: `failure`), 2026-11-02 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"40a45b8f51dde6565af5bc9740f07497","message":"sessionsRepository.listSessions","spanId":"bd10b1f33a32c5e5","kind":0,"timestamp":1793592171892000,"duration":2220.148,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
{"traceId":"32a688a6d0678fe50928add7eadb3c67","parentId":"03efc2084d3cfadb","message":"enqueue","spanId":"d4ed22db79ad82b2","kind":3,"timestamp":1793592170344000,"duration":4356.409,"attributes":{"job_type":"schedule.tr…
{"traceId":"32a688a6d0678fe50928add7eadb3c67","parentId":"71b2819910060f79","message":"enqueueScheduledTask","spanId":"03efc2084d3cfadb","kind":0,"timestamp":1793592170344000,"duration":4543.38,"attributes":{"instanceId…
{"traceId":"32a688a6d0678fe50928add7eadb3c67","message":"registerNextTaskScheduleInstance","spanId":"71b2819910060f79","kind":0,"timestamp":1793592170336000,"duration":12163.05,"attributes":{"instanceId":"cmvyqgvoq0003w…
{"traceId":"3b82139e663040694da1e8201027fa77","message":"ApiRetrieveRunPresenter.call","spanId":"9db6c392690431f3","kind":1,"timestamp":1793592171262000,"duration":112.462,"attributes":{"$trigger.env.id":"cmvyqgwl100amw…
{"traceId":"40a45b8f51dde6565af5bc9740f07497","parentId":"bd10b1f33a32c5e5","message":"query","spanId":"e4a7325326a5d69f","kind":0,"timestamp":1793592171892000,"duration":1977.973,"attributes":{"clickhouse.clientName":"…
{"traceId":"40a45b8f51dde6565af5bc9740f07497","message":"sessionsRepository.listSessions","spanId":"bd10b1f33a32c5e5","kind":0,"timestamp":1793592171892000,"duration":2220.148,"attributes":{"repository.name":"clickhouse…
{"traceId":"d2698c87e4ceedfe5f700ede6d6277ad","message":"sessionRunManager.claimSessionRun","spanId":"20a0e945b12435ba","kind":0,"timestamp":1793592171943000,"duration":1885.869,"attributes":{"$transaction":true,"max_wa…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
