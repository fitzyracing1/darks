<!-- dark-draft: apify/apify-mcp-server -->
<!-- draft-state: resolved -->
# Upstream issue draft: apify/apify-mcp-server

- **Status:** resolved — lit again 2026-10-15: https://github.com/apify/apify-mcp-server/actions/runs/38733212683; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/apify/apify-mcp-server/issues/new
- **Stars:** 11279 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on the default branch ("CI (master)", "CI (master evals)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on the default branch have been dark recently. Details below, in case they're useful:

### CI (master) (`.github/workflows/on_master.yaml`)

- Latest run on the default branch: https://github.com/apify/apify-mcp-server/actions/runs/38466430851 — dark (conclusion: `failure`), 2026-10-13 20:53 UTC
- Dark since: 2026-10-13 20:53 UTC (first run of the current streak)
- Likely cause: AssertionError: expected true not to be true // Object.is equality (tests/test_kit/cases/storage.cases.ts:473)

### CI (master evals) (`.github/workflows/on_master_evals.yaml`)

- Latest run on the default branch: https://github.com/apify/apify-mcp-server/actions/runs/38542332541 — dark (conclusion: `cancelled`), 2026-10-14 09:26 UTC
- Dark since: 2026-10-14 09:26 UTC (first run of the current streak)
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

If this is already known or expected, feel free to close. Thanks for maintaining apify-mcp-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
