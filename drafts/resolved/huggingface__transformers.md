<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-10-26); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168170 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 9 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Build docker images (scheduled)", "Check Tiny Models", +6 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40260116695 — dark (conclusion: `startup_failure`), 2026-10-26 02:38 UTC
- Dark since: 2026-10-23 14:29 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40252146833 — dark (conclusion: `failure`), 2026-10-26 01:01 UTC
- Dark since: 2026-10-24 00:55 UTC (first run of the current streak)
- Job / step: `Latest PyTorch (AMD) [dev]` → `Build and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: failed to load cache key: invalid response status 403

<details><summary>End of the job log</summary>

```
#7 CANCELED
------
 > [ 9/23] ADD https://api.github.com/repos/huggingface/transformers/git/refs/heads/main version.json:
------
ERROR: failed to build: failed to solve: failed to load cache key: invalid response status 403
builder-3b7f614b-e78d-4340-becf-19654a07fa5b/builder-3b7f614b-e78d-4340-becf-19654a07fa5b0/is23vsfx221t402yc9wbp29xc
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: failed to load cache key: invalid response status 403
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40258715712 — dark (conclusion: `failure`), 2026-10-26 02:21 UTC
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40260154891 — dark (conclusion: `failure`), 2026-10-26 02:39 UTC
- Dark since: 2026-10-24 02:31 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40260280566 — dark (conclusion: `failure`), 2026-10-26 02:40 UTC
- Dark since: 2026-10-24 02:33 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40260411484 — dark (conclusion: `failure`), 2026-10-26 02:42 UTC
- Dark since: 2026-10-24 02:34 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/granite_swa)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    79 Oct 26 02:48 reports
drwxr-xr-x.  3 root root    68 Oct 25 01:04 scripts
-rw-r--r--.  1 root root 12447 Oct 25 01:04 setup.py
drwxr-xr-x.  1 root root    67 Oct 25 01:04 src
-rw-r--r--.  1 root root 23885 Oct 26 02:48 test_outputs.txt
drwxr-xr-x.  1 root root  4096 Oct 26 02:48 tests
drwxr-xr-x.  1 root root   107 Oct 26 02:48 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/adffa0b0-d0e7-11f1-8efa-f1a27a2f4ba2.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40260447300 — dark (conclusion: `failure`), 2026-10-26 02:42 UTC
- Dark since: 2026-10-24 02:34 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-4xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4540, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 39 failed, 221 passed, 12 skipped, 28 warnings in 732.34s (0:12:12) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/225b7d40-d0e7-11f1-a4fe-233ccaa53242.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40263440218 — dark (conclusion: `failure`), 2026-10-26 03:18 UTC
- Dark since: 2026-10-24 03:14 UTC (first run of the current streak)
- Job / step: `Test vLLM initialization (small subset, shard 0 / 4)` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@96209c3e3e0ddf2105b092258d7b258b72177a7a)
 + wrapt==2.5.1
Using Python 3.12.15 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+ge4a5b5537.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+ge4a5b5537.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/3a564e70-d0ec-11f1-98a1-31307586ae6d.sh], exit code 1
```

</details>

### PR CI (`.github/workflows/pr-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40281287004 — dark (conclusion: `failure`), 2026-10-26 06:41 UTC
- Dark since: 2026-10-26 06:41 UTC (first run of the current streak)
- Job / step: `pr-ci / tests_torch / tests_torch [shard 1/8]` → `Run tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
SKIPPED [1] tests/models/deepseek_v3/test_modeling_deepseek_v3.py:262: DeepseekV3 is not compatible with assisted decoding
SKIPPED [1] tests/models/deepseek_v3/test_modeling_deepseek_v3.py:274: SDPA can't dispatch on flash due to unsupported head dims
SKIPPED [1] tests/models/deepseek_v3/test_modeling_deepseek_v3.py:339: test requires accelerator
SKIPPED [1] tests/models/deepseek_v3/test_modeling_deepseek_v3.py:285: test requires a GPU or XPU with more than 20 GiB of memory
FAILED tests/models/esm/test_modeling_esmfold.py::EsmFoldModelTest::test_all_tensors_are_parameter_or_buffer - IndexError: index 0 is out of bounds for dimension 0 with size 0
= 1 failed, 6744 passed, 9370 skipped, 6 xfailed, 66 warnings in 400.23s (0:06:40) =
OTEL TRACE END trace_id=407a7801953a3b3b78852e62b5d46cb0 service=pytest-observability job=tests_torch exporter_version=0.1.0+g96209c3 exit_code=1
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/7e404c90-d109-11f1-b1b6-85e26c0a0482.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
