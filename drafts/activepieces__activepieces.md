<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25239 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Chat Evals", "Delete old workflow runs", "Benchmark")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/40460712064 — dark (conclusion: `failure`), 2026-10-27 06:22 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: AssertionError: see the eval report above for the failing checks: expected [ …(2) ] to deeply equal [] (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:58)

<details><summary>End of the job log</summary>

```
     59|     })
     60| })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 89 passed (90)
   Start at  06:26:48
   Duration  514.48s (transform 1.53s, setup 66ms, collect 16.65s, tests 508.49s, environment 3ms, prepare 1.18s)
##[error]AssertionError: see the eval report above for the failing checks: expected [ …(2) ] to deeply equal []
```

</details>

### Delete old workflow runs (`.github/workflows/delete-workflow-runs.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/40427247053 — dark (conclusion: `failure`), 2026-10-27 00:34 UTC
- Dark since: 2026-10-27 00:34 UTC (first run of the current streak)
- Job / step: `delete-runs` → `Run Mattraks/delete-workflow-runs@v2`
- Likely cause: ❌ Action failed: Server Error

<details><summary>End of the job log</summary>

```
✅ Successfully deleted: Run 18821605587 (CI)
✅ Successfully deleted: Run 18821627801 (CI)
🗑️ Deletion summary for CI: deleted=42, skipped=0, failed=0
GET /repositories/573661753/actions/workflows/60700263/runs?per_page=100&page=348 - 500 with id 3430:45C4F:14AD357:43FE19C:6ADFFD2E in 1695ms
GET /repositories/573661753/actions/workflows/60700263/runs?per_page=100&page=348 - 500 with id 3430:2E74FA:115EC75:3A4670D:6ADFFD34 in 8356ms
GET /repositories/573661753/actions/workflows/60700263/runs?per_page=100&page=348 - 500 with id 3432:266C91:115F678:39A9600:6ADFFD40 in 8315ms
GET /repositories/573661753/actions/workflows/60700263/runs?per_page=100&page=348 - 502 with id 3430:2E74FA:1168031:3A651FC:6ADFFD52 in 10333ms
##[error]❌ Action failed: Server Error
```

</details>

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/40442496381 — dark (conclusion: `failure`), 2026-10-27 03:08 UTC
- Dark since: 2026-10-27 03:08 UTC (first run of the current streak)
- Job / step: `benchmark (dedicated, 1, 28, 0.5, 1G, 1, 768, true, 28)` → `Detect regression against trailing 14 runs (scheduled runs only)`
- Likely cause: Box signals API responded 401: {"error":"Unknown token. Send it as \"Authorization: ***"."}

<details><summary>End of the job log</summary>

```
      "pct": -20.10014306151646,
      "breach": false
    }
  ],
  "breachCount": 2
}
Box signals API responded 401: {"error":"Unknown token. Send it as \"Authorization: ***"."}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
