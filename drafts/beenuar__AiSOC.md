<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 7359 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Deploy Docs to GitHub Pages", "Security Audit")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Docs to GitHub Pages (`.github/workflows/deploy-docs.yml`)

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

### Security Audit (`.github/workflows/security-audit.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43511872554 — dark (conclusion: `failure`), 2026-11-13 21:34 UTC
- Dark since: 2026-11-13 18:20 UTC (first run of the current streak)
- Job / step: `security-audit` → `Enforce staged policy`
- Likely cause: High/critical dependency vulnerabilities found — see annotations above

<details><summary>End of the job log</summary>

```
+ tsx 4.23.15
+ turbo 2.11.10
+ typescript 6.0.3
Done in 5.8s
##[notice]pnpm low: GHSA-gcqx-w48m-w2h4 in deepmerge
##[notice]pnpm low: GHSA-gcqx-w48m-w2h4 in deepmerge
pnpm: 2 findings (0 high/critical, 0 moderate, 2 low/info), 0 ignored
##[error]python high: CVE-2026-128089 in dnspython==2.9.0
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
