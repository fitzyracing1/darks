<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 22384 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/41987287293 — dark (conclusion: `failure`), 2026-11-05 07:26 UTC
- Dark since: 2026-11-03 05:57 UTC (first run of the current streak)
- Job / step: `portable / portable (macos-15, osx-arm64)` → `Build and test native projects`
- Likely cause: Failed!  - Failed:     1, Passed:  1139, Skipped:     4, Total:  1144, Duration: 4 s - Filee.Core.Tests.dll (net10.0)

<details><summary>End of the job log</summary>

```
     at Filee.Core.Tests.MergeImagesTests.A_picture_the_joiner_cannot_read_becomes_a_plain_png_and_a_first_format_it_cannot_write_gives_png() in /Users/runner/work/Filee/Filee/tests/Filee.Core.Tests/MergeImagesTests.cs:…
   at Filee.Core.Tests.MergeImagesTests.A_picture_the_joiner_cannot_read_becomes_a_plain_png_and_a_first_format_it_cannot_write_gives_png()
--- End of stack trace from previous location ---
[xUnit.net 00:00:04.70]     Filee.Core.Tests.WebDownloaderTests.Saved_files_carry_the_mark_of_the_web_with_the_address_they_came_from [SKIP]
  Skipped Filee.Core.Tests.WebDownloaderTests.Saved_files_carry_the_mark_of_the_web_with_the_address_they_came_from [1 ms]
Results File: /Users/runner/work/Filee/Filee/TestResults/osx-arm64/_iad20-gt1025-9d34cf0b-f738-471c-a983-19f01293e53d-5EFBD6F8DD9B_2026-11-05_07_30_41_net10.0.trx
Failed!  - Failed:     1, Passed:  1139, Skipped:     4, Total:  1144, Duration: 4 s - Filee.Core.Tests.dll (net10.0)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
