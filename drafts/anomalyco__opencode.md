<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 225068 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("release", "bot-docs-locale")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42316055115 — dark (conclusion: `cancelled`), 2026-11-07 00:05 UTC
- Dark since: 2026-11-06 16:30 UTC (first run of the current streak)
- Likely cause: run cancelled

### bot-docs-locale (`.github/workflows/bot-docs-locale.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42266284628 — dark (conclusion: `skipped`), 2026-11-06 17:57 UTC
- Dark since: 2026-11-06 17:57 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
