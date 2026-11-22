<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: resolved -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** resolved — lit again (2026-11-22); nothing to file
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 82248 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI/CD Pipeline" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI/CD Pipeline** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/44974742600 — dark (conclusion: `failure`), 2026-11-22 02:09 UTC
- Dark since: 2026-11-22 02:09 UTC (first run of the current streak)
- Job / step: `Test Suite (ubuntu-latest)` → `Run all tests`
- Likely cause: Error: STACK_TRACE_ERROR

<details><summary>End of the job log</summary>

```
  duration_ms: 1.832482
  ...
JSON report written to /home/runner/work/ruflo/ruflo/.test-results/vitest.json
CI test ratchet: FAILED — 1 unexpected failing file(s)
  + v3/@claude-flow/cli/__tests__/cross-encoder-rerank.test.ts
      ✗ crossEncoderRerank — graceful degradation contract handles empty doc list
        Error: STACK_TRACE_ERROR
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ruflo!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
