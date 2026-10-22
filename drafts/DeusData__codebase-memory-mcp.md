<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47124 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL SAST" workflow getting cancelled on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL SAST** workflow (`.github/workflows/codeql.yml`) on `main` has been getting cancelled since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/39700717347 — dark (conclusion: `cancelled`), 2026-10-22 00:36 UTC
- Dark since: 2026-10-20 22:30 UTC (first run of the current streak)
- Job / step: `analyze (python, none, codeql-py)`
- Likely cause: Canceling since a higher priority waiting request for codeql-python-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
