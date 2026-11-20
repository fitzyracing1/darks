<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169305 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("PR CI", "Build docker images (scheduled)", "Self-hosted runner (nightly-past-ci-caller)", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR CI (`.github/workflows/pr-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44685781508 — dark (conclusion: `failure`), 2026-11-20 06:09 UTC
- Dark since: 2026-11-19 21:50 UTC (first run of the current streak)
- Job / step: `pr-ci / tests_torch / tests_torch [shard 1/8]` → `Run tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
tests/models/ernie/test_modeling_ernie.py::ErnieModelTest::test_sdpa_padding_matches_padding_free_with_position_ids <- tests/generation/test_utils.py
tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_model_from_pretrained
tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_tied_weights_are_sharded_together
[gw0] [ 98%] SKIPPED tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_tied_weights_are_sharded_together tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_tied_weights_are_sharded_together [SKIPPED…
[gw2] [ 98%] SKIPPED tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_model_from_pretrained tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_model_from_pretrained [SKIPPED] 0.00s
tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_cpu_offload
tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_disk_offload_safetensors ::debug::{"message":"command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/5be3fcb0-e4a9-11f1-ae4c-43…
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/5be3fcb0-e4a9-11f1-ae4c-43f5ed54df90.sh], exit code 137
```

</details>

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44647365697 — dark (conclusion: `failure`), 2026-11-20 00:37 UTC
- Dark since: 2026-11-20 00:37 UTC (first run of the current streak)
- Job / step: `Latest PyTorch (AMD) [dev]` → `Build, scan and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.hi

<details><summary>End of the job log</summary>

```
  73 |     # Fail the build if the installs above broke the ROCm stack.
  74 | >>> RUN python3 -c "import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.hip is not None; print(torch.__version__, torch.…
  75 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transformers; assert torch.version.h…
builder-adf61e62-6811-4594-85aa-1a4962833297/builder-adf61e62-6811-4594-85aa-1a49628332970/p8pgg9u5bzfv33qxj6gvhh9vg
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c python3 -c \"import torch, torchvision, torchcodec, flash_attn, bitsandbytes, onnxscript, peft, numpy, pyarrow, datasets, transfo…
```

</details>

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44660241569 — dark (conclusion: `startup_failure`), 2026-11-20 02:21 UTC
- Dark since: 2026-11-20 02:21 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44660293565 — dark (conclusion: `failure`), 2026-11-20 02:22 UTC
- Dark since: 2026-11-20 02:22 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44660372359 — dark (conclusion: `failure`), 2026-11-20 02:22 UTC
- Dark since: 2026-11-20 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44666138126 — dark (conclusion: `failure`), 2026-11-20 03:12 UTC
- Dark since: 2026-11-20 03:12 UTC (first run of the current streak)
- Job / step: `SGLang integration (processors-and-mappings)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
---- generated xml file: /__w/transformers/transformers/reports/results.xml ----
=========================== short test summary info ============================
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_dict_without_rope_type - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_non_dict_rope_scaling - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeTpStyle::test_tied_embedding_plan_normalizes - Exception: retry() exceed maximum number of retries.
======== 3 failed, 95 passed, 19 warnings, 17 subtests passed in 8.67s =========
sys:1: DeprecationWarning: builtin type swigvarlink has no __module__ attribute
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/592a2b50-e492-11f1-bc47-f385a1e998b4.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
