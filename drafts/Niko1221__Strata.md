<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: ready -->
# Upstream issue draft: Niko1221/Strata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 46710 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Checks", "Minimal serving runtime")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Checks (`.github/workflows/check.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/45016591569 — dark (conclusion: `failure`), 2026-11-22 11:17 UTC
- Dark since: 2026-11-21 16:45 UTC (first run of the current streak)
- Job / step: `macOS / host typecheck + test + build` → `tools/check`
- Likely cause: check: 2 passed, 1 failed, 0 not run (of 3 steps)

<details><summary>End of the job log</summary>

```
  host-test          1  starts a real browser: set STRATA_TEST_BROWSER=1
  host-test          1  PowerShell is checked on Windows
  host-test          1  needs Windows PowerShell to parse the script (Windows only)
  host-test          1  STRATA_TEST_PI_AI_DIR is not set (the Harness AI package folder)
  host-test          1  needs Windows PowerShell (Windows only)
check: 2 passed, 1 failed, 0 not run (of 3 steps)
scratch kept: /Users/runner/work/_temp/check
##[error]Process completed with exit code 1.
```

</details>

### Minimal serving runtime (`.github/workflows/terminal-minimal-server.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/45016591436 — dark (conclusion: `failure`), 2026-11-22 11:17 UTC
- Dark since: 2026-11-21 16:45 UTC (first run of the current streak)
- Job / step: `Linux / runtime requirements only` → `Run full server suite without terminal packages`
- Likely cause: FAILED (errors=6, skipped=27)

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/Strata/Strata/terminal/serve/server.py", line 2480, in generate
    f"GEN {int(max_new)}{self.sampling_keys(sampling or {}, hy4=getattr(self, 'hy4_engine', False), inkling=getattr(self, 'inkling_engine', False))}"
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: engine.<locals>.<lambda>() got an unexpected keyword argument 'hy4'
----------------------------------------------------------------------
Ran 2134 tests in 788.160s
FAILED (errors=6, skipped=27)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
