<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 8010 · **Generated:** 2026-11-17T06:45:50.833Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Grading integrity", "Deploy Docs to GitHub Pages")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Grading integrity (`.github/workflows/grading-integrity.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43956001319 — dark (conclusion: `failure`), 2026-11-16 21:02 UTC
- Dark since: 2026-11-16 12:10 UTC (first run of the current streak)
- Job / step: `No run on main ended cancelled` → `Ask the Actions API what actually ran`
- Likely cause: the cancellation is correct, record it in that gate's EXCEPTIONS with the

<details><summary>End of the job log</summary>

```
Find out why it was cancelled. If a concurrency group did it,
scripts/check_workflow_concurrency.py explains the shape and the fix. If
the cancellation is correct, record it in that gate's EXCEPTIONS with the
reason and what is lost.
Re-run it rather than excusing it, and do so now: the window above is the
whole of what this gate can see, so once the run ages out of it this
report goes green with nothing fixed.
##[error]Process completed with exit code 1.
```

</details>

### Deploy Docs to GitHub Pages (`.github/workflows/deploy-docs.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43928539752 — dark (conclusion: `failure`), 2026-11-16 18:24 UTC
- Dark since: 2026-11-16 12:50 UTC (first run of the current streak)
- Job / step: `Build Docusaurus` → `Build docs`
- Likely cause: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @aisoc/docs@0.0.1 build: 'docusaurus build'

<details><summary>End of the job log</summary>

```
  "reason": "Expected a closing tag for `<your>` (22:108-22:124) before the end of `tableData`",
  "ruleId": "end-tag-mismatch",
  "source": "mdast-util-mdx-jsx"
}
/home/runner/work/AiSOC/AiSOC/apps/docs:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @aisoc/docs@0.0.1 build: `docusaurus build`
Exit status 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
