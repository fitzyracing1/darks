<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168777 · **Generated:** 2026-11-11T06:45:44.706Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Check Tiny Models (`.github/workflows/check_tiny_models.yml`): [issue #50221](https://github.com/huggingface/transformers/issues/50221) "CI: check_tiny_models failing: `from datasets import load_dataset` ImportError — pyarrow needs NumPy>=2.0 (found 1.26.4)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42945222629 — dark (conclusion: `startup_failure`), 2026-11-11 02:19 UTC
- Dark since: 2026-11-11 02:19 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42945248738 — dark (conclusion: `failure`), 2026-11-11 02:19 UTC
- Dark since: 2026-11-11 02:19 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42945376191 — dark (conclusion: `failure`), 2026-11-11 02:20 UTC
- Dark since: 2026-11-11 02:20 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42950882205 — dark (conclusion: `failure`), 2026-11-11 03:09 UTC
- Dark since: 2026-11-11 03:09 UTC (first run of the current streak)
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
== 1 failed, 49 passed, 2 skipped, 2 xfailed, 2 warnings in 192.02s (0:03:12) ==
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/96b5adb0-dd7f-11f1-89f3-3f4364f9275a.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42951194761 — dark (conclusion: `failure`), 2026-11-11 03:12 UTC
- Dark since: 2026-11-11 03:12 UTC (first run of the current streak)
- Job / step: `SGLang integration (transformers-backend)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
configfile: pytest.ini
plugins: asyncio-1.4.1.post1, anyio-4.15.0
asyncio: mode=Mode.AUTO, debug=False, asyncio_default_fixture_loop_scope=None, asyncio_default_test_loop_scope=function
collecting ... collected 2 items
test/registered/e2e/models/test_transformers_backend_eval.py::TestTransformersBackendEval::test_gsm8k ERROR [ 50%]
/__w/_temp/80e577ab-2aa9-4a76-b6a2-45a8a6ddd51c.sh: line 3:  3291 Killed                  python3 -m pytest -v "${targets[@]}" --junitxml="${REPORT_DIR}/results.xml"
test/registered/e2e/models/test_transformers_models.py::TestTransformersFallbackEngine::test_ci_models ::debug::{"message":"command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/0e1111d0-…
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/0e1111d0-dd83-11f1-b6dd-59affb4497aa.sh], exit code 137
```

</details>

### Build documentation (`.github/workflows/build_documentation.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42952573931 — dark (conclusion: `failure`), 2026-11-11 03:24 UTC
- Dark since: 2026-11-11 03:24 UTC (first run of the current streak)
- Job / step: `build / build_main_documentation` → `Sync to bucket`
- Likely cause: Hint: set HF_DEBUG=1 as environment variable for full traceback.

<details><summary>End of the job log</summary>

```
HTTP Error 504 thrown while requesting GET https://huggingface.co/api/buckets/hf-doc-build/doc/tree/transformers
Retrying in 8s [Retry 5/5].
HTTP Error 504 thrown while requesting GET https://huggingface.co/api/buckets/hf-doc-build/doc/tree/transformers
Error: Server error '504 Gateway Timeout' for url 'https://huggingface.co/api/buckets/hf-doc-build/doc/tree/transformers?recursive=true' (Request ID: Root=1-6af3e0e3-63ad17e6352b42fd0df444ae;11d5b313-54ae-4095-906a-f1b3…
For more information check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
The request is taking longer than expected, please try again later.
Hint: set HF_DEBUG=1 as environment variable for full traceback.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
