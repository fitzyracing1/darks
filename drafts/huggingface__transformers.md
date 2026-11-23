<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169404 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Nvidia CI - Flash Attn", "SGLang Integration Tests", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45099965154 — dark (conclusion: `startup_failure`), 2026-11-23 02:23 UTC
- Dark since: 2026-11-21 02:21 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45100270070 — dark (conclusion: `failure`), 2026-11-23 02:27 UTC
- Dark since: 2026-11-21 02:23 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/axk1)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    71 Nov 23 04:05 reports
drwxr-xr-x.  3 root root    84 Nov 23 00:44 scripts
-rw-r--r--.  1 root root 12743 Nov 23 00:44 setup.py
drwxr-xr-x.  1 root root    55 Nov 23 00:44 src
-rw-r--r--.  1 root root 25345 Nov 23 04:05 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov 23 04:05 tests
drwxr-xr-x.  1 root root    33 Nov 23 00:44 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/1ac38a60-e6f3-11f1-bfe7-a7314e6ba363.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45104775945 — dark (conclusion: `failure`), 2026-11-23 03:14 UTC
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
======== 3 failed, 95 passed, 19 warnings, 17 subtests passed in 8.63s =========
sys:1: DeprecationWarning: builtin type swigvarlink has no __module__ attribute
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/d57db8e0-e6ed-11f1-bcfe-9b3c6aa14dbd.sh], exit code 1
```

</details>

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45090369750 — dark (conclusion: `failure`), 2026-11-23 00:42 UTC
- Dark since: 2026-11-23 00:42 UTC (first run of the current streak)
- Job / step: `Latest PyTorch (AMD) [dev]` → `Build, scan and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.hi

<details><summary>End of the job log</summary>

```
  73 |     # Fail the build if the installs above broke the ROCm stack.
  74 | >>> RUN python3 -c "import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.hip is not None; print(torch.__version__, torch.…
  75 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.h…
builder-7134aaaf-71b2-4ef5-b710-938631791c73/builder-7134aaaf-71b2-4ef5-b710-938631791c730/149tzm9u92yt367xtx99u2nzo
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transfo…
```

</details>

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45100002995 — dark (conclusion: `failure`), 2026-11-23 02:24 UTC
- Dark since: 2026-11-23 02:24 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45100119806 — dark (conclusion: `failure`), 2026-11-23 02:25 UTC
- Dark since: 2026-11-23 02:25 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45104495762 — dark (conclusion: `failure`), 2026-11-23 03:11 UTC
- Dark since: 2026-11-23 03:11 UTC (first run of the current streak)
- Job / step: `Test vLLM multimodal processing (shard 1 / 4)` → `Test: multimodal processing (shard 1 / 4)`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
    warnings.warn(
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
=========================== short test summary info ============================
FAILED tests/models/multimodal/processing/test_common.py::test_processing_correctness[1.0-32-0.3-openbmb/MiniCPM-V-4_5] - ModuleNotFoundError: No module named 'transformers.modeling_attn_mask_utils'
FAILED tests/models/multimodal/processing/test_common.py::test_processing_correctness[1.0-32-0.5-openbmb/MiniCPM-V-4] - ModuleNotFoundError: No module named 'transformers.modeling_attn_mask_utils'
FAILED tests/models/multimodal/processing/test_minicpmv.py::test_get_hf_processor_for_same_model_different_kwargs[openbmb/MiniCPM-V-4] - ModuleNotFoundError: No module named 'transformers.modeling_attn_mask_utils'
===== 3 failed, 527 passed, 22 skipped, 585 warnings in 2483.17s (0:41:23) =====
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/50d56a30-e6ec-11f1-84ed-a33ceebcfc28.sh], exit code 1
```

</details>

### PR CI (`.github/workflows/pr-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45120143344 — dark (conclusion: `failure`), 2026-11-23 05:49 UTC
- Dark since: 2026-11-23 05:49 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
