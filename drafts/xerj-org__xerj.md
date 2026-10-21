<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 12715 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI", "SEO", "Fresh-agent field report", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39648354118 — dark (conclusion: `cancelled`), 2026-10-21 17:57 UTC
- Dark since: 2026-10-17 07:26 UTC (first run of the current streak)
- Likely cause: run cancelled

### SEO (`.github/workflows/seo.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39642422326 — dark (conclusion: `failure`), 2026-10-21 17:17 UTC
- Dark since: 2026-10-20 20:40 UTC (first run of the current streak)
- Job / step: `Technical SEO gate` → `sitemap.xml is generated, not hand-edited`
- Likely cause: FAIL landing/sitemap.xml is out of date — run 'python3 scripts/seo/gen_sitemap.py --write'

<details><summary>End of the job log</summary>

```
STE /home/runner/work/xerj/xerj/content/compare/best-mcp-server-local-code-search-2026.md:147:84: ERROR STE050 banned synonym 'dumps' for 'snapshot' (concept: point-in-time copy)
STE /home/runner/work/xerj/xerj/content/compare/best-mcp-server-local-code-search-2026.md:153:1: ERROR STE002 descriptive sentence is 44 words (hard max 32)
STE /home/runner/work/xerj/xerj/content/compare/xerj-vs-docfetcher.md:134:42: ERROR STE001 procedural sentence is 27 words (max 20)
STE /home/runner/work/xerj/xerj/content/compare/xerj-vs-localsynapse.md:81:558: ERROR STE002 descriptive sentence is 36 words (hard max 32)
STE /home/runner/work/xerj/xerj/content/compare/xerj-vs-ripgrep-all.md:148:100: ERROR STE020 passive voice with a named agent: 'is detected ... by ...'
ok   build_articles.py output is current (207 files; 101 selected article(s))
FAIL landing/sitemap.xml is out of date — run `python3 scripts/seo/gen_sitemap.py --write`
##[error]Process completed with exit code 1.
```

</details>

### Fresh-agent field report (`.github/workflows/field-report-e2e.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39643996554 — dark (conclusion: `cancelled`), 2026-10-21 17:27 UTC
- Dark since: 2026-10-21 16:38 UTC (first run of the current streak)
- Job / step: `Clean HOME field-report dry-run`
- Likely cause: Canceling since a higher priority waiting request for field-report-e2e-refs/heads/main exists

### Deploy site (Cloudflare Pages) (`.github/workflows/deploy-pages.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39641394502 — dark (conclusion: `cancelled`), 2026-10-21 17:10 UTC
- Dark since: 2026-10-21 17:09 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
