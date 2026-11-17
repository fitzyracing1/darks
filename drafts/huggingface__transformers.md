<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169103 · **Generated:** 2026-11-17T06:45:50.833Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("PR CI", "Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR CI (`.github/workflows/pr-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44026961155 — dark (conclusion: `failure`), 2026-11-17 05:51 UTC
- Dark since: 2026-11-16 22:24 UTC (first run of the current streak)
- Job / step: `pr-ci / tests_processors / tests_processors [shard 4/8]` → `Run tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
SKIPPED [1] tests/models/musicflamingo/test_processing_musicflamingo.py:80: test is slow
SKIPPED [1] tests/test_processing_common.py:1141: video_processor attribute not present in <class 'transformers.models.pixtral.processing_pixtral.PixtralProcessor'>
SKIPPED [1] tests/models/mllama/test_image_processing_mllama.py:220: 4 channels input is not supported yet
SKIPPED [1] tests/test_processing_common.py:1149: feature_extractor attribute not present in <class 'transformers.models.molmo2.processing_molmo2.Molmo2Processor'>
FAILED tests/models/muse_glimmer/test_processing_muse_glimmer.py::MuseGlimmerProcessorTest::test_apply_chat_template_video_1 - httpx2.ReadTimeout: The read operation timed out
= 1 failed, 1175 passed, 528 skipped, 95 warnings, 7 rerun in 501.83s (0:08:21) =
OTEL TRACE END trace_id=6ff379fa145fbef5143f3cb64aa56cd9 service=pytest-observability job=tests_processors exporter_version=0.1.0+g7b8a779 exit_code=1
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/5cfdd680-e24b-11f1-918b-95c3d93c8d9e.sh], exit code 1
```

</details>

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44002440647 — dark (conclusion: `startup_failure`), 2026-11-17 02:22 UTC
- Dark since: 2026-11-17 02:22 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44002494051 — dark (conclusion: `failure`), 2026-11-17 02:22 UTC
- Dark since: 2026-11-17 02:22 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44002620098 — dark (conclusion: `failure`), 2026-11-17 02:23 UTC
- Dark since: 2026-11-17 02:23 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44008249184 — dark (conclusion: `failure`), 2026-11-17 03:10 UTC
- Dark since: 2026-11-17 03:10 UTC (first run of the current streak)
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
== 1 failed, 49 passed, 2 skipped, 2 xfailed, 2 warnings in 200.05s (0:03:20) ==
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/16f1de90-e235-11f1-8eba-174db342fa60.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44008590311 — dark (conclusion: `failure`), 2026-11-17 03:12 UTC
- Dark since: 2026-11-17 03:12 UTC (first run of the current streak)
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
============================== 3 errors in 1.19s ===============================
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/71d43500-e236-11f1-a697-71acfe477827.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
