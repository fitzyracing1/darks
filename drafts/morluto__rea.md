<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 409018 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41008651194 — dark (conclusion: `failure`), 2026-10-30 05:28 UTC
- Dark since: 2026-10-29 05:56 UTC (first run of the current streak)
- Job / step: `Deep static checks` → `Run deep static checks`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)

<details><summary>End of the job log</summary>

```
Unused exported types (3)
GroupingViewKind              analysisView  type  src/domain/analysisView/analysisView.ts:157:15
JavaScriptRpcEndpoint                       type  src/domain/javascript/javascriptRpcEndpoints.ts:18:3
JavaScriptOpaqueScopeEffects                type  src/domain/javascript/javascriptSemanticOpaqueEffects.ts:17:15
Duplicate exports (2)
MAX_PROVIDER_STARTUP_TIMEOUT_MS|MAXIMUM_HOPPER_CALLER_SCAN_BUDGET_MS    src/domain/analysisResourceLimits.ts
DEFAULT_DEBUGGER_MAX_COMMAND_OUTPUT_BYTES|DEBUGGER_CONTROL_REPLY_BYTES  src/domain/analysisResourceLimits.ts
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
