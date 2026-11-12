<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108781 · **Generated:** 2026-11-12T00:55:01.455Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Testing: E2E (Chained)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 📋 Gemini Scheduled Issue Triage (`.github/workflows/gemini-scheduled-issue-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43126434295 — dark (conclusion: `failure`), 2026-11-12 00:19 UTC
- Dark since: 2026-11-11 14:07 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Apply Triaged Labels`
- Likely cause: Unhandled error: HttpError: Resource not accessible by integration

<details><summary>End of the job log</summary>

```
    request: {
      agent: [Agent],
      fetch: [Function: proxyFetch],
      hook: [Function: bound bound register]
    }
  }
}
##[error]Unhandled error: HttpError: Resource not accessible by integration
```

</details>

### Testing: E2E (Chained) (`.github/workflows/chained_e2e.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/43103836936 — dark (conclusion: `failure`), 2026-11-11 21:31 UTC
- Dark since: 2026-11-11 17:36 UTC (first run of the current streak)
- Job / step: `E2E Test (macOS)` → `Run E2E tests (non-Windows)`
- Likely cause: Tests  2 failed | 90 passed | 55 skipped (147)

<details><summary>End of the job log</summary>

```
       |   ^
     25|     // We use a fake responses file to make the test deterministic and…
     26|     rig.setup('shell-background-workflow', {
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯
      Tests  2 failed | 90 passed | 55 skipped (147)
   Start at  21:38:39
   Duration  368.93s (transform 30.03s, setup 0ms, collect 1092.01s, tests 2668.65s, environment 64ms, prepare 36.97s)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
