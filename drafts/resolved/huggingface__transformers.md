<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: resolved -->
# Upstream issue draft: huggingface/transformers

- **Status:** resolved — lit again (2026-11-19); nothing to file
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169246 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: "Slow tests on important models (on Push - A10)" workflow failing on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Slow tests on important models (on Push - A10)** workflow (`.github/workflows/push-important-models.yml`) on `main` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44501079933 — dark (conclusion: `failure`), 2026-11-19 09:57 UTC
- Dark since: 2026-11-19 09:57 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 0) / run_models_gpu (models/gemma3)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x.  3 root root     73 Nov 19 10:01 reports
drwxr-xr-x.  3 root root     68 Nov 18 00:41 scripts
-rw-r--r--.  1 root root  12743 Nov 18 00:41 setup.py
drwxr-xr-x.  1 root root     67 Nov 18 00:41 src
-rw-r--r--.  1 root root 375842 Nov 19 10:19 test_outputs.txt
drwxr-xr-x.  1 root root   4096 Nov 19 10:01 tests
drwxr-xr-x.  1 root root     56 Nov 19 10:01 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/2f049b40-e400-11f1-b575-97f176c30587.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
