<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 10166 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- parity-main (`.github/workflows/parity-main.yml`): [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes", [issue #16904](https://github.com/horizon-rust/horizon/issues/16904) "parity-main bisect names a merge for a flaky harness (it blamed #16690 for pearl_wind_charge)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("mojang republish", "checks")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### mojang republish (`.github/workflows/mojang-republish.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43746650134 — dark (conclusion: `failure`), 2026-11-15 18:25 UTC
- Dark since: 2026-11-12 20:01 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: python3: can't open file '/var/lib/gha/light-3/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory

<details><summary>End of the job log</summary>

```
HEAD is now at 2e1c2acf7 parity(vehicles): a minecart loaded on fire keeps its Fire (#16751)
  origin/main
2e1c2acf7146e2d758776b7f8fd12f59fc7320a8
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
2e1c2acf7146e2d758776b7f8fd12f59fc7320a8
python3: can't open file '/var/lib/gha/light-3/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory
##[error]Process completed with exit code 2.
```

</details>

### checks (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43746547499 — dark (conclusion: `cancelled`), 2026-11-15 18:24 UTC
- Dark since: 2026-11-15 18:22 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
