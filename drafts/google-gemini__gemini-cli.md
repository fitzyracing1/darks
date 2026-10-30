<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108619 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Testing: CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 📋 Gemini Scheduled Issue Triage (`.github/workflows/gemini-scheduled-issue-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40979361838 — dark (conclusion: `failure`), 2026-10-30 00:23 UTC
- Dark since: 2026-10-29 17:07 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Apply Triaged Labels`
- Likely cause: Unhandled error: TypeError: results is not iterable

<details><summary>End of the job log</summary>

```
    at callAsyncFunction (/home/runner/work/_actions/actions/github-script/60a0d83039c74a4aee543508d2ffcb1c3799cdea/dist/index.js:35425:12)
    at main (/home/runner/work/_actions/actions/github-script/60a0d83039c74a4aee543508d2ffcb1c3799cdea/dist/index.js:35522:26)
    at /home/runner/work/_actions/actions/github-script/60a0d83039c74a4aee543508d2ffcb1c3799cdea/dist/index.js:35497:1
    at /home/runner/work/_actions/actions/github-script/60a0d83039c74a4aee543508d2ffcb1c3799cdea/dist/index.js:35553:3
    at Object.<anonymous> (/home/runner/work/_actions/actions/github-script/60a0d83039c74a4aee543508d2ffcb1c3799cdea/dist/index.js:35556:12)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
##[error]Unhandled error: TypeError: results is not iterable
```

</details>

### Testing: CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40952570363 — dark (conclusion: `failure`), 2026-10-29 20:50 UTC
- Dark since: 2026-10-29 20:48 UTC (first run of the current streak)
- Job / step: `Slow Test - Win - cli` → `Run tests and generate reports`
- Likely cause: The strategy configuration was canceled because "test_windows.others" failed

<details><summary>End of the job log</summary>

```
   ✓ CloudFreePrivacyNotice > exits on Escape in 'non-free tier state': true  2027ms
   ✓ CloudFreePrivacyNotice > exits on Escape in 'tier unavailable state': true  2017ms
   ✓ CloudFreePrivacyNotice > exits on Escape in 'free tier state (no selection)': false  2023ms
   ✓ CloudFreePrivacyNotice > provides renderItem to RadioButtonSelect that wraps option text without truncation  1024ms
   ✓ CloudFreePrivacyNotice > RadioButtonSelect interaction > calls correct functions on selecting "'Yes'"  2029ms
   ✓ CloudFreePrivacyNotice > RadioButtonSelect interaction > calls correct functions on selecting "'No'"  2028ms
Terminate batch job (Y/N)?
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
