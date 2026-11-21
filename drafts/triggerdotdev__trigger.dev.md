<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16796 · **Generated:** 2026-11-21T06:41:51.202Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🚀 Publish Trigger.dev Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

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

### 🚀 Publish Trigger.dev Docker (`.github/workflows/publish.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/44809140938 — dark (conclusion: `failure`), 2026-11-20 20:11 UTC
- Dark since: 2026-11-20 20:11 UTC (first run of the current streak)
- Job / step: `units / e2e-webapp / 🧪 E2E Tests: Webapp (1, 1)` → `🧪 Run Webapp E2E Tests`
- Likely cause: Tests  1 failed | 188 passed | 1 skipped (190)

<details><summary>End of the job log</summary>

```
    228| }
 ❯ app/routes/engine.v1.worker-actions.runs.$runFriendlyId.snapshots.$snapshotFriendlyId.continue.e2e.test.ts:112:5
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 22 passed (23)
      Tests  1 failed | 188 passed | 1 skipped (190)
   Start at  20:14:09
   Duration  132.45s (transform 1.52s, setup 0ms, import 10.07s, tests 494.26s, environment 1ms)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
