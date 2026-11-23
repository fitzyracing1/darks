<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16803 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45109249759 — dark (conclusion: `failure`), 2026-11-23 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"c7a610d2447d63185122f1a5d18ee789","parentId":"7e3177acdaba4e06","message":"enqueue","spanId":"ffc648f7f1432980","kind":3,"timestamp":1795406571960000,"duration":295.738,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"61d001aa80b952972777438c65761385","message":"api_auth.tenant_usage","spanId":"1e6d0d49aac6d2ed","kind":0,"timestamp":1795406572427000,"duration":3.076,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"dc49d114a4942cc6c5fcc37ab317afa4","message":"api_auth.tenant_usage","spanId":"4dcd461f1bdeba66","kind":0,"timestamp":1795406572427000,"duration":4.909,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"0bcb0f569c2a3d76f0ea4cce874cf7d7","message":"api_auth.tenant_usage","spanId":"8c5bb1f52cf75427","kind":0,"timestamp":1795406572427000,"duration":12.334,"attributes":{"forceRecording":true,"tenant_usage.organ…
{"traceId":"d2c80cb2cd90003a5486ca97e4e99cfb","message":"api_auth.tenant_usage","spanId":"89ade1fc0202a219","kind":0,"timestamp":1795406572427000,"duration":5.881,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"49ca527d689d41c62e70e01e9d9ce3b6","message":"api_auth.tenant_usage","spanId":"b56a360ac25c2127","kind":0,"timestamp":1795406572427000,"duration":5.28,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"d39788a4399f2fc12115f59601b2d432","message":"api_auth.tenant_usage","spanId":"8b611a710aa45638","kind":0,"timestamp":1795406572427000,"duration":13.185,"attributes":{"forceRecording":true,"tenant_usage.organ…
{"traceId":"a7e54475a2efca3e87c365051336cc6c","message":"api_auth.tenant_usage","spanId":"8765734f1a3b4739","kind":0,"timestamp":1795406572427000,"duration":9.187,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
