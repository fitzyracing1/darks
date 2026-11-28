<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 8432 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Performance + cost" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Performance + cost** workflow (`.github/workflows/perf.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/46010867533 — dark (conclusion: `failure`), 2026-11-27 13:52 UTC
- Dark since: 2026-11-26 13:54 UTC (first run of the current streak)
- Job / step: `End-to-end load harness (Compose spine, generous floor)` → `Measure, with a generous regression floor`
- Likely cause: FAIL: p95 latency 25422ms exceeds the ceiling 21000ms

<details><summary>End of the job log</summary>

```
  delivery_ratio                       1.00 fraction  (n=4,000)
  ingest_accepted_eps                 58.90 events/s  (n=4,000)
  latency_max_ms                  25,954.06 ms  (n=4,000)
  latency_p50_ms                  19,321.31 ms  (n=4,000)
  latency_p95_ms                  25,421.88 ms  (n=4,000)
  latency_p99_ms                  25,765.74 ms  (n=4,000)
  pipeline_eps                        43.89 alerts/s  (n=4,000)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
