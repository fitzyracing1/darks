<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168961 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43545794827 — dark (conclusion: `startup_failure`), 2026-11-14 02:20 UTC
- Dark since: 2026-11-14 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43545805923 — dark (conclusion: `failure`), 2026-11-14 02:21 UTC
- Dark since: 2026-11-14 02:21 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43545924169 — dark (conclusion: `failure`), 2026-11-14 02:22 UTC
- Dark since: 2026-11-14 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43545981251 — dark (conclusion: `failure`), 2026-11-14 02:22 UTC
- Dark since: 2026-11-14 02:22 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/granitemoeshared)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    76 Nov 14 02:31 reports
drwxr-xr-x.  3 root root    84 Nov 14 00:38 scripts
-rw-r--r--.  1 root root 12743 Nov 14 00:38 setup.py
drwxr-xr-x.  1 root root    67 Nov 14 00:38 src
-rw-r--r--.  1 root root 27537 Nov 14 02:31 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov 14 02:31 tests
drwxr-xr-x.  1 root root    33 Nov 14 00:38 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/71980e00-dfd3-11f1-a9cb-571b4d60dfe8.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43546001745 — dark (conclusion: `failure`), 2026-11-14 02:23 UTC
- Dark since: 2026-11-14 02:23 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-12xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4634, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 40 failed, 236 passed, 11 skipped, 25 warnings in 804.56s (0:13:24) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/e56c1cf0-dfd2-11f1-a42f-4ff2118b7279.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43550133161 — dark (conclusion: `failure`), 2026-11-14 03:09 UTC
- Dark since: 2026-11-14 03:09 UTC (first run of the current streak)
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
== 1 failed, 49 passed, 2 skipped, 2 xfailed, 2 warnings in 193.39s (0:03:13) ==
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/762f3aa0-dfd9-11f1-8c6e-b33d99e99430.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43550362325 — dark (conclusion: `failure`), 2026-11-14 03:11 UTC
- Dark since: 2026-11-14 03:11 UTC (first run of the current streak)
- Job / step: `SGLang integration (transformers-backend)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
configfile: pytest.ini
plugins: asyncio-1.5.0, anyio-4.15.0
asyncio: mode=Mode.AUTO, debug=False, asyncio_default_fixture_loop_scope=None, asyncio_default_test_loop_scope=function
collecting ... collected 2 items
test/registered/e2e/models/test_transformers_backend_eval.py::TestTransformersBackendEval::test_gsm8k ERROR [ 50%]
/__w/_temp/47fab4e2-446f-4b73-9129-b1e3facc211e.sh: line 3:  3291 Killed                  python3 -m pytest -v "${targets[@]}" --junitxml="${REPORT_DIR}/results.xml"
test/registered/e2e/models/test_transformers_models.py::TestTransformersFallbackEngine::test_ci_models ::debug::{"message":"command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/f5853b50-…
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/f5853b50-dfda-11f1-85ce-fb8f9b77ad67.sh], exit code 137
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
