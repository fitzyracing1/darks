<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8257 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("parity-main", "nightly audit")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### parity-main (`.github/workflows/parity-main.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42613289234 — dark (conclusion: `cancelled`), 2026-11-09 11:59 UTC
- Dark since: 2026-11-08 04:57 UTC (first run of the current streak)
- Likely cause: run cancelled

### nightly audit (`.github/workflows/nightly.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42595172130 — dark (conclusion: `failure`), 2026-11-09 09:40 UTC
- Dark since: 2026-11-09 09:40 UTC (first run of the current streak)
- Job / step: `audit` → `Every harness`
- Likely cause: System.IO.IOException: No space left on device : '/Users/ludovicmarie/.actions-runners/horizon/_diag/pages/a328fcf3-eda5-875a-a04f-04ce4339d00e_6c3f61f8-05da-4858-a228-4c4a3b1ebd80_2.log'

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
