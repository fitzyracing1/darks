<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108599 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **📋 Gemini Scheduled Issue Triage** workflow (`.github/workflows/gemini-scheduled-issue-triage.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40742628194 — dark (conclusion: `failure`), 2026-10-28 18:10 UTC
- Dark since: 2026-10-28 14:08 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
