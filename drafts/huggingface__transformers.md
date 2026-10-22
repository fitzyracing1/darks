<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 167957 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: "Self-hosted runner (benchmark)" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Self-hosted runner (benchmark)** workflow (`.github/workflows/benchmark.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
