<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16829 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45752466759 — dark (conclusion: `failure`), 2026-11-26 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"d30a9d50d0ea816a281cc6572ef725ac","message":"queryWithStats","spanId":"cdb93a0ab6d72040","kind":0,"timestamp":1795665759172000,"duration":2429.123,"attributes":{"clickhouse.clientName":"query-clickhouse","cl…

<details><summary>End of the job log</summary>

```
{"traceId":"fe9ae5f2a9b3daf59d5947943037ce09","message":"api_auth.tenant_usage","spanId":"2a04b69f2ddc28b9","kind":0,"timestamp":1795665759779000,"duration":3.747,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"582515d9968402d01e473da161c901d2","message":"api_auth.tenant_usage","spanId":"1205757ea693fd09","kind":0,"timestamp":1795665759779000,"duration":3.236,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"ef2f30fe9b8de0922b3e6ebf8cfc2a78","message":"api_auth.tenant_usage","spanId":"ada6bfa43dfdd3e3","kind":0,"timestamp":1795665759779000,"duration":3.396,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"89b15bdcb44b7e77f433ab931e1a80bc","message":"api_auth.tenant_usage","spanId":"61af6b8c06510bd6","kind":0,"timestamp":1795665759779000,"duration":3.466,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"71419fea0019c4bb0051a8e2c3c53387","message":"api_auth.tenant_usage","spanId":"a88564852c9e8b34","kind":0,"timestamp":1795665759779000,"duration":3.276,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"ceaa32cfc26ba527d4e4fdb07dcfc4d6","message":"api_auth.tenant_usage","spanId":"365f2feb9f5ce2d5","kind":0,"timestamp":1795665759779000,"duration":3.216,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"83e9f5d9e16d3c07adb2599e4420f611","message":"api_auth.tenant_usage","spanId":"0e12554e611bd025","kind":0,"timestamp":1795665759779000,"duration":4.238,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
