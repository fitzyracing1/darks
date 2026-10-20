<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-10-20); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 167881 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Check Tiny Models", "Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39358007156 — dark (conclusion: `failure`), 2026-10-20 02:16 UTC
- Dark since: 2026-10-20 02:16 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39359450763 — dark (conclusion: `startup_failure`), 2026-10-20 02:32 UTC
- Dark since: 2026-10-20 02:32 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39359467391 — dark (conclusion: `failure`), 2026-10-20 02:32 UTC
- Dark since: 2026-10-20 02:32 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39359589141 — dark (conclusion: `failure`), 2026-10-20 02:33 UTC
- Dark since: 2026-10-20 02:33 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39359705805 — dark (conclusion: `failure`), 2026-10-20 02:35 UTC
- Dark since: 2026-10-20 02:35 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 0) / run_models_gpu (models/aimv2)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    73 Oct 20 02:36 reports
drwxr-xr-x.  3 root root    84 Oct 19 01:04 scripts
-rw-r--r--.  1 root root 12469 Oct 19 01:04 setup.py
drwxr-xr-x.  1 root root    67 Oct 19 01:04 src
-rw-r--r--.  1 root root 36562 Oct 20 02:36 test_outputs.txt
drwxr-xr-x.  1 root root  4096 Oct 20 02:36 tests
drwxr-xr-x.  1 root root    56 Oct 20 02:36 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/0c27a510-cc2f-11f1-923b-e122efc198ea.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39363339319 — dark (conclusion: `failure`), 2026-10-20 03:15 UTC
- Dark since: 2026-10-20 03:15 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@e2c73b05e20b4cc7a45533786496dbefa176c1eb)
 + wrapt==2.5.1
Using Python 3.12.15 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+ge68efc685.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+ge68efc685.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/d82d2900-cc34-11f1-ac40-81c6c440cf7d.sh], exit code 1
```

</details>

### Self-hosted runner (benchmark) (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39375410547 — dark (conclusion: `failure`), 2026-10-20 05:32 UTC
- Dark since: 2026-10-20 03:19 UTC (first run of the current streak)
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
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/ae79fad0-cc47-11f1-8e0f-c582facadd27.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
