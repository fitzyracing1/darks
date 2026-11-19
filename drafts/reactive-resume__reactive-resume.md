<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: ready -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45915 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mobile release" workflow failing on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mobile release** workflow (`.github/workflows/mobile-release.yml`) on `main` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/44452070943 — dark (conclusion: `failure`), 2026-11-19 03:31 UTC
- Dark since: 2026-11-19 03:19 UTC (first run of the current streak)
- Job / step: `Build android` → `Build signed binary`
- Likely cause: The strategy configuration was canceled because "build.ios" failed

<details><summary>End of the job log</summary>

```
[03:33:17]: ▸ Here are the highlights of this release:
[03:33:17]: ▸ - Java 26 support
[03:33:17]: ▸ - Non-class-based JVM tests
[03:33:17]: ▸ - Enhanced console progress bar
[03:33:17]: ▸ For more details see https://docs.gradle.org/9.4.1/release-notes.html
[03:33:17]: ▸ To honour the JVM settings for this build a single-use Daemon process will be forked. For more on this, please refer to https://docs.gradle.org/9.4.1/userguide/gradle_daemon.html#sec:disabling_the_daemon i…
[03:33:17]: ▸ Daemon will be stopped at the end of the build
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
