<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: resolved -->
# Upstream issue draft: microsoft/vscode

- **Status:** resolved — lit again (2026-11-25); nothing to file
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 195713 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL", "Code OSS (pnpm store)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/45519913593 — dark (conclusion: `cancelled`), 2026-11-25 00:40 UTC
- Dark since: 2026-11-24 11:41 UTC (first run of the current streak)
- Likely cause: run cancelled

### Code OSS (pnpm store) (`.github/workflows/pr-pnpm-store.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/45519913491 — dark (conclusion: `cancelled`), 2026-11-25 00:40 UTC
- Dark since: 2026-11-25 00:40 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
