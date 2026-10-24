<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 107564 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **📋 Gemini Scheduled Issue Triage** workflow (`.github/workflows/gemini-scheduled-issue-triage.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40045164965 — dark (conclusion: `failure`), 2026-10-24 00:28 UTC
- Dark since: 2026-10-22 17:09 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Apply Triaged Labels`
- Likely cause: Unhandled error: HttpError: Resource not accessible by integration

<details><summary>End of the job log</summary>

```
##[end-action id=gemini_standard_issue_analysis.__run_3;outcome=success;conclusion=success;duration_ms=29]
Direct JSON parsing failed. Trying to extract from a markdown block.
Aggregated triage results for 1 issues.
RequestError [HttpError]: Resource not accessible by integration
    at /home/runner/work/_actions/actions/github-script/60a0d83039c74a4aee543508d2ffcb1c3799cdea/dist/index.js:9537:21
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async module.exports (/home/runner/work/gemini-cli/gemini-cli/.github/scripts/apply-issue-labels.cjs:221:7)
##[error]Unhandled error: HttpError: Resource not accessible by integration
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
