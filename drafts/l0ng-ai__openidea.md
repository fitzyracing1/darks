<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9392 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/44430381528 — dark (conclusion: `cancelled`), 2026-11-19 00:36 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Text catalog`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/44404781240 — dark (conclusion: `failure`), 2026-11-18 21:45 UTC
- Dark since: 2026-11-18 00:43 UTC (first run of the current streak)
- Job / step: `Language smoke (java)` → `Run pnpm smoke smoke/debug.test.ts -t "^java$"`
- Likely cause: Error: timed out waiting for the breakpoint after the trace (smoke/debug.test.ts:290)

<details><summary>End of the job log</summary>

```
 ❯ traceStream smoke/debug.test.ts:596:19
 ❯ smoke smoke/debug.test.ts:530:22
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed (1)
      Tests  1 failed | 10 skipped (11)
   Start at  22:04:09
   Duration  80.41s (tests 96%, transform 2%, environment 1%, import 1%)
##[error]Error: timed out waiting for the breakpoint after the trace
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
