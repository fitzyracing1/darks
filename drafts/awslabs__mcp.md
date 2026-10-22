<!-- dark-draft: awslabs/mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: awslabs/mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/awslabs/mcp/issues/new
- **Stars:** 9811 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Check License Header" workflow failing on main since 2026-10-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Check License Header** workflow (`.github/workflows/check-license-header.yml`) on `main` has been failing since 2026-10-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/awslabs/mcp/actions/runs/39830869026 — dark (conclusion: `failure`), 2026-10-22 18:23 UTC
- Dark since: 2026-10-13 23:49 UTC (first run of the current streak)
- Likely cause: no cause found in annotations
- A change that makes this workflow lit on a fork: https://github.com/fitzyracing1/mcp/tree/try%2Ffix-license-header-example (lit run: https://github.com/fitzyracing1/mcp/actions/runs/39349159861) — happy to open a PR if that helps.

If this is already known or expected, feel free to close. Thanks for maintaining mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
