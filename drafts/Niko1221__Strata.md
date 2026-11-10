<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: ready -->
# Upstream issue draft: Niko1221/Strata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 42509 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Checks" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Checks** workflow (`.github/workflows/check.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/42667784802 — dark (conclusion: `failure`), 2026-11-09 17:45 UTC
- Dark since: 2026-11-09 10:12 UTC (first run of the current streak)
- Job / step: `macOS / host typecheck + test + build` → `tools/check`
- Likely cause: check: 2 passed, 1 failed, 0 not run (of 3 steps)

<details><summary>End of the job log</summary>

```
  host-test          2  drive-letter paths: Windows only
  host-test          1  starts a real browser: set STRATA_TEST_BROWSER=1
  host-test          1  PowerShell is checked on Windows
  host-test          1  needs Windows PowerShell to parse the script (Windows only)
  host-test          1  STRATA_TEST_PI_AI_DIR is not set (the Harness AI package folder)
  host-test          1  needs Windows PowerShell (Windows only)
check: 2 passed, 1 failed, 0 not run (of 3 steps)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
