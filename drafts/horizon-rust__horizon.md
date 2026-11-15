<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 9756 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- parity-main (`.github/workflows/parity-main.yml`): [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("mojang republish", "checks")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### mojang republish (`.github/workflows/mojang-republish.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43653045858 — dark (conclusion: `failure`), 2026-11-14 23:23 UTC
- Dark since: 2026-11-12 20:01 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: Path 'tools/fixtures/shaderpacks/frame_identity_terrain/material.wgsl' not uptodate; will not remove from working tree.

<details><summary>End of the job log</summary>

```
Deleted branch main (was 34f07fffe).
Removing .local/
HEAD is now at 34f07fffe tooling(parity): snbt_unicode hashes its test at the tests/it path (#16610)
From https://github.com/horizon-rust/horizon
 + 34f07fffe...545529215 5455292155d7c058f88fe77cb54b8f6be864e5af -> origin/main  (forced update)
  origin/main
5455292155d7c058f88fe77cb54b8f6be864e5af
##[error]error: Path 'crates/horizon-client-render/src/gfx/celestial.rs' not uptodate; will not remove from working tree.
```

</details>

### checks (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43659613091 — dark (conclusion: `cancelled`), 2026-11-15 00:43 UTC
- Dark since: 2026-11-14 12:02 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
