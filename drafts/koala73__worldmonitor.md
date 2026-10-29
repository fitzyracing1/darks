<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89762 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Seed Freshness Monitor" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Seed Freshness Monitor** workflow (`.github/workflows/seed-freshness-monitor.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40931187170 — dark (conclusion: `failure`), 2026-10-29 18:28 UTC
- Dark since: 2026-10-29 11:48 UTC (first run of the current streak)
- Job / step: `monitor` → `Publish ingestion operational transitions`
- Likely cause: Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.

<details><summary>End of the job log</summary>

```
- chokepoints: status=COVERAGE_PARTIAL records=5 age=3m max=60m
- chokepointTransits: status=COVERAGE_PARTIAL records=2 age=7m max=30m
- consumerPricesCategories: status=EMPTY_DATA records=0 age=893m max=1500m
- crossStraitActivityJapanMod: status=SEED_ERROR records=2 age=1062m max=720m
- jodiOil: status=STALE_CONTENT records=77 contentAge=434548m maxContentAge=267840m (seed age=653m ok)
- portwatchPortActivity: status=SEED_ERROR records=174 age=1827m max=2160m
Ingestion operational acceptance failed: the accepted-problem baseline expired on 2026-09-05T18:00:00Z. Re-review scripts/seed-freshness-baseline.json and set a new expiresAt.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
