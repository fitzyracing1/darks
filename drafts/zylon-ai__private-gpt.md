<!-- dark-draft: zylon-ai/private-gpt -->
<!-- draft-state: ready -->
# Upstream issue draft: zylon-ai/private-gpt

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/zylon-ai/private-gpt/issues/new
- **Stars:** 57648 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- update-claude-specs (`.github/workflows/update-claude-specs.yml`): [issue #2441](https://github.com/zylon-ai/private-gpt/issues/2441) "CI: update-claude-specs failing: openapi_spec_url not found in anthropic-sdk-typescript .stats.yml"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("publish docs", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### publish docs (`.github/workflows/publish-docs.yml`)

- Latest run on `main`: https://github.com/zylon-ai/private-gpt/actions/runs/44230599494 — dark (conclusion: `failure`), 2026-11-18 03:27 UTC
- Dark since: 2026-11-18 03:27 UTC (first run of the current streak)
- Job / step: `publish-docs` → `Generate and Publish Docs`
- Likely cause: ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<details><summary>End of the job log</summary>

```
WARN  2026-11-18T03:28:09.388Z [docs]: Response example "Semantic search with chunks" on POST /v1/primitives/search has no matching request example with the same summary. Falling back to a base request with no body. To …
##[warning]Response example "Semantic search with chunks" on POST /v1/primitives/search has no matching request example with the same summary. Falling back to a base request with no body. To pair them, set the request a…
WARN  2026-11-18T03:28:09.388Z [docs]: Response example "Keyword-based search results" on POST /v1/primitives/search has no matching request example with the same summary. Falling back to a base request with no body. To…
##[warning]Response example "Keyword-based search results" on POST /v1/primitives/search has no matching request example with the same summary. Falling back to a base request with no body. To pair them, set the request …
WARN  2026-11-18T03:28:09.388Z [docs]: Response example "Combined semantic and keyword search" on POST /v1/primitives/search has no matching request example with the same summary. Falling back to a base request with no …
##[warning]Response example "Combined semantic and keyword search" on POST /v1/primitives/search has no matching request example with the same summary. Falling back to a base request with no body. To pair them, set the …
ERROR 2026-11-18T03:28:09.389Z [docs]: API validation for fern/openapi/openapi.json completed with 61 errors.
##[error]API validation for fern/openapi/openapi.json completed with 61 errors.
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/zylon-ai/private-gpt/actions/runs/45186057757 — dark (conclusion: `failure`), 2026-11-23 13:39 UTC
- Dark since: 2026-11-23 13:39 UTC (first run of the current streak)
- Job / step: `format` → `run format`
- Likely cause: make: *** [Makefile:37: format] Error 1

<details><summary>End of the job log</summary>

```
Resolved 349 packages in 1ms
Checked 134 packages in 1ms
uv run --no-sync ruff format . --check
Would reformat: .github/scripts/release_policy.py
Would reformat: .github/scripts/test_release_policy.py
2 files would be reformatted, 976 files already formatted
make: *** [Makefile:37: format] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining private-gpt!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
