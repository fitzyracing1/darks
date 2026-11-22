<!-- dark-draft: rocketride-org/rocketride-server -->
<!-- draft-state: ready -->
# Upstream issue draft: rocketride-org/rocketride-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/rocketride-org/rocketride-server/issues/new
- **Stars:** 19998 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on develop ("check-externals", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `develop` have been dark recently. Details below, in case they're useful:

### check-externals (`.github/workflows/check-externals.yml`)

- Latest run on `develop`: https://github.com/rocketride-org/rocketride-server/actions/runs/44979289937 — dark (conclusion: `failure`), 2026-11-22 03:08 UTC
- Dark since: 2026-11-19 03:09 UTC (first run of the current streak)
- Job / step: `check-externals (nightly)` → `Run check-externals`
- Likely cause: libc++abi: terminating due to uncaught exception of type pybind11::attribute_error: module 'matplotlib.ft2font' has no attribute '__path__'

<details><summary>End of the job log</summary>

```
/home/runner/work/rocketride-server/rocketride-server/dist/server/lib/python3.12/site-packages/torch/jit/_script.py:362: DeprecationWarning: `torch.jit.script_method` is deprecated. Please switch to `torch.compile` or `…
  warnings.warn(
/home/runner/work/rocketride-server/rocketride-server/dist/server/lib/python3.12/site-packages/torch/jit/_script.py:1480: DeprecationWarning: `torch.jit.script` is deprecated. Please switch to `torch.compile` or `torch.…
  warnings.warn(
/home/runner/work/rocketride-server/rocketride-server/dist/server/lib/python3.12/site-packages/peft/import_utils.py:52: FutureWarning: Support for Transformers < 5.6 is deprecated in PEFT and will be removed in the next…
  warnings.warn(
libc++abi: terminating due to uncaught exception of type pybind11::attribute_error: module 'matplotlib.ft2font' has no attribute '__path__'
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `develop`: https://github.com/rocketride-org/rocketride-server/actions/runs/45015894573 — dark (conclusion: `failure`), 2026-11-22 11:09 UTC
- Dark since: 2026-11-22 11:09 UTC (first run of the current streak)
- Job / step: `Build / Windows Server 2022` → `Test`
- Likely cause: Tests:       1 failed, 12 skipped, 499 passed, 512 total

<details><summary>End of the job log</summary>

```
Time:        334.193 s
Ran all test suites.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
    at ChildProcess.<anonymous> (D:\a\rocketride-server\rocketride-server\scripts\lib\exec.js:266:12)
    at ChildProcess.emit (node:events:519:28)
    at maybeClose (node:internal/child_process:1101:16)
    at ChildProcess._handle.onexit (node:internal/child_process:304:5)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rocketride-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
