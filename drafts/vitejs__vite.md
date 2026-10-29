<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83633 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/40480434396 — dark (conclusion: `failure`), 2026-10-27 09:23 UTC
- Dark since: 2026-10-27 08:50 UTC (first run of the current streak)
- Job / step: `Build&Test: node-20, ubuntu-latest` → `Test build`
- Likely cause: Tests  1 failed | 962 passed | 314 skipped (1277)

<details><summary>End of the job log</summary>

```
     43| })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 93 passed | 17 skipped (111)
      Tests  1 failed | 962 passed | 314 skipped (1277)
   Start at  09:26:16
   Duration  34.84s (tests 95%, setup 3%, import 1%, transform 1%)
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
