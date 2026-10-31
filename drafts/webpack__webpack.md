<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65972 · **Generated:** 2026-10-31T18:33:59.606Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/41221169583 — dark (conclusion: `failure`), 2026-10-31 16:45 UTC
- Dark since: 2026-10-31 16:45 UTC (first run of the current streak)
- Job / step: `runtimes (bun)` → `Run yarn test:bun --ci`
- Likely cause: Tests:       1 failed, 377 skipped, 107540 passed, 107918 total

<details><summary>End of the job log</summary>

```
Snapshots:   3551 passed, 3551 total
Time:        737.272 s
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
