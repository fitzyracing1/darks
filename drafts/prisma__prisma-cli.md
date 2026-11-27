<!-- dark-draft: prisma/prisma-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: prisma/prisma-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/prisma/prisma-cli/issues/new
- **Stars:** 26 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/prisma/prisma-cli/actions/runs/45799058095 — dark (conclusion: `failure`), 2026-11-26 10:11 UTC
- Dark since: 2026-11-26 10:11 UTC (first run of the current streak)
- Job / step: `test (windows-latest)` → `Run CLI tests`
- Likely cause: Error: Test timed out in 5000ms. (packages/cli/tests/skills-sync.test.ts:106)

<details><summary>End of the job log</summary>

```
 FAIL  tests/skills-sync.test.ts > skills sync > installs a skill into every harness directory from an npm layout
Error: ENOTEMPTY: directory not empty, rmdir 'C:\Users\RUNNER~1\AppData\Local\Temp\prisma-cli-skills-lAfPE9\.devin\skills\prisma-8'
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
 Test Files  1 failed | 71 passed | 1 skipped (73)
      Tests  1 failed | 1346 passed | 10 skipped (1357)
   Start at  10:13:35
   Duration  54.05s (transform 7.71s, setup 0ms, import 63.87s, tests 79.33s, environment 8ms)
##[error]Error: Test timed out in 5000ms.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prisma-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
