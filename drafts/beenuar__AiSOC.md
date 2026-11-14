<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 7522 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Docs to GitHub Pages" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Docs to GitHub Pages** workflow (`.github/workflows/deploy-docs.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43511873096 — dark (conclusion: `failure`), 2026-11-13 21:34 UTC
- Dark since: 2026-11-13 03:33 UTC (first run of the current streak)
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
