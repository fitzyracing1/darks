<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108637 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **📋 Gemini Scheduled Issue Triage** workflow (`.github/workflows/gemini-scheduled-issue-triage.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/41149480487 — dark (conclusion: `failure`), 2026-10-31 00:18 UTC
- Dark since: 2026-10-30 15:07 UTC (first run of the current streak)
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
