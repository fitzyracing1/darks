<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83564 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/40267290623 — dark (conclusion: `failure`), 2026-10-26 04:05 UTC
- Dark since: 2026-10-26 04:05 UTC (first run of the current streak)
- Job / step: `Build&Test: node-24, windows-latest` → `Test build`
- Likely cause: Tests  1 failed | 962 passed | 310 skipped (1273)

<details><summary>End of the job log</summary>

```
 ❯ playground/wasm/__tests__/wasm.spec.ts:6:3
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 93 passed | 17 skipped (111)
      Tests  1 failed | 962 passed | 310 skipped (1273)
   Start at  04:09:31
   Duration  40.50s (tests 96%, setup 2%, import 2%)
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
