<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 261207 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Nix flake check (`.github/workflows/nix.yml`): [issue #141750](https://github.com/NousResearch/hermes-agent/issues/141750) "nix flake check --no-build fails: uv2nix reads the filtered Python source at eval time"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker Build, Test, and Publish" workflow getting cancelled on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker Build, Test, and Publish** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42319532705 — dark (conclusion: `cancelled`), 2026-11-07 00:39 UTC
- Dark since: 2026-11-05 20:45 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
