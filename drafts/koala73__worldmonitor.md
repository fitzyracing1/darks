<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89500 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Railway Native Deploy Health", "CodeQL", "Seed Freshness Monitor", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40221325196 — dark (conclusion: `failure`), 2026-10-25 18:27 UTC
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
Railway deploy-drift check: head=7129864df source=--head vs-origin-main=exact grace=4f76cbfac services=89 {"CURRENT_FOR_CLOSURE":58,"CURRENT":31}
Every service this repository deploys is running 7129864df or building it.
##[error]Process completed with exit code 1.
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40220799057 — dark (conclusion: `cancelled`), 2026-10-25 18:20 UTC
- Dark since: 2026-10-25 12:06 UTC (first run of the current streak)
- Likely cause: run cancelled

### Seed Freshness Monitor (`.github/workflows/seed-freshness-monitor.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40220467208 — dark (conclusion: `failure`), 2026-10-25 18:16 UTC
- Dark since: 2026-10-25 18:16 UTC (first run of the current streak)
- Job / step: `monitor` → `Publish ingestion operational transitions`
- Likely cause: Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.

<details><summary>End of the job log</summary>

```
Exact main revision passed repository gates.
- recovered: aisGaps:EMPTY no longer reported; remove it from scripts/seed-freshness-baseline.json (#7574).
Ingestion operational acceptance failed: 3 unacknowledged problem(s).
- chokepointTransits: status=COVERAGE_PARTIAL records=3 age=6m max=30m
- imdCycloneMarine: status=SEED_ERROR records=32 age=1m max=45m
- naturalEvents: status=SEED_ERROR records=23 age=13m max=540m
Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.
##[error]Process completed with exit code 1.
```

</details>

### Perf — styleLayout budget (`.github/workflows/perf-style-layout-budget.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40221571653 — dark (conclusion: `failure`), 2026-10-25 18:30 UTC
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
[style-layout-budget] REGRESSION: styleLayout is 28.5% of attributed main-thread self-time, over the 28% budget
[style-layout-budget] see docs/perf/desktop-mainthread-baseline-2026-07-02.md
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
