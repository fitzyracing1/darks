<!-- dark-draft: googleapis/mcp-toolbox -->
<!-- draft-state: ready -->
# Upstream issue draft: googleapis/mcp-toolbox

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/googleapis/mcp-toolbox/issues/new
- **Stars:** 16681 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CF: Deploy Dev Docs" workflow failing on main since 2026-09-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CF: Deploy Dev Docs** workflow (`.github/workflows/deploy_dev_docs_to_cf.yaml`) on `main` has been failing since 2026-09-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/googleapis/mcp-toolbox/actions/runs/38446709101 — dark (conclusion: `failure`), 2026-10-13 18:26 UTC
- Dark since: 2026-09-28 21:08 UTC (first run of the current streak)
- Job / step: `deploy` → `Push to Cloudflare Branch`
- Likely cause: fatal: could not read Username for 'https://github.com': No such device or address

<details><summary>End of the job log</summary>

```
 delete mode 100644 dev/pagefind/index/en_f597e03.pf_index
 delete mode 100644 dev/pagefind/pagefind.en_596b0cd2a3.pf_meta
 create mode 100644 dev/pagefind/pagefind.en_f0f5f517c5.pf_meta
 create mode 100644 dev/resources/tools/conversational-analytics-create-data-agent/index.html
 create mode 100644 dev/resources/tools/conversational-analytics-delete-data-agent/index.html
 create mode 100644 dev/resources/tools/conversational-analytics-update-data-agent/index.html
fatal: could not read Username for 'https://github.com': No such device or address
##[error]Process completed with exit code 128.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp-toolbox!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
