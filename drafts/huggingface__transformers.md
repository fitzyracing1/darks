<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168339 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Build docker images (scheduled)", "Build documentation", "Check Tiny Models", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40981753071 — dark (conclusion: `failure`), 2026-10-30 00:46 UTC
- Dark since: 2026-10-30 00:46 UTC (first run of the current streak)
- Job / step: `Doc builder` → `Build and push`
- Likely cause: buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succes

<details><summary>End of the job log</summary>

```
  24 | >>> RUN doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean
  25 |     RUN rm -rf doc-build-dev
  26 |
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --clean" did not complete succe…
builder-4976ab02-34b7-446d-bf4d-1af3fc6f6a46/builder-4976ab02-34b7-446d-bf4d-1af3fc6f6a460/c6vykb9q3drurgkt06nrj7692
Build summary supported!
##[error]buildx failed with: ERROR: failed to build: failed to solve: process "/bin/sh -c doc-builder build transformers transformers/docs/source/en --build_dir doc-build-dev --notebook_dir notebooks/transformers_doc --…
```

</details>

### Build documentation (`.github/workflows/build_documentation.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41012562408 — dark (conclusion: `failure`), 2026-10-30 06:10 UTC
- Dark since: 2026-10-30 01:10 UTC (first run of the current streak)
- Job / step: `build_other_lang / build_main_documentation` → `Make documentation`
- Likely cause: Unable to find Llama4ImageProcessorPil in transformers. Make sure the path to that object is correct.

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/transformers/transformers/.venv/lib/python3.11/site-packages/doc_builder/build_doc.py", line 397, in build_doc
    anchors_mapping, source_files_mapping = build_mdx_files(
                                            ^^^^^^^^^^^^^^^^
  File "/home/runner/work/transformers/transformers/.venv/lib/python3.11/site-packages/doc_builder/build_doc.py", line 255, in build_mdx_files
    raise type(e)(f"There was an error when converting {file} to the MDX format.\n" + e.args[0]) from e
ValueError: There was an error when converting ../transformers/docs/source/ko/model_doc/llama4.md to the MDX format.
Unable to find Llama4ImageProcessorPil in transformers. Make sure the path to that object is correct.
##[error]Process completed with exit code 1.
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40990372645 — dark (conclusion: `failure`), 2026-10-30 02:12 UTC
- Dark since: 2026-10-30 02:12 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40991566984 — dark (conclusion: `startup_failure`), 2026-10-30 02:25 UTC
- Dark since: 2026-10-30 02:25 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40991579167 — dark (conclusion: `failure`), 2026-10-30 02:25 UTC
- Dark since: 2026-10-30 02:25 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (1gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-1gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40991707177 — dark (conclusion: `failure`), 2026-10-30 02:26 UTC
- Dark since: 2026-10-30 02:26 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40991766466 — dark (conclusion: `failure`), 2026-10-30 02:27 UTC
- Dark since: 2026-10-30 02:27 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 1) / run_models_gpu (models/granitemoehybrid)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    83 Oct 30 03:26 reports
drwxr-xr-x.  3 root root    68 Oct 30 00:48 scripts
-rw-r--r--.  1 root root 12447 Oct 30 00:48 setup.py
drwxr-xr-x.  1 root root    67 Oct 30 00:48 src
-rw-r--r--.  1 root root 30974 Oct 30 03:26 test_outputs.txt
drwxr-xr-x.  1 root root   132 Oct 30 03:26 tests
drwxr-xr-x.  1 root root    56 Oct 30 03:26 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/b69c38a0-d411-11f1-ba09-1f172ae8f8fd.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/40996009636 — dark (conclusion: `failure`), 2026-10-30 03:11 UTC
- Dark since: 2026-10-30 03:11 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@bb17623b30f74768bfe6f2db350aac9770f04641)
 + wrapt==2.5.2
Using Python 3.12.16 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+g3966924d5.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+g3966924d5.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/f5b0f910-d40f-11f1-888e-b3cde7a51001.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
