<!-- dark-draft: zylon-ai/private-gpt -->
<!-- draft-state: ready -->
# Upstream issue draft: zylon-ai/private-gpt

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/zylon-ai/private-gpt/issues/new
- **Stars:** 57615 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "update-claude-specs" workflow failing on main since 2026-09-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **update-claude-specs** workflow (`.github/workflows/update-claude-specs.yml`) on `main` has been failing since 2026-09-14. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/zylon-ai/private-gpt/actions/runs/40263579815 — dark (conclusion: `failure`), 2026-10-26 03:20 UTC
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

If this is already known or expected, feel free to close. Thanks for maintaining private-gpt!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
