<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 25614 · **Generated:** 2026-11-11T06:45:44.706Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/42915480883 — dark (conclusion: `failure`), 2026-11-10 22:32 UTC
- Dark since: 2026-11-10 18:31 UTC (first run of the current streak)
- Job / step: `build (win-arm64)` → `Test UI on its own`
- Likely cause: Failed: 3

<details><summary>End of the job log</summary>

```
Data collector 'Blame' message: All tests finished running, Sequence file will not be generated.
Test Run Failed.
Total tests: 2313
     Passed: 2299
     Failed: 3
    Skipped: 11
 Total time: 46.7686 Minutes
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
