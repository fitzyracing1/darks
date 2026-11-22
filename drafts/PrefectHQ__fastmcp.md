<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28708 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Upgrade checks (`.github/workflows/run-upgrade-checks.yml`): [issue #6590](https://github.com/PrefectHQ/fastmcp/issues/6590) "Upgrade checks failing on main branch"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("PBT campaign", "Tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PBT campaign (`.github/workflows/pbt-campaign.yml`)

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/44879716981 — dark (conclusion: `failure`), 2026-11-21 07:19 UTC
- Dark since: 2026-11-21 07:19 UTC (first run of the current streak)
- Job / step: `campaign` → `Hunt`
- Likely cause: 1 failed, 10 passed in 582.61s (0:09:42)

<details><summary>End of the job log</summary>

```
instance: {'b': 1e+20}
rejected with: 1 validation error for nullable[function-wrap[_apply_defaults()]]
b
  Unable to parse input string as an integer, exceeded maximum size [type=int_parsing_size, input_value=1e+20, input_type=float]
    For further information visit https://errors.pydantic.dev/2.14/v/int_parsing_size
You can reproduce this test case by temporarily adding @reproduce_failure('6.170.15', b'AXicc+RhdGR0ZHBkZGBwRIEMDIwwigmkhNmRmYEBAHGUBG0=') as a decorator on your test function
1 failed, 10 passed in 582.61s (0:09:42)
##[error]Process completed with exit code 1.
```

</details>

### Tests (`.github/workflows/run-tests.yml`)

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/44993215920 — dark (conclusion: `failure`), 2026-11-22 06:19 UTC
- Dark since: 2026-11-22 06:19 UTC (first run of the current streak)
- Job / step: `Tests: Python 3.14 on ubuntu-latest` → `Run unit tests`
- Likely cause: = 1 failed, 11557 passed, 3 skipped, 3 xfailed, 126 warnings in 141.90s (0:02:21) =

<details><summary>End of the job log</summary>

```
0.56s call     tests/client/transports/test_config_timeout.py::test_entry_timeout_limits_requests[http-False-2]
0.56s call     tests/client/transports/test_config_timeout.py::test_entry_timeout_limits_requests[stdio-True-2]
0.56s call     tests/client/transports/test_config_timeout.py::test_entry_timeout_limits_requests[http-True-2]
0.56s call     tests/client/transports/test_config_timeout.py::test_entry_timeout_limits_requests[sse-True-2]
=========================== short test summary info ============================
FAILED tests/client/test_sse.py::TestTimeout::test_timeout - anyio.BrokenResourceError
= 1 failed, 11557 passed, 3 skipped, 3 xfailed, 126 warnings in 141.90s (0:02:21) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
