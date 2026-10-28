<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: ready -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 15731 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/40733294316 — dark (conclusion: `failure`), 2026-10-28 17:11 UTC
- Dark since: 2026-10-28 17:01 UTC (first run of the current streak)
- Job / step: `Python and native regression tests` → `Steam import and game environment tests`
- Likely cause: group-2.list failed

<details><summary>End of the job log</summary>

```
Source and metadata validated for 2 commits
Source and metadata validated for 2 commits
Source and metadata validated for 2 commits
Source and metadata validated for 3 commits
Source and metadata validated for 2 commits
Ignoring a superseded or closed pull request build
Ignoring a superseded or closed pull request event
##[error]group-2.list failed
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
