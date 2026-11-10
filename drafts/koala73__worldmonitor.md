<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90420 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Railway Native Deploy Health", "Post-merge Deploy Monitor", "Perf — styleLayout budget")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42729494158 — dark (conclusion: `failure`), 2026-11-10 00:35 UTC
- Dark since: 2026-11-09 12:24 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: - seed-gdelt-intel [BUILD_FAILED] the build for 3a602ead5 failed, so bce1caeca is still serving; nothing has built since, so run 'railway redeploy --service seed-gdelt-intel --from-source' to rebuild at head

<details><summary>End of the job log</summary>

```
yarn: 1.22.22
Railway operational-config audit passed: live Railway configuration matches repository policy.
Read 92 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Deepened 1 service history read(s) the 50-record window could not settle (deep window 400): 1 reclassified, 0 failed, 0 unchanged.
Railway deploy-drift check: head=ab5168791 source=--head vs-origin-main=exact grace=ab5168791 services=92 {"CURRENT":3,"CURRENT_FOR_CLOSURE":88,"BUILD_FAILED":1}
Railway deploy-drift check found 1 service(s) with deployment or source-verification problems:
- seed-gdelt-intel [BUILD_FAILED] the build for 3a602ead5 failed, so bce1caeca is still serving; nothing has built since, so run `railway redeploy --service seed-gdelt-intel --from-source` to rebuild at head
##[error]Process completed with exit code 1.
```

</details>

### Post-merge Deploy Monitor (`.github/workflows/postmerge-deploy-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42730133280 — dark (conclusion: `failure`), 2026-11-10 00:40 UTC
- Dark since: 2026-11-09 18:09 UTC (first run of the current streak)
- Job / step: `monitor` → `Check post-merge deploys reached production`
- Likely cause: - Convex Deploy [RUN_FAILED] run 42670983808 (docs(blog): link blog posts to landing pages using Search Console que…) concluded failure

<details><summary>End of the job log</summary>

```
npm: 11.19.1
yarn: 1.22.22
postmerge-deploy ERROR: Convex Deploy [RUN_FAILED] run 42670983808 (docs(blog): link blog posts to landing pages using Search Console que…) concluded failure
Post-merge deploy monitor found 1 workflow(s) that did not deploy:
postmerge-deploy ok: Deploy Railway Reconcile Control [DEPLOYED] run 42173009636 deployed
postmerge-deploy ok: Deploy api-cors-preflight Worker [DEPLOYED] run 42173009705 deployed
- Convex Deploy [RUN_FAILED] run 42670983808 (docs(blog): link blog posts to landing pages using Search Console que…) concluded failure
##[error]Process completed with exit code 1.
```

</details>

### Perf — styleLayout budget (`.github/workflows/perf-style-layout-budget.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42673503644 — dark (conclusion: `failure`), 2026-11-09 18:22 UTC
- Dark since: 2026-11-09 18:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
