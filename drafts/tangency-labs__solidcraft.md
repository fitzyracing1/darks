<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 12740 · **Generated:** 2026-11-01T12:36:12.706Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("External corpus", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### External corpus (`.github/workflows/external-corpus.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41299004322 — dark (conclusion: `failure`), 2026-11-01 10:47 UTC
- Dark since: 2026-11-01 10:47 UTC (first run of the current streak)
- Job / step: `Import the external STEP corpus` → `Import and check every entry`
- Likely cause: FAIL nist_ftc_09_ap242_e1: volume 136446.478 mm3 is -1.17 % off the expected 138057.658 (tolerance 0.10 %)

<details><summary>End of the job log</summary>

```
  pass   nist_stc_07_ap242_e3           1726252.094 mm3,     391382.797 mm2, 3 bodies, 2.3 s
external-corpus: 15 pass, 0 recorded, 5 failed, 0 source changed
  FAIL nist_ctc_02_ap203: volume 47100760.873 mm3 is -2.48 % off the expected 48296408.737 (tolerance 0.10 %)
  FAIL nist_ctc_04_ap203: volume 17519225.951 mm3 is -17.77 % off the expected 21304707.061 (tolerance 0.10 %)
  FAIL nist_ctc_05_ap203: volume 12694758.326 mm3 is -1.10 % off the expected 12836438.150 (tolerance 0.10 %)
  FAIL nist_ctc_02_ap242_e2: volume 47107140.415 mm3 is +6.16 % off the expected 44375748.567 (tolerance 0.10 %)
  FAIL nist_ftc_09_ap242_e1: volume 136446.478 mm3 is -1.17 % off the expected 138057.658 (tolerance 0.10 %)
##[error]Process completed with exit code 1.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41299261455 — dark (conclusion: `failure`), 2026-11-01 10:50 UTC
- Dark since: 2026-11-01 10:50 UTC (first run of the current streak)
- Job / step: `Arch Linux x86_64` → `Check the package`
- Likely cause: tar: Error is not recoverable: exiting now

<details><summary>End of the job log</summary>

```
==> Cleaning up...
==> Wrote dist/release/solidcraft-0.0.0-linux-x86_64.pkg.tar.zst (io.tangencylabs.solidcraft 0.0.0-1, x86_64)
##[end-action id=__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=88238]
tar (child): dist/release/solidcraft-0.29.0-nightly.20261101.102.1-linux-x86_64.pkg.tar.zst: Cannot open: No such file or directory
tar (child): Error is not recoverable: exiting now
tar: Child returned status 2
tar: Error is not recoverable: exiting now
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
