<!-- dark-draft: vitejs/vite -->
<!-- draft-state: ready -->
# Upstream issue draft: vitejs/vite

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83730 · **Generated:** 2026-11-05T00:53:42.006Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/41830115144 — dark (conclusion: `failure`), 2026-11-04 12:32 UTC
- Dark since: 2026-11-04 04:35 UTC (first run of the current streak)
- Job / step: `Build&Test: node-24, windows-latest` → `Test serve`
- Likely cause: Tests  3 failed | 1186 passed | 187 skipped (1376)

<details><summary>End of the job log</summary>

```
    1054|         }
 ❯ EventEmitter.handleMsg playground/hmr-ssr/__tests__/hmr-ssr.spec.ts:1075:22
 ❯ HMRMockLogger.log playground/hmr-ssr/__tests__/hmr-ssr.spec.ts:1212:17
 ❯ globalThis.log playground/hmr-ssr/__tests__/hmr-ssr.spec.ts:1155:39
 ❯ eval playground-temp/hmr-ssr/hmrDep.js:13:5
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/3]⎯
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
