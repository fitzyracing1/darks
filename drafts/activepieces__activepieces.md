<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25177 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Chat Evals" workflow failing on main since 2026-10-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Chat Evals** workflow (`.github/workflows/agent-evals.yml`) on `main` has been failing since 2026-10-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39733468921 — dark (conclusion: `failure`), 2026-10-22 06:21 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: Error: Hook timed out in 540000ms. (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:20)

<details><summary>End of the job log</summary>

```
     21|         const fixtures = evalFixtures.load().filter((fixture) => SCOPE…
     22|         const [fixtureResults, agreement] = await Promise.all([
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  88 passed | 1 skipped (89)
   Start at  06:26:14
   Duration  547.36s (transform 1.50s, setup 94ms, collect 16.74s, tests 541.31s, environment 3ms, prepare 1.14s)
##[error]Error: Hook timed out in 540000ms.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
