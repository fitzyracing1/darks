<!-- dark-draft: modelcontextprotocol/inspector -->
<!-- draft-state: ready -->
# Upstream issue draft: modelcontextprotocol/inspector

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/modelcontextprotocol/inspector/issues/new
- **Stars:** 11182 · **Generated:** 2026-10-29T06:47:23.232Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SDK Watch" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SDK Watch** workflow (`.github/workflows/sdk-watch.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/modelcontextprotocol/inspector/actions/runs/40825081288 — dark (conclusion: `failure`), 2026-10-29 05:44 UTC
- Dark since: 2026-10-28 05:43 UTC (first run of the current streak)
- Job / step: `analyze (2811, MCP Apps extension SDK, modelcontextprotocol/ext-apps, 2.0.3, 2.0.4)` → `Review the SDK changes with Claude`
- Likely cause: The template is not valid. .github/workflows/sdk-watch.yml (Line: 324, Col: 21): Error reading JToken from JsonReader. Path '', line 0, position 0.

<details><summary>End of the job log</summary>

```
  "num_turns": 1,
  "total_cost_usd": 0,
  "permission_denials_count": 0,
  "modelUsage": {}
}
Log saved to /home/runner/work/_temp/claude-execution-output.json
Set session_id: 1d0aad21-b1d0-47ac-bc27-e324035919b9
##[error]--json-schema was provided but Claude did not return structured_output. Result subtype: success
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining inspector!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
