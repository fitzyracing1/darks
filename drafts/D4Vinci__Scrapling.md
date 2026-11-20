<!-- dark-draft: D4Vinci/Scrapling -->
<!-- draft-state: ready -->
# Upstream issue draft: D4Vinci/Scrapling

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/D4Vinci/Scrapling/issues/new
- **Stars:** 104427 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/tests.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/D4Vinci/Scrapling/actions/runs/44059428363 — dark (conclusion: `failure`), 2026-11-17 09:51 UTC
- Dark since: 2026-11-17 09:51 UTC (first run of the current streak)
- Job / step: `tests (3.10, macos-latest, py310)` → `Run tests`
- Likely cause: evaluation failed :( (723.76 seconds)

<details><summary>End of the job log</summary>

```
Coverage XML written to file coverage.xml
=========================== short test summary info ============================
ERROR fetchers/test_remote_session.py::test_async_remote_browser_preserves_external_context[True] - Exception: Browser.close: Connection closed while reading from the driver
========== 177 passed, 2247 deselected, 1 error in 517.03s (0:08:37) ===========
py310: exit 1 (518.70 seconds) /Users/runner/work/Scrapling/Scrapling/tests> pytest --cov=scrapling --cov-report=xml -m browser --verbose pid=11936
  py310: FAIL code 1 (720.98=setup[202.28]+cmd[518.70] seconds)
  evaluation failed :( (723.76 seconds)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Scrapling!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
