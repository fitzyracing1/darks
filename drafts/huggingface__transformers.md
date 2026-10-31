<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168376 · **Generated:** 2026-10-31T06:39:29.667Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** workflow failed to start (config/permissions on their side)
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Nightly integration-failure triage", "Check Tiny Models", "Self-hosted runner (nightly-past-ci-caller)", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly integration-failure triage (`.github/workflows/nightly-integration-failure-triage-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41135725308 — dark (conclusion: `failure`), 2026-10-30 22:05 UTC
- Dark since: 2026-10-30 22:05 UTC (first run of the current streak)
- Job / step: `triage / triage` → `Compute triage report and dispatch to Serge`
- Likely cause: return opener.open(url, data, timeout)

<details><summary>End of the job log</summary>

```
  File "/home/runner/_work/_tool/Python/3.10.22/x64/lib/python3.10/http/client.py", line 1423, in getresponse
    response.begin()
  File "/home/runner/_work/_tool/Python/3.10.22/x64/lib/python3.10/http/client.py", line 330, in begin
    version, status, reason = self._read_status()
  File "/home/runner/_work/_tool/Python/3.10.22/x64/lib/python3.10/http/client.py", line 299, in _read_status
    raise RemoteDisconnected("Remote end closed connection without"
http.client.RemoteDisconnected: Remote end closed connection without response
##[error]Process completed with exit code 1.
```

</details>

### Check Tiny Models (`.github/workflows/check_tiny_models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41158741359 — dark (conclusion: `failure`), 2026-10-31 02:10 UTC
- Dark since: 2026-10-31 02:10 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41159573649 — dark (conclusion: `startup_failure`), 2026-10-31 02:20 UTC
- Dark since: 2026-10-31 02:20 UTC (first run of the current streak)
- Likely cause: run startup_failure

### Self-hosted runner (Intel Gaudi3 scheduled CI caller) (`.github/workflows/self-scheduled-intel-gaudi3-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41159578650 — dark (conclusion: `failure`), 2026-10-31 02:20 UTC
- Dark since: 2026-10-31 02:20 UTC (first run of the current streak)
- Job / step: `DeepSpeed CI / Intel Gaudi deepspeed tests (2gaudi)`
- Likely cause: Required runner group 'itac-bm-emr-gaudi3-dell-2gaudi' not found

### Doctests (`.github/workflows/doctests.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41159606272 — dark (conclusion: `failure`), 2026-10-31 02:21 UTC
- Dark since: 2026-10-31 02:21 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Nvidia CI - Flash Attn (`.github/workflows/self-scheduled-flash-attn-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41159714444 — dark (conclusion: `failure`), 2026-10-31 02:22 UTC
- Dark since: 2026-10-31 02:22 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 1) / run_models_gpu (models/granitemoehybrid)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root    75 Oct 31 03:02 reports
drwxr-xr-x.  3 root root    84 Oct 31 00:39 scripts
-rw-r--r--.  1 root root 12447 Oct 31 00:39 setup.py
drwxr-xr-x.  1 root root    67 Oct 31 00:39 src
-rw-r--r--.  1 root root 30646 Oct 31 03:03 test_outputs.txt
drwxr-xr-x.  1 root root   111 Oct 31 03:02 tests
drwxr-xr-x.  1 root root    33 Oct 31 00:39 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/8d01d240-d4d7-11f1-a18f-2506a9785180.sh], exit code 1
```

</details>

### Nvidia CI (`.github/workflows/self-scheduled-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41159750910 — dark (conclusion: `failure`), 2026-10-31 02:23 UTC
- Dark since: 2026-10-31 02:23 UTC (first run of the current streak)
- Job / step: `Torch pipeline CI / PyTorch pipelines (aws-g5-4xlarge-cache)` → `Run all pipeline tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/transformers/src/transformers/modeling_utils.py", line 4540, in _finalize_model_loading
    log_state_dict_report(
  File "/transformers/src/transformers/utils/loading_report.py", line 316, in log_state_dict_report
    raise RuntimeError(
RuntimeError: You set `ignore_mismatched_sizes` to `False`, thus raising an error. For details look at the above report!
===== 39 failed, 221 passed, 12 skipped, 26 warnings in 770.94s (0:12:50) ======
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/e9cbe660-d4d6-11f1-ba93-659f4e11712a.sh], exit code 1
```

</details>

### vLLM Integration Tests (`.github/workflows/vllm-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/41163122751 — dark (conclusion: `failure`), 2026-10-31 03:09 UTC
- Dark since: 2026-10-31 03:09 UTC (first run of the current streak)
- Job / step: `Test vLLM transformers backend (shard 3 / 4)` → `Install dependencies`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
 + pytest-opentelemetry==1.1.0
 + transformers-ci==0.1.0 (from git+https://github.com/huggingface/transformers-ci@4f243fcc4c8cde527b65e99ccc4761a640bb838e)
 + wrapt==2.5.2
Using Python 3.12.16 environment at: /opt/venv312
error: No solution found when resolving dependencies
  cause: Because there is no version of torch{platform_machine == 'aarch64' or platform_machine == 's390x' or platform_machine == 'x86_64'}==2.14.0+cpu and vllm==0.1.dev1+g335dd77b0.cpu depends on torch{platform_machine…
         And because only vllm==0.1.dev1+g335dd77b0.cpu is available and you require vllm, we can conclude that your requirements are unsatisfiable.
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/c4ff5bd0-d4d8-11f1-a6b4-a57577b36929.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
