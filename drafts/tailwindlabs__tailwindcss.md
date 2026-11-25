<!-- dark-draft: tailwindlabs/tailwindcss -->
<!-- draft-state: ready -->
# Upstream issue draft: tailwindlabs/tailwindcss

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tailwindlabs/tailwindcss/issues/new
- **Stars:** 98784 · **Generated:** 2026-11-25T06:46:34.527Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Integration Tests" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Integration Tests** workflow (`.github/workflows/integration-tests.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/45455596771 — dark (conclusion: `failure`), 2026-11-24 18:04 UTC
- Dark since: 2026-11-24 18:04 UTC (first run of the current streak)
- Job / step: `Linux /  cli` → `Test cli`
- Likely cause: AssertionError: expected '' to contain '.flex' (integrations/cli/index.test.ts:488)

<details><summary>End of the job log</summary>

```
    490|   )
 ❯ utils.ts:632:14
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 3 passed (4)
      Tests  1 failed | 67 passed | 2 skipped (70)
   Start at  18:07:13
   Duration  92.33s (transform 239ms, setup 0ms, import 786ms, tests 134.71s, environment 1ms)
##[error]AssertionError: expected '' to contain '.flex'
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining tailwindcss!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
