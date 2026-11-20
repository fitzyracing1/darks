<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16786 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44455332159 — dark (conclusion: `failure`), 2026-11-19 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"eccb2d1a300798454e055525904aebdc","parentId":"3a8cf8c715df22c4","message":"enqueue","spanId":"f4ee5b0de61e5783","kind":3,"timestamp":1795060967595000,"duration":285.008,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"65f1108448fb281e7d72caa0f81f659b","message":"api_auth.tenant_usage","spanId":"05d5daee2223e22d","kind":0,"timestamp":1795060968055000,"duration":2.986,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"103767fad5bd3bc3dac7e83e00b4901f","message":"api_auth.tenant_usage","spanId":"c9229498240af42a","kind":0,"timestamp":1795060968055000,"duration":3.036,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"6d822ae2a6897fb60bb57d8132b8a93f","message":"api_auth.tenant_usage","spanId":"0ccfd3ad10125e38","kind":0,"timestamp":1795060968055000,"duration":3.005,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"a14199027d11d17bcf07ce26e11db2a6","message":"api_auth.tenant_usage","spanId":"41ad20f161ea5425","kind":0,"timestamp":1795060968055000,"duration":3.026,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"3d8ea0737b735ae1c5783f0753885ddb","message":"api_auth.tenant_usage","spanId":"32186c38361c0dca","kind":0,"timestamp":1795060968055000,"duration":3.006,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"0ed22aeb4d8b1e94cf202918ae31b459","message":"api_auth.tenant_usage","spanId":"72340fc90957b651","kind":0,"timestamp":1795060968055000,"duration":3.006,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"7591bd267aa89eb4e9d9d3cdff6c40d8","message":"api_auth.tenant_usage","spanId":"b3869da555648491","kind":0,"timestamp":1795060968055000,"duration":3.006,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
