<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 255751 · **Generated:** 2026-10-21T12:55:24.472Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker Build, Test, and Publish", "Deploy Site")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39599265261 — dark (conclusion: `cancelled`), 2026-10-21 12:23 UTC
- Dark since: 2026-10-13 19:04 UTC (first run of the current streak)
- Likely cause: run cancelled

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39601061419 — dark (conclusion: `cancelled`), 2026-10-21 12:37 UTC
- Dark since: 2026-10-21 12:37 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
