<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 10964 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- mojang republish (`.github/workflows/mojang-republish.yml`): [issue #17524](https://github.com/horizon-rust/horizon/issues/17524) "CI: mojang republish fails on every light runner: another bot's sparse checkout leaves its script out"
- launcher (`.github/workflows/launcher.yml`): [issue #15814](https://github.com/horizon-rust/horizon/issues/15814) "macOS launcher releases are ad hoc signed and not notarized (launcher 0.2.62)", [issue #17417](https://github.com/horizon-rust/horizon/issues/17417) "bug(launcher): the game-lease cleanup test fails in optimized builds and blocks launcher releases", [issue #17390](https://github.com/horizon-rust/horizon/issues/17390) "Launcher: macOS release lease/path tests fail with ENOTDIR", [issue #17746](https://github.com/horizon-rust/horizon/issues/17746) "fix(launcher): prepare --download emits a dangling sign-in sentence", [issue #4537](https://github.com/horizon-rust/horizon/issues/4537) "Launcher is not readable by screen readers. Accesibility issue"
- parity-main (`.github/workflows/parity-main.yml`): [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "checks" workflow getting cancelled on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **checks** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/44083870184 — dark (conclusion: `cancelled`), 2026-11-17 12:31 UTC
- Dark since: 2026-11-17 04:32 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
