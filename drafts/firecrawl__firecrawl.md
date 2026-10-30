<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 196767 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Audit NPM Packages" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Audit NPM Packages** workflow (`.github/workflows/npm-audit.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/40917693874 — dark (conclusion: `failure`), 2026-10-29 17:03 UTC
- Dark since: 2026-10-29 17:03 UTC (first run of the current streak)
- Job / step: `audit` → `Report audit failures`
- Likely cause: Failed security audit due to high, low, moderate vulnerabilities.

<details><summary>End of the job log</summary>

```
GHSA-7648-jmwf-vw7j|systeminformation
Failed security audit due to high, low, moderate vulnerabilities.
Vulnerable advisories are:
https://github.com/advisories/GHSA-3f7j-7jwc-fxfj
https://github.com/advisories/GHSA-4vjg-vx72-qq4g
https://github.com/advisories/GHSA-7648-jmwf-vw7j
Exiting...
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
