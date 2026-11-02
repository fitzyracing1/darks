<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168432 · **Generated:** 2026-11-02T06:51:01.101Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"
- Check Tiny Models (`.github/workflows/check_tiny_models.yml`): [issue #50221](https://github.com/huggingface/transformers/issues/50221) "CI: check_tiny_models failing: `from datasets import load_dataset` ImportError — pyarrow needs NumPy>=2.0 (found 1.26.4)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41377339507 — dark (conclusion: `startup_failure`), 2026-11-02 02:22 UTC
- Dark since: 2026-10-31 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41377368199 — dark (conclusion: `failure`), 2026-11-02 02:22 UTC
- Dark since: 2026-10-31 02:20 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41377423030 — dark (conclusion: `failure`), 2026-11-02 02:22 UTC
- Dark since: 2026-10-31 02:21 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41377520703 — dark (conclusion: `failure`), 2026-11-02 02:24 UTC
- Dark since: 2026-10-31 02:22 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 1) / run_models_gpu (models/higgs_audio_v2_tokenizer)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    91 Nov  2 02:56 reports
drwxr-xr-x.  3 root root    68 Nov  2 00:42 scripts
-rw-r--r--.  1 root root 12447 Nov  2 00:42 setup.py
drwxr-xr-x.  1 root root    67 Nov  2 00:42 src
-rw-r--r--.  1 root root 19085 Nov  2 02:56 test_outputs.txt
drwxr-xr-x.  1 root root   148 Nov  2 02:56 tests
drwxr-xr-x.  1 root root   115 Nov  2 02:56 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/fee37b60-d668-11f1-ae16-dd7b43d61753.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41377540897 — dark (conclusion: `failure`), 2026-11-02 02:24 UTC
- Dark since: 2026-10-31 02:23 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-12xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4540, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 39 failed, 222 passed, 11 skipped, 26 warnings in 733.98s (0:12:13) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/335845a0-d665-11f1-b7db-57b76b9af399.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41381719162 — dark (conclusion: `failure`), 2026-11-02 03:11 UTC
- Dark since: 2026-10-31 03:09 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@f2a9af27bf12d6722a600ec597469f6d3556230b)
 + wrapt==2.5.2
Using Python 3.12.16 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+ge0d00e4b8.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+ge0d00e4b8.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/68e88670-d66b-11f1-be6d-2bf390bb070d.sh], exit code 1
```

</details>

### .github/workflows/build_documentation.yml (`.github/workflows/build_documentation.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41379338179 — dark (conclusion: `failure`), 2026-11-02 02:44 UTC
- Dark since: 2026-11-02 02:44 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
