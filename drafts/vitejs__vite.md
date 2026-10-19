<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83394 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/39207790462 — dark (conclusion: `failure`), 2026-10-19 06:04 UTC
- Dark since: 2026-10-16 12:00 UTC (first run of the current streak)
- Job / step: `Build&Test: node-22, ubuntu-latest` → `Test serve (bundled dev)`
- Likely cause: Tests  1 failed | 823 passed | 371 skipped | 56 todo (1251)

<details><summary>End of the job log</summary>

```
 Test Files  1 failed | 85 passed | 22 skipped (108)
      Tests  1 failed | 823 passed | 371 skipped | 56 todo (1251)
   Start at  06:05:49
   Duration  54.08s (tests 66%, setup 32%, import 1%, transform 1%)
    Isolate  108 workers spawned · ~98ms startup each (spawn + environment, per file)
             at least ~3.45s faster with isolate: false — reuses workers across files instead of one per file
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
