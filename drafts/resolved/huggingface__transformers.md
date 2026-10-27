<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-10-27); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168225 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Build docker images (scheduled)", "Check Tiny Models", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40439298450 — dark (conclusion: `startup_failure`), 2026-10-27 02:35 UTC
- Dark since: 2026-10-26 15:09 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40429914873 — dark (conclusion: `failure`), 2026-10-27 01:00 UTC
- Dark since: 2026-10-27 01:00 UTC (first run of the current streak)
- Job / step: `Doc builder` → `Build and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succes

<details><summary>End of the job log</summary>

```
  24 | >>> RUN doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean
  25 |     RUN rm -rf doc-build-dev
  26 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succe…
builder-90f11711-7a8a-4bcc-b428-aabad24810ab/builder-90f11711-7a8a-4bcc-b428-aabad24810ab0/ng60pdjc0tfxl7j97ihqu2474
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --…
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40437736589 — dark (conclusion: `failure`), 2026-10-27 02:19 UTC
- Dark since: 2026-10-27 02:19 UTC (first run of the current streak)
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

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40439326994 — dark (conclusion: `failure`), 2026-10-27 02:35 UTC
- Dark since: 2026-10-27 02:35 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40439524638 — dark (conclusion: `failure`), 2026-10-27 02:37 UTC
- Dark since: 2026-10-27 02:37 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40439675536 — dark (conclusion: `failure`), 2026-10-27 02:39 UTC
- Dark since: 2026-10-27 02:39 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/granitemoe_swa)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    82 Oct 27 03:08 reports
drwxr-xr-x.  3 root root    84 Oct 27 01:02 scripts
-rw-r--r--.  1 root root 12447 Oct 27 01:02 setup.py
drwxr-xr-x.  1 root root    67 Oct 27 01:02 src
-rw-r--r--.  1 root root 24420 Oct 27 03:08 test_outputs.txt
drwxr-xr-x.  1 root root   132 Oct 27 03:08 tests
drwxr-xr-x.  1 root root    56 Oct 27 03:08 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/9f0d5bc0-d1b3-11f1-af9e-41114ca8b87a.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40443183601 — dark (conclusion: `failure`), 2026-10-27 03:15 UTC
- Dark since: 2026-10-27 03:15 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@97ad00a56eaa54a290a50d81ed25f66a5e0fcb05)
 + wrapt==2.5.1
Using Python 3.12.16 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+g00b6c4c56.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+g00b6c4c56.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/fb4bbfc0-d1b4-11f1-a1b9-c7c00001cff2.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
