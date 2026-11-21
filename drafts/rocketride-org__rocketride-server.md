<!-- dark-draft: rocketride-org/rocketride-server -->
<!-- draft-state: ready -->
# Upstream issue draft: rocketride-org/rocketride-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/rocketride-org/rocketride-server/issues/new
- **Stars:** 20005 · **Generated:** 2026-11-21T06:41:51.202Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on develop ("check-externals", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `develop` have been dark recently. Details below, in case they're useful:

### check-externals (`.github/workflows/check-externals.yml`)

- Latest run on `develop`: https://github.com/rocketride-org/rocketride-server/actions/runs/44859605242 — dark (conclusion: `failure`), 2026-11-21 03:09 UTC
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

- Latest run on `develop`: https://github.com/rocketride-org/rocketride-server/actions/runs/44853394965 — dark (conclusion: `failure`), 2026-11-21 02:00 UTC
- Dark since: 2026-11-20 14:46 UTC (first run of the current streak)
- Job / step: `Build / Windows Server 2022` → `Test`
- Likely cause: [PASSED]: RocketRideClient lifecycle operations maps unsolicited transport loss during auth to ConnectionException without disconnected publication

<details><summary>End of the job log</summary>

```
[PASSED]: RocketRideClient lifecycle operations delivers a claimed disconnect when cancelled-login cleanup detaches during attach teardown
[PASSED]: RocketRideClient lifecycle operations logout during a reconnect gap re-attaches anonymously instead of stranding a persist client
[PASSED]: RocketRideClient lifecycle operations logout publishes exactly one balancing onDisconnected for an accepted login
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
