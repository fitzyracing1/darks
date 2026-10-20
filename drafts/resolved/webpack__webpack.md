<!-- dark-draft: webpack/webpack -->
<!-- draft-state: resolved -->
# Upstream issue draft: webpack/webpack

- **Status:** resolved — lit again (2026-10-20); nothing to file
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65979 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39290405056 — dark (conclusion: `failure`), 2026-10-19 17:00 UTC
- Dark since: 2026-10-19 14:06 UTC (first run of the current streak)
- Job / step: `unit` → `Run yarn cover:unit --ci --cacheDirectory .jest-cache`
- Likely cause: Tests:       1 failed, 35535 passed, 35536 total

<details><summary>End of the job log</summary>

```
Time:        252.462 s
Ran all test suites.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
