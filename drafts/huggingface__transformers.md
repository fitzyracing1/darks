<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168677 · **Generated:** 2026-11-09T06:54:36.072Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Check Tiny Models (`.github/workflows/check_tiny_models.yml`): [issue #50221](https://github.com/huggingface/transformers/issues/50221) "CI: check_tiny_models failing: `from datasets import load_dataset` ImportError — pyarrow needs NumPy>=2.0 (found 1.26.4)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42550570739 — dark (conclusion: `startup_failure`), 2026-11-09 02:22 UTC
- Dark since: 2026-11-07 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42550586621 — dark (conclusion: `failure`), 2026-11-09 02:22 UTC
- Dark since: 2026-11-07 02:20 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42550655515 — dark (conclusion: `failure`), 2026-11-09 02:23 UTC
- Dark since: 2026-11-07 02:21 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42550772023 — dark (conclusion: `failure`), 2026-11-09 02:24 UTC
- Dark since: 2026-11-07 02:22 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/granitemoehybrid)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    84 Nov  9 02:28 reports
drwxr-xr-x.  3 root root    84 Nov  9 00:43 scripts
-rw-r--r--.  1 root root 12447 Nov  9 00:43 setup.py
drwxr-xr-x.  1 root root    67 Nov  9 00:43 src
-rw-r--r--.  1 root root 30675 Nov  9 02:29 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov  9 02:28 tests
drwxr-xr-x.  1 root root    33 Nov  9 00:43 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/48cbde30-dbe5-11f1-868a-17d49a048ac3.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42550812015 — dark (conclusion: `failure`), 2026-11-09 02:25 UTC
- Dark since: 2026-11-07 02:22 UTC (first run of the current streak)
- Job / step: `Kernels CI / Kernel tests (aws-g5-4xlarge-cache)` → `Run kernel tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
ERROR tests/kernels/test_kernels.py::TestHubKernels::test_kernels_mapping_explicit_version - ImportError: cannot import name 'BaseHTTPResponse' from 'urllib3' (/opt/venv/lib/python3.11/site-packages/urllib3/__init__.py)
ERROR tests/kernels/test_kernels.py::TestHubKernels::test_kernels_mapping_functions_registration - ImportError: cannot import name 'BaseHTTPResponse' from 'urllib3' (/opt/venv/lib/python3.11/site-packages/urllib3/__init…
ERROR tests/kernels/test_kernels.py::TestHubKernels::test_kernels_mapping_no_inherit - ImportError: cannot import name 'BaseHTTPResponse' from 'urllib3' (/opt/venv/lib/python3.11/site-packages/urllib3/__init__.py)
ERROR tests/kernels/test_kernels.py::TestHubKernels::test_rocm_rotary_kernel_forward_matches_baseline - ImportError: cannot import name 'BaseHTTPResponse' from 'urllib3' (/opt/venv/lib/python3.11/site-packages/urllib3/_…
ERROR tests/kernels/test_kernels.py::TestHubKernels::test_setter_use_kernels - ImportError: cannot import name 'BaseHTTPResponse' from 'urllib3' (/opt/venv/lib/python3.11/site-packages/urllib3/__init__.py)
ERROR tests/kernels/test_kernels.py::TestHubKernels::test_unkernelize - ImportError: cannot import name 'BaseHTTPResponse' from 'urllib3' (/opt/venv/lib/python3.11/site-packages/urllib3/__init__.py)
============= 1 failed, 20 passed, 1 warning, 16 errors in 23.84s ==============
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/e90a5170-dbe4-11f1-abe9-67a277fbf34a.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42555025733 — dark (conclusion: `failure`), 2026-11-09 03:11 UTC
- Dark since: 2026-11-07 03:09 UTC (first run of the current streak)
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
== 1 failed, 50 passed, 2 skipped, 2 xfailed, 2 warnings in 198.19s (0:03:18) ==
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/f84adf90-dbeb-11f1-b9d8-2d300b5783ba.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42555291255 — dark (conclusion: `failure`), 2026-11-09 03:14 UTC
- Dark since: 2026-11-07 03:11 UTC (first run of the current streak)
- Job / step: `SGLang integration (vision-language)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
../transformers/src/transformers/models/qwen2_5_vl/modeling_qwen2_5_vl.py:133: ValueError
---- generated xml file: /__w/transformers/transformers/reports/results.xml ----
=========================== short test summary info ============================
ERROR test/registered/vlm/test_vlm_input_format.py::TestQwenVLUnderstandsImage::test_accepts_image - ValueError: Qwen2_5_VLVisionRotaryEmbedding supports only axial rope, but requested default
ERROR test/registered/vlm/test_vlm_input_format.py::TestQwenVLUnderstandsImage::test_accepts_precomputed_embeddings - ValueError: Qwen2_5_VLVisionRotaryEmbedding supports only axial rope, but requested default
ERROR test/registered/vlm/test_vlm_input_format.py::TestQwenVLUnderstandsImage::test_accepts_processor_output - ValueError: Qwen2_5_VLVisionRotaryEmbedding supports only axial rope, but requested default
============================== 3 errors in 1.20s ===============================
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/3045d110-dbed-11f1-9d5f-ddb889e5cf7b.sh], exit code 1
```

</details>

### Slow tests on important models (on Push - A10) (`.github/workflows/push-important-models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42553070941 — dark (conclusion: `failure`), 2026-11-09 02:49 UTC
- Dark since: 2026-11-09 02:49 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/gemma3n)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root     74 Nov  9 02:58 reports
drwxr-xr-x.  3 root root     84 Nov  9 00:43 scripts
-rw-r--r--.  1 root root  12447 Nov  9 00:43 setup.py
drwxr-xr-x.  1 root root     67 Nov  9 00:43 src
-rw-r--r--.  1 root root 370184 Nov  9 03:10 test_outputs.txt
drwxr-xr-x.  1 root root    111 Nov  9 02:58 tests
drwxr-xr-x.  1 root root     56 Nov  9 02:58 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/743417f0-dbe9-11f1-a630-4d6d7cc0825d.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
