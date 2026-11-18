<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 28490 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-15. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/44172286864 — dark (conclusion: `cancelled`), 2026-11-17 20:43 UTC
- Dark since: 2026-11-15 17:58 UTC (first run of the current streak)
- Job / step: `portable / portable (macos-15-intel, osx-x64)` → `Build and test native projects`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Data collector 'Blame' message: All tests finished running, Sequence file will not be generated.
Results File: /Users/runner/work/Filee/Filee/TestResults/osx-x64/_sjc20-av659-05e2f70a-3fbd-4a1d-bf0c-d690e39092fa-C2DDFC6E1AE4_2026-11-17_21_03_54_net10.0.trx
Test Run Successful.
Total tests: 3210
     Passed: 3186
    Skipped: 24
 Total time: 1.2613 Hours
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
