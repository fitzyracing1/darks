<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168420 · **Generated:** 2026-11-02T00:55:52.981Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"
- Check Tiny Models (`.github/workflows/check_tiny_models.yml`): [issue #50221](https://github.com/huggingface/transformers/issues/50221) "CI: check_tiny_models failing: `from datasets import load_dataset` ImportError — pyarrow needs NumPy>=2.0 (found 1.26.4)"
- Nvidia CI (`.github/workflows/self-scheduled-caller.yml`): [issue #50222](https://github.com/huggingface/transformers/issues/50222) "CI: Torch pipeline CI failing: 39 pipeline tests fail with RuntimeError ignore_mismatched_sizes=False"
- vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`): [issue #50223](https://github.com/huggingface/transformers/issues/50223) "CI: vllm-ci failing: uv 'No solution found' torch==2.14.0+cpu unavailable for vllm cpu build; step uses `sh` with ``"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41315434966 — dark (conclusion: `startup_failure`), 2026-11-01 14:17 UTC
- Dark since: 2026-10-31 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41264878308 — dark (conclusion: `failure`), 2026-11-01 02:21 UTC
- Dark since: 2026-10-31 02:20 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41264964051 — dark (conclusion: `failure`), 2026-11-01 02:22 UTC
- Dark since: 2026-10-31 02:21 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41265015309 — dark (conclusion: `failure`), 2026-11-01 02:23 UTC
- Dark since: 2026-10-31 02:22 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 0) / run_models_gpu (models/bamba)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    73 Nov  1 02:35 reports
drwxr-xr-x.  3 root root    84 Nov  1 00:47 scripts
-rw-r--r--.  1 root root 12447 Nov  1 00:47 setup.py
drwxr-xr-x.  1 root root    67 Nov  1 00:47 src
-rw-r--r--.  1 root root 28387 Nov  1 02:35 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov  1 02:35 tests
drwxr-xr-x.  1 root root    33 Nov  1 00:47 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/e0502800-d59c-11f1-9822-15b3ffcf8f4b.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
