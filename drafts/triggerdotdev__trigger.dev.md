<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16757 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/43362690032 — dark (conclusion: `failure`), 2026-11-13 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"832f8c5b287f1972f91748a452c55507","message":"ApiRunListPresenter.call","spanId":"bcf84f60121347e3","kind":1,"timestamp":1794542643645000,"duration":5196.943,"attributes":{"db.datasource":"control-plane-write…

<details><summary>End of the job log</summary>

```
{"traceId":"5fbbd57ed816767bb0999e6e34936eb8","message":"BatchTriggerV3Service.call()","spanId":"5ab8fdedba2a71f1","kind":1,"timestamp":1794542643400000,"duration":13043.714,"attributes":{"$trigger.env.id":"cmwegctkw005…
{"traceId":"a64777580ba7229f46c12de5ee2f4546","parentId":"968218a184f1047f","message":"query","spanId":"f49f71fb5da0e449","kind":0,"timestamp":1794542643586000,"duration":4545.113,"attributes":{"clickhouse.clientName":"…
{"traceId":"a64777580ba7229f46c12de5ee2f4546","parentId":"a695fc87ace582ef","message":"runsRepository.listRuns","spanId":"968218a184f1047f","kind":0,"timestamp":1794542643586000,"duration":5417.539,"attributes":{"reposi…
{"traceId":"a64777580ba7229f46c12de5ee2f4546","message":"ApiRunListPresenter.call","spanId":"a695fc87ace582ef","kind":1,"timestamp":1794542643579000,"duration":12685.318,"attributes":{"db.datasource":"control-plane-writ…
{"traceId":"832f8c5b287f1972f91748a452c55507","parentId":"605740ce078ec2c5","message":"query","spanId":"58375bb12464eff6","kind":0,"timestamp":1794542643647000,"duration":2654.727,"attributes":{"clickhouse.clientName":"…
{"traceId":"832f8c5b287f1972f91748a452c55507","parentId":"bcf84f60121347e3","message":"runsRepository.listRuns","spanId":"605740ce078ec2c5","kind":0,"timestamp":1794542643647000,"duration":3151.023,"attributes":{"reposi…
{"traceId":"832f8c5b287f1972f91748a452c55507","message":"ApiRunListPresenter.call","spanId":"bcf84f60121347e3","kind":1,"timestamp":1794542643645000,"duration":5196.943,"attributes":{"db.datasource":"control-plane-write…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
