<!-- dark-draft: apify/apify-mcp-server -->
<!-- draft-state: ready -->
# Upstream issue draft: apify/apify-mcp-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/apify/apify-mcp-server/issues/new
- **Stars:** 15898 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI (master evals)" workflow failing on master since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI (master evals)** workflow (`.github/workflows/on_master_evals.yaml`) on `master` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/apify/apify-mcp-server/actions/runs/43192829439 — dark (conclusion: `failure`), 2026-11-12 09:35 UTC
- Dark since: 2026-11-12 09:35 UTC (first run of the current streak)
- Job / step: `MCP agent evaluations (merge) / MCP agent evaluations (merge)` → `Run merge-tier evals`
- Likely cause: "message": "Invalid credentials. Confirm that you've configured the correct host."

<details><summary>End of the job log</summary>

```
📇 Fetching dataset "mcp-server-evals-merge"...
❌ Run failed: UnauthorizedError
Status code: 401
Body: {
  "message": "Invalid credentials. Confirm that you've configured the correct host."
}
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining apify-mcp-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
