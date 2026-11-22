<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16801 · **Generated:** 2026-11-22T00:55:06.197Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44863939974 — dark (conclusion: `failure`), 2026-11-21 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"de9e32d9c360db7633b7fa5c2f617bbf","message":"sessionsRepository.listSessions","spanId":"1490202fa6a64659","kind":0,"timestamp":1795233777189000,"duration":3094.877,"attributes":{"repository.name":"clickhouse…

<details><summary>End of the job log</summary>

```
{"traceId":"93d0883b00c6c04df4da9acf31ce338b","message":"api_auth.tenant_usage","spanId":"3b952838b5ccac4f","kind":0,"timestamp":1795233777837000,"duration":3.216,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"83b594bc494b8a9501c84b967e28aa6d","message":"api_auth.tenant_usage","spanId":"5d843531806679d8","kind":0,"timestamp":1795233777837000,"duration":3.266,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"e222b2ed0f735b9f906982fab07a7c5e","message":"api_auth.tenant_usage","spanId":"b62ab1932280fdd5","kind":0,"timestamp":1795233777837000,"duration":3.236,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"5306af79bd8402afc53282571280e0d4","message":"api_auth.tenant_usage","spanId":"569cb6edb93328bf","kind":0,"timestamp":1795233777837000,"duration":3.247,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"83d98ea99de1547a4b7becaa18fca79c","message":"api_auth.tenant_usage","spanId":"f4230647237f198b","kind":0,"timestamp":1795233777837000,"duration":4.087,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"901071aafae55d5829454c87af982ef8","message":"api_auth.tenant_usage","spanId":"8381c7a0c69bacbb","kind":0,"timestamp":1795233777837000,"duration":3.226,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"c45e9a3a0bd6f290f4f1dc76d3179e58","message":"api_auth.tenant_usage","spanId":"5ea569b087a2bced","kind":0,"timestamp":1795233777837000,"duration":3.226,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
