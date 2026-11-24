<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 10022 · **Generated:** 2026-11-24T06:47:07.198Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/45333192870 — dark (conclusion: `cancelled`), 2026-11-24 05:25 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Likely cause: run cancelled

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/45336353324 — dark (conclusion: `failure`), 2026-11-24 05:52 UTC
- Dark since: 2026-11-23 04:42 UTC (first run of the current streak)
- Job / step: `Language smoke (rust)` → `Run pnpm smoke smoke/debug.test.ts -t "^rust$"`
- Likely cause: AssertionError: expected [] to include 'inventory' (smoke/debug.test.ts:361)

<details><summary>End of the job log</summary>

```
    362|   let filled = "";
    363|   if (c.filledValue) {
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed (1)
      Tests  1 failed | 10 skipped (11)
   Start at  06:22:37
   Duration  8.51s (tests 55%, transform 29%, import 9%, environment 6%, setup 1%)
##[error]AssertionError: expected [] to include 'inventory'
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
