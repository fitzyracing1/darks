<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 11809 · **Generated:** 2026-10-25T06:55:04.561Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/40161541640 — dark (conclusion: `failure`), 2026-10-25 04:20 UTC
- Dark since: 2026-10-25 04:20 UTC (first run of the current streak)
- Job / step: `build` → `Test`
- Likely cause: Passed!  - Failed:     0, Passed:  1705, Skipped:   138, Total:  1843, Duration: 2 m 49 s - Filee.Engines.Tests.dll (net10.0)

<details><summary>End of the job log</summary>

```
  Skipped Filee.Engines.Tests.LivePhotoCreationTests.Portrait_phone_video_stays_upright_in_the_photo_and_the_clip [1 ms]
[xUnit.net 00:02:53.63]     Filee.Engines.Tests.LivePhotoCreationTests.A_failed_live_photo_leaves_the_files_it_would_replace [SKIP]
[xUnit.net 00:02:53.63]     Filee.Engines.Tests.LivePhotoCreationTests.Hdr_video_is_tone_mapped_to_sdr [SKIP]
  Skipped Filee.Engines.Tests.LivePhotoCreationTests.A_failed_live_photo_leaves_the_files_it_would_replace [1 ms]
  Skipped Filee.Engines.Tests.LivePhotoCreationTests.Hdr_video_is_tone_mapped_to_sdr [1 ms]
Results File: D:\a\Filee\Filee\TestResults\runneradmin_runnervmdaln5_2026-10-25_05_12_45_net10.0.trx
Passed!  - Failed:     0, Passed:  1705, Skipped:   138, Total:  1843, Duration: 2 m 49 s - Filee.Engines.Tests.dll (net10.0)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
