<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 16785 · **Generated:** 2026-10-26T18:57:58.513Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("hub packs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### hub packs (`.github/workflows/hub-packs.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/40312923645 — dark (conclusion: `failure`), 2026-10-26 11:09 UTC
- Dark since: 2026-10-26 11:09 UTC (first run of the current streak)
- Job / step: `re-pin moved upstreams (opens PRs)` → `Open re-pin pull requests`
- Likely cause: 7 re-pin PR(s) could not be opened

<details><summary>End of the job log</summary>

```
##[warning]exploit-pocs-2026/oscar-mine--CVE-2026-33017-Exploit: cannot read HEAD of https://github.com/oscar-mine/CVE-2026-33017-Exploit; skipped
##[warning]exploit-pocs-2026/punitdarji--Gitlab-CVE-2026-19478: cannot read HEAD of https://github.com/punitdarji/Gitlab-CVE-2026-19478; skipped
##[warning]exploit-pocs-2026/ChrisSEC2014--amasty-chekout-POC-rce: cannot read HEAD of https://github.com/ChrisSEC2014/amasty-chekout-POC-rce; skipped
##[warning]exploit-pocs-2026/coey0814--DirtyFrag-Galaxy: cannot read HEAD of https://github.com/coey0814/DirtyFrag-Galaxy; skipped
##[warning]exploit-pocs-2026/devtint--CVE-2026-31431: cannot read HEAD of https://github.com/devtint/CVE-2026-31431; skipped
##[warning]exploit-pocs-2026/tmvictorpeters--jbo4rgl: cannot read HEAD of https://github.com/tmvictorpeters/jbo4rgl; skipped
repin: classes=weekly; 7 corpus(es) moved
##[error]7 re-pin PR(s) could not be opened
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/40378856419 — dark (conclusion: `cancelled`), 2026-10-26 18:33 UTC
- Dark since: 2026-10-26 14:11 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
