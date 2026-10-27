<!-- dark-draft: firecrawl/firecrawl-mcp-server -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl-mcp-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl-mcp-server/issues/new
- **Stars:** 7697 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Publish Package", "Deploy Images to GHCR")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish Package (`.github/workflows/publish.yml`)

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

### Deploy Images to GHCR (`.github/workflows/image.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl-mcp-server/actions/runs/40436908810 — dark (conclusion: `cancelled`), 2026-10-27 02:10 UTC
- Dark since: 2026-10-27 02:10 UTC (first run of the current streak)
- Job / step: `push-image`
- Likely cause: run cancelled in job "push-image"

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl-mcp-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
