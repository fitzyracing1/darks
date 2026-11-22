<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169363 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Build docker images (scheduled)", "Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44967881564 — dark (conclusion: `failure`), 2026-11-22 00:41 UTC
- Dark since: 2026-11-21 00:38 UTC (first run of the current streak)
- Job / step: `Latest PyTorch (AMD) [dev]` → `Build, scan and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.hi

<details><summary>End of the job log</summary>

```
  73 |     # Fail the build if the installs above broke the ROCm stack.
  74 | >>> RUN python3 -c "import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.hip is not None; print(torch.__version__, torch.…
  75 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.h…
builder-f4bc98ae-a48b-489a-9faf-c9c2726a9cbd/builder-f4bc98ae-a48b-489a-9faf-c9c2726a9cbd0/5xa72zbvv6gpubarkyurjs78u
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transfo…
```

</details>

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44975801051 — dark (conclusion: `startup_failure`), 2026-11-22 02:22 UTC
- Dark since: 2026-11-21 02:21 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44975807638 — dark (conclusion: `failure`), 2026-11-22 02:22 UTC
- Dark since: 2026-11-21 02:21 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44975878481 — dark (conclusion: `failure`), 2026-11-22 02:23 UTC
- Dark since: 2026-11-21 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44975967854 — dark (conclusion: `failure`), 2026-11-22 02:24 UTC
- Dark since: 2026-11-21 02:23 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 0) / run_models_gpu (models/axk1)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x. 3 root root    72 Nov 22 02:34 reports
drwxr-xr-x. 3 root root    68 Nov 20 00:39 scripts
-rw-r--r--. 1 root root 12743 Nov 22 02:34 setup.py
drwxr-xr-x. 1 root root    67 Nov 20 00:39 src
-rw-r--r--. 1 root root 27115 Nov 22 02:35 test_outputs.txt
drwxr-xr-x. 1 root root  4096 Nov 22 02:35 tests
drwxr-xr-x. 1 root root   120 Nov 22 02:34 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/4e95b470-e61d-11f1-86ec-3bf0a1825268.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44975996451 — dark (conclusion: `failure`), 2026-11-22 02:25 UTC
- Dark since: 2026-11-21 02:23 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-4xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4633, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 40 failed, 242 passed, 12 skipped, 25 warnings in 762.10s (0:12:42) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/40c34d90-e61c-11f1-adec-cfbbd349a188.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44979628354 — dark (conclusion: `failure`), 2026-11-22 03:13 UTC
- Dark since: 2026-11-21 03:12 UTC (first run of the current streak)
- Job / step: `SGLang integration (processors-and-mappings)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
---- generated xml file: /__w/transformers/transformers/reports/results.xml ----
=========================== short test summary info ============================
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_dict_without_rope_type - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_non_dict_rope_scaling - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeTpStyle::test_tied_embedding_plan_normalizes - Exception: retry() exceed maximum number of retries.
======== 3 failed, 95 passed, 19 warnings, 17 subtests passed in 8.76s =========
sys:1: DeprecationWarning: builtin type swigvarlink has no __module__ attribute
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/bbb357e0-e624-11f1-926c-cbf4feb7b209.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
