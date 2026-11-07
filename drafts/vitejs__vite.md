<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83857 · **Generated:** 2026-11-07T18:36:17.303Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/42211932627 — dark (conclusion: `failure`), 2026-11-06 11:40 UTC
- Dark since: 2026-11-06 11:40 UTC (first run of the current streak)
- Job / step: `Build&Test: node-20, ubuntu-latest` → `Test serve`
- Likely cause: Caused by: Error: Matcher did not succeed in time.

<details><summary>End of the job log</summary>

```
       |          ^
    1172|       await page.evaluate(() => {
    1173|         ;(window as any).__notReloaded = true
Caused by: Error: Matcher did not succeed in time.
 ❯ playground/hmr/__tests__/hmr.spec.ts:1169:7
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
