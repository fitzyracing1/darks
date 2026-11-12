<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 201115 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Audit NPM Packages" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Audit NPM Packages** workflow (`.github/workflows/npm-audit.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/43064355220 — dark (conclusion: `failure`), 2026-11-11 17:03 UTC
- Dark since: 2026-11-11 17:03 UTC (first run of the current streak)
- Job / step: `audit` → `Report audit failures`
- Likely cause: Failed security audit due to low vulnerabilities.

<details><summary>End of the job log</summary>

```
}
Found vulnerable advisory paths:
GHSA-474x-hrwr-fgx4|@google-cloud/storage>fast-xml-parser
Failed security audit due to low vulnerabilities.
Vulnerable advisories are:
https://github.com/advisories/GHSA-474x-hrwr-fgx4
Exiting...
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
