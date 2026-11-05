<!-- dark-draft: tailwindlabs/tailwindcss -->
<!-- draft-state: ready -->
# Upstream issue draft: tailwindlabs/tailwindcss

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tailwindlabs/tailwindcss/issues/new
- **Stars:** 98063 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Integration Tests" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Integration Tests** workflow (`.github/workflows/integration-tests.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/41912985986 — dark (conclusion: `failure`), 2026-11-04 21:06 UTC
- Dark since: 2026-11-04 18:27 UTC (first run of the current streak)
- Job / step: `Linux /  upgrade` → `Test upgrade`
- Likely cause: Error: Test timed out in 60000ms. (integrations/utils.ts:118)

<details><summary>End of the job log</summary>

```
    120|     {
 ❯ upgrade/upgrade-errors.test.ts:78:1
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 2 passed (3)
      Tests  1 failed | 66 passed (67)
   Start at  21:10:08
   Duration  202.65s (transform 180ms, setup 0ms, import 449ms, tests 426.22s, environment 0ms)
##[error]Error: Test timed out in 60000ms.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining tailwindcss!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
