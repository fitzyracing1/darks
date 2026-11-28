<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16856 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("tests", "lint-c")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46110842865 — dark (conclusion: `cancelled`), 2026-11-28 05:10 UTC
- Dark since: 2026-11-27 16:22 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46110705443 — dark (conclusion: `cancelled`), 2026-11-28 05:08 UTC
- Dark since: 2026-11-27 18:32 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
