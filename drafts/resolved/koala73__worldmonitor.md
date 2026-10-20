<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again (2026-10-20); nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 88870 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Analytics Collector Monitor", "Perf — styleLayout budget", "Umami Storage Monitor")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Analytics Collector Monitor (`.github/workflows/analytics-collector-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39380999506 — dark (conclusion: `failure`), 2026-10-20 06:32 UTC
- Dark since: 2026-10-20 06:32 UTC (first run of the current streak)
- Job / step: `monitor` → `Probe analytics collector`
- Likely cause: - write-canary-event burst=3 startedAt=2026-10-20T06:33:25.367Z elapsedMs=10042: HTTP 500 (expected 200)

<details><summary>End of the job log</summary>

```
  - write-canary-identify-b burst=2 startedAt=2026-10-20T06:33:12.314Z elapsedMs=10051: HTTP 500 (expected 200)
  - write-canary-pageview burst=2 startedAt=2026-10-20T06:33:12.314Z elapsedMs=10050: HTTP 500 (expected 200)
  - write-canary-event burst=2 startedAt=2026-10-20T06:33:12.315Z elapsedMs=10042: HTTP 500 (expected 200)
  - write-canary-identify-a burst=3 startedAt=2026-10-20T06:33:25.367Z elapsedMs=10036: HTTP 500 (expected 200)
  - write-canary-identify-b burst=3 startedAt=2026-10-20T06:33:25.367Z elapsedMs=10042: HTTP 500 (expected 200)
  - write-canary-pageview burst=3 startedAt=2026-10-20T06:33:25.367Z elapsedMs=10036: HTTP 500 (expected 200)
  - write-canary-event burst=3 startedAt=2026-10-20T06:33:25.367Z elapsedMs=10042: HTTP 500 (expected 200)
##[error]Process completed with exit code 1.
```

</details>

### Perf — styleLayout budget (`.github/workflows/perf-style-layout-budget.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39381997675 — dark (conclusion: `failure`), 2026-10-20 06:42 UTC
- Dark since: 2026-10-20 06:42 UTC (first run of the current streak)
- Job / step: `measure` → `Enforce the styleLayout budget`
- Likely cause: No VM guests are running outdated hypervisor (qemu) binaries on this host.

<details><summary>End of the job log</summary>

```
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                |  60% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                        |  70% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                |  80% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■        |  90% of 114.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| 100% of 114.3 MiB
[style-layout-budget] REGRESSION: styleLayout is 28.1% of attributed main-thread self-time, over the 28% budget
[style-layout-budget] see docs/perf/desktop-mainthread-baseline-2026-07-02.md
##[error]Process completed with exit code 1.
```

</details>

### Umami Storage Monitor (`.github/workflows/umami-storage-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39382065535 — dark (conclusion: `failure`), 2026-10-20 06:43 UTC
- Dark since: 2026-10-20 06:43 UTC (first run of the current streak)
- Job / step: `monitor` → `Check the retention runner is retiring rows`
- Likely cause: CRASHED: the newest retention tick exited non-zero: statements before the failure committed, statements after it never ran, so the tick retired less than a full pass. The umami-retention cron service is failing, so Umami Postgres will fill 

<details><summary>End of the job log</summary>

```
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact zip is 2f24d06ee17aec352c78d32d2a6c8b6d551b47719d26f63fc1273bf6dcc6e98f
Finalizing artifact upload
Artifact umami-storage-state.zip successfully finalized. Artifact ID 12245409846
Artifact umami-storage-state has been successfully uploaded! Final size is 2457 bytes. Artifact ID is 12245409846
Artifact download URL: https://github.com/koala73/worldmonitor/actions/runs/39382065535/artifacts/12245409846
Umami retention runner CRASHED: the newest retention tick exited non-zero: statements before the failure committed, statements after it never ran, so the tick retired less than a full pass (deployment 92e8aed9-d490-4509…
##[error]CRASHED: the newest retention tick exited non-zero: statements before the failure committed, statements after it never ran, so the tick retired less than a full pass. The umami-retention cron service is failing…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
