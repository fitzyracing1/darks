<!-- dark-draft: zylon-ai/private-gpt -->
<!-- draft-state: ready -->
# Upstream issue draft: zylon-ai/private-gpt

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/zylon-ai/private-gpt/issues/new
- **Stars:** 57646 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- update-claude-specs (`.github/workflows/update-claude-specs.yml`): [issue #2441](https://github.com/zylon-ai/private-gpt/issues/2441) "CI: update-claude-specs failing: openapi_spec_url not found in anthropic-sdk-typescript .stats.yml"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "publish docs" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **publish docs** workflow (`.github/workflows/publish-docs.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining private-gpt!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
