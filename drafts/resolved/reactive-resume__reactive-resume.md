<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: resolved -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** resolved — lit again (2026-11-14); nothing to file
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45726 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/43503121893 — dark (conclusion: `failure`), 2026-11-13 20:36 UTC
- Dark since: 2026-11-13 20:26 UTC (first run of the current streak)
- Job / step: `Run unit tests` → `Run unit tests`
- Likely cause: command (/home/runner/_work/reactive-resume/reactive-resume/apps/web) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test:ci --maxWorkers=8 exited (1)

<details><summary>End of the job log</summary>

```
 Test Files  1 failed | 172 passed | 1 skipped (174)
      Tests  1 failed | 1157 passed | 9 skipped (1167)
   Start at  20:37:44
   Duration  60.79s (import 53%, tests 19%, transform 12%, environment 9%, setup 7%)
     Import   web  895 modules were evaluated 6872 times · 236.92s total, 53% of tracked time
             ~16.89s faster with isolate: false — shared modules are evaluated once per worker instead of once per file
             learn more: https://vitest.dev/guide/improving-performance#test-isolation
##[error]AssertionError: expected '' to be 'A design systemdesign systems and eco…' // Object.is equality
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
