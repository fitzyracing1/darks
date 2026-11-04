<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108708 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Testing: E2E (Chained)" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Testing: E2E (Chained)** workflow (`.github/workflows/chained_e2e.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/41732233624 — dark (conclusion: `failure`), 2026-11-03 22:36 UTC
- Dark since: 2026-11-03 22:27 UTC (first run of the current streak)
- Job / step: `Slow E2E - Win` → `Run E2E tests`
- Likely cause: Tests  8 failed | 86 passed | 53 skipped (147)

<details><summary>End of the job log</summary>

```
 ❯ TestRig.setup ../packages/test-utils/src/test-rig.ts:394:12
 ❯ test-mcp-support.test.ts:29:15
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[16/24]⎯
 Test Files  7 failed | 31 passed | 10 skipped (48)
      Tests  8 failed | 86 passed | 53 skipped (147)
   Start at  22:44:00
   Duration  180.16s (transform 10.36s, setup 0ms, collect 423.70s, tests 2310.93s, environment 15ms, prepare 10.32s)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
