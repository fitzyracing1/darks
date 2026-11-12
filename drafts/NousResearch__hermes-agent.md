<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 262798 · **Generated:** 2026-11-12T06:44:18.567Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Nix flake check (`.github/workflows/nix.yml`): [issue #141750](https://github.com/NousResearch/hermes-agent/issues/141750) "nix flake check --no-build fails: uv2nix reads the filtered Python source at eval time"
- CI (`.github/workflows/ci.yaml`): [issue #152690](https://github.com/NousResearch/hermes-agent/issues/152690) "CI: a growing share of ci.yaml runs end at creation with zero jobs ("workflow file issue"), including pushes to main"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker Build, Test, and Publish", "Deploy Site")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/43168813417 — dark (conclusion: `cancelled`), 2026-11-12 06:32 UTC
- Dark since: 2026-11-08 17:58 UTC (first run of the current streak)
- Likely cause: run cancelled

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/43168721861 — dark (conclusion: `cancelled`), 2026-11-12 06:31 UTC
- Dark since: 2026-11-12 00:35 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
