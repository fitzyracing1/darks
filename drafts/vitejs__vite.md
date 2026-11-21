<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 84014 · **Generated:** 2026-11-21T18:36:18.976Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/44724636863 — dark (conclusion: `failure`), 2026-11-20 11:05 UTC
- Dark since: 2026-11-20 09:52 UTC (first run of the current streak)
- Job / step: `Build&Test: node-26, windows-latest` → `Test serve (bundled dev)`
- Likely cause: 456|           'Timeout waiting for browser logs. Waiting for: ${nextTarget…

<details><summary>End of the job log</summary>

```
    455|         new Error(
       |         ^
    456|           `Timeout waiting for browser logs. Waiting for: ${nextTarget…
    457|         ),
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
   Duration  40.33s (tests 97%, setup 1%, import 1%)
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
