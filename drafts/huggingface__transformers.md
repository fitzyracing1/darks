<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168996 · **Generated:** 2026-11-15T06:42:54.918Z
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43667436280 — dark (conclusion: `startup_failure`), 2026-11-15 02:21 UTC
- Dark since: 2026-11-14 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43667454704 — dark (conclusion: `failure`), 2026-11-15 02:22 UTC
- Dark since: 2026-11-15 02:22 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43667502351 — dark (conclusion: `failure`), 2026-11-15 02:22 UTC
- Dark since: 2026-11-15 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43667606453 — dark (conclusion: `failure`), 2026-11-15 02:24 UTC
- Dark since: 2026-11-15 02:24 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43667655478 — dark (conclusion: `failure`), 2026-11-15 02:24 UTC
- Dark since: 2026-11-15 02:24 UTC (first run of the current streak)
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
===== 40 failed, 236 passed, 11 skipped, 25 warnings in 828.61s (0:13:48) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/66e8f860-e09c-11f1-b116-8316d937d3d6.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43671133141 — dark (conclusion: `failure`), 2026-11-15 03:10 UTC
- Dark since: 2026-11-15 03:10 UTC (first run of the current streak)
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
== 1 failed, 49 passed, 2 skipped, 2 xfailed, 2 warnings in 199.01s (0:03:19) ==
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/e48dfb70-e0a2-11f1-a41b-09372ce6ccbf.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43671360903 — dark (conclusion: `failure`), 2026-11-15 03:13 UTC
- Dark since: 2026-11-15 03:13 UTC (first run of the current streak)
- Job / step: `SGLang integration (model-loading)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
plugins: asyncio-1.5.0, anyio-4.15.0
asyncio: mode=Mode.AUTO, debug=False, asyncio_default_fixture_loop_scope=None, asyncio_default_test_loop_scope=function
collecting ... collected 3 items
test/registered/model_loading/test_external_models.py::TestExternalModels::test_external_model PASSED [ 33%]
test/registered/model_loading/test_weight_loader_v2_e2e.py::TestWeightLoaderV2E2E::test_qwen2_native_v1_v2_generation_match PASSED [ 66%]
/__w/_temp/917b4d2c-bd21-4660-9858-9f46576e9293.sh: line 3:  3291 Killed                  python3 -m pytest -v "${targets[@]}" --junitxml="${REPORT_DIR}/results.xml"
test/registered/model_loading/test_weight_loader_v2_e2e.py::TestWeightLoaderV2E2E::test_transformers_impl_loads_and_generates ::debug::{"message":"command terminated with non-zero exit code: error executing command [sh …
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/d5279c30-e0a3-11f1-9398-fde784e9429a.sh], exit code 137
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
