<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 257831 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yaml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/40639475553 — dark (conclusion: `failure`), 2026-10-28 05:41 UTC
- Dark since: 2026-10-28 05:41 UTC (first run of the current streak)
- Job / step: `Python tests / Run tests (2/2)` → `Run tests`
- Likely cause: tests/gateway/test_managed_worker_images.py  (2 tests failed)

<details><summary>End of the job log</summary>

```
../../_temp/setup-pm/tools/python-3.14.9+20261021-linux-x64/lib/python3.14/asyncio/timeouts.py:115: TimeoutError
=========================== short test summary info ============================
FAILED tests/gateway/test_managed_worker_images.py::test_admitted_images_reach_managed_worker[image-fixture-managed] - TimeoutError
FAILED tests/gateway/test_managed_worker_images.py::test_admitted_images_reach_managed_worker[image-fixture-safe] - TimeoutError
==================== 2 failed, 4 passed in 75.98s (0:01:15) ====================
=== 1 file with test failures ===
  tests/gateway/test_managed_worker_images.py  (2 tests failed)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
