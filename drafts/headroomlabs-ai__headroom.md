<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 78328 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "PR Governance")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/40986096769 — dark (conclusion: `failure`), 2026-10-30 01:28 UTC
- Dark since: 2026-10-29 04:45 UTC (first run of the current streak)
- Job / step: `test (3)` → `Run test shard 3/4`
- Likely cause: = 1 failed, 4497 passed, 91 skipped, 13725 deselected, 3931 warnings in 567.26s (0:09:27) =

<details><summary>End of the job log</summary>

```
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
================================ tests coverage ================================
_______________ coverage: platform linux, python 3.12.15-final-0 _______________
Coverage XML written to file coverage-3.xml
=========================== short test summary info ============================
FAILED tests/test_platform_stabilization_functional.py::test_v1_compress_timeout_fails_open_quickly - assert 1.2716040849999786 < 0.5
= 1 failed, 4497 passed, 91 skipped, 13725 deselected, 3931 warnings in 567.26s (0:09:27) =
##[error]Process completed with exit code 1.
```

</details>

### PR Governance (`.github/workflows/pr-health.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/40891960075 — dark (conclusion: `cancelled`), 2026-10-29 14:29 UTC
- Dark since: 2026-10-29 14:29 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4365
https://github.com/headroomlabs-ai/headroom/pull/4361
https://github.com/headroomlabs-ai/headroom/pull/4361
https://github.com/headroomlabs-ai/headroom/pull/4361
https://github.com/headroomlabs-ai/headroom/pull/4361
https://github.com/headroomlabs-ai/headroom/pull/4360
https://github.com/headroomlabs-ai/headroom/pull/4360
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
