<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16666 · **Generated:** 2026-10-31T18:33:59.606Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🛡️ E2E Tests: Webapp Auth (full)** workflow (`.github/workflows/e2e-webapp-auth-full.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/41166766436 — dark (conclusion: `failure`), 2026-10-31 04:00 UTC
- Dark since: 2026-10-27 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"38aec45a771f1bc0eb34ff49a34b687e","parentId":"6cbde81fe487ebb2","message":"enqueue","spanId":"01f4877bea04c96a","kind":3,"timestamp":1793419377616000,"duration":319.23,"attributes":{"job_type":"expireRun","j…

<details><summary>End of the job log</summary>

```
{"traceId":"38aec45a771f1bc0eb34ff49a34b687e","parentId":"53913e45c4f7bb63","message":"doFlushBatch","spanId":"8149907372c2471f","kind":0,"timestamp":1793419377617000,"duration":771.642,"attributes":{"event_count":1,"de…
{"traceId":"38aec45a771f1bc0eb34ff49a34b687e","parentId":"d5bf0abba063e38c","message":"flushBatch","spanId":"53913e45c4f7bb63","kind":0,"timestamp":1793419377617000,"duration":865.068,"attributes":{"flush_id":"H57zEwCTc…
{"traceId":"38aec45a771f1bc0eb34ff49a34b687e","parentId":"c75f71956638be93","message":"RunEngineTriggerTaskService.call()","spanId":"d5bf0abba063e38c","kind":0,"timestamp":1793419377611000,"duration":6896.909,"attribute…
{"traceId":"38aec45a771f1bc0eb34ff49a34b687e","parentId":"ba45e91dafe927b8","message":"TriggerTaskService.call()","spanId":"c75f71956638be93","kind":1,"timestamp":1793419377611000,"duration":7455.931,"attributes":{"$tri…
{"traceId":"38aec45a771f1bc0eb34ff49a34b687e","message":"BatchTriggerV3Service.call()","spanId":"ba45e91dafe927b8","kind":1,"timestamp":1793419377610000,"duration":10814.511,"attributes":{"$trigger.env.id":"cmvvvlc5g005…
{"traceId":"bea719a02958805e876a3a211742ed72","message":"ApiRetrieveRunPresenter.call","spanId":"d6768eeeb8f72447","kind":1,"timestamp":1793419378001000,"duration":97.073,"attributes":{"$trigger.env.id":"cmvvvlcg600ar0e…
{"traceId":"ef58d02987e2447ccc3ee549a00995d7","message":"ApiRetrieveRunPresenter.call","spanId":"ad65e2ca56e53a78","kind":1,"timestamp":1793419378066000,"duration":107.873,"attributes":{"$trigger.env.id":"cmvvvlci200bl0…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
