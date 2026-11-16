<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 10669 · **Generated:** 2026-11-16T18:39:14.787Z
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

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43929060303 — dark (conclusion: `failure`), 2026-11-16 18:27 UTC
- Dark since: 2026-11-12 20:01 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: python3: can't open file '/var/lib/gha/light-7/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory

<details><summary>End of the job log</summary>

```
HEAD is now at c07bfa76e7 tooling(launcher): the real-profile test checks the home a run names, so pr_ready's launcher tests pass (#17371)
  origin/main
c07bfa76e71e8db9e84a7e61832a8fb898718e81
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
c07bfa76e71e8db9e84a7e61832a8fb898718e81
python3: can't open file '/var/lib/gha/light-7/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
