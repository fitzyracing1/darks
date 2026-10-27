<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89617 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Railway Registry Sync", "Perf — styleLayout budget")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Registry Sync (`.github/workflows/railway-registry-sync.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40456569798 — dark (conclusion: `failure`), 2026-10-27 05:39 UTC
- Dark since: 2026-10-27 05:39 UTC (first run of the current streak)
- Job / step: `Reconcile registry to live configuration` → `Verify live configuration with the Viewer identity`
- Likely cause: Required environment variables were not evaluated: the Viewer projection cannot request their values.

<details><summary>End of the job log</summary>

```
Railway operational-config audit passed: live Railway configuration matches repository policy.
Railway operational-config audit: environment=production mode=deployment-only
Required environment variables were not evaluated: the Viewer projection cannot request their values.
Railway operational-config audit found 2 drifted service(s):
- seed-no2-activity: source checkSuites true != false
- seed-notam-nms: source checkSuites true != false
Railway registry sync verify reported configuration drift (exit 2); verdicts are not retried
##[error]Process completed with exit code 1.
```

</details>

### Perf — styleLayout budget (`.github/workflows/perf-style-layout-budget.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40463023935 — dark (conclusion: `failure`), 2026-10-27 06:45 UTC
- Dark since: 2026-10-27 06:45 UTC (first run of the current streak)
- Job / step: `measure` → `Enforce the styleLayout budget`
- Likely cause: No VM guests are running outdated hypervisor (qemu) binaries on this host.

<details><summary>End of the job log</summary>

```
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                |  60% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                        |  70% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                |  80% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■        |  90% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| 100% of 114.3 MiB
[style-layout-budget] REGRESSION: styleLayout is 29.5% of attributed main-thread self-time, over the 28% budget
[style-layout-budget] see docs/perf/desktop-mainthread-baseline-2026-07-02.md
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
