<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 8363 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Performance + cost", "Grading integrity")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Performance + cost (`.github/workflows/perf.yml`)

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

### Grading integrity (`.github/workflows/grading-integrity.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/46021172964 — dark (conclusion: `failure`), 2026-11-27 15:01 UTC
- Dark since: 2026-11-27 15:01 UTC (first run of the current streak)
- Job / step: `No run on main passed without doing its work` → `Ask the Actions API what each required check actually executed`
- Likely cause: FAIL: could not read runs for codeql-alert-gate.yml: Remote end closed connection without response

<details><summary>End of the job log</summary>

```
branch           main
required checks  31 from .github/required-checks.json
enforced from    2026-09-29T12:00:00+00:00
protection       NOT VERIFIED — this token cannot read branch protection
                 (`administration: read`, which GITHUB_TOKEN cannot be granted).
                 The 31 context(s) graded below come from .github/required-checks.json alone.
FAIL: could not read runs for codeql-alert-gate.yml: Remote end closed connection without response
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
