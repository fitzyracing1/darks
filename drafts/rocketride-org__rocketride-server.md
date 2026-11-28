<!-- dark-draft: rocketride-org/rocketride-server -->
<!-- draft-state: ready -->
# Upstream issue draft: rocketride-org/rocketride-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/rocketride-org/rocketride-server/issues/new
- **Stars:** 19972 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "check-externals" workflow failing on develop since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **check-externals** workflow (`.github/workflows/check-externals.yml`) on `develop` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `develop`: https://github.com/rocketride-org/rocketride-server/actions/runs/45932489919 — dark (conclusion: `failure`), 2026-11-27 03:09 UTC
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

If this is already known or expected, feel free to close. Thanks for maintaining rocketride-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
