<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-11-06); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168576 · **Generated:** 2026-11-06T06:44:53.221Z
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42149822427 — dark (conclusion: `startup_failure`), 2026-11-06 02:21 UTC
- Dark since: 2026-11-06 02:21 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42149841795 — dark (conclusion: `failure`), 2026-11-06 02:21 UTC
- Dark since: 2026-11-06 02:21 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42149956329 — dark (conclusion: `failure`), 2026-11-06 02:22 UTC
- Dark since: 2026-11-06 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42150048723 — dark (conclusion: `failure`), 2026-11-06 02:23 UTC
- Dark since: 2026-11-06 02:23 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 1) / run_models_gpu (models/granitemoehybrid)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    83 Nov  6 03:58 reports
drwxr-xr-x.  3 root root    84 Nov  6 00:39 scripts
-rw-r--r--.  1 root root 12447 Nov  6 00:39 setup.py
drwxr-xr-x.  1 root root    67 Nov  6 00:39 src
-rw-r--r--.  1 root root 30652 Nov  6 03:59 test_outputs.txt
drwxr-xr-x.  1 root root   167 Nov  6 03:59 tests
drwxr-xr-x.  1 root root    33 Nov  6 00:39 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/61c37fc0-d996-11f1-ae2a-1dec4b2769d5.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42154858517 — dark (conclusion: `failure`), 2026-11-06 03:10 UTC
- Dark since: 2026-11-06 03:10 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@5d447a57a9317eb7449e7d5ea91f1c34cb9fb6b8)
 + wrapt==2.5.2
Using Python 3.12.16 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+ga2bcb5657.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+ga2bcb5657.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/e478d1b0-d98f-11f1-8ae0-c7cb7217a2ba.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42155158763 — dark (conclusion: `failure`), 2026-11-06 03:12 UTC
- Dark since: 2026-11-06 03:12 UTC (first run of the current streak)
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
============================== 3 errors in 1.06s ===============================
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/a1291c20-d990-11f1-8f58-e3744a8d1dc9.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
