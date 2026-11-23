<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: resolved -->
# Upstream issue draft: Niko1221/Strata

- **Status:** resolved — lit again (2026-11-23); nothing to file
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 47003 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Config snapshot (`.github/workflows/snapshot.yml`): [issue #6655](https://github.com/Niko1221/Strata/issues/6655) "Engine Large-context compaction re-reads history from token 0 when the snapshot cannot be parked"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Checks", "Minimal serving runtime")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Checks (`.github/workflows/check.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/45080063697 — dark (conclusion: `failure`), 2026-11-22 22:51 UTC
- Dark since: 2026-11-21 16:45 UTC (first run of the current streak)
- Job / step: `Windows / Python terminal/tools/` → `tools/check`
- Likely cause: check: 0 passed, 1 failed, 0 not run (of 1 steps)

<details><summary>End of the job log</summary>

```
  py-tools           1  set STRATA_LIVE_HF=1 to read real headers from Hugging Face
  py-tools           1  the runner uses os.wait4
  py-tools           1  POSIX paths
  py-tools           1  POSIX process groups
  py-tools           1  llama.cpp's ggml-vocab-qwen35.gguf test vectors are not here
check: 0 passed, 1 failed, 0 not run (of 1 steps)
scratch kept: D:\a\_temp\check
##[error]Process completed with exit code 1.
```

</details>

### Minimal serving runtime (`.github/workflows/terminal-minimal-server.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/45080063665 — dark (conclusion: `failure`), 2026-11-22 22:51 UTC
- Dark since: 2026-11-21 16:45 UTC (first run of the current streak)
- Job / step: `Linux / runtime requirements only` → `Run full server suite without terminal packages`
- Likely cause: FAILED (failures=5, errors=2, skipped=27)

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/home/runner/work/Strata/Strata/terminal/serve/test_internal_error_500.py", line 37, in test_unexpected_oserror_is_a_500
    self.assertEqual(code, 500)
AssertionError: 400 != 500
----------------------------------------------------------------------
Ran 2179 tests in 772.855s
FAILED (failures=5, errors=2, skipped=27)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
