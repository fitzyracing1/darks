<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-11-16); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168993 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "vLLM Integration Tests", "SGLang Integration Tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43723531348 — dark (conclusion: `startup_failure`), 2026-11-15 14:17 UTC
- Dark since: 2026-11-14 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

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
