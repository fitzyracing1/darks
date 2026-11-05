<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 224651 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("release", "deploy")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41981327706 — dark (conclusion: `cancelled`), 2026-11-05 06:34 UTC
- Dark since: 2026-11-04 16:24 UTC (first run of the current streak)
- Likely cause: run cancelled

### deploy (`.github/workflows/deploy.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41981327620 — dark (conclusion: `cancelled`), 2026-11-05 06:34 UTC
- Dark since: 2026-11-05 06:34 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
