<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47736 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("test-impact-artifact", "CodeQL SAST", "OpenSSF Scorecard")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40792037277 — dark (conclusion: `cancelled`), 2026-10-29 00:08 UTC
- Dark since: 2026-10-28 17:08 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL SAST (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40792037052 — dark (conclusion: `cancelled`), 2026-10-29 00:08 UTC
- Dark since: 2026-10-29 00:08 UTC (first run of the current streak)
- Job / step: `analyze (c-cpp, manual, codeql-cpp)`
- Likely cause: Canceling since a higher priority waiting request for codeql-c-cpp-refs/heads/main exists

### OpenSSF Scorecard (`.github/workflows/scorecard.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40792037114 — dark (conclusion: `cancelled`), 2026-10-29 00:08 UTC
- Dark since: 2026-10-29 00:08 UTC (first run of the current streak)
- Job / step: `scorecard`
- Likely cause: Canceling since a higher priority waiting request for scorecard-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
