<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 195166 · **Generated:** 2026-10-25T12:49:12.088Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Audit NPM Packages" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Audit NPM Packages** workflow (`.github/workflows/npm-audit.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/40114462939 — dark (conclusion: `failure`), 2026-10-24 17:04 UTC
- Dark since: 2026-10-24 17:04 UTC (first run of the current streak)
- Job / step: `audit` → `Report audit failures`
- Likely cause: Failed security audit due to high, low, moderate vulnerabilities.

<details><summary>End of the job log</summary>

```
https://github.com/advisories/GHSA-333x-w4r6-6crp
https://github.com/advisories/GHSA-mrhx-c7xc-m3w5
https://github.com/advisories/GHSA-q7qp-rjg7-q26m
https://github.com/advisories/GHSA-w74x-v6f9-j3xg
https://github.com/advisories/GHSA-wjr9-j795-jxcr
https://github.com/advisories/GHSA-xhq7-xmqj-769h
Exiting...
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
