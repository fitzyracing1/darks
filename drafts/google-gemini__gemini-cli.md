<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108753 · **Generated:** 2026-11-06T18:37:41.328Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **📋 Gemini Scheduled Issue Triage** workflow (`.github/workflows/gemini-scheduled-issue-triage.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/42258527869 — dark (conclusion: `failure`), 2026-11-06 17:06 UTC
- Dark since: 2026-11-06 06:13 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
