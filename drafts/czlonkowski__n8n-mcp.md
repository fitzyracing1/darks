<!-- dark-draft: czlonkowski/n8n-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: czlonkowski/n8n-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/czlonkowski/n8n-mcp/issues/new
- **Stars:** 23124 · **Generated:** 2026-10-23T12:52:35.417Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Suite" workflow getting cancelled on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Suite** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/czlonkowski/n8n-mcp/actions/runs/39808656311 — dark (conclusion: `cancelled`), 2026-10-22 15:50 UTC
- Dark since: 2026-10-22 15:50 UTC (first run of the current streak)
- Job / step: `test` → `Run integration tests (live n8n instance)`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
 RUN  v3.2.6 /home/runner/work/n8n-mcp/n8n-mcp
stdout | tests/integration/n8n-api/workflows/smart-parameters.test.ts
[CI-DEBUG] Global setup starting, NODE_ENV: test
[CI-DEBUG] Looking for .env.test at: /home/runner/work/n8n-mcp/n8n-mcp/.env.test
[CI-DEBUG] File exists? true
[CI-DEBUG] Successfully loaded 58 env vars from .env.test
[CI-DEBUG] Global setup complete, N8N_API_URL: ***
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
