<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66010 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/43956356566 — dark (conclusion: `failure`), 2026-11-16 21:04 UTC
- Dark since: 2026-11-16 10:58 UTC (first run of the current streak)
- Job / step: `unit` → `Run yarn cover:unit --ci --cacheDirectory .jest-cache`
- Likely cause: Tests:       26 failed, 93602 passed, 93628 total

<details><summary>End of the job log</summary>

```
Snapshots:   66403 passed, 66403 total
Time:        364.808 s, estimated 482 s
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
