<!-- dark-draft: expressjs/body-parser -->
<!-- draft-state: ready -->
# Upstream issue draft: expressjs/body-parser

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/expressjs/body-parser/issues/new
- **Stars:** 5499 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on master since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `master` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/expressjs/body-parser/actions/runs/39771719289 — dark (conclusion: `failure`), 2026-10-22 11:35 UTC
- Dark since: 2026-10-21 14:55 UTC (first run of the current streak)
- Job / step: `coverage` → `Merge coverage reports`
- Likely cause: (use "lcov --ignore-errors corrupt ..." to bypass this error)

<details><summary>End of the job log</summary>

```
lcov: ERROR: (corrupt) unable to read trace file './coverage/coverage-node-macos-latest-23/lcov.info': lcov: ERROR: (inconsistent) "./coverage/coverage-node-macos-latest-23/lcov.info":258: duplicate function 'parse' sta…
	(use "lcov --ignore-errors inconsistent ..." to bypass this error)
	(use "lcov --ignore-errors corrupt ..." to bypass this error)
Combining tracefiles.
.. found 30 files to aggregate.
Combining tracefiles.
Merging ./coverage/coverage-node-macos-latest-23/lcov.info..29 remaining
##[error]Process completed with exit code 123.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining body-parser!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
