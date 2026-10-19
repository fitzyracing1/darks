<!-- dark-draft: 0xJacky/nginx-ui -->
<!-- draft-state: resolved -->
# Upstream issue draft: 0xJacky/nginx-ui

- **Status:** resolved — lit again 2026-10-16: https://github.com/0xJacky/nginx-ui/actions/runs/38956900281; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/0xJacky/nginx-ui/issues/new
- **Stars:** 11635 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "E2E ACME" workflow failing on the default branch since 2026-10-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **E2E ACME** workflow (`.github/workflows/e2e-acme.yml`) on the default branch has been failing since 2026-10-15. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/0xJacky/nginx-ui/actions/runs/38796071805 — dark (conclusion: `failure`), 2026-10-15 19:42 UTC
- Dark since: 2026-10-15 19:42 UTC (first run of the current streak)
- Likely cause: step "Run ACME E2E" in job "Pebble HTTP-01" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining nginx-ui!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
