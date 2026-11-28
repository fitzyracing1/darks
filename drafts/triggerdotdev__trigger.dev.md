<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16837 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/46105502980 — dark (conclusion: `failure`), 2026-11-28 04:00 UTC
- Dark since: 2026-11-28 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: Tests  4 failed | 260 passed (264)

<details><summary>End of the job log</summary>

```
{"traceId":"8588ae1d0373803f93b5f62aaef71e7c","message":"api_auth.tenant_usage","spanId":"1250f76d9934717f","kind":0,"timestamp":1795838556969000,"duration":5.35,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"dade1afba9b7bc94b9e75395b2b44b45","message":"api_auth.tenant_usage","spanId":"9e329946395edc13","kind":0,"timestamp":1795838556969000,"duration":5.16,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"fe478574e5a8e9cf49ef0aa4293d590a","message":"api_auth.tenant_usage","spanId":"b819a166fc479ded","kind":0,"timestamp":1795838556969000,"duration":5.31,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"142596d6e31aa1de7793d70162de89ec","message":"api_auth.tenant_usage","spanId":"6711bc0f185a44ac","kind":0,"timestamp":1795838556969000,"duration":5.26,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"668bdc7ae7b0e2cfbe35967ec37efb35","message":"api_auth.tenant_usage","spanId":"bd3c7f50e6be5072","kind":0,"timestamp":1795838556969000,"duration":5.28,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"71d4556d9fec2cb1ebc12e0b456cfc62","message":"api_auth.tenant_usage","spanId":"7189f019b6f4be08","kind":0,"timestamp":1795838556969000,"duration":3.227,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"1f8b8834b42e9d0104fd115e6a7ae7b5","message":"api_auth.tenant_usage","spanId":"2edd35002b134281","kind":0,"timestamp":1795838556969000,"duration":3.166,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
