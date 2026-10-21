<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again (2026-10-21); nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 11762 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build desktop package (KDE Plasma)" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build desktop package (KDE Plasma)** workflow (`.github/workflows/build-desktop-kde.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/39264173098 — dark (conclusion: `failure`), 2026-10-19 13:54 UTC
- Dark since: 2026-10-19 13:54 UTC (first run of the current streak)
- Job / step: `kwin` → `Build KWin with nested desktop scaling`
- Likely cause: 7515bb98985846af0e79fc83e13956ad915f2fae

<details><summary>End of the job log</summary>

```
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/DroidDeck/DroidDeck/.git/
From https://github.com/Droid-Deck/DroidDeck
 * [new ref]         7515bb98985846af0e79fc83e13956ad915f2fae -> origin/main
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
7515bb98985846af0e79fc83e13956ad915f2fae
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
