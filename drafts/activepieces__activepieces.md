<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25623 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Chat Evals" workflow failing on main since 2026-10-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Chat Evals** workflow (`.github/workflows/agent-evals.yml`) on `main` has been failing since 2026-10-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/44470730112 — dark (conclusion: `failure`), 2026-11-19 06:14 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: AssertionError: see the eval report above for the failing checks: expected [ 'guard-duplicate-flow-not-agent' ] to deeply equal [] (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:58)

<details><summary>End of the job log</summary>

```
     59|     })
     60| })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 89 passed (90)
   Start at  06:19:30
   Duration  460.18s (tests 96%, import 3%, transform 1%)
##[error]AssertionError: see the eval report above for the failing checks: expected [ 'guard-duplicate-flow-not-agent' ] to deeply equal []
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
