<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 228256 · **Generated:** 2026-11-21T00:52:59.041Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "check-test" workflow failing on dev since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **check-test** workflow (`.github/workflows/check-test.yml`) on `dev` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44843747161 — dark (conclusion: `failure`), 2026-11-21 00:25 UTC
- Dark since: 2026-11-20 17:46 UTC (first run of the current streak)
- Job / step: `unit (windows)` → `Run unit tests`
- Likely cause: @opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)

<details><summary>End of the job log</summary>

```
  error: "MCP server session expired: resources",
}
[00:28:45.218] INFO (#178844): mcp session expired, reconnecting {
  server: "resources",
}
[00:28:45.220] INFO (#178844): mcp connected {
  server: "resources",
##[error]@opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
