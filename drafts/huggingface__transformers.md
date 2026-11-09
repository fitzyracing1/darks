<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168685 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: "Slow tests on important models (on Push - A10)" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Slow tests on important models (on Push - A10)** workflow (`.github/workflows/push-important-models.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42608387536 — dark (conclusion: `failure`), 2026-11-09 11:21 UTC
- Dark since: 2026-11-09 02:49 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 2) / run_models_gpu (models/qwen2_5_vl)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root     77 Nov  9 11:25 reports
drwxr-xr-x.  3 root root     84 Nov  9 00:43 scripts
-rw-r--r--.  1 root root  12447 Nov  9 00:43 setup.py
drwxr-xr-x.  1 root root     67 Nov  9 00:43 src
-rw-r--r--.  1 root root 142975 Nov  9 11:29 test_outputs.txt
drwxr-xr-x.  1 root root    130 Nov  9 11:25 tests
drwxr-xr-x.  1 root root     56 Nov  9 11:25 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/35663e30-dc30-11f1-9acc-5d34e7a5dce2.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
