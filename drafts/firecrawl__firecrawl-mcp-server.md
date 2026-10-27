<!-- dark-draft: firecrawl/firecrawl-mcp-server -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl-mcp-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl-mcp-server/issues/new
- **Stars:** 7694 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish Package" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish Package** workflow (`.github/workflows/publish.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/firecrawl/firecrawl-mcp-server/actions/runs/40398792784 — dark (conclusion: `failure`), 2026-10-26 20:47 UTC
- Dark since: 2026-10-26 16:01 UTC (first run of the current streak)
- Job / step: `Publish` → `Publish to NPM`
- Likely cause: npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-26T20_58_02_297Z-debug-0.log

<details><summary>End of the job log</summary>

```
npm error command git --no-replace-objects ls-remote ssh://git@github.com/release/firecrawl-mcp-3.35.0.tgz.git
npm error git@github.com: Permission denied (publickey).
npm error fatal: Could not read from remote repository.
npm error
npm error Please make sure you have the correct access rights
npm error and the repository exists.
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-26T20_58_02_297Z-debug-0.log
##[error]Process completed with exit code 128.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl-mcp-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
