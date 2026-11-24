<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 84066 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/45364705461 — dark (conclusion: `failure`), 2026-11-24 09:23 UTC
- Dark since: 2026-11-24 08:04 UTC (first run of the current streak)
- Job / step: `Build&Test: node-26, windows-latest` → `Test serve (bundled dev)`
- Likely cause: Tests  1 failed | 885 passed | 502 skipped | 63 todo (1451)

<details><summary>End of the job log</summary>

```
    457|         ),
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 90 passed | 23 skipped (114)
      Tests  1 failed | 885 passed | 502 skipped | 63 todo (1451)
   Start at  09:25:34
   Duration  38.95s (tests 97%, import 1%, setup 1%)
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
