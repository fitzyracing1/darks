<!-- dark-draft: OpenByteInc/QuantDinger -->
<!-- draft-state: ready -->
# Upstream issue draft: OpenByteInc/QuantDinger

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/OpenByteInc/QuantDinger/issues/new
- **Stars:** 13148 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Backend CI" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Backend CI** workflow (`.github/workflows/basic-ci.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/OpenByteInc/QuantDinger/actions/runs/40369523486 — dark (conclusion: `failure`), 2026-10-26 17:32 UTC
- Dark since: 2026-10-26 17:32 UTC (first run of the current streak)
- Job / step: `Backend tests (1/2)` → `Run backend test shard`
- Likely cause: %3|1793036074.218|FAIL|quantdinger-runtime#producer-5| [thrd:localhost:29092/bootstrap]: localhost:29092/bootstrap: Connect to i

<details><summary>End of the job log</summary>

```
_______________ coverage: platform linux, python 3.12.15-final-0 _______________
Coverage XML written to file coverage-0.xml
=========================== short test summary info ============================
FAILED tests/test_pending_order_worker_alpaca_sync.py::test_alpaca_fill_snapshot_updates_intent_without_an_undefined_order_id - assert 0 == 2
 +  where 0 = len([])
1 failed, 1817 passed, 5 deselected, 13 warnings in 195.20s (0:03:15)
%3|1793036074.218|FAIL|quantdinger-runtime#producer-5| [thrd:localhost:29092/bootstrap]: localhost:29092/bootstrap: Connect to i
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining QuantDinger!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
