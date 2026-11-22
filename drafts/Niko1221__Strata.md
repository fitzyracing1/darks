<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: ready -->
# Upstream issue draft: Niko1221/Strata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 46627 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Checks", "Minimal serving runtime")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Checks (`.github/workflows/check.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/44926301684 — dark (conclusion: `failure`), 2026-11-21 16:45 UTC
- Dark since: 2026-11-21 16:45 UTC (first run of the current streak)
- Job / step: `Windows / Python terminal/serve/` → `tools/check`
- Likely cause: check: 0 passed, 1 failed, 0 not run (of 1 steps)

<details><summary>End of the job log</summary>

```
  py-serve           1  the schema check needs jsonschema
  py-serve           1  symlinks need privileges on Windows
  py-serve           1  needs SIGSTOP to freeze the fake engine
  py-serve           1  no AMD driver (atiadlxx.dll) or no AMD card here
  py-serve           1  child reaping is checked through /proc
check: 0 passed, 1 failed, 0 not run (of 1 steps)
scratch kept: D:\a\_temp\check
##[error]Process completed with exit code 1.
```

</details>

### Minimal serving runtime (`.github/workflows/terminal-minimal-server.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/44926301715 — dark (conclusion: `failure`), 2026-11-21 16:45 UTC
- Dark since: 2026-11-21 16:45 UTC (first run of the current streak)
- Job / step: `Linux / runtime requirements only` → `Run full server suite without terminal packages`
- Likely cause: FAILED (errors=7, skipped=26)

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/Strata/Strata/terminal/serve/server.py", line 2474, in generate
    f"GEN {int(max_new)}{self.sampling_keys(sampling or {}, hy4=getattr(self, 'hy4_engine', False))}"
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: engine.<locals>.<lambda>() got an unexpected keyword argument 'hy4'
----------------------------------------------------------------------
Ran 2119 tests in 746.533s
FAILED (errors=7, skipped=26)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
