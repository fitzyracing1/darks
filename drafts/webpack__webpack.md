<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66018 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/45850920648 — dark (conclusion: `failure`), 2026-11-26 15:37 UTC
- Dark since: 2026-11-25 21:14 UTC (first run of the current streak)
- Job / step: `runtimes (deno)` → `Run yarn test:deno --maxWorkers=100% --ci`
- Likely cause: Tests:       3 failed, 433 skipped, 202100 passed, 202536 total

<details><summary>End of the job log</summary>

```
Snapshots:   89575 passed, 89575 total
Time:        1470.183 s
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
