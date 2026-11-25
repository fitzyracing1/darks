<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16815 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45323376809 — dark (conclusion: `failure`), 2026-11-24 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"6948d1cd89201cd35dae417bbf4a72d7","message":"enqueue","spanId":"067b56b389d0f218","kind":3,"timestamp":1795493006118000,"duration":485.899,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms"…

<details><summary>End of the job log</summary>

```
{"traceId":"23f32c20ce0f6fa21f1423e57f3bf15c","message":"api_auth.tenant_usage","spanId":"0f78d1633cbc382b","kind":0,"timestamp":1795493006175000,"duration":3.317,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"0926146508838f7e2bff22546cdec09f","message":"api_auth.tenant_usage","spanId":"8508b3cabef38689","kind":0,"timestamp":1795493006175000,"duration":3.256,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"b44ae5c9d2820026f9567d3f48b4d4c6","message":"api_auth.tenant_usage","spanId":"254c8cc47582ae78","kind":0,"timestamp":1795493006175000,"duration":3.166,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"8cc08f8a179c926556304d9acc645b1b","message":"api_auth.tenant_usage","spanId":"e059baa3a9bdf002","kind":0,"timestamp":1795493006175000,"duration":3.166,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"01ba2e7b0a8532473d82a06d7041828e","message":"api_auth.tenant_usage","spanId":"14948f1d28e107e0","kind":0,"timestamp":1795493006175000,"duration":3.166,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"a2678cb01e272725e31ea0be62b4d93f","message":"api_auth.tenant_usage","spanId":"d4f541322e8f0314","kind":0,"timestamp":1795493006175000,"duration":3.217,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"0fbf14a259c809700b7a5aba0acbd6b0","message":"api_auth.tenant_usage","spanId":"b0cbc462ee3d0278","kind":0,"timestamp":1795493006175000,"duration":3.106,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
