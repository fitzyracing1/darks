<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: resolved -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** resolved — lit again (2026-11-28); nothing to file
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 31895 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/46034276260 — dark (conclusion: `cancelled`), 2026-11-27 16:31 UTC
- Dark since: 2026-11-27 14:37 UTC (first run of the current streak)
- Job / step: `windows / build (win-arm64)` → `Test UI on its own`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.DonutCenterReadabilityTests.Default_size_keeps_the_whole_notice(language: "hi", scope: "some", hint: "none") [104 ms]
  Passed Filee.App.Tests.DonutCenterReadabilityTests.Default_size_keeps_the_whole_notice(language: "ru", scope: "single", hint: "wheel") [94 ms]
  Passed Filee.App.Tests.DonutCenterReadabilityTests.Default_size_keeps_the_whole_notice(language: "zh-TW", scope: "some", hint: "none") [151 ms]
  Passed Filee.App.Tests.DonutCenterReadabilityTests.Default_size_keeps_the_whole_notice(language: "ru", scope: "single", hint: "key") [101 ms]
  Passed Filee.App.Tests.DonutCenterReadabilityTests.Default_size_keeps_the_whole_notice(language: "fa", scope: "some", hint: "key") [155 ms]
  Passed Filee.App.Tests.DonutCenterReadabilityTests.Default_size_keeps_the_whole_notice(language: "ko", scope: "single", hint: "key") [106 ms]
Attempting to cancel the build...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
