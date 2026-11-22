<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169312 · **Generated:** 2026-11-22T00:55:06.197Z
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44845176740 — dark (conclusion: `failure`), 2026-11-21 00:38 UTC
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
builder-1dcf0f8a-d34c-4c5d-82cd-18b0d497332c/builder-1dcf0f8a-d34c-4c5d-82cd-18b0d497332c0/wqgl61bmph12tejhszseqnrzq
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transfo…
```

</details>

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44913139683 — dark (conclusion: `startup_failure`), 2026-11-21 14:17 UTC
- Dark since: 2026-11-21 02:21 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44855438788 — dark (conclusion: `failure`), 2026-11-21 02:21 UTC
- Dark since: 2026-11-21 02:21 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44855534177 — dark (conclusion: `failure`), 2026-11-21 02:22 UTC
- Dark since: 2026-11-21 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44855640337 — dark (conclusion: `failure`), 2026-11-21 02:23 UTC
- Dark since: 2026-11-21 02:23 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44855668287 — dark (conclusion: `failure`), 2026-11-21 02:23 UTC
- Dark since: 2026-11-21 02:23 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-12xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4633, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 40 failed, 243 passed, 11 skipped, 25 warnings in 836.13s (0:13:56) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/f87c7120-e552-11f1-bd57-61fe3b6c1c7e.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44859895716 — dark (conclusion: `failure`), 2026-11-21 03:12 UTC
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
======== 3 failed, 95 passed, 19 warnings, 17 subtests passed in 8.68s =========
sys:1: DeprecationWarning: builtin type swigvarlink has no __module__ attribute
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/6e1e1a80-e55a-11f1-a47e-c9b6b3d95959.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
