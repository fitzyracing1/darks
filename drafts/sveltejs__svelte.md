<!-- dark-draft: sveltejs/svelte -->
<!-- draft-state: ready -->
# Upstream issue draft: sveltejs/svelte

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/sveltejs/svelte/issues/new
- **Stars:** 89831 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/sveltejs/svelte/actions/runs/44757801844 — dark (conclusion: `failure`), 2026-11-20 14:53 UTC
- Dark since: 2026-11-20 11:41 UTC (first run of the current streak)
- Job / step: `Tests (20, windows-latest)` → `Run pnpm test`
- Likely cause: Tests  1 failed | 8421 passed | 39 skipped (8461)

<details><summary>End of the job log</summary>

```
 ❯ packages/svelte/tests/signals/test.ts:758:2
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 45 passed (46)
      Tests  1 failed | 8421 passed | 39 skipped (8461)
   Start at  14:54:55
   Duration  143.74s (transform 88.54s, setup 0ms, import 85.07s, tests 309.82s, environment 15.21s)
 ELIFECYCLE  Test failed. See above for more details.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining svelte!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
