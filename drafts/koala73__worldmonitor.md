<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 91139 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Analytics Collector Monitor" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Analytics Collector Monitor** workflow (`.github/workflows/analytics-collector-monitor.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45460437883 — dark (conclusion: `failure`), 2026-11-24 18:31 UTC
- Dark since: 2026-11-24 18:31 UTC (first run of the current streak)
- Job / step: `monitor` → `Probe analytics collector`
- Likely cause: - write-canary-pageview burst=1 startedAt=2026-11-24T18:31:44.238Z elapsedMs=20001: request failed: TimeoutError (phase=request)

<details><summary>End of the job log</summary>

```
node: v24.22.3
npm: 11.19.1
yarn: 1.22.22
Analytics collector alert at https://abacus.worldmonitor.app:
Analytics collector write canary: 1/12 attempts failed (8.3%) across 3 concurrent bursts.
- Write canary has 1/12 failed attempts; any failed POST is actionable after #5715 remediation.
  - write-canary-pageview burst=1 startedAt=2026-11-24T18:31:44.238Z elapsedMs=20001: request failed: TimeoutError (phase=request)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
