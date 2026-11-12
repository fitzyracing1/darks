<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 8736 · **Generated:** 2026-11-12T18:39:27.411Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43249814127 — dark (conclusion: `failure`), 2026-11-12 15:37 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Frontend` → `Run pnpm format:check`
- Likely cause: Found 10 warnings and 0 errors.

<details><summary>End of the job log</summary>

```
Finished in 1.2s on 2219 files with 97 rules using 4 threads.
$ oxfmt --check
Checking formatting...
src/features/plugins/__tests__/settings.test.tsx (1ms)
Format issues found in above 1 files. Run without `--check` to fix.
Finished in 5289ms on 2778 files using 4 threads.
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
