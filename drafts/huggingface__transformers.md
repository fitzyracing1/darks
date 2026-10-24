<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168054 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Check Tiny Models", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40054538642 — dark (conclusion: `startup_failure`), 2026-10-24 02:31 UTC
- Dark since: 2026-10-23 14:29 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40053446439 — dark (conclusion: `failure`), 2026-10-24 02:15 UTC
- Dark since: 2026-10-24 02:15 UTC (first run of the current streak)
- Job / step: `Check tiny models` → `Create all tiny models (locally)`
- Likely cause: ImportError: pyarrow requires NumPy 2.0 or newer, found 1.26.4

<details><summary>End of the job log</summary>

```
    from .arrow_dataset import Column, Dataset
  File "/opt/hostedtoolcache/Python/3.11.17/x64/lib/python3.11/site-packages/datasets/arrow_dataset.py", line 59, in <module>
    import pyarrow as pa
  File "/opt/hostedtoolcache/Python/3.11.17/x64/lib/python3.11/site-packages/pyarrow/__init__.py", line 59, in <module>
    from pyarrow.lib import (BuildInfo, CppBuildInfo, RuntimeInfo, set_timezone_db_path,
  File "pyarrow/lib.pyx", line 42, in init pyarrow.lib
ImportError: pyarrow requires NumPy 2.0 or newer, found 1.26.4
##[error]Process completed with exit code 1.
```

</details>

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40054555277 — dark (conclusion: `failure`), 2026-10-24 02:31 UTC
- Dark since: 2026-10-24 02:31 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40054650435 — dark (conclusion: `failure`), 2026-10-24 02:33 UTC
- Dark since: 2026-10-24 02:33 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40054739614 — dark (conclusion: `failure`), 2026-10-24 02:34 UTC
- Dark since: 2026-10-24 02:34 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/granitemoeshared)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    84 Oct 24 02:40 reports
drwxr-xr-x.  3 root root    84 Oct 24 00:57 scripts
-rw-r--r--.  1 root root 12447 Oct 24 00:57 setup.py
drwxr-xr-x.  1 root root    67 Oct 24 00:57 src
-rw-r--r--.  1 root root 29074 Oct 24 02:40 test_outputs.txt
drwxr-xr-x.  1 root root   132 Oct 24 02:40 tests
drwxr-xr-x.  1 root root    56 Oct 24 02:40 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/45e739a0-cf54-11f1-a21e-33da789841d2.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40054767071 — dark (conclusion: `failure`), 2026-10-24 02:34 UTC
- Dark since: 2026-10-24 02:34 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-12xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4540, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 39 failed, 222 passed, 11 skipped, 28 warnings in 760.08s (0:12:40) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/38c54190-cf54-11f1-a68f-c3669fcf13d8.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40057488946 — dark (conclusion: `failure`), 2026-10-24 03:14 UTC
- Dark since: 2026-10-24 03:14 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@0facdda9ea80f624fa5d08c8ede3bf9bc7c49ea0)
 + wrapt==2.5.1
Using Python 3.12.15 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+g83c078d95.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+g83c078d95.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/5636ffc0-cf59-11f1-b89a-eb47fc9cc3bd.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
