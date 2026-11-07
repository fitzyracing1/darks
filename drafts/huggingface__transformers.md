<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168621 · **Generated:** 2026-11-07T12:37:41.487Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"
- Check Tiny Models (`.github/workflows/check_tiny_models.yml`): [issue #50221](https://github.com/huggingface/transformers/issues/50221) "CI: check_tiny_models failing: `from datasets import load_dataset` ImportError — pyarrow needs NumPy>=2.0 (found 1.26.4)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("PR CI", "Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR CI (`.github/workflows/pr-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42286278104 — dark (conclusion: `failure`), 2026-11-06 20:11 UTC
- Dark since: 2026-11-06 20:11 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42328735224 — dark (conclusion: `startup_failure`), 2026-11-07 02:20 UTC
- Dark since: 2026-11-07 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42328738495 — dark (conclusion: `failure`), 2026-11-07 02:20 UTC
- Dark since: 2026-11-07 02:20 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42328811868 — dark (conclusion: `failure`), 2026-11-07 02:21 UTC
- Dark since: 2026-11-07 02:21 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42328911987 — dark (conclusion: `failure`), 2026-11-07 02:22 UTC
- Dark since: 2026-11-07 02:22 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/axk1)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    71 Nov  7 04:14 reports
drwxr-xr-x.  3 root root    84 Nov  7 00:39 scripts
-rw-r--r--.  1 root root 12447 Nov  7 00:39 setup.py
drwxr-xr-x.  1 root root    55 Nov  7 00:39 src
-rw-r--r--.  1 root root 25620 Nov  7 04:14 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov  7 04:14 tests
drwxr-xr-x.  1 root root    25 Nov  7 00:39 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/af32a210-da61-11f1-9e90-15f22c7babb9.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42328939060 — dark (conclusion: `failure`), 2026-11-07 02:22 UTC
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
=================== 1 failed, 20 passed, 16 errors in 23.20s ===================
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/94d47100-da52-11f1-9d1f-839cea5f7a67.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42332645646 — dark (conclusion: `failure`), 2026-11-07 03:09 UTC
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
== 1 failed, 51 passed, 2 skipped, 2 xfailed, 2 warnings in 253.89s (0:04:13) ==
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/566ffb80-da59-11f1-a76f-f3c0313f3962.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42332863174 — dark (conclusion: `failure`), 2026-11-07 03:11 UTC
- Dark since: 2026-11-07 03:11 UTC (first run of the current streak)
- Job / step: `SGLang integration (transformers-backend)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
configfile: pytest.ini
plugins: asyncio-1.4.1.post1, anyio-4.15.0
asyncio: mode=Mode.AUTO, debug=False, asyncio_default_fixture_loop_scope=None, asyncio_default_test_loop_scope=function
collecting ... collected 2 items
test/registered/e2e/models/test_transformers_backend_eval.py::TestTransformersBackendEval::test_gsm8k ERROR [ 50%]
/__w/_temp/5a5a0c66-08a0-4d48-809b-c77a8708fe60.sh: line 3:  3291 Killed                  python3 -m pytest -v "${targets[@]}" --junitxml="${REPORT_DIR}/results.xml"
test/registered/e2e/models/test_transformers_models.py::TestTransformersFallbackEngine::test_ci_models ::debug::{"message":"command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/66f4ff40-…
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/66f4ff40-da5a-11f1-876c-7d5f94b65b6c.sh], exit code 137
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
