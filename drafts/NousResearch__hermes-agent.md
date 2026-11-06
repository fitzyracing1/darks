<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 260876 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Deploy Site", "Docker Build, Test, and Publish")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42132029005 — dark (conclusion: `failure`), 2026-11-05 23:47 UTC
- Dark since: 2026-11-05 09:18 UTC (first run of the current streak)
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

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42133438434 — dark (conclusion: `cancelled`), 2026-11-05 23:59 UTC
- Dark since: 2026-11-05 20:45 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
