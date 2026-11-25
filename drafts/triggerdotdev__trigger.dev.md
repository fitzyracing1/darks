<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16820 · **Generated:** 2026-11-25T18:39:22.716Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45543831127 — dark (conclusion: `failure`), 2026-11-25 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"77c5d8149fefa95468b14701853470e4","parentId":"9f509340f0e3f53b","message":"enqueue","spanId":"ca7b0cda81729072","kind":3,"timestamp":1795579375348000,"duration":334.891,"attributes":{"job_type":"expireRun","…

<details><summary>End of the job log</summary>

```
{"traceId":"db71303637c695199c9526e0abf35c01","message":"api_auth.tenant_usage","spanId":"a04611d0602bce6d","kind":0,"timestamp":1795579375780000,"duration":5.581,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"340c4122541ff2c1db352376b1c04a7d","message":"api_auth.tenant_usage","spanId":"a5d39b250080b41d","kind":0,"timestamp":1795579375780000,"duration":5.521,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"f2ac8888fe1b1502d04f8db9a2e6cf19","message":"api_auth.tenant_usage","spanId":"3b463ea38dc66c0e","kind":0,"timestamp":1795579375780000,"duration":5.931,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"2de72a31714237c6055efcb32549baa2","message":"api_auth.tenant_usage","spanId":"8af803f0bf94112f","kind":0,"timestamp":1795579375780000,"duration":5.6,"attributes":{"forceRecording":true,"tenant_usage.organiza…
{"traceId":"9337993c8dcec31be592b7f64534985a","message":"api_auth.tenant_usage","spanId":"9e4f617c93694850","kind":0,"timestamp":1795579375780000,"duration":5.21,"attributes":{"forceRecording":true,"tenant_usage.organiz…
{"traceId":"2dc8f47bde1b0bd00dff4ffca3ac94e0","message":"api_auth.tenant_usage","spanId":"0b922d561be30aaa","kind":0,"timestamp":1795579375780000,"duration":7.594,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"b0dea9ccaa5660888475973de2d0bf99","message":"api_auth.tenant_usage","spanId":"0876294c5e82a1ea","kind":0,"timestamp":1795579375780000,"duration":5.841,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
