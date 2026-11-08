<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 23965 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/42462475768 — dark (conclusion: `failure`), 2026-11-08 08:19 UTC
- Dark since: 2026-11-08 06:26 UTC (first run of the current streak)
- Job / step: `portable / portable (macos-15-intel, osx-x64)` → `Build and test native projects`
- Likely cause: Failed: 1

<details><summary>End of the job log</summary>

```
Results File: /Users/runner/work/Filee/Filee/TestResults/osx-x64/_iad01-dz252-9550d021-d496-4327-b074-6e838cc5a326-3A9C8FDD67BE_2026-11-08_08_45_48_net10.0.trx
Test Run Failed.
Total tests: 2182
     Passed: 2170
     Failed: 1
    Skipped: 11
 Total time: 1.0998 Hours
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
