<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 262072 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker Build, Test, and Publish", "Deploy Site")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42722807108 — dark (conclusion: `cancelled`), 2026-11-09 23:43 UTC
- Dark since: 2026-11-08 17:58 UTC (first run of the current streak)
- Likely cause: run cancelled

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42722806834 — dark (conclusion: `failure`), 2026-11-09 23:43 UTC
- Dark since: 2026-11-09 11:48 UTC (first run of the current streak)
- Job / step: `deploy-docs` → `Deploy to GitHub Pages`
- Likely cause: Timeout reached, aborting!

<details><summary>End of the job log</summary>

```
Current status: syncing_files
Getting Pages deployment status...
Current status: syncing_files
Getting Pages deployment status...
Current status: syncing_files
Getting Pages deployment status...
Current status:
##[error]Timeout reached, aborting!
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
