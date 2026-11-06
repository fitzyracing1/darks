<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 19082 · **Generated:** 2026-11-06T06:44:53.221Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42161231760 — dark (conclusion: `failure`), 2026-11-06 04:13 UTC
- Dark since: 2026-11-04 23:01 UTC (first run of the current streak)
- Job / step: `Landing constants guard` → `Cohere tool schema is generated from openai-tools.json`
- Likely cause: FAIL: landing/docs/agents/schemas/cohere-tools.json is stale; run python3 tools/agents/gen_cohere_tools.py

<details><summary>End of the job log</summary>

```
ok    anthropic-tools.json linked from: landing/llms.txt landing/llms-full.txt landing/answers/code-search-mcp-for-claude-code.html landing/answers/give-chatgpt-claude-local-file-access.html landing/for-agents.html
ok    cohere-tools.json linked from: landing/for-agents.html
ok    field-report.json linked from: landing/llms.txt landing/llms-full.txt landing/for-agents.html
ok    mcp-tools.json linked from: landing/docs/corpus-hub.html landing/docs/agents/endpoints.html landing/docs/cli.html landing/llms.txt landing/llms-full.txt landing/product.html landing/compare/best-mcp-server-local-c…
ok    openai-tools.json linked from: landing/llms.txt landing/llms-full.txt landing/answers/code-search-mcp-for-claude-code.html landing/answers/give-chatgpt-claude-local-file-access.html landing/for-agents.html
landing-constants-guard: all checks passed
FAIL: landing/docs/agents/schemas/cohere-tools.json is stale; run python3 tools/agents/gen_cohere_tools.py
##[error]Process completed with exit code 1.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42156654351 — dark (conclusion: `cancelled`), 2026-11-06 03:27 UTC
- Dark since: 2026-11-06 03:27 UTC (first run of the current streak)
- Job / step: `Build x86_64-apple-darwin`
- Likely cause: The configuration 'macos-14-arm64-us-default' is not supported

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
