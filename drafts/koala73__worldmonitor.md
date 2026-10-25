<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89435 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Railway Native Deploy Health", "Seed Freshness Monitor")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40148847721 — dark (conclusion: `failure`), 2026-10-25 00:59 UTC
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
Railway deploy-drift check: head=d8ba38d82 source=--head vs-origin-main=exact grace=d8ba38d82 services=89 {"CURRENT":34,"CURRENT_FOR_CLOSURE":55}
Every service this repository deploys is running d8ba38d82 or building it.
##[error]Process completed with exit code 1.
```

</details>

### Seed Freshness Monitor (`.github/workflows/seed-freshness-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40147800607 — dark (conclusion: `failure`), 2026-10-25 00:43 UTC
- Dark since: 2026-10-25 00:43 UTC (first run of the current streak)
- Job / step: `monitor` → `Publish ingestion operational transitions`
- Likely cause: Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.

<details><summary>End of the job log</summary>

```
Ingestion operational acceptance failed: 5 unacknowledged problem(s).
- chokepointTransits: status=COVERAGE_PARTIAL records=3 age=3m max=30m
- consumerPricesCoverageAU: status=STALE_SEED records=2 age=2772m max=1500m
- consumerPricesCoverageGB: status=STALE_SEED records=3 age=2772m max=1500m
- consumerPricesCoverageUS: status=STALE_SEED records=2 age=2772m max=1500m
- naturalEvents: status=SEED_ERROR records=23 age=13m max=540m
Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
