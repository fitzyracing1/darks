<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 17742 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Fresh-agent field report")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/41147915518 — dark (conclusion: `cancelled`), 2026-10-31 00:02 UTC
- Dark since: 2026-10-30 20:02 UTC (first run of the current streak)
- Likely cause: run cancelled

### Fresh-agent field report (`.github/workflows/field-report-e2e.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/41147915544 — dark (conclusion: `cancelled`), 2026-10-31 00:02 UTC
- Dark since: 2026-10-31 00:02 UTC (first run of the current streak)
- Job / step: `Clean HOME field-report dry-run`
- Likely cause: Canceling since a higher priority waiting request for field-report-e2e-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
