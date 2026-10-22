<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 167967 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Self-hosted runner (benchmark)", "Build docker images (scheduled)", "Check Tiny Models", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (benchmark) (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39659985191 — dark (conclusion: `failure`), 2026-10-21 19:15 UTC
- Dark since: 2026-10-21 15:55 UTC (first run of the current streak)
- Job / step: `Benchmark (aws-g5-4xlarge-cache)` → `Run benchmark`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
  File "/opt/venv/lib/python3.11/site-packages/kernels/resolver.py", line 284, in resolve
    return resolve_hub_kernel(kernel.repo_id, api=api, revision=revision, backend=backend)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/venv/lib/python3.11/site-packages/kernels/resolver.py", line 147, in resolve_hub_kernel
    metadata = Metadata.read_from_file(metadata_path)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
ValueError: Cannot parse metadata from `"/mnt/cache/hub/kernels--kernels-community--rotary/snapshots/8848930c57fe826ca53633119be3d5aeddcc82a1/build/torch214-cu130-x86_64-linux/metadata.json"`: Input/output error (os err…
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/cebbcca0-cd83-11f1-91c9-e3fc941cf89c.sh], exit code 1
```

</details>

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39702726404 — dark (conclusion: `failure`), 2026-10-22 00:56 UTC
- Dark since: 2026-10-22 00:56 UTC (first run of the current streak)
- Job / step: `Doc builder` → `Build and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succes

<details><summary>End of the job log</summary>

```
  24 | >>> RUN doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean
  25 |     RUN rm -rf doc-build-dev
  26 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succe…
builder-877a236d-4e60-4442-9226-dbbe2a3997a1/builder-877a236d-4e60-4442-9226-dbbe2a3997a10/w3vrx0wdtsrm2n4x2dspzx7wk
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --…
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39710605703 — dark (conclusion: `failure`), 2026-10-22 02:17 UTC
- Dark since: 2026-10-22 02:17 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39712135825 — dark (conclusion: `startup_failure`), 2026-10-22 02:34 UTC
- Dark since: 2026-10-22 02:34 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39712158360 — dark (conclusion: `failure`), 2026-10-22 02:34 UTC
- Dark since: 2026-10-22 02:34 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39712285324 — dark (conclusion: `failure`), 2026-10-22 02:36 UTC
- Dark since: 2026-10-22 02:36 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39712402491 — dark (conclusion: `failure`), 2026-10-22 02:37 UTC
- Dark since: 2026-10-22 02:37 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/aimv2)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    72 Oct 22 04:35 reports
drwxr-xr-x.  3 root root    84 Oct 22 00:58 scripts
-rw-r--r--.  1 root root 12469 Oct 22 00:58 setup.py
drwxr-xr-x.  1 root root    67 Oct 22 00:58 src
-rw-r--r--.  1 root root 36562 Oct 22 04:35 test_outputs.txt
drwxr-xr-x.  1 root root   132 Oct 22 04:35 tests
drwxr-xr-x.  1 root root    56 Oct 22 04:35 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/03a7c970-cdd2-11f1-b6dc-7fcc63f08ddb.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39715858445 — dark (conclusion: `failure`), 2026-10-22 03:15 UTC
- Dark since: 2026-10-22 03:15 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@537d56200c07c945e95369f25fdde2cd905ecb6b)
 + wrapt==2.5.1
Using Python 3.12.15 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+g8e2beaa3b.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+g8e2beaa3b.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/26bea3d0-cdc7-11f1-92af-bdb35a270180.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
