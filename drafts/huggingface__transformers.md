<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 169288 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** self-hosted runner problem — maintainers usually know

## Suggested title

<!-- BEGIN TITLE -->
CI: "PR CI" workflow failing on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **PR CI** workflow (`.github/workflows/pr-ci-caller.yml`) on `main` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/44622766195 — dark (conclusion: `failure`), 2026-11-19 21:50 UTC
- Dark since: 2026-11-19 21:50 UTC (first run of the current streak)
- Job / step: `pr-ci / tests_torch / tests_torch [shard 1/8]` → `Run tests`
- Likely cause: Executing the custom container implementation failed. Please contact your self hosted runner administrator.

<details><summary>End of the job log</summary>

```
tests/models/doge/test_modeling_doge.py::DogeModelTest::test_bc_cache_name_generate <- tests/generation/test_utils.py
[gw5] [ 99%] PASSED tests/models/doge/test_modeling_doge.py::DogeModelTest::test_bc_cache_name_generate <- tests/generation/test_utils.py tests/models/doge/test_modeling_doge.py::DogeModelTest::test_bc_cache_name_genera…
tests/models/emu3/test_modeling_emu3.py::Emu3Vision2TextModelTest::test_flash_attention_2_padding_matches_padding_free_with_position_ids_and_fa_kwargs <- tests/generation/test_utils.py
[gw5] [ 99%] SKIPPED tests/models/emu3/test_modeling_emu3.py::Emu3Vision2TextModelTest::test_flash_attention_2_padding_matches_padding_free_with_position_ids_and_fa_kwargs <- tests/generation/test_utils.py tests/models/…
tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_eager_padding_matches_padding_free_with_position_ids <- tests/generation/test_utils.py
OTEL DEBUG EXPORT spans=5 result=SUCCESS dest=prod duration_ms=3.8 timeout_s=? protocol=http/protobuf endpoint=https://transformers-ci-traces.lor-e.huggingface.cool
[gw5] [ 99%] PASSED tests/models/dbrx/test_modeling_dbrx.py::DbrxModelTest::test_eager_padding_matches_padding_free_with_position_ids <- tests/generation/test_utils.py ::debug::{"message":"command terminated with non-ze…
##[error]Error: failed to run script step: command terminated with non-zero exit code: error executing command [sh -e /__w/_temp/dbc6f360-e463-11f1-8ead-63bca68df6fe.sh], exit code 137
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
