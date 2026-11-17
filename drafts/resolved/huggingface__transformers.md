<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-11-17); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169140 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: "Slow tests on important models (on Push - A10)" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Slow tests on important models (on Push - A10)** workflow (`.github/workflows/push-important-models.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44067383869 — dark (conclusion: `failure`), 2026-11-17 10:42 UTC
- Dark since: 2026-11-17 10:42 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-4xlarge-cache, 2) / run_models_gpu (models/whisper)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root     75 Nov 17 11:05 reports
drwxr-xr-x.  3 root root     68 Nov 17 00:41 scripts
-rw-r--r--.  1 root root  12743 Nov 17 00:41 setup.py
drwxr-xr-x.  1 root root     67 Nov 17 00:41 src
-rw-r--r--.  1 root root 492420 Nov 17 11:16 test_outputs.txt
drwxr-xr-x.  1 root root    132 Nov 17 11:05 tests
drwxr-xr-x.  1 root root     56 Nov 17 11:05 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/c1f5b640-e276-11f1-9d43-1581fbb6761e.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
