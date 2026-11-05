<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90183 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Post-merge Deploy Monitor" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Post-merge Deploy Monitor** workflow (`.github/workflows/postmerge-deploy-monitor.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42027460338 — dark (conclusion: `failure`), 2026-11-05 12:28 UTC
- Dark since: 2026-11-05 08:35 UTC (first run of the current streak)
- Job / step: `monitor` → `Check post-merge deploys reached production`
- Likely cause: - Deploy api-cors-preflight Worker [RUN_FAILED] run 41988326131 (fix(ci): retry the api-cors-preflight Worker deploy on Cloudflare rat…) concluded failure

<details><summary>End of the job log</summary>

```
npm: 11.19.1
yarn: 1.22.22
postmerge-deploy ok: Convex Deploy [DEPLOY_SKIPPED_LEGIT] run 41994939880 skipped the deploy and production already has every bundled change on main
Post-merge deploy monitor found 1 workflow(s) that did not deploy:
postmerge-deploy ok: Deploy Railway Reconcile Control [DEPLOYED] run 40473021839 deployed
postmerge-deploy ERROR: Deploy api-cors-preflight Worker [RUN_FAILED] run 41988326131 (fix(ci): retry the api-cors-preflight Worker deploy on Cloudflare rat…) concluded failure
- Deploy api-cors-preflight Worker [RUN_FAILED] run 41988326131 (fix(ci): retry the api-cors-preflight Worker deploy on Cloudflare rat…) concluded failure
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
