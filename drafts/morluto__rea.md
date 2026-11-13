<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 457175 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43472997648 — dark (conclusion: `cancelled`), 2026-11-13 17:27 UTC
- Dark since: 2026-11-13 15:27 UTC (first run of the current streak)
- Job / step: `Test shard (6/6)` → `Run complete portable suite with coverage`
- Likely cause: run cancelled in job "Test shard (6/6)"

<details><summary>End of the job log</summary>

```
      8|   const count = 130_000;
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 586 passed | 5 skipped (592)
      Tests  1 failed | 8137 passed | 63 skipped (8201)
   Start at  17:29:15
   Duration  1620.69s (tests 91%, import 7%, transform 1%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-6-6.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
