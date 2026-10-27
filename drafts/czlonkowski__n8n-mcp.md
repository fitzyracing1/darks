<!-- dark-draft: czlonkowski/n8n-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: czlonkowski/n8n-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/czlonkowski/n8n-mcp/issues/new
- **Stars:** 23143 · **Generated:** 2026-10-27T12:57:18.218Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Suite" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Suite** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/czlonkowski/n8n-mcp/actions/runs/40487490066 — dark (conclusion: `failure`), 2026-10-27 10:18 UTC
- Dark since: 2026-10-24 17:03 UTC (first run of the current streak)
- Job / step: `test` → `Run unit tests with coverage`
- Likely cause: Tests  2 failed | 7502 passed | 35 skipped (7539)

<details><summary>End of the job log</summary>

```
    256|       });
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
 Test Files  2 failed | 214 passed (216)
      Tests  2 failed | 7502 passed | 35 skipped (7539)
   Start at  10:20:35
   Duration  73.68s (transform 12.58s, setup 5.59s, collect 59.78s, tests 124.49s, environment 92ms, prepare 32.10s)
JUNIT report written to /home/runner/work/n8n-mcp/n8n-mcp/test-results/junit.xml
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
