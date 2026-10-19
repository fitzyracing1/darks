<!-- dark-draft: langflow-ai/langflow -->
<!-- draft-state: ready -->
# Upstream issue draft: langflow-ai/langflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langflow-ai/langflow/issues/new
- **Stars:** 155801 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Deploy Storybook to GitHub Pages", "Store pytest durations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Storybook to GitHub Pages (`.github/workflows/deploy-storybook.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/38499145185 — dark (conclusion: `failure`), 2026-10-14 02:04 UTC
- Dark since: 2026-09-16 01:11 UTC (first run of the current streak)
- Job / step: `Deploy Storybook` → `Deploy to GitHub Pages`
- Likely cause: Error: Failed to create deployment (status: 400) with build version a21cd0b51bcc0bc9dfe1865465aad6f41c242a9a. Request ID 5401:1F5F41:34A493:38263E:6ACEE401 Responded with: Missing environment. Ensure your workflow's deployment job has an en

<details><summary>End of the job log</summary>

```
Found 1 artifact(s)
Creating Pages deployment with payload:
{
	"artifact_id": 11865081939,
	"pages_build_version": "a21cd0b51bcc0bc9dfe1865465aad6f41c242a9a",
	"oidc_token": "***"
}
##[error]Creating Pages deployment failed
```

</details>

### Store pytest durations (`.github/workflows/store_pytest_durations.yml`)

- Latest run on `main`: https://github.com/langflow-ai/langflow/actions/runs/38216622253 — dark (conclusion: `failure`), 2026-10-12 07:14 UTC
- Dark since: 2026-10-12 07:14 UTC (first run of the current streak)
- Job / step: `measure (main) / Unit Tests - Python 3.14 - Group 3` → `Run unit tests`
- Likely cause: TestPreprocessingApiKeyValidation.test_service_update_raises_preprocessing_validation_error_on_missing_key (src/backend/tests/unit/test_memory_bases.py:3454)

<details><summary>End of the job log</summary>

```
src/backend/tests/unit/test_logger.py::test_init_with_env_variable
[gw0] [ 89%] PASSED src/backend/tests/unit/test_logger.py::test_init_with_env_variable
src/backend/tests/unit/test_memory_bases.py::TestMemoriesAPIHandlers::test_create_duplicate_name_returns_409
[gw1] [ 89%] PASSED src/backend/tests/unit/test_memory_bases.py::TestMemoriesAPIHandlers::test_create_duplicate_name_returns_409
src/backend/tests/unit/test_logger.py::TestBufferWriterBytesSerializationFix::test_add_serialized_and_buffer_writer_integration
[gw0] [ 89%] PASSED src/backend/tests/unit/test_logger.py::TestBufferWriterBytesSerializationFix::test_add_serialized_and_buffer_writer_integration
src/backend/tests/unit/test_memory_bases.py::TestPreprocessingApiKeyValidation::test_service_update_raises_preprocessing_validation_error_on_missing_key
##[error]TestPreprocessingApiKeyValidation.test_service_update_raises_preprocessing_validation_error_on_missing_key
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
