<!-- dark-draft: mobile-next/mobile-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: mobile-next/mobile-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mobile-next/mobile-mcp/issues/new
- **Stars:** 10386 · **Generated:** 2026-11-08T06:41:39.628Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build" workflow failing on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build** workflow (`.github/workflows/build.yml`) on `main` has been failing since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/mobile-next/mobile-mcp/actions/runs/42356399946 — dark (conclusion: `failure`), 2026-11-07 08:39 UTC
- Dark since: 2026-11-07 08:39 UTC (first run of the current streak)
- Job / step: `e2e_test` → `Run Android emulator test prompt`
- Likely cause: {"pass": false, "error": "The first assertion failed: expected exactly one connected Android emulator, found zero. mobile_list_available_devices returned an empty list, and 'adb devices -l' also showed no attached devic…

<details><summary>End of the job log</summary>

```
> tsc
Removed MCP server mobile-mcp from local config
File modified: /Users/gilm/.claude.json [project: /Users/gilm/git/actions-runner/_work/mobile-mcp/mobile-mcp]
Added stdio MCP server mobile-mcp with command: node /Users/gilm/git/actions-runner/_work/mobile-mcp/mobile-mcp/lib/index.js to local config
File modified: /Users/gilm/.claude.json [project: /Users/gilm/git/actions-runner/_work/mobile-mcp/mobile-mcp]
Test did not pass: The first assertion failed: expected exactly one connected Android emulator, found zero. mobile_list_available_devices returned an empty list, and 'adb devices -l' also showed no attached devices. No …
{"pass": false, "error": "The first assertion failed: expected exactly one connected Android emulator, found zero. mobile_list_available_devices returned an empty list, and 'adb devices -l' also showed no attached devic…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mobile-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
