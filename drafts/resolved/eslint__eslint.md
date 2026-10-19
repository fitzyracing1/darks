<!-- dark-draft: eslint/eslint -->
<!-- draft-state: resolved -->
# Upstream issue draft: eslint/eslint

- **Status:** resolved — lit again 2026-10-12: https://github.com/eslint/eslint/actions/runs/38187322244; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/eslint/eslint/issues/new
- **Stars:** 27644 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Update Test Ecosystem Plugins" workflow failing on the default branch since 2026-10-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Update Test Ecosystem Plugins** workflow (`.github/workflows/ecosystem-updates.yml`) on the default branch has been failing since 2026-10-12. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/eslint/eslint/actions/runs/38187322244 — dark (conclusion: `failure`), 2026-10-12 00:15 UTC
- Dark since: 2026-10-12 00:15 UTC (first run of the current streak)
- Likely cause: step "Run npm run test:ecosystem:update" in job "test_ecosystem" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining eslint!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
