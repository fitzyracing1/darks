<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89601 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Railway Native Deploy Health", "TPS Open Data Live Contract")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40429634132 — dark (conclusion: `failure`), 2026-10-27 00:57 UTC
- Dark since: 2026-10-24 18:27 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead

<details><summary>End of the job log</summary>

```
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
Railway operational-config audit found 1 drifted service(s):
- seed-notam-nms: source checkSuites true != false
Read 89 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check: head=393709bff source=--head vs-origin-main=exact grace=393709bff services=89 {"CURRENT":3,"CURRENT_FOR_CLOSURE":86}
Every service this repository deploys is running 393709bff or building it.
##[error]Process completed with exit code 1.
```

</details>

### TPS Open Data Live Contract (`.github/workflows/tps-open-data-live.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40429420080 — dark (conclusion: `failure`), 2026-10-27 00:55 UTC
- Dark since: 2026-10-27 00:55 UTC (first run of the current streak)
- Job / step: `live-contract` → `Probe the official TPS Open Data source contracts`
- Likely cause: # fail 1

<details><summary>End of the job log</summary>

```
# suites 1
# pass 1
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 31021.819291
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
