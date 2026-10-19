<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83384 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/39105344499 — dark (conclusion: `failure`), 2026-10-18 06:48 UTC
- Dark since: 2026-10-16 12:00 UTC (first run of the current streak)
- Job / step: `Build&Test: node-20, ubuntu-latest` → `Test serve (bundled dev)`
- Likely cause: Tests  1 failed | 825 passed | 369 skipped | 56 todo (1251)

<details><summary>End of the job log</summary>

```
 Test Files  1 failed | 85 passed | 22 skipped (108)
      Tests  1 failed | 825 passed | 369 skipped | 56 todo (1251)
   Start at  06:50:49
   Duration  85.56s (tests 59%, setup 39%, import 1%, transform 1%)
    Isolate  108 workers spawned · ~175ms startup each (spawn + environment, per file)
             at least ~6.14s faster with isolate: false — reuses workers across files instead of one per file
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
