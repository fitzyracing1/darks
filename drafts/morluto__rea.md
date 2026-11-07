<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 440409 · **Generated:** 2026-11-07T18:36:17.303Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL production", "CI", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42400339252 — dark (conclusion: `skipped`), 2026-11-07 18:15 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42400322646 — dark (conclusion: `cancelled`), 2026-11-07 18:14 UTC
- Dark since: 2026-11-07 08:56 UTC (first run of the current streak)
- Likely cause: run cancelled

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42400322838 — dark (conclusion: `cancelled`), 2026-11-07 18:14 UTC
- Dark since: 2026-11-07 17:37 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
