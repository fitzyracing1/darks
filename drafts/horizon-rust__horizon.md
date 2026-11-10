<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8411 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- launcher (`.github/workflows/launcher.yml`): [issue #14565](https://github.com/horizon-rust/horizon/issues/14565) "Launcher: uninstall's "Also delete the launcher's data" deletes nothing after the data folder was moved", [issue #14286](https://github.com/horizon-rust/horizon/issues/14286) "Launcher stuck with error: Minecraft 26.3 was not found", [issue #13855](https://github.com/horizon-rust/horizon/issues/13855) "Launcher: discuss a per-character skin library and contribution plan", [issue #4537](https://github.com/horizon-rust/horizon/issues/4537) "Launcher is not readable by screen readers. Accesibility issue", [issue #11859](https://github.com/horizon-rust/horizon/issues/11859) "Prebuilt native mods: the registry builds and signs them, the launcher downloads them (design)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "mojang republish" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **mojang republish** workflow (`.github/workflows/mojang-republish.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42741135325 — dark (conclusion: `failure`), 2026-11-10 02:12 UTC
- Dark since: 2026-11-10 02:12 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: python3: can't open file '/home/ludovic/.actions-runners/horizon-light-5/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory

<details><summary>End of the job log</summary>

```
HEAD is now at 1453e0e614af Merge pull request #13606 from martipops/controller/dial-4-editor
  origin/main
1453e0e614af4b2d04dd0d228a94162b5d459910
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
1453e0e614af4b2d04dd0d228a94162b5d459910
python3: can't open file '/home/ludovic/.actions-runners/horizon-light-5/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
