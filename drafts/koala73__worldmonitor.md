<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89717 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Seed Freshness Monitor" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Seed Freshness Monitor** workflow (`.github/workflows/seed-freshness-monitor.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40794554048 — dark (conclusion: `failure`), 2026-10-29 00:30 UTC
- Dark since: 2026-10-28 17:49 UTC (first run of the current streak)
- Job / step: `monitor` → `Publish ingestion operational transitions`
- Likely cause: Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.

<details><summary>End of the job log</summary>

```
- imdCycloneMarine: status=SEED_ERROR records=28 age=13m max=45m
- naturalEvents: status=SEED_ERROR records=24 age=27m max=540m
- outages: status=STALE_SEED records=13 age=89m max=30m
- portwatchPortActivity: status=SEED_ERROR records=174 age=749m max=2160m
- riskScores: status=COVERAGE_PARTIAL records=2 age=7m max=30m
- trafficAnomalies: status=STALE_SEED records=8 age=89m max=60m
Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
