<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169321 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: "Slow tests on important models (on Push - A10)" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Slow tests on important models (on Push - A10)** workflow (`.github/workflows/push-important-models.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/46040449098 — dark (conclusion: `failure`), 2026-11-27 17:15 UTC
- Dark since: 2026-11-27 17:15 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/auto)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x. 3 root root       71 Nov 27 17:17 reports
drwxr-xr-x. 3 root root       84 Nov 19 00:42 scripts
-rw-r--r--. 1 root root    12742 Nov 27 17:17 setup.py
drwxr-xr-x. 1 root root       67 Nov 19 00:42 src
-rw-r--r--. 1 root root    84839 Nov 27 17:19 test_outputs.txt
drwxr-xr-x. 1 root root     4096 Nov 27 17:17 tests
drwxr-xr-x. 1 root root     4096 Nov 27 17:17 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/714bb420-ea86-11f1-aa40-67b4898fc67a.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
