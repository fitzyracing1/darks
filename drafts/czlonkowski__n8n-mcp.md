<!-- dark-draft: czlonkowski/n8n-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: czlonkowski/n8n-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/czlonkowski/n8n-mcp/issues/new
- **Stars:** 23283 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Suite" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Suite** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/czlonkowski/n8n-mcp/actions/runs/44479330104 — dark (conclusion: `failure`), 2026-11-19 07:24 UTC
- Dark since: 2026-11-18 12:38 UTC (first run of the current streak)
- Job / step: `test` → `Run unit tests with coverage`
- Likely cause: Tests  1 failed | 7656 passed | 35 skipped (7692)

<details><summary>End of the job log</summary>

```
 ❯ tests/unit/property/ssrf-protection.property.test.ts:538:7
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 222 passed (223)
      Tests  1 failed | 7656 passed | 35 skipped (7692)
   Start at  07:25:19
   Duration  51.97s (transform 8.90s, setup 4.05s, collect 38.19s, tests 96.39s, environment 48ms, prepare 19.89s)
JUNIT report written to /home/runner/work/n8n-mcp/n8n-mcp/test-results/junit.xml
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
