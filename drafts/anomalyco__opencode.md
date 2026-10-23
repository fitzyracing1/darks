<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 220324 · **Generated:** 2026-10-23T06:59:11.689Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("publish", "docs-locale-sync")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### publish (`.github/workflows/publish.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39908217287 — dark (conclusion: `cancelled`), 2026-10-23 05:52 UTC
- Dark since: 2026-10-22 17:19 UTC (first run of the current streak)
- Likely cause: run cancelled

### docs-locale-sync (`.github/workflows/docs-locale-sync.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39887352944 — dark (conclusion: `skipped`), 2026-10-23 02:02 UTC
- Dark since: 2026-10-23 01:17 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
