<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 255523 · **Generated:** 2026-10-20T18:49:07.074Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Docker Build, Test, and Publish", "Deploy Site", ".github/workflows/ci.yaml")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39474091488 — dark (conclusion: `cancelled`), 2026-10-20 18:22 UTC
- Dark since: 2026-10-13 19:04 UTC (first run of the current streak)
- Likely cause: run cancelled

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39475395218 — dark (conclusion: `cancelled`), 2026-10-20 18:30 UTC
- Dark since: 2026-10-20 18:30 UTC (first run of the current streak)
- Likely cause: run cancelled

### .github/workflows/ci.yaml (`.github/workflows/ci.yaml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39475395586 — dark (conclusion: `failure`), 2026-10-20 18:30 UTC
- Dark since: 2026-10-20 18:30 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
