<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8899 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- parity-main (`.github/workflows/parity-main.yml`): [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes"
- launcher (`.github/workflows/launcher.yml`): [issue #13855](https://github.com/horizon-rust/horizon/issues/13855) "Launcher: discuss a per-character skin library and contribution plan", [issue #11859](https://github.com/horizon-rust/horizon/issues/11859) "Prebuilt native mods: the registry builds and signs them, the launcher downloads them (design)", [issue #4727](https://github.com/horizon-rust/horizon/issues/4727) "macOS 27.2 on M4 Max: Horizon launcher hangs at _dyld_start without opening a window"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "mojang republish" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **mojang republish** workflow (`.github/workflows/mojang-republish.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43209125323 — dark (conclusion: `failure`), 2026-11-12 11:26 UTC
- Dark since: 2026-11-12 11:26 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: python3: can't open file '/home/ludovic/.actions-runners/horizon-light-7/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory

<details><summary>End of the job log</summary>

```
HEAD is now at f24ee1accf1c Merge pull request #15361 from UMCEKO/perf-platform
  origin/main
f24ee1accf1c816736e6e067939d04f3853f474e
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
f24ee1accf1c816736e6e067939d04f3853f474e
python3: can't open file '/home/ludovic/.actions-runners/horizon-light-7/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
