<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-11-03); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168473 · **Generated:** 2026-11-03T06:44:54.436Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Skipped: upstream already tracking

- Build docker images (scheduled) (`.github/workflows/build-docker-images.yml`): [issue #50220](https://github.com/huggingface/transformers/issues/50220) "CI: build-docker-images Doc builder failing: pyarrow requires NumPy>=2.0 but image has 1.26.4"
- Check Tiny Models (`.github/workflows/check_tiny_models.yml`): [issue #50221](https://github.com/huggingface/transformers/issues/50221) "CI: check_tiny_models failing: `from datasets import load_dataset` ImportError — pyarrow needs NumPy>=2.0 (found 1.26.4)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (nightly-past-ci-caller) (`.github/workflows/self-nightly-past-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41565637517 — dark (conclusion: `startup_failure`), 2026-11-03 02:21 UTC
- Dark since: 2026-11-03 02:21 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41565670626 — dark (conclusion: `failure`), 2026-11-03 02:22 UTC
- Dark since: 2026-11-03 02:22 UTC (first run of the current streak)
- Job / step: `Pipeline CI / Pipelines (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41565730489 — dark (conclusion: `failure`), 2026-11-03 02:22 UTC
- Dark since: 2026-11-03 02:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41565843144 — dark (conclusion: `failure`), 2026-11-03 02:23 UTC
- Dark since: 2026-11-03 02:23 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/albert)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    73 Nov  3 03:52 reports
drwxr-xr-x.  3 root root    84 Nov  3 00:39 scripts
-rw-r--r--.  1 root root 12447 Nov  3 00:39 setup.py
drwxr-xr-x.  1 root root    67 Nov  3 00:39 src
-rw-r--r--.  1 root root 31892 Nov  3 03:52 test_outputs.txt
drwxr-xr-x.  1 root root   111 Nov  3 03:52 tests
drwxr-xr-x.  1 root root    33 Nov  3 00:39 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/ee8b4b90-d739-11f1-acfc-9941d04b4070.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41570545373 — dark (conclusion: `failure`), 2026-11-03 03:10 UTC
- Dark since: 2026-11-03 03:10 UTC (first run of the current streak)
- Job / step: `Test vLLM integration` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@5c024ea9bd1f028fb9ecdb603bdf63e20ebe64d6)
 + wrapt==2.5.2
Using Python 3.12.16 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+g76c6f3f2a.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+g76c6f3f2a.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/6288cdc0-d734-11f1-a3fe-4b861f4bdd4e.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
