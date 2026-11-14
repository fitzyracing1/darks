<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 26993 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/43563711167 — dark (conclusion: `failure`), 2026-11-14 05:53 UTC
- Dark since: 2026-11-13 18:23 UTC (first run of the current streak)
- Job / step: `build (win-arm64)` → `Test UI on its own`
- Likely cause: Failed: 2

<details><summary>End of the job log</summary>

```
Data collector 'Blame' message: All tests finished running, Sequence file will not be generated.
Test Run Failed.
Total tests: 3108
     Passed: 3093
     Failed: 2
    Skipped: 13
 Total time: 1.2714 Hours
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
