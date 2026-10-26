<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89541 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Railway Native Deploy Health", "Perf — styleLayout budget")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40282239540 — dark (conclusion: `failure`), 2026-10-26 06:51 UTC
- Dark since: 2026-10-24 18:27 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: - seed-iran-events [BUILD_FAILED] the build for ad28d5d00 failed, so 62b302cea is still serving; nothing has built since, so run 'railway redeploy --service seed-iran-events --from-source' to rebuild at head

<details><summary>End of the job log</summary>

```
Railway operational-config audit found 1 drifted service(s):
- seed-notam-nms: source checkSuites true != false
Read 89 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check: head=ad28d5d00 source=--head vs-origin-main=exact grace=ad28d5d00 services=89 {"CURRENT_FOR_CLOSURE":58,"CURRENT":29,"BUILD_FAILED":2}
Railway deploy-drift check found 2 service(s) with deployment or source-verification problems:
- seed-hormuz [BUILD_FAILED] the build for ad28d5d00 failed, so 62b302cea is still serving; nothing has built since, so run `railway redeploy --service seed-hormuz --from-source` to rebuild at head
- seed-iran-events [BUILD_FAILED] the build for ad28d5d00 failed, so 62b302cea is still serving; nothing has built since, so run `railway redeploy --service seed-iran-events --from-source` to rebuild at head
##[error]Process completed with exit code 1.
```

</details>

### Perf — styleLayout budget (`.github/workflows/perf-style-layout-budget.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40282821152 — dark (conclusion: `failure`), 2026-10-26 06:57 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `measure` → `Enforce the styleLayout budget`
- Likely cause: No VM guests are running outdated hypervisor (qemu) binaries on this host.

<details><summary>End of the job log</summary>

```
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                |  60% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                        |  70% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                |  80% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■        |  90% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| 100% of 114.3 MiB
[style-layout-budget] REGRESSION: styleLayout is 28.8% of attributed main-thread self-time, over the 28% budget
[style-layout-budget] see docs/perf/desktop-mainthread-baseline-2026-07-02.md
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
