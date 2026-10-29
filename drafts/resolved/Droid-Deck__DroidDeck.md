<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again (2026-10-29); nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 16010 · **Generated:** 2026-10-29T12:46:05.949Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/40868723863 — dark (conclusion: `failure`), 2026-10-29 11:52 UTC
- Dark since: 2026-10-29 11:52 UTC (first run of the current streak)
- Job / step: `sign / sign ludashi` → `Sign`
- Likely cause: ludashi: the manifest still names com.droiddeck.launcher in an authority or task

<details><summary>End of the job log</summary>

```
(node:2445) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
SHA256 digest of downloaded artifact is 29438853888955167284feefdedb9dffc96cf3badaa00187d6fd494751c52aaf
Artifact download completed successfully.
Total of 1 artifact(s) downloaded
Download artifact has finished successfully
manifest: 10 strings replaced
        A: android:taskAffinity(0x01010012)="com.droiddeck.launcher.dualscreen" (Raw: "com.droiddeck.launcher.dualscreen")
##[error]ludashi: the manifest still names com.droiddeck.launcher in an authority or task
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
