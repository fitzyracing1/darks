<!-- dark-draft: anefzaoui/misterdownloadmanager -->
<!-- draft-state: ready -->
# Upstream issue draft: anefzaoui/misterdownloadmanager

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anefzaoui/misterdownloadmanager/issues/new
- **Stars:** 17747 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "CodeQL")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/anefzaoui/misterdownloadmanager/actions/runs/45454780182 — dark (conclusion: `cancelled`), 2026-11-24 18:00 UTC
- Dark since: 2026-11-24 17:25 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/anefzaoui/misterdownloadmanager/actions/runs/45452496755 — dark (conclusion: `cancelled`), 2026-11-24 17:47 UTC
- Dark since: 2026-11-24 17:47 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining misterdownloadmanager!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
