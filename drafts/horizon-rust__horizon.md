<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 10527 · **Generated:** 2026-11-16T12:52:35.150Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- launcher (`.github/workflows/launcher.yml`): [issue #15814](https://github.com/horizon-rust/horizon/issues/15814) "macOS launcher releases are ad hoc signed and not notarized (launcher 0.2.62)", [issue #17417](https://github.com/horizon-rust/horizon/issues/17417) "bug(launcher): the game-lease cleanup test fails in optimized builds and blocks launcher releases", [issue #17376](https://github.com/horizon-rust/horizon/issues/17376) "launcher: the binary's tests resolve the player's real launcher folder (test_home() covers library tests only)", [issue #17390](https://github.com/horizon-rust/horizon/issues/17390) "Launcher: macOS release lease/path tests fail with ENOTDIR", [issue #4537](https://github.com/horizon-rust/horizon/issues/4537) "Launcher is not readable by screen readers. Accesibility issue"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "mojang republish" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **mojang republish** workflow (`.github/workflows/mojang-republish.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43868371835 — dark (conclusion: `failure`), 2026-11-16 12:38 UTC
- Dark since: 2026-11-12 20:01 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: HEAD is now at 69ab572dbd bug(launcher): registry shader packs made for a retired shader API are refused, not installed (#17327)

<details><summary>End of the job log</summary>

```
HEAD is now at 69ab572dbd bug(launcher): registry shader packs made for a retired shader API are refused, not installed (#17327)
  origin/main
69ab572dbd1bf2f2924a424f791014e09d9d0b50
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
69ab572dbd1bf2f2924a424f791014e09d9d0b50
python3: can't open file '/var/lib/gha/light-5/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
