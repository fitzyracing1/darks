<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: ready -->
# Upstream issue draft: Niko1221/Strata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 44641 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main (".github/workflows/metal-build.yml", "Checks", "Config snapshot")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### .github/workflows/metal-build.yml (`.github/workflows/metal-build.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/43754920904 — dark (conclusion: `failure`), 2026-11-15 19:53 UTC
- Dark since: 2026-11-15 17:44 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Checks (`.github/workflows/check.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/43754922263 — dark (conclusion: `failure`), 2026-11-15 19:53 UTC
- Dark since: 2026-11-15 17:44 UTC (first run of the current streak)
- Job / step: `Windows / cpu CMake preset (MSVC)` → `tools/check`
- Likely cause: check: 0 passed, 1 failed, 0 not run (of 1 steps)

<details><summary>End of the job log</summary>

```
---------  ------  ------  ------  -------  -----
cmake-cpu  FAILED       0       0        0  0m43s  C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Tools\MSVC\14.44.35207\include\set(22): note: see declaration of 'std' | D:\a\Strata\Strata\src\core\convers…
FAILED in cmake-cpu (1):
  cmake build
  log: D:\a\_temp\check\cmake-cpu.log
check: 0 passed, 1 failed, 0 not run (of 1 steps)
scratch kept: D:\a\_temp\check
##[error]Process completed with exit code 1.
```

</details>

### Config snapshot (`.github/workflows/snapshot.yml`)

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/43754922177 — dark (conclusion: `failure`), 2026-11-15 19:53 UTC
- Dark since: 2026-11-15 17:44 UTC (first run of the current streak)
- Job / step: `windows-2022` → `tools/check snapshot`
- Likely cause: check: 0 passed, 1 failed, 0 not run (of 1 steps)

<details><summary>End of the job log</summary>

```
--------  ------  ------  ------  -------  ------
snapshot  FAILED       0       0        0  15m00s  timed out after 900 s
FAILED in snapshot (1):
  timeout
  log: D:\a\_temp\check\snapshot.log
check: 0 passed, 1 failed, 0 not run (of 1 steps)
scratch kept: D:\a\_temp\check
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
