<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83901 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/43401500096 — dark (conclusion: `failure`), 2026-11-13 09:27 UTC
- Dark since: 2026-11-13 08:17 UTC (first run of the current streak)
- Job / step: `Build&Test: node-26, windows-latest` → `Test serve (bundled dev)`
- Likely cause: 422|           'Timeout waiting for browser logs. Waiting for: ${nextTarget…

<details><summary>End of the job log</summary>

```
    420|       reject(
    421|         new Error(
       |         ^
    422|           `Timeout waiting for browser logs. Waiting for: ${nextTarget…
    423|         ),
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
