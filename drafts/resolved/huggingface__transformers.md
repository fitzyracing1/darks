<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-11-16); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169042 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Doctests", "Nvidia CI - Flash Attn", "Nvidia CI", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43792046633 — dark (conclusion: `failure`), 2026-11-16 02:25 UTC
- Dark since: 2026-11-16 02:25 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43792136115 — dark (conclusion: `failure`), 2026-11-16 02:26 UTC
- Dark since: 2026-11-16 02:26 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/granitemoe)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    78 Nov 16 02:32 reports
drwxr-xr-x.  3 root root    68 Nov 16 00:47 scripts
-rw-r--r--.  1 root root 12743 Nov 16 00:47 setup.py
drwxr-xr-x.  1 root root    67 Nov 16 00:47 src
-rw-r--r--.  1 root root 25761 Nov 16 02:32 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov 16 02:32 tests
drwxr-xr-x.  1 root root    33 Nov 16 00:47 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/edbdee30-e165-11f1-98af-2763fb09af4f.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43792172797 — dark (conclusion: `failure`), 2026-11-16 02:26 UTC
- Dark since: 2026-11-16 02:26 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-4xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4634, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 40 failed, 235 passed, 12 skipped, 25 warnings in 859.78s (0:14:19) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/504d0f50-e165-11f1-86aa-c549b2f96700.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43796712824 — dark (conclusion: `failure`), 2026-11-16 03:12 UTC
- Dark since: 2026-11-16 03:12 UTC (first run of the current streak)
- Job / step: `Test vLLM transformers backend (shard 0 / 4)` → `Test: test_transformers (shard 0 / 4)`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
  ref:	'The COVID-19 pandemic has had a significant impact on the global economy, with many businesses and industries facing significant challenges and disruptions. The pandemic has also had a'	{6197: -1.844385147094726…
  test:	'The COVID-19 pandemic has had a significant impact on the global economy, with many businesses and industries facing significant challenges and disruptions. The pandemic has led to a'	{6197: Logprob(logprob=-1.…
    check_logprobs_close(
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
=========================== short test summary info ============================
FAILED tests/models/transformers/test_backend.py::test_mtp_draft_loads_mtp_weights[glm4_moe] - RuntimeError: Cannot access accelerator device when none is available.
== 1 failed, 49 passed, 2 skipped, 2 xfailed, 2 warnings in 187.35s (0:03:07) ==
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/2ac3ab20-e16c-11f1-8c4e-87e749914654.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43797014396 — dark (conclusion: `failure`), 2026-11-16 03:14 UTC
- Dark since: 2026-11-16 03:14 UTC (first run of the current streak)
- Job / step: `SGLang integration (vision-language)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
../transformers/src/transformers/models/qwen2_5_vl/modeling_qwen2_5_vl.py:134: ValueError
---- generated xml file: /__w/transformers/transformers/reports/results.xml ----
=========================== short test summary info ============================
ERROR test/registered/vlm/test_vlm_input_format.py::TestQwenVLUnderstandsImage::test_accepts_image - ValueError: Qwen2_5_VLVisionRotaryEmbedding supports only axial rope, but requested default
ERROR test/registered/vlm/test_vlm_input_format.py::TestQwenVLUnderstandsImage::test_accepts_precomputed_embeddings - ValueError: Qwen2_5_VLVisionRotaryEmbedding supports only axial rope, but requested default
ERROR test/registered/vlm/test_vlm_input_format.py::TestQwenVLUnderstandsImage::test_accepts_processor_output - ValueError: Qwen2_5_VLVisionRotaryEmbedding supports only axial rope, but requested default
============================== 3 errors in 1.24s ===============================
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/95139750-e16d-11f1-b249-1b27f41c8b09.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
