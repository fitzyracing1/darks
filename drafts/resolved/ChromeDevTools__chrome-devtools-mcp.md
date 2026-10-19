<!-- dark-draft: ChromeDevTools/chrome-devtools-mcp -->
<!-- draft-state: resolved -->
# Upstream issue draft: ChromeDevTools/chrome-devtools-mcp

- **Status:** resolved — lit again 2026-10-15: https://github.com/ChromeDevTools/chrome-devtools-mcp/actions/runs/38693637676; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/new
- **Stars:** 53550 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Compile and run tests" workflow failing on the default branch since 2026-10-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Compile and run tests** workflow (`.github/workflows/run-tests.yml`) on the default branch has been failing since 2026-10-14. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/ChromeDevTools/chrome-devtools-mcp/actions/runs/38591343958 — dark (conclusion: `failure`), 2026-10-14 15:40 UTC
- Dark since: 2026-10-14 15:40 UTC (first run of the current streak)
- Likely cause: step "Run tests" in job "Tests on ubuntu-latest with node 22" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining chrome-devtools-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
