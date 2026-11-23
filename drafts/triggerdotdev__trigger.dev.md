<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16803 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44983129067 — dark (conclusion: `failure`), 2026-11-22 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"f64372d607ce601864e3212a9fec57f9","parentId":"a4f71ecdad0c9194","message":"enqueue","spanId":"99cedbd707639a7d","kind":3,"timestamp":1795320196551000,"duration":500.304,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"e11a0f9a3eba8a6109460fad042b1267","message":"api_auth.tenant_usage","spanId":"c3136681ef26a6c1","kind":0,"timestamp":1795320197149000,"duration":18.555,"attributes":{"forceRecording":true,"tenant_usage.organ…
{"traceId":"2c3cbfc586aa1744b9ed68266ed218a3","message":"api_auth.tenant_usage","spanId":"c64acf9608b10195","kind":0,"timestamp":1795320197149000,"duration":5.21,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"19145ae20909d0b307ed962f4ae1e888","message":"api_auth.tenant_usage","spanId":"21b9b5ed49b2160d","kind":0,"timestamp":1795320197149000,"duration":30.287,"attributes":{"forceRecording":true,"tenant_usage.organ…
{"traceId":"f58f7ea3c2c991546b823cb9ce1b78ce","message":"api_auth.tenant_usage","spanId":"396654e89d4b81dd","kind":0,"timestamp":1795320197149000,"duration":6.061,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"5bd1ce111acba1b657b50a2dfe55fd66","message":"api_auth.tenant_usage","spanId":"c958d2d99a40573a","kind":0,"timestamp":1795320197149000,"duration":3.848,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"44d0c06ce2057eb618d6b37cf0f70c14","message":"api_auth.tenant_usage","spanId":"8f04084dfdd4bf19","kind":0,"timestamp":1795320197149000,"duration":3.787,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"5668cc97ca9d5b3a434a1bbf6493d5da","message":"api_auth.tenant_usage","spanId":"3b33d9a688633287","kind":0,"timestamp":1795320197149000,"duration":3.597,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
