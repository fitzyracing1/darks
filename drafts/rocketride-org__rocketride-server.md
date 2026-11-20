<!-- dark-draft: rocketride-org/rocketride-server -->
<!-- draft-state: ready -->
# Upstream issue draft: rocketride-org/rocketride-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/rocketride-org/rocketride-server/issues/new
- **Stars:** 20008 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on develop ("check-externals", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `develop` have been dark recently. Details below, in case they're useful:

### check-externals (`.github/workflows/check-externals.yml`)

- Latest run on `develop`: https://github.com/rocketride-org/rocketride-server/actions/runs/44665723927 — dark (conclusion: `failure`), 2026-11-20 03:08 UTC
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

- Latest run on `develop`: https://github.com/rocketride-org/rocketride-server/actions/runs/44756735499 — dark (conclusion: `failure`), 2026-11-20 14:46 UTC
- Dark since: 2026-11-20 14:46 UTC (first run of the current streak)
- Job / step: `Build / Windows Server 2022`
- Likely cause: The hosted runner lost communication with the server. Anything in your workflow that terminates the runner process, starves it for CPU/Memory, or blocks its network access can cause this error.

If this is already known or expected, feel free to close. Thanks for maintaining rocketride-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
