<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 167979 · **Generated:** 2026-10-22T12:57:28.437Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Self-hosted runner (benchmark)", "Update Transformers metadata")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Self-hosted runner (benchmark) (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39776232516 — dark (conclusion: `failure`), 2026-10-22 12:10 UTC
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
ValueError: Cannot parse metadata from `"/mnt/cache/hub/kernels--kernels-community--rotary/snapshots/fa4d2fdda507f0a6ff4b2ad55011c8a17a87c56c/build/torch214-cu130-x86_64-linux/metadata.json"`: Input/output error (os err…
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/b2098410-ce11-11f1-84da-59dc66d1e443.sh], exit code 1
```

</details>

### Update Transformers metadata (`.github/workflows/update_metdata.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/39776232468 — dark (conclusion: `failure`), 2026-10-22 12:10 UTC
- Dark since: 2026-10-22 11:56 UTC (first run of the current streak)
- Job / step: `build_and_package` → `Setup environment`
- Likely cause: ERROR: Package 'transformers' requires a different Python: 3.10.12 not in '>=3.11.0'

<details><summary>End of the job log</summary>

```
  Installing build dependencies: finished with status 'done'
  Getting requirements to build wheel: started
  Getting requirements to build wheel: finished with status 'done'
  Preparing metadata (pyproject.toml): started
  Preparing metadata (pyproject.toml): finished with status 'done'
INFO: pip is looking at multiple versions of transformers to determine which version is compatible with other requirements. This could take a while.
ERROR: Package 'transformers' requires a different Python: 3.10.12 not in '>=3.11.0'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
