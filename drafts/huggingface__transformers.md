<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168710 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: "PR CI" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **PR CI** workflow (`.github/workflows/pr-ci-caller.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42707947750 — dark (conclusion: `failure`), 2026-11-09 22:01 UTC
- Dark since: 2026-11-09 22:01 UTC (first run of the current streak)
- Job / step: `pr-ci / tests_generate / tests_generate [shard 2/8]` → `Run tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
FAILED tests/models/gemma4_unified/test_modeling_gemma4_unified.py::Gemma4UnifiedAudio2TextModelTest::test_generate_with_static_cache - AssertionError: Generate outputs are not similar enough (atol=1e-05, rtol=1e-05).
  Sequence mismatch: 20/70 tokens differ (first at position 50).
  Batch index: 1
  Token at mismatch — output_1: 15, output_2: 73
  Score diff at first mismatch — max: 9.770179e-05, mean: 2.416918e-05
===== 1 failed, 1612 passed, 472 skipped, 70 warnings in 301.54s (0:05:01) =====
OTEL TRACE END trace_id=8bff7e2245ded992697dfe441f4adb7c service=pytest-observability job=tests_generate exporter_version=0.1.0+g4cfc192 exit_code=1
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/ea6a47a0-dc89-11f1-924e-4b4078cf9323.sh], exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
