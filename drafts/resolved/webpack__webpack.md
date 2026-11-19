<!-- dark-draft: webpack/webpack -->
<!-- draft-state: resolved -->
# Upstream issue draft: webpack/webpack

- **Status:** resolved — lit again (2026-11-19); nothing to file
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66009 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/44418646780 — dark (conclusion: `failure`), 2026-11-18 23:12 UTC
- Dark since: 2026-11-18 23:12 UTC (first run of the current streak)
- Job / step: `runtimes (deno)` → `Run yarn test:deno --ci`
- Likely cause: Tests:       2 failed, 433 skipped, 186891 passed, 187326 total

<details><summary>End of the job log</summary>

```
Snapshots:   75484 passed, 75484 total
Time:        1549.285 s
Ran all test suites.
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
