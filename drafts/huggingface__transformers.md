<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169316 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 9 workflows dark on main ("Slow tests on important models (on Push - A10)", "Build docker images (scheduled)", "Self-hosted runner (nightly-past-ci-caller)", +6 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Slow tests on important models (on Push - A10) (`.github/workflows/push-important-models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46040449098 — dark (conclusion: `failure`), 2026-11-27 17:15 UTC
- Dark since: 2026-11-27 17:15 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/auto)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x. 3 root root       71 Nov 27 17:17 reports
drwxr-xr-x. 3 root root       84 Nov 19 00:42 scripts
-rw-r--r--. 1 root root    12742 Nov 27 17:17 setup.py
drwxr-xr-x. 1 root root       67 Nov 19 00:42 src
-rw-r--r--. 1 root root    84839 Nov 27 17:19 test_outputs.txt
drwxr-xr-x. 1 root root     4096 Nov 27 17:17 tests
drwxr-xr-x. 1 root root     4096 Nov 27 17:17 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/714bb420-ea86-11f1-aa40-67b4898fc67a.sh], exit code 1
```

</details>

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46088908527 — dark (conclusion: `failure`), 2026-11-28 00:37 UTC
- Dark since: 2026-11-28 00:37 UTC (first run of the current streak)
- Job / step: `Cache Latest Pytorch (AMD) Image` → `Pull and save docker image to cache`
- Likely cause: failed to save image: invalid output path: stat /mnt/image-cache: no such file or directory

<details><summary>End of the job log</summary>

```
11efba17da29: Pull complete
260e6ee345d1: Pull complete
Digest: sha256:4b28897250bb518e81cc44cf4540147fcccc9641ed34def85f62a3b119711487
Status: Downloaded newer image for huggingface/transformers-pytorch-amd-gpu:latest
docker.io/huggingface/transformers-pytorch-amd-gpu:latest
Saving to temp file: /mnt/image-cache/transformers-pytorch-amd-gpu.tar.tmp
failed to save image: invalid output path: stat /mnt/image-cache: no such file or directory
##[error]Process completed with exit code 1.
```

</details>

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46097696512 — dark (conclusion: `startup_failure`), 2026-11-28 02:21 UTC
- Dark since: 2026-11-28 02:21 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46097718476 — dark (conclusion: `failure`), 2026-11-28 02:22 UTC
- Dark since: 2026-11-28 02:22 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46097811187 — dark (conclusion: `failure`), 2026-11-28 02:23 UTC
- Dark since: 2026-11-28 02:23 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46097879801 — dark (conclusion: `failure`), 2026-11-28 02:24 UTC
- Dark since: 2026-11-28 02:24 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/axk1)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    71 Nov 28 02:39 reports
drwxr-xr-x.  3 root root    84 Nov 28 00:39 scripts
-rw-r--r--.  1 root root 12742 Nov 28 00:39 setup.py
drwxr-xr-x.  1 root root    67 Nov 28 00:39 src
-rw-r--r--.  1 root root 27129 Nov 28 02:40 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov 28 02:39 tests
drwxr-xr-x.  1 root root    33 Nov 28 00:39 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/f73fb5b0-ead4-11f1-8902-8bd23b9aa249.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46097928400 — dark (conclusion: `failure`), 2026-11-28 02:24 UTC
- Dark since: 2026-11-28 02:24 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-4xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4632, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 40 failed, 247 passed, 12 skipped, 25 warnings in 827.83s (0:13:47) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/2dbd3650-ead3-11f1-b04f-ef0f7fac7bbd.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46101500106 — dark (conclusion: `failure`), 2026-11-28 03:09 UTC
- Dark since: 2026-11-28 03:09 UTC (first run of the current streak)
- Job / step: `Test vLLM multimodal processing (shard 2 / 4)` → `Test: multimodal processing (shard 2 / 4)`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
        151645,
        198,
        151644,
        77091,
        198,
    ]
= 1 failed, 494 passed, 26 skipped, 1 xfailed, 123 warnings in 1955.98s (0:32:35) =
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/f46c5820-ead9-11f1-8392-b351076c0f7d.sh], exit code 1
```

</details>

### SGLang Integration Tests (`.github/workflows/sglang-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46101696511 — dark (conclusion: `failure`), 2026-11-28 03:12 UTC
- Dark since: 2026-11-28 03:12 UTC (first run of the current streak)
- Job / step: `SGLang integration (processors-and-mappings)` → `Run canonical SGLang integration tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
---- generated xml file: /__w/transformers/transformers/reports/results.xml ----
=========================== short test summary info ============================
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_dict_without_rope_type - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeRopeScalingCompat::test_no_crash_on_non_dict_rope_scaling - Exception: retry() exceed maximum number of retries.
FAILED test/registered/unit/utils/test_hf_transformers.py::TestNormalizeTpStyle::test_tied_embedding_plan_normalizes - Exception: retry() exceed maximum number of retries.
======== 3 failed, 95 passed, 19 warnings, 17 subtests passed in 8.87s =========
sys:1: DeprecationWarning: builtin type swigvarlink has no __module__ attribute
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/ed8a33a0-eadf-11f1-b8fc-b19198867cf8.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
