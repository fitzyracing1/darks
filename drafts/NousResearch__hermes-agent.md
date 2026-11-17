<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 264072 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Docker Build, Test, and Publish (`.github/workflows/docker.yml`): [issue #155129](https://github.com/NousResearch/hermes-agent/issues/155129) "Docker Build, Test, and Publish on main stuck since Nov 5 — run 42066863849 holds the concurrency group (publish jobs waiting on never-evaluated container-publish deployments)"
- CI (`.github/workflows/ci.yaml`): [issue #152690](https://github.com/NousResearch/hermes-agent/issues/152690) "CI: a growing share of ci.yaml runs end at creation with zero jobs ("workflow file issue"), including pushes to main"
- Nix flake check (`.github/workflows/nix.yml`): [issue #141750](https://github.com/NousResearch/hermes-agent/issues/141750) "nix flake check --no-build fails: uv2nix reads the filtered Python source at eval time"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Deploy Site", "Docs Search Monitor")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/44083049737 — dark (conclusion: `cancelled`), 2026-11-17 12:25 UTC
- Dark since: 2026-11-17 12:19 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs Search Monitor (`.github/workflows/docs-search-monitor.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/44082863611 — dark (conclusion: `cancelled`), 2026-11-17 12:24 UTC
- Dark since: 2026-11-17 12:24 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
