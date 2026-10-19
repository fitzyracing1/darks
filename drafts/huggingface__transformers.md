<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 167823 · **Generated:** 2026-10-19T01:07:32.637Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Build docker images (scheduled)", "Check Tiny Models", "Self-hosted runner (nightly-past-ci-caller)", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39084974199 — dark (conclusion: `failure`), 2026-10-18 01:02 UTC
- Dark since: 2026-10-17 00:56 UTC (first run of the current streak)
- Job / step: `Doc builder` → `Build and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succes

<details><summary>End of the job log</summary>

```
  24 | >>> RUN doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean
  25 |     RUN rm -rf doc-build-dev
  26 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succe…
builder-33a7ced4-7157-412a-a1b5-a1f5be9231f6/builder-33a7ced4-7157-412a-a1b5-a1f5be9231f60/j4ags2how5v4grv8zbuu514mk
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --…
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39089492957 — dark (conclusion: `failure`), 2026-10-18 02:16 UTC
- Dark since: 2026-10-17 02:16 UTC (first run of the current streak)
- Job / step: `Check tiny models` → `Create all tiny models (locally)`
- Likely cause: ImportError: pyarrow requires NumPy 2.0 or newer, found 1.26.4

<details><summary>End of the job log</summary>

```
    from .arrow_dataset import Column, Dataset
  File "/opt/hostedtoolcache/Python/3.11.17/x64/lib/python3.11/site-packages/datasets/arrow_dataset.py", line 59, in <module>
    import pyarrow as pa
  File "/opt/hostedtoolcache/Python/3.11.17/x64/lib/python3.11/site-packages/pyarrow/__init__.py", line 59, in <module>
    from pyarrow.lib import (BuildInfo, CppBuildInfo, RuntimeInfo, set_timezone_db_path,
  File "pyarrow/lib.pyx", line 42, in init pyarrow.lib
ImportError: pyarrow requires NumPy 2.0 or newer, found 1.26.4
##[error]Process completed with exit code 1.
```

</details>

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39135657054 — dark (conclusion: `startup_failure`), 2026-10-18 14:21 UTC
- Dark since: 2026-10-17 02:31 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39090415924 — dark (conclusion: `failure`), 2026-10-18 02:31 UTC
- Dark since: 2026-10-17 02:31 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39090490285 — dark (conclusion: `failure`), 2026-10-18 02:33 UTC
- Dark since: 2026-10-17 02:32 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39090563331 — dark (conclusion: `failure`), 2026-10-18 02:34 UTC
- Dark since: 2026-10-17 02:34 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/aimv2)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    72 Oct 18 02:41 reports
drwxr-xr-x.  3 root root    84 Oct 18 01:03 scripts
-rw-r--r--.  1 root root 12469 Oct 18 01:03 setup.py
drwxr-xr-x.  1 root root    67 Oct 18 01:03 src
-rw-r--r--.  1 root root 36729 Oct 18 02:41 test_outputs.txt
drwxr-xr-x.  1 root root   132 Oct 18 02:41 tests
drwxr-xr-x.  1 root root    56 Oct 18 02:41 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/68d5e300-ca9d-11f1-b0a4-efd6d75bdfd6.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39090590753 — dark (conclusion: `failure`), 2026-10-18 02:34 UTC
- Dark since: 2026-10-17 02:34 UTC (first run of the current streak)
- Job / step: `Kernels CI / Kernel tests (aws-g5-4xlarge-cache)` → `Run kernel tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
torch212-cxx11-cu130-x86_64-linux: Torch version (2.12) does not match environment Torch version (2.14)
torch211-cxx11-cu130-x86_64-linux: Torch version (2.11) does not match environment Torch version (2.14)
torch212-cxx11-cu130-aarch64-linux: CPU (aarch64) does not match system CPU (x86_64)
torch211-cxx11-cu130-aarch64-linux: CPU (aarch64) does not match system CPU (x86_64)
torch210-cxx11-cu130-aarch64-linux: CPU (aarch64) does not match system CPU (x86_64)
============= 3 failed, 33 passed, 1 skipped in 805.00s (0:13:25) ==============
Bus error (core dumped)
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/1c64f290-ca9d-11f1-b5bd-c1ee1b6873c5.sh], exit code 135
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39092946100 — dark (conclusion: `failure`), 2026-10-18 03:15 UTC
- Dark since: 2026-10-17 03:13 UTC (first run of the current streak)
- Job / step: `Test vLLM initialization (small subset, shard 3 / 4)` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@eb82d352ba617d7503807f32fe65c16b48a1453d)
 + wrapt==2.5.1
Using Python 3.12.15 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+g39983a5e7.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+g39983a5e7.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/606ec1a0-caa2-11f1-a754-ad3a9f662db4.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
