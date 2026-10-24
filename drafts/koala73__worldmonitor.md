<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89420 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Railway Native Deploy Health", "Perf — styleLayout budget")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40120768269 — dark (conclusion: `failure`), 2026-10-24 18:27 UTC
- Dark since: 2026-10-24 18:27 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: unexpected repository service(s): seed-notam-nms

<details><summary>End of the job log</summary>

```
3 packages are looking for funding
  run `npm fund` for details
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   @railway/cli@5.30.1 (postinstall: node ./npm-install/postinstall.js)
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
unexpected repository service(s): seed-notam-nms
##[error]Process completed with exit code 1.
```

</details>

### Perf — styleLayout budget (`.github/workflows/perf-style-layout-budget.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40120969584 — dark (conclusion: `failure`), 2026-10-24 18:29 UTC
- Dark since: 2026-10-24 18:29 UTC (first run of the current streak)
- Job / step: `measure` → `Enforce the styleLayout budget`
- Likely cause: No VM guests are running outdated hypervisor (qemu) binaries on this host.

<details><summary>End of the job log</summary>

```
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                |  60% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                        |  70% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                |  80% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■        |  90% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| 100% of 114.3 MiB
[style-layout-budget] REGRESSION: styleLayout is 29% of attributed main-thread self-time, over the 28% budget
[style-layout-budget] see docs/perf/desktop-mainthread-baseline-2026-07-02.md
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
