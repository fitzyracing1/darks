<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 262250 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Nix flake check (`.github/workflows/nix.yml`): [issue #141750](https://github.com/NousResearch/hermes-agent/issues/141750) "nix flake check --no-build fails: uv2nix reads the filtered Python source at eval time"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Docker Build, Test, and Publish", "Deploy Site", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42815928669 — dark (conclusion: `cancelled`), 2026-11-10 12:27 UTC
- Dark since: 2026-11-08 17:58 UTC (first run of the current streak)
- Likely cause: run cancelled

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42815928768 — dark (conclusion: `cancelled`), 2026-11-10 12:27 UTC
- Dark since: 2026-11-10 12:03 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yaml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42815930531 — dark (conclusion: `cancelled`), 2026-11-10 12:27 UTC
- Dark since: 2026-11-10 12:15 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs Search Monitor (`.github/workflows/docs-search-monitor.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42815406832 — dark (conclusion: `cancelled`), 2026-11-10 12:23 UTC
- Dark since: 2026-11-10 12:23 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
