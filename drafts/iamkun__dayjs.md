<!-- dark-draft: iamkun/dayjs -->
<!-- draft-state: ready -->
# Upstream issue draft: iamkun/dayjs

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/iamkun/dayjs/issues/new
- **Stars:** 48653 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Lint & Unit Test" workflow failing on dev since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Lint & Unit Test** workflow (`.github/workflows/check.yml`) on `dev` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/iamkun/dayjs/actions/runs/42190204901 — dark (conclusion: `failure`), 2026-11-06 08:47 UTC
- Dark since: 2026-11-06 08:47 UTC (first run of the current streak)
- Job / step: `check / lint-and-test` → `Run tests`
- Likely cause: Tests:       1 failed, 53 passed, 54 total

<details><summary>End of the job log</summary>

```
          at Array.forEach (<anonymous>)
      at Object.<anonymous> (test/plugin/timezone.test.js:484:33)
Test Suites: 1 failed, 1 total
Tests:       1 failed, 53 passed, 54 total
Snapshots:   0 total
Time:        1.105s
Ran all test suites matching /test\/plugin\/timezone.test/i.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dayjs!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
