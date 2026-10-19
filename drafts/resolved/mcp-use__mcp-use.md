<!-- dark-draft: mcp-use/mcp-use -->
<!-- draft-state: resolved -->
# Upstream issue draft: mcp-use/mcp-use

- **Status:** resolved — lit again 2026-10-17: https://github.com/mcp-use/mcp-use/actions/runs/38986854028; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/mcp-use/mcp-use/issues/new
- **Stars:** 10772 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on the default branch since 2026-10-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on the default branch has been failing since 2026-10-14. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/mcp-use/mcp-use/actions/runs/38652421388 — dark (conclusion: `failure`), 2026-10-14 23:10 UTC
- Dark since: 2026-10-14 23:10 UTC (first run of the current streak)
- Likely cause: Error: waitFor timed out after 15000ms (libraries/typescript/packages/cli/tests/cli/helpers.ts:166)

If this is already known or expected, feel free to close. Thanks for maintaining mcp-use!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
