<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168140 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Build docker images (scheduled)", "Check Tiny Models", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40201958421 — dark (conclusion: `startup_failure`), 2026-10-25 14:22 UTC
- Dark since: 2026-10-23 14:29 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40149024554 — dark (conclusion: `failure`), 2026-10-25 01:02 UTC
- Dark since: 2026-10-24 00:55 UTC (first run of the current streak)
- Job / step: `Doc builder` → `Build and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succes

<details><summary>End of the job log</summary>

```
  24 | >>> RUN doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean
  25 |     RUN rm -rf doc-build-dev
  26 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succe…
builder-e893ef4c-1929-4532-b98f-7992cf58974c/builder-e893ef4c-1929-4532-b98f-7992cf58974c0/lmll2mqhf3edy7ic3znvwytxq
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --…
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40153921915 — dark (conclusion: `failure`), 2026-10-25 02:17 UTC
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40154939758 — dark (conclusion: `failure`), 2026-10-25 02:34 UTC
- Dark since: 2026-10-24 02:31 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40155023330 — dark (conclusion: `failure`), 2026-10-25 02:35 UTC
- Dark since: 2026-10-24 02:33 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40155113125 — dark (conclusion: `failure`), 2026-10-25 02:36 UTC
- Dark since: 2026-10-24 02:34 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 0) / run_models_gpu (models/bamba)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    73 Oct 25 02:55 reports
drwxr-xr-x.  3 root root    84 Oct 25 01:04 scripts
-rw-r--r--.  1 root root 12447 Oct 25 01:04 setup.py
drwxr-xr-x.  1 root root    67 Oct 25 01:04 src
-rw-r--r--.  1 root root 28714 Oct 25 02:56 test_outputs.txt
drwxr-xr-x.  1 root root   132 Oct 25 02:56 tests
drwxr-xr-x.  1 root root    56 Oct 25 02:56 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/98570780-d01f-11f1-9400-c3724b585084.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40155134159 — dark (conclusion: `failure`), 2026-10-25 02:37 UTC
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
===== 39 failed, 221 passed, 12 skipped, 28 warnings in 839.52s (0:13:59) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/a60d1420-d01d-11f1-9a66-4187429d3019.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40157554211 — dark (conclusion: `failure`), 2026-10-25 03:15 UTC
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
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+gc50aca144.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+gc50aca144.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/aca165c0-d022-11f1-a1e7-07c8ac77c663.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
