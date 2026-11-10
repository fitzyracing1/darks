<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 225734 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("release", "bot-nix-hashes")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42765277724 — dark (conclusion: `cancelled`), 2026-11-10 05:56 UTC
- Dark since: 2026-11-09 05:07 UTC (first run of the current streak)
- Likely cause: run cancelled

### bot-nix-hashes (`.github/workflows/bot-nix-hashes.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42748156870 — dark (conclusion: `cancelled`), 2026-11-10 03:14 UTC
- Dark since: 2026-11-10 00:35 UTC (first run of the current streak)
- Job / step: `hash (aarch64-darwin, macos-latest)`
- Likely cause: Canceling since a higher priority waiting request for bot-nix-hashes-refs/heads/dev exists

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
