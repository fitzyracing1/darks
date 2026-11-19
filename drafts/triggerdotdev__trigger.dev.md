<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16781 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44234339837 — dark (conclusion: `failure`), 2026-11-18 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"605d401a62545487f61a547dfcfb33a0","parentId":"4f6f75997718b6b0","message":"enqueue","spanId":"d36c819c77580dfc","kind":3,"timestamp":1794974641162000,"duration":1723.555,"attributes":{"job_type":"expireRun",…

<details><summary>End of the job log</summary>

```
{"traceId":"8e1c1474ba80d57596c943449685e175","message":"api_auth.tenant_usage","spanId":"3a1a95838e24dc1c","kind":0,"timestamp":1794974642977000,"duration":3.317,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"29c96003f84bb43f9fd0829ca877179f","message":"api_auth.tenant_usage","spanId":"e6372bccce5c497d","kind":0,"timestamp":1794974642977000,"duration":3.246,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"363c83493f5af7714482cc9b9db751cc","message":"api_auth.tenant_usage","spanId":"23067e29b1a10075","kind":0,"timestamp":1794974642977000,"duration":3.276,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"822a2bbfe5f5c771519bac6c632b45ae","message":"api_auth.tenant_usage","spanId":"82f5cab7df08ff80","kind":0,"timestamp":1794974642977000,"duration":3.306,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"7d88886cb2798a1263f77358269bedee","message":"api_auth.tenant_usage","spanId":"8d77ff7fc6b17e51","kind":0,"timestamp":1794974642977000,"duration":3.497,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"7635ff522b8c72c5b7baadd413f3eb1f","message":"api_auth.tenant_usage","spanId":"e033e94a3f0601f3","kind":0,"timestamp":1794974642977000,"duration":3.286,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"8d8ecd22b12c90d3ed54a7a3b19f33db","message":"api_auth.tenant_usage","spanId":"498f27db556af61e","kind":0,"timestamp":1794974642977000,"duration":3.476,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
