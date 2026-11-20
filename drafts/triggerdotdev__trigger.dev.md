<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16791 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "CodeQL")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44671493405 — dark (conclusion: `failure`), 2026-11-20 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"008fb291f865a63643cbcd09b0173c53","parentId":"9ff689e8cba726da","message":"enqueue","spanId":"dafbc409c4fbaa17","kind":3,"timestamp":1795147345762000,"duration":5286.852,"attributes":{"job_type":"schedule.tr…

<details><summary>End of the job log</summary>

```
{"traceId":"5ef2c270574926b706990c1e7fccae5c","message":"api_auth.tenant_usage","spanId":"34b998a6523a1302","kind":0,"timestamp":1795147347745000,"duration":3.196,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"9b8b7c8fa84721cc82995d625d0c3eef","message":"api_auth.tenant_usage","spanId":"098336e1d5fc2747","kind":0,"timestamp":1795147347745000,"duration":3.276,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"4777b0e832131c6fb6d52d87cca64090","message":"api_auth.tenant_usage","spanId":"718b115c42a6eadc","kind":0,"timestamp":1795147347745000,"duration":3.196,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"6cd7aeeaddc5506ae79c3cadb1b22517","message":"api_auth.tenant_usage","spanId":"9da417cf847537aa","kind":0,"timestamp":1795147347745000,"duration":3.136,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"ad500904e52c9878a52483da68479c50","message":"api_auth.tenant_usage","spanId":"5b15d81a741c5f3d","kind":0,"timestamp":1795147347745000,"duration":3.196,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"95babca8ca3a7313ae995de2c1bf034a","message":"api_auth.tenant_usage","spanId":"17d593b5d61cc553","kind":0,"timestamp":1795147347745000,"duration":3.216,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"ce427795940db9bfa08769f506cc8064","message":"api_auth.tenant_usage","spanId":"812929dc85f88f8a","kind":0,"timestamp":1795147347745000,"duration":3.206,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44735373594 — dark (conclusion: `cancelled`), 2026-11-20 12:23 UTC
- Dark since: 2026-11-20 12:23 UTC (first run of the current streak)
- Job / step: `Analyze (javascript-typescript)` → `Perform CodeQL Analysis`
- Likely cause: Canceling since a higher priority waiting request for CodeQL-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[2026-11-20 12:24:49] [build-stdout] Extracting /home/runner/work/trigger.dev/trigger.dev/apps/webapp/app/services/personalAccessToken.server.ts
[2026-11-20 12:24:49] [build-stdout] Done extracting /home/runner/work/trigger.dev/trigger.dev/apps/webapp/app/services/personalAccessToken.server.ts (65 ms)
[2026-11-20 12:24:49] [build-stdout] Extracting /home/runner/work/trigger.dev/trigger.dev/apps/webapp/app/services/personalAccessTokenExpiryEmails.server.ts
[2026-11-20 12:24:49] [build-stdout] Done extracting /home/runner/work/trigger.dev/trigger.dev/apps/webapp/app/services/personalAccessTokenExpiryEmails.server.ts (11 ms)
[2026-11-20 12:24:49] [build-stdout] Extracting /home/runner/work/trigger.dev/trigger.dev/apps/webapp/app/services/planCheckoutCaches.server.ts
[2026-11-20 12:24:49] [build-stdout] Done extracting /home/runner/work/trigger.dev/trigger.dev/apps/webapp/app/services/planCheckoutCaches.server.ts (2 ms)
[2026-11-20 12:24:49] [build-stdout] Extracting /home/runner/work/trigger.dev/trigger.dev/apps/webapp/app/services/platform.v3.server.ts
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
