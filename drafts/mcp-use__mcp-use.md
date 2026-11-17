<!-- dark-draft: mcp-use/mcp-use -->
<!-- draft-state: ready -->
# Upstream issue draft: mcp-use/mcp-use

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mcp-use/mcp-use/issues/new
- **Stars:** 10986 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "TypeScript Release" workflow getting cancelled on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **TypeScript Release** workflow (`.github/workflows/typescript-release.yml`) on `main` has been getting cancelled since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/mcp-use/mcp-use/actions/runs/43991598052 — dark (conclusion: `cancelled`), 2026-11-17 00:55 UTC
- Dark since: 2026-11-17 00:55 UTC (first run of the current streak)
- Job / step: `Release` → `Build Packages`
- Likely cause: The run was canceled by @khandrew1.

<details><summary>End of the job log</summary>

```
packages/inspector build: CLI Target: node22
packages/inspector build: ESM Build start
packages/inspector build: ESM dist/server/index.js 72.78 KB
packages/inspector build: ESM ⚡️ Build success in 73ms
packages/inspector build: ESM dist/cli.js 102.32 KB
packages/inspector build: ESM ⚡️ Build success in 82ms
packages/inspector build: DTS Build start
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp-use!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
