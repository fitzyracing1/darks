<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 88980 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39556781211 — dark (conclusion: `failure`), 2026-10-21 06:39 UTC
- Dark since: 2026-10-21 06:39 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: unexpected repository service(s): seed-country-history

<details><summary>End of the job log</summary>

```
3 packages are looking for funding
  run `npm fund` for details
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   @railway/cli@5.30.1 (postinstall: node ./npm-install/postinstall.js)
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
unexpected repository service(s): seed-country-history
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
