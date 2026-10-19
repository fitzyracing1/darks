<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again 2026-10-18: https://github.com/koala73/worldmonitor/actions/runs/39084811220; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 88616 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on the default branch ("Seed Freshness Monitor", "Perf — styleLayout budget", "Railway Native Deploy Health", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on the default branch have been dark recently. Details below, in case they're useful:

### Seed Freshness Monitor (`.github/workflows/seed-freshness-monitor.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/38987373475 — dark (conclusion: `failure`), 2026-10-17 00:39 UTC
- Dark since: 2026-10-16 21:36 UTC (first run of the current streak)
- Likely cause: step "Publish ingestion operational transitions" in job "monitor" exited nonzero

### Perf — styleLayout budget (`.github/workflows/perf-style-layout-budget.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/39010687052 — dark (conclusion: `failure`), 2026-10-17 06:38 UTC
- Dark since: 2026-10-17 06:38 UTC (first run of the current streak)
- Likely cause: step "Enforce the styleLayout budget" in job "measure" exited nonzero

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/39058065089 — dark (conclusion: `failure`), 2026-10-17 18:26 UTC
- Dark since: 2026-10-17 12:30 UTC (first run of the current streak)
- Likely cause: step "Check Railway deployment configuration and drift" in job "Railway native deployment health" exited nonzero

### TPS Open Data Live Contract (`.github/workflows/tps-open-data-live.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/39032641148 — dark (conclusion: `failure`), 2026-10-17 12:28 UTC
- Dark since: 2026-10-17 12:28 UTC (first run of the current streak)
- Likely cause: step "Probe the official TPS Open Data source contracts" in job "live-contract" exited nonzero

### Feed Validation (`.github/workflows/feed-validation.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/38489319106 — dark (conclusion: `failure`), 2026-10-14 00:17 UTC
- Dark since: 2026-10-14 00:17 UTC (first run of the current streak)
- Likely cause: step "Run npm run test:feeds:ci" in job "validate" exited nonzero

### Desktop Canary (Linux) (`.github/workflows/test-linux-app.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/38687285210 — dark (conclusion: `failure`), 2026-10-15 05:31 UTC
- Dark since: 2026-10-15 05:31 UTC (first run of the current streak)
- Likely cause: step "Smoke-test AppImage" in job "test-linux-app" exited nonzero

### Railway Registry Sync (`.github/workflows/railway-registry-sync.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/38901570324 — dark (conclusion: `failure`), 2026-10-16 12:35 UTC
- Dark since: 2026-10-16 12:35 UTC (first run of the current streak)
- Likely cause: step "Verify live configuration with the Viewer identity" in job "Reconcile registry to live configuration" exited nonzero

### Sentry Resolve Pin Audit (`.github/workflows/sentry-resolve-pin-audit.yml`)

- Latest run on the default branch: https://github.com/koala73/worldmonitor/actions/runs/39010535205 — dark (conclusion: `failure`), 2026-10-17 06:36 UTC
- Dark since: 2026-10-17 06:36 UTC (first run of the current streak)
- Likely cause: WORLDMONITOR-18E is resolved and pinned to release 8db5d5398aeba429fff101b77bf5eb7c12c2e681; deployed release compatibility needs verification.

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
