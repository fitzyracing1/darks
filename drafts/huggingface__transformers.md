<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168722 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42742131964 — dark (conclusion: `startup_failure`), 2026-11-10 02:20 UTC
- Dark since: 2026-11-10 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42742159379 — dark (conclusion: `failure`), 2026-11-10 02:21 UTC
- Dark since: 2026-11-10 02:21 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42742321416 — dark (conclusion: `failure`), 2026-11-10 02:22 UTC
- Dark since: 2026-11-10 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42742393621 — dark (conclusion: `failure`), 2026-11-10 02:23 UTC
- Dark since: 2026-11-10 02:23 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/higgs_audio_v2_tokenizer)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    92 Nov 10 02:37 reports
drwxr-xr-x.  3 root root    84 Nov 10 00:39 scripts
-rw-r--r--.  1 root root 12447 Nov 10 00:39 setup.py
drwxr-xr-x.  1 root root    67 Nov 10 00:39 src
-rw-r--r--.  1 root root 19108 Nov 10 02:37 test_outputs.txt
drwxr-xr-x.  1 root root   143 Nov 10 02:37 tests
drwxr-xr-x.  1 root root    33 Nov 10 00:39 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/aafed150-dcaf-11f1-8e8b-89c30e35b896.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42747627071 — dark (conclusion: `failure`), 2026-11-10 03:09 UTC
- Dark since: 2026-11-10 03:09 UTC (first run of the current streak)
- Job / step: `Test vLLM transformers backend (shard 1 / 4)` → `Find latest vLLM commit with built CPU wheel`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
Removing credentials config '/__w/_temp/git-credentials-7917f71f-591a-4646-9eaa-afc4749d11b2.config'
(node:557) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:557) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilit…
Traceback (most recent call last):
  File "<string>", line 4, in <module>
StopIteration
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/8ab07480-dcb4-11f1-b9bb-97d84529720d.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42747894495 — dark (conclusion: `failure`), 2026-11-10 03:12 UTC
- Dark since: 2026-11-10 03:12 UTC (first run of the current streak)
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
============================== 3 errors in 1.17s ===============================
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/2ad59df0-dcb5-11f1-b461-17ca2f50151f.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
