<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89074 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Railway Native Deploy Health", "Umami Storage Monitor", "Railway Registry Sync")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39653306290 — dark (conclusion: `failure`), 2026-10-21 18:30 UTC
- Dark since: 2026-10-21 06:39 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json failed (1): Unauthorized. Please check that your RAILWAY_API_TOKEN is valid and has access to the resource you're tryin…

<details><summary>End of the job log</summary>

```
3 packages are looking for funding
  run `npm fund` for details
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   @railway/cli@5.30.1 (postinstall: node ./npm-install/postinstall.js)
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json failed (1): Unauthorized. Please check that your RAILWAY_API_TOKEN is valid and has access to the resource you're tryin…
##[error]Process completed with exit code 1.
```

</details>

### Umami Storage Monitor (`.github/workflows/umami-storage-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39653290907 — dark (conclusion: `failure`), 2026-10-21 18:30 UTC
- Dark since: 2026-10-21 09:45 UTC (first run of the current streak)
- Job / step: `monitor` → `Read Umami Postgres volume usage`
- Likely cause: Railway volume read failed: railway volume list failed with exit code 1

<details><summary>End of the job log</summary>

```
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   @railway/cli@5.30.1 (postinstall: node ./npm-install/postinstall.js)
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
Restored storage history from run 39650288117.
Unauthorized. Please check that your RAILWAY_TOKEN is valid and has access to the resource you're trying to use.
Railway volume read failed: railway volume list failed with exit code 1
##[error]Process completed with exit code 1.
```

</details>

### Railway Registry Sync (`.github/workflows/railway-registry-sync.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39634634392 — dark (conclusion: `failure`), 2026-10-21 16:25 UTC
- Dark since: 2026-10-21 12:29 UTC (first run of the current streak)
- Job / step: `Reconcile registry to live configuration` → `Reconcile registry-managed Railway configuration`
- Likely cause: Railway registry sync apply failed after 3 attempts (last failure: exit 1)

<details><summary>End of the job log</summary>

```
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json failed (1): Unauthorized. Please check that your RAILWAY_TOKEN is valid and has access to the resource you're trying to…
Railway registry sync apply attempt 1 failed (exit 1); retrying in 5000ms.
railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json failed (1): Unauthorized. Please check that your RAILWAY_TOKEN is valid and has access to the resource you're trying to…
Railway registry sync apply attempt 2 failed (exit 1); retrying in 15000ms.
railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json failed (1): Unauthorized. Please check that your RAILWAY_TOKEN is valid and has access to the resource you're trying to…
Railway registry sync apply failed after 3 attempts (last failure: exit 1)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
