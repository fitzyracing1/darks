<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89762 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Seed Freshness Monitor", "Railway Native Deploy Health")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Seed Freshness Monitor (`.github/workflows/seed-freshness-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40980261279 — dark (conclusion: `failure`), 2026-10-30 00:31 UTC
- Dark since: 2026-10-29 11:48 UTC (first run of the current streak)
- Job / step: `monitor` → `Publish ingestion operational transitions`
- Likely cause: Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.

<details><summary>End of the job log</summary>

```
- consumerPricesCategories: status=EMPTY_DATA records=0 age=1256m max=1500m
- crossStraitActivityJapanMod: status=SEED_ERROR records=2 age=1426m max=1080m
- globalTendersBrazilPncp: status=SEED_ERROR records=0 age=240m max=180m
- globalTendersSouthAfricaEtenders: status=SEED_ERROR records=0
- naturalEvents: status=SEED_ERROR records=25 age=30m max=540m
- portwatchPortActivity: status=SEED_ERROR records=174 age=2190m max=2160m
Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.
##[error]Process completed with exit code 1.
```

</details>

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40981570819 — dark (conclusion: `failure`), 2026-10-30 00:44 UTC
- Dark since: 2026-10-30 00:44 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: unexpected repository service(s): seed-ukmto-incidents

<details><summary>End of the job log</summary>

```
3 packages are looking for funding
  run `npm fund` for details
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   @railway/cli@5.30.1 (postinstall: node ./npm-install/postinstall.js)
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
unexpected repository service(s): seed-ukmto-incidents
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
