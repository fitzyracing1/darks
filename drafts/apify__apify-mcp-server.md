<!-- dark-draft: apify/apify-mcp-server -->
<!-- draft-state: ready -->
# Upstream issue draft: apify/apify-mcp-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/apify/apify-mcp-server/issues/new
- **Stars:** 18253 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("CI (master evals)", "CI (master)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### CI (master evals) (`.github/workflows/on_master_evals.yaml`)

- Latest run on `master`: https://github.com/apify/apify-mcp-server/actions/runs/45841317933 — dark (conclusion: `failure`), 2026-11-26 14:40 UTC
- Dark since: 2026-11-26 14:40 UTC (first run of the current streak)
- Job / step: `MCP agent evaluations (merge) / MCP agent evaluations (merge)` → `Run merge-tier evals`
- Likely cause: ❌ merge/web-selection/structured-hard-1: The agent did not discover, run, or retrieve results from any specialized Instagram Actor; instead, it only returned an API usage error without attempting any tool calls to fulfi…

<details><summary>End of the job log</summary>

```
❌ merge/web-selection/search-medium-1: The agent failed to use any Apify tool to search for articles about the Model Context Protocol; instead, it only returned an API error about usage limits without making any tool ca…
❌ merge/web-selection/structured-hard-1: The agent did not discover, run, or retrieve results from any specialized Instagram Actor; instead, it only returned an API usage error without attempting any tool calls to fulfi…
📊 0/73 trials passed (pass_rate 0.00, threshold 0.60)
🔗 ***/project/cmshkde21000krg07shb46d8g/datasets/cmtt5bb54020itx07em540k7g/runs/e354cf5bcf04e081
🧹 Run id 45841317933-1 — delete this run's schedules and tasks:
   pnpm run evals:mcp-agent:fixtures -- --run-id 45841317933-1
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

### CI (master) (`.github/workflows/on_master.yaml`)

- Latest run on `master`: https://github.com/apify/apify-mcp-server/actions/runs/45841318107 — dark (conclusion: `failure`), 2026-11-26 14:40 UTC
- Dark since: 2026-11-26 14:40 UTC (first run of the current streak)
- Job / step: `Update pre-release metadata / Update changelog` → `Commit changes`
- Likely cause: Unhandled error: GraphqlResponseError: Request failed due to following response errors:

<details><summary>End of the job log</summary>

```
        "package.json",
        "server.json"
    ],
    "deletions": []
}"
GraphqlResponseError: Request failed due to following response errors:
 - Repository rule violations found
##[error]Unhandled error: GraphqlResponseError: Request failed due to following response errors:
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining apify-mcp-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
