<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 10765 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- mojang republish (`.github/workflows/mojang-republish.yml`): [issue #17524](https://github.com/horizon-rust/horizon/issues/17524) "CI: mojang republish fails on every light runner: another bot's sparse checkout leaves its script out"
- launcher (`.github/workflows/launcher.yml`): [issue #15814](https://github.com/horizon-rust/horizon/issues/15814) "macOS launcher releases are ad hoc signed and not notarized (launcher 0.2.62)", [issue #17417](https://github.com/horizon-rust/horizon/issues/17417) "bug(launcher): the game-lease cleanup test fails in optimized builds and blocks launcher releases", [issue #17527](https://github.com/horizon-rust/horizon/issues/17527) "Launcher: shader packs are checked against the launcher's shader API, not the installed game's", [issue #17376](https://github.com/horizon-rust/horizon/issues/17376) "launcher: the binary's tests resolve the player's real launcher folder (test_home() covers library tests only)", [issue #17390](https://github.com/horizon-rust/horizon/issues/17390) "Launcher: macOS release lease/path tests fail with ENOTDIR"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "runner watch" workflow getting cancelled on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **runner watch** workflow (`.github/workflows/runner-watch.yml`) on `main` has been getting cancelled since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43989104236 — dark (conclusion: `cancelled`), 2026-11-17 00:37 UTC
- Dark since: 2026-11-17 00:37 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
