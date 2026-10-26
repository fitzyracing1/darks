<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89574 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Railway Native Deploy Health", "TPS Open Data Live Contract")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40335453328 — dark (conclusion: `failure`), 2026-10-26 13:59 UTC
- Dark since: 2026-10-24 18:27 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: - seed-unrest-events [BUILD_FAILED] the build for df11f886e failed, so 9d7bf6e4b is still serving; nothing has built since, so run 'railway redeploy --service seed-unrest-events --from-source' to rebuild at head

<details><summary>End of the job log</summary>

```
Railway operational-config audit found 1 drifted service(s):
- seed-notam-nms: source checkSuites true != false
Read 89 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check found 2 service(s) with deployment or source-verification problems:
Railway deploy-drift check: head=df11f886e source=--head vs-origin-main=exact grace=62cc4c169 services=89 {"CURRENT_FOR_CLOSURE":58,"CURRENT":10,"PENDING_BUILD":19,"BUILD_FAILED":2}
- seed-bundle-imf-extended [BUILD_FAILED] the build for df11f886e failed, so 62cc4c169 is still serving; nothing has built since, so run `railway redeploy --service seed-bundle-imf-extended --from-source` to rebuild at …
- seed-unrest-events [BUILD_FAILED] the build for df11f886e failed, so 9d7bf6e4b is still serving; nothing has built since, so run `railway redeploy --service seed-unrest-events --from-source` to rebuild at head
##[error]Process completed with exit code 1.
```

</details>

### TPS Open Data Live Contract (`.github/workflows/tps-open-data-live.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40335228755 — dark (conclusion: `failure`), 2026-10-26 13:57 UTC
- Dark since: 2026-10-26 13:57 UTC (first run of the current streak)
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
# duration_ms 56203.185182
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
