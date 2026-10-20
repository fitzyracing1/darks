<!-- dark-draft: isaacs/node-glob -->
<!-- draft-state: ready -->
# Upstream issue draft: isaacs/node-glob

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/isaacs/node-glob/issues/new
- **Stars:** 8713 · **Generated:** 2026-10-20T12:54:49.577Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "typedoc" workflow failing on main since 2026-10-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **typedoc** workflow (`.github/workflows/typedoc.yml`) on `main` has been failing since 2026-10-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/isaacs/node-glob/actions/runs/37360500250 — dark (conclusion: `failure`), 2026-10-05 19:02 UTC
- Dark since: 2026-10-05 19:02 UTC (first run of the current streak)
- Job / step: `deploy` → `Deploy to GitHub Pages`
- Likely cause: Deployment failed, try again later.

<details><summary>End of the job log</summary>

```
{
	"artifact_id": 11366700831,
	"pages_build_version": "15f6c1888abb4a2c6823e9c70f3fb54345de87f0",
	"oidc_token": "***"
}
Created deployment for 15f6c1888abb4a2c6823e9c70f3fb54345de87f0, ID: 15f6c1888abb4a2c6823e9c70f3fb54345de87f0
Getting Pages deployment status...
##[error]Deployment failed, try again later.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining node-glob!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
