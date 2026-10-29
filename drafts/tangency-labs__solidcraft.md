<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 11840 · **Generated:** 2026-10-29T12:46:05.949Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

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

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40857218129 — dark (conclusion: `failure`), 2026-10-29 10:23 UTC
- Dark since: 2026-10-29 10:23 UTC (first run of the current streak)
- Job / step: `Import the external STEP corpus` → `Import and check every entry`
- Likely cause: FAIL nist_ftc_09_ap242_e1: volume 136446.478 mm3 is -1.17 % off the expected 138057.658 (tolerance 0.10 %)

<details><summary>End of the job log</summary>

```
  pass   nist_stc_07_ap242_e3           1726252.094 mm3,     391382.797 mm2, 3 bodies, 1.5 s
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

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40857965074 — dark (conclusion: `failure`), 2026-10-29 10:29 UTC
- Dark since: 2026-10-29 10:29 UTC (first run of the current streak)
- Job / step: `macOS universal`
- Likely cause: The job was not acquired by Runner of type hosted even after multiple attempts

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
