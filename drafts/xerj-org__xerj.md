<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 10736 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI", "SEO", "hub packs", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39380195652 — dark (conclusion: `cancelled`), 2026-10-20 06:24 UTC
- Dark since: 2026-10-17 07:26 UTC (first run of the current streak)
- Job / step: `CLA gate config`
- Likely cause: The run was canceled by @xerj-org.

### SEO (`.github/workflows/seo.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39380135057 — dark (conclusion: `cancelled`), 2026-10-20 06:23 UTC
- Dark since: 2026-10-18 13:14 UTC (first run of the current streak)
- Job / step: `Technical SEO gate`
- Likely cause: Canceling since a higher priority waiting request for seo-SEO-refs/heads/main exists

### hub packs (`.github/workflows/hub-packs.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39240130904 — dark (conclusion: `failure`), 2026-10-19 10:48 UTC
- Dark since: 2026-10-19 10:48 UTC (first run of the current streak)
- Job / step: `re-pin moved upstreams (opens PRs)` → `Open re-pin pull requests`
- Likely cause: 5 re-pin PR(s) could not be opened

<details><summary>End of the job log</summary>

```
##[warning]exploit-pocs-2026/oscar-mine--CVE-2026-33017-Exploit: cannot read HEAD of https://github.com/oscar-mine/CVE-2026-33017-Exploit; skipped
##[warning]exploit-pocs-2026/punitdarji--Gitlab-CVE-2026-19478: cannot read HEAD of https://github.com/punitdarji/Gitlab-CVE-2026-19478; skipped
##[warning]exploit-pocs-2026/coey0814--DirtyFrag-Galaxy: cannot read HEAD of https://github.com/coey0814/DirtyFrag-Galaxy; skipped
##[warning]exploit-pocs-2026/devtint--CVE-2026-31431: cannot read HEAD of https://github.com/devtint/CVE-2026-31431; skipped
##[warning]exploit-pocs-2026/Lutfifakee-Project--CVE-2026-31431: cannot read HEAD of https://github.com/Lutfifakee-Project/CVE-2026-31431; skipped
##[warning]exploit-pocs-2026/tmvictorpeters--jbo4rgl: cannot read HEAD of https://github.com/tmvictorpeters/jbo4rgl; skipped
repin: classes=weekly; 5 corpus(es) moved
##[error]5 re-pin PR(s) could not be opened
```

</details>

### Deploy site (Cloudflare Pages) (`.github/workflows/deploy-pages.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39380135110 — dark (conclusion: `cancelled`), 2026-10-20 06:23 UTC
- Dark since: 2026-10-20 05:08 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
