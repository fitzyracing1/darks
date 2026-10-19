<!-- dark-draft: awslabs/mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: awslabs/mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/awslabs/mcp/issues/new
- **Stars:** 9794 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Check License Header" workflow failing on main since 2026-10-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Check License Header** workflow (`.github/workflows/check-license-header.yml`) on `main` has been failing since 2026-10-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/awslabs/mcp/actions/runs/38943009163 — dark (conclusion: `failure`), 2026-10-16 17:52 UTC
- Dark since: 2026-10-13 23:49 UTC (first run of the current streak)
- Job / step: `Code Review Upon All Successful Runs` → `Check license headers`
- Likely cause: 0 error(s) and 1 warning(s) found. Warnings are treated as errors.

<details><summary>End of the job log</summary>

```
##[debug]Evaluating success:
##[debug]=> true
##[debug]Result: true
##[debug]Starting: Check license headers
##[debug]Loading inputs
##[debug]Loading env
##[warning]Config does not cover the file 'src/redshift-mcp-server/e2e_tests/config.toml.example'
##[error]0 error(s) and 1 warning(s) found. Warnings are treated as errors.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
