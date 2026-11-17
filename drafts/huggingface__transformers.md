<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169082 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("PR CI", "Slow tests on important models (on Push - A10)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR CI (`.github/workflows/pr-ci-caller.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43979605212 — dark (conclusion: `failure`), 2026-11-16 23:28 UTC
- Dark since: 2026-11-16 22:24 UTC (first run of the current streak)
- Job / step: `pr-ci / tests_tokenization / tests_tokenization [shard 6/8]` → `Initialize containers`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
  skip_cuda_doctest: false
  is_nightly: false
  use_dev_image: false
Complete job name: pr-ci / tests_tokenization / tests_tokenization [shard 6/8]
(node:478) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:478) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilit…
##[error]Error: pod failed to come online with error: Error: Pod aws-m8i-l-cache-use1-public-80-q6nc2-runner-djw85-workflow is unhealthy with phase status Failed
```

</details>

### Slow tests on important models (on Push - A10) (`.github/workflows/push-important-models.yml`)

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/43969783210 — dark (conclusion: `failure`), 2026-11-16 22:24 UTC
- Dark since: 2026-11-16 22:24 UTC (first run of the current streak)
- Job / step: `Model CI / run_models_gpu (aws-g5-12xlarge-cache, 1) / run_models_gpu (models/modernbert)` → `Run all tests on GPU`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
drwxr-xr-x. 3 root root     77 Nov 17 00:38 reports
drwxr-xr-x. 3 root root     68 Nov 16 00:47 scripts
-rw-r--r--. 1 root root  12743 Nov 16 00:47 setup.py
drwxr-xr-x. 1 root root     55 Nov 16 00:47 src
-rw-r--r--. 1 root root 127197 Nov 17 00:41 test_outputs.txt
drwxr-xr-x. 1 root root   4096 Nov 17 00:38 tests
drwxr-xr-x. 1 root root     58 Nov 17 00:37 utils
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/2ab7d3f0-e21f-11f1-b656-8d1940ee27f9.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
