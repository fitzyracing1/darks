<!-- dark-draft: zylon-ai/private-gpt -->
<!-- draft-state: ready -->
# Upstream issue draft: zylon-ai/private-gpt

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/zylon-ai/private-gpt/issues/new
- **Stars:** 57652 · **Generated:** 2026-11-25T18:39:22.716Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("update-claude-specs", "publish docs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### update-claude-specs (`.github/workflows/update-claude-specs.yml`)

- Latest run on `main`: https://github.com/zylon-ai/private-gpt/actions/runs/45104606321 — dark (conclusion: `failure`), 2026-11-23 03:12 UTC
- Dark since: 2026-09-14 03:19 UTC (first run of the current streak)
- Job / step: `update` → `Update Claude specs and lock file`
- Likely cause: RuntimeError: openapi_spec_url not found in https://raw.githubusercontent.com/anthropics/anthropic-sdk-typescript/main/.stats.yml

<details><summary>End of the job log</summary>

```
    main()
  File "/home/runner/work/private-gpt/private-gpt/scripts/update_claude_specs.py", line 85, in main
    latest_url = fetch_openapi_spec_url()
                 ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/runner/work/private-gpt/private-gpt/scripts/update_claude_specs.py", line 26, in fetch_openapi_spec_url
    raise RuntimeError(f"openapi_spec_url not found in {ANTHROPIC_STATS_URL}")
RuntimeError: openapi_spec_url not found in https://raw.githubusercontent.com/anthropics/anthropic-sdk-typescript/main/.stats.yml
##[error]Process completed with exit code 1.
```

</details>

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

If this is already known or expected, feel free to close. Thanks for maintaining private-gpt!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
