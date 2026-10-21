<!-- dark-draft: tailwindlabs/tailwindcss -->
<!-- draft-state: ready -->
# Upstream issue draft: tailwindlabs/tailwindcss

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tailwindlabs/tailwindcss/issues/new
- **Stars:** 97949 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Integration Tests" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Integration Tests** workflow (`.github/workflows/integration-tests.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/39281027860 — dark (conclusion: `failure`), 2026-10-19 15:50 UTC
- Dark since: 2026-10-19 15:50 UTC (first run of the current streak)
- Job / step: `Linux /  upgrade` → `Test upgrade`
- Likely cause: Error: Test timed out in 60000ms. (integrations/utils.ts:114)

<details><summary>End of the job log</summary>

```
    116|     {
 ❯ upgrade/upgrade-errors.test.ts:78:1
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 2 passed (3)
      Tests  1 failed | 66 passed (67)
   Start at  15:57:24
   Duration  206.01s (transform 247ms, setup 0ms, import 517ms, tests 431.96s, environment 0ms)
##[error]Error: Test timed out in 60000ms.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining tailwindcss!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
