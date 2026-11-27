<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169386 · **Generated:** 2026-11-27T06:46:20.331Z
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45918040518 — dark (conclusion: `failure`), 2026-11-27 00:39 UTC
- Dark since: 2026-11-27 00:39 UTC (first run of the current streak)
- Job / step: `Cache Latest Pytorch (AMD) Image` → `Pull and save docker image to cache`
- Likely cause: failed to save image: invalid output path: stat /mnt/image-cache: no such file or directory

<details><summary>End of the job log</summary>

```
7bb9f8d3340f: Pull complete
d99c714c379f: Pull complete
Digest: sha256:094dcdbbd5cd7e5aab562f5acd7e289463fa8d0a4c9620415c26e6fb532f0874
Status: Downloaded newer image for huggingface/transformers-pytorch-amd-gpu:latest
docker.io/huggingface/transformers-pytorch-amd-gpu:latest
Saving to temp file: /mnt/image-cache/transformers-pytorch-amd-gpu.tar.tmp
failed to save image: invalid output path: stat /mnt/image-cache: no such file or directory
##[error]Process completed with exit code 1.
```

</details>

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45927971035 — dark (conclusion: `startup_failure`), 2026-11-27 02:22 UTC
- Dark since: 2026-11-27 02:22 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45927978296 — dark (conclusion: `failure`), 2026-11-27 02:22 UTC
- Dark since: 2026-11-27 02:22 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45928135007 — dark (conclusion: `failure`), 2026-11-27 02:24 UTC
- Dark since: 2026-11-27 02:24 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45928215308 — dark (conclusion: `failure`), 2026-11-27 02:25 UTC
- Dark since: 2026-11-27 02:25 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45932608928 — dark (conclusion: `failure`), 2026-11-27 03:10 UTC
- Dark since: 2026-11-27 03:10 UTC (first run of the current streak)
- Job / step: `Test vLLM multimodal processing (shard 0 / 4)` → `Test: multimodal processing (shard 0 / 4)`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
tests/models/multimodal/processing/test_qwen2_vl.py::test_max_video_tokens_fills_context[Qwen/Qwen2.5-VL-3B-Instruct-20000-mm_processor_kwargs2]
  /__w/transformers/transformers/transformers/src/transformers/models/qwen2_vl/video_processing_qwen2_vl.py:156: FutureWarning: Passing `min_pixels` and `max_pixels` to a processor call is deprecated and will be removed…
    warnings.warn(
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
=========================== short test summary info ============================
FAILED tests/models/multimodal/processing/test_kimi_k3.py::test_chat_prompt_matches_hf_processor[text_parts_without_images] - TypeError: cannot unpack non-iterable KimiK3VisionProcessor object
===== 1 failed, 489 passed, 24 skipped, 270 warnings in 2247.45s (0:37:27) =====
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/e16e6200-ea10-11f1-8704-278f45991fe3.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/45932894490 — dark (conclusion: `failure`), 2026-11-27 03:13 UTC
- Dark since: 2026-11-27 03:13 UTC (first run of the current streak)
- Job / step: `SGLang integration (processors-and-mappings)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
---- generated xml file: /__w/transformers/transformers/reports/results.xml ----
=========================== short test summary info ============================
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_dict_without_rope_type - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_non_dict_rope_scaling - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeTpStyle::test_tied_embedding_plan_normalizes - Exception: retry() exceed maximum number of retries.
======== 3 failed, 95 passed, 19 warnings, 17 subtests passed in 9.29s =========
sys:1: DeprecationWarning: builtin type swigvarlink has no __module__ attribute
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/399c90c0-ea19-11f1-9174-eb62586bd12d.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
