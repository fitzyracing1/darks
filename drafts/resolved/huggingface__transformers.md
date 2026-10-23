<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-10-23); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168012 · **Generated:** 2026-10-23T06:59:11.689Z
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39890356665 — dark (conclusion: `startup_failure`), 2026-10-23 02:34 UTC
- Dark since: 2026-10-22 14:27 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39881368739 — dark (conclusion: `failure`), 2026-10-23 00:59 UTC
- Dark since: 2026-10-23 00:59 UTC (first run of the current streak)
- Job / step: `Latest PyTorch (AMD) [dev]` → `Build and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: failed to load cache key: invalid response status 403

<details><summary>End of the job log</summary>

```
#7 CANCELED
------
 > [ 9/23] ADD https://api.github.com/repos/huggingface/transformers/git/refs/heads/main version.json:
------
ERROR: failed to build: failed to solve: failed to load cache key: invalid response status 403
builder-15a94f6e-ef44-4e9e-afee-3b49ae1ecd12/builder-15a94f6e-ef44-4e9e-afee-3b49ae1ecd120/61dx58pb3qabxhzjmi2mcgtpb
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: failed to load cache key: invalid response status 403
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39888811890 — dark (conclusion: `failure`), 2026-10-23 02:18 UTC
- Dark since: 2026-10-23 02:18 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39890385125 — dark (conclusion: `failure`), 2026-10-23 02:35 UTC
- Dark since: 2026-10-23 02:35 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39890506022 — dark (conclusion: `failure`), 2026-10-23 02:36 UTC
- Dark since: 2026-10-23 02:36 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39890617206 — dark (conclusion: `failure`), 2026-10-23 02:37 UTC
- Dark since: 2026-10-23 02:37 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 1) / run_models_gpu (models/granite_swa)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    79 Oct 23 02:45 reports
drwxr-xr-x.  3 root root    68 Oct 23 01:01 scripts
-rw-r--r--.  1 root root 12447 Oct 23 01:01 setup.py
drwxr-xr-x.  1 root root    67 Oct 23 01:01 src
-rw-r--r--.  1 root root 23885 Oct 23 02:45 test_outputs.txt
drwxr-xr-x.  1 root root   132 Oct 23 02:45 tests
drwxr-xr-x.  1 root root    56 Oct 23 02:45 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/c29e3440-ce8b-11f1-ad6c-0f4ce14cf933.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39894057521 — dark (conclusion: `failure`), 2026-10-23 03:15 UTC
- Dark since: 2026-10-23 03:15 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@d8eebe61652abbdadac132fb308ec7c678e5ab99)
 + wrapt==2.5.1
Using Python 3.12.15 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+gdf6603f05.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+gdf6603f05.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/56cdb3d0-ce90-11f1-b5e2-1b250f330867.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
