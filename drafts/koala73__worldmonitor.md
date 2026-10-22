<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89137 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Railway Native Deploy Health", "Umami Storage Monitor", "Seed Freshness Monitor")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39735294163 — dark (conclusion: `failure`), 2026-10-22 06:39 UTC
- Dark since: 2026-10-21 06:39 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json timed out after 60000ms

<details><summary>End of the job log</summary>

```
3 packages are looking for funding
  run `npm fund` for details
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   @railway/cli@5.30.1 (postinstall: node ./npm-install/postinstall.js)
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json timed out after 60000ms
##[error]Process completed with exit code 1.
```

</details>

### Umami Storage Monitor (`.github/workflows/umami-storage-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39735883582 — dark (conclusion: `failure`), 2026-10-22 06:44 UTC
- Dark since: 2026-10-21 09:45 UTC (first run of the current streak)
- Job / step: `monitor` → `Read Umami Postgres volume usage`
- Likely cause: Railway volume read failed: railway volume list failed with exit code 1

<details><summary>End of the job log</summary>

```
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
Restored storage history from run 39732612864.
Failed to fetch: error decoding response body
Caused by:
    0: error decoding response body
    1: expected value at line 1 column 1
Railway volume read failed: railway volume list failed with exit code 1
##[error]Process completed with exit code 1.
```

</details>

### Seed Freshness Monitor (`.github/workflows/seed-freshness-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39733900281 — dark (conclusion: `failure`), 2026-10-22 06:26 UTC
- Dark since: 2026-10-22 06:26 UTC (first run of the current streak)
- Job / step: `monitor` → `Publish ingestion operational transitions`
- Likely cause: Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.

<details><summary>End of the job log</summary>

```
- notamClosures: status=STALE_SEED records=0 age=3985m max=240m
- oecdLtRates: status=STALE_SEED records=15238 age=5536m max=4320m
- pizzint: status=STALE_SEED records=0
- relayGatewayGate: status=RELAY_GATE_REJECTED records=unknown
- riskScores: status=COVERAGE_PARTIAL records=2 age=5m max=30m
- strikePressure: status=STALE_SEED records=16 age=329m max=45m
Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
