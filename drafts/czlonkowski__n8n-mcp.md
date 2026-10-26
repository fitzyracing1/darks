<!-- dark-draft: czlonkowski/n8n-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: czlonkowski/n8n-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/czlonkowski/n8n-mcp/issues/new
- **Stars:** 23138 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Suite" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Suite** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/czlonkowski/n8n-mcp/actions/runs/40172804029 — dark (conclusion: `failure`), 2026-10-25 07:27 UTC
- Dark since: 2026-10-24 17:03 UTC (first run of the current streak)
- Job / step: `test` → `Run unit tests with coverage`
- Likely cause: Tests  2 failed | 7468 passed | 35 skipped (7505)

<details><summary>End of the job log</summary>

```
    256|       });
 Test Files  2 failed | 214 passed (216)
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯
      Tests  2 failed | 7468 passed | 35 skipped (7505)
   Start at  07:28:36
   Duration  75.61s (transform 13.11s, setup 5.78s, collect 60.73s, tests 129.14s, environment 107ms, prepare 33.76s)
JUNIT report written to /home/runner/work/n8n-mcp/n8n-mcp/test-results/junit.xml
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
