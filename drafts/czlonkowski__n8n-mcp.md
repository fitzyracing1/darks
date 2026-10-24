<!-- dark-draft: czlonkowski/n8n-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: czlonkowski/n8n-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/czlonkowski/n8n-mcp/issues/new
- **Stars:** 23126 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Suite" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Suite** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/czlonkowski/n8n-mcp/actions/runs/40114384363 — dark (conclusion: `failure`), 2026-10-24 17:03 UTC
- Dark since: 2026-10-24 17:03 UTC (first run of the current streak)
- Job / step: `test` → `Run integration tests (live n8n instance)`
- Likely cause: Tests  1 failed | 233 passed | 1 skipped (235)

<details><summary>End of the job log</summary>

```
    1281|   });
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 22 passed (23)
      Tests  1 failed | 233 passed | 1 skipped (235)
   Start at  17:10:12
   Duration  332.39s (transform 1.26s, setup 85ms, collect 2.85s, tests 328.84s, environment 0ms, prepare 68ms)
JUNIT report written to /home/runner/work/n8n-mcp/n8n-mcp/test-results/junit.xml
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
