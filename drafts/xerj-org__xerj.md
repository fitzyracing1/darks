<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 18812 · **Generated:** 2026-11-03T00:52:20.983Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "hub packs" workflow failing on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **hub packs** workflow (`.github/workflows/hub-packs.yml`) on `main` has been failing since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/41393564601 — dark (conclusion: `failure`), 2026-11-02 05:21 UTC
- Dark since: 2026-11-02 05:21 UTC (first run of the current streak)
- Job / step: `re-pin moved upstreams (opens PRs)` → `Open re-pin pull requests`
- Likely cause: 8 re-pin PR(s) could not be opened

<details><summary>End of the job log</summary>

```
##[warning]exploit-pocs-2026/Dullpurple-sloop726--CVE-2026-31431-Linux-Copy-Fail: cannot read HEAD of https://github.com/Dullpurple-sloop726/CVE-2026-31431-Linux-Copy-Fail; skipped
##[warning]exploit-pocs-2026/tmvictorpeters--jbo4rgl: cannot read HEAD of https://github.com/tmvictorpeters/jbo4rgl; skipped
##[warning]exploit-pocs-2026/jelasin--CVE-2026-42945: cannot read HEAD of https://github.com/jelasin/CVE-2026-42945; skipped
##[warning]exploit-pocs-2026/hnytgl--CVE-2026-42945: cannot read HEAD of https://github.com/hnytgl/CVE-2026-42945; skipped
##[warning]exploit-pocs-2026/fan-67--local-mcp: cannot read HEAD of https://github.com/fan-67/local-mcp; skipped
##[warning]exploit-pocs-2026/K52-ai--CVE-2026-83627: cannot read HEAD of https://github.com/K52-ai/CVE-2026-83627; skipped
repin: classes=weekly; 8 corpus(es) moved
##[error]8 re-pin PR(s) could not be opened
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
