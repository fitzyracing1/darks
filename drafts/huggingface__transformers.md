<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168938 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43351298446 — dark (conclusion: `startup_failure`), 2026-11-13 02:19 UTC
- Dark since: 2026-11-13 02:19 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43351328512 — dark (conclusion: `failure`), 2026-11-13 02:19 UTC
- Dark since: 2026-11-13 02:19 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43351449642 — dark (conclusion: `failure`), 2026-11-13 02:20 UTC
- Dark since: 2026-11-13 02:20 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43351552924 — dark (conclusion: `failure`), 2026-11-13 02:21 UTC
- Dark since: 2026-11-13 02:21 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/axk1)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    71 Nov 13 03:44 reports
drwxr-xr-x.  3 root root    84 Nov 13 00:41 scripts
-rw-r--r--.  1 root root 12743 Nov 13 00:41 setup.py
drwxr-xr-x.  1 root root    67 Nov 13 00:41 src
-rw-r--r--.  1 root root 26248 Nov 13 03:44 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov 13 03:44 tests
drwxr-xr-x.  1 root root    33 Nov 13 00:41 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/80018800-df14-11f1-a336-09a61655f5ed.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43357085701 — dark (conclusion: `failure`), 2026-11-13 03:09 UTC
- Dark since: 2026-11-13 03:09 UTC (first run of the current streak)
- Job / step: `Test vLLM transformers backend (shard 3 / 4)` → `Test: test_transformers (shard 3 / 4)`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
  ref:	'\n\\subsection{Inference}\n\\label{sec:inference}\n\n\\begin{figure}[t]\n    \\centering\n'	{43575: -1.7026474475860596, 2377: -1.7026474475860596, 4674: -1.9526474475860596, 2043: -2.0776474475860596, 11765: -2…
  test:	'\n\\paragraph{OpenAI GPT-3}\n\nOpenAI GPT-3 is a large-scale language model trained on a dataset of over'	{43575: Logprob(logprob=-1.6398684978485107, rank=1, decoded_token=[redacted] 2377: Logprob(logprob=-…
    check_logprobs_close(
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
=========================== short test summary info ============================
FAILED tests/models/transformers/test_backend.py::test_mtp_draft_loads_mtp_weights[deepseek_v3] - RuntimeError: Cannot access accelerator device when none is available.
======== 1 failed, 39 passed, 1 skipped, 1 warning in 448.97s (0:07:28) ========
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/dd72b8f0-df10-11f1-acf5-05f7727f765c.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43357403162 — dark (conclusion: `failure`), 2026-11-13 03:12 UTC
- Dark since: 2026-11-13 03:12 UTC (first run of the current streak)
- Job / step: `SGLang integration (model-loading)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
plugins: asyncio-1.5.0, anyio-4.15.0
asyncio: mode=Mode.AUTO, debug=False, asyncio_default_fixture_loop_scope=None, asyncio_default_test_loop_scope=function
collecting ... collected 3 items
test/registered/model_loading/test_external_models.py::TestExternalModels::test_external_model PASSED [ 33%]
test/registered/model_loading/test_weight_loader_v2_e2e.py::TestWeightLoaderV2E2E::test_qwen2_native_v1_v2_generation_match PASSED [ 66%]
/__w/_temp/36bb9628-bed5-4032-9b3d-c2c08de1c18b.sh: line 3:  3292 Killed                  python3 -m pytest -v "${targets[@]}" --junitxml="${REPORT_DIR}/results.xml"
test/registered/model_loading/test_weight_loader_v2_e2e.py::TestWeightLoaderV2E2E::test_transformers_impl_loads_and_generates ::debug::{"message":"command terminated with non-zero exit code: error executing command [sh …
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/db527b90-df11-11f1-985d-6d4c46799d67.sh], exit code 137
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
