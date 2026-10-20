<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: resolved -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** resolved — lit again (2026-10-20); nothing to file
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 107456 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **📋 Gemini Scheduled Issue Triage** workflow (`.github/workflows/gemini-scheduled-issue-triage.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/39300859710 — dark (conclusion: `failure`), 2026-10-19 18:14 UTC
- Dark since: 2026-10-19 12:18 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Run Standard Triage Analysis`
- Likely cause: "message": "exception TypeError: fetch failed sending request",

<details><summary>End of the job log</summary>

```
  "error": {
    "type": "Error",
    "message": "exception TypeError: fetch failed sending request",
    "code": 1
  }
}
::: End Gemini CLI STDERR :::
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
