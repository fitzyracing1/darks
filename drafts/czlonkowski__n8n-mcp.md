<!-- dark-draft: czlonkowski/n8n-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: czlonkowski/n8n-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/czlonkowski/n8n-mcp/issues/new
- **Stars:** 23126 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Suite" workflow getting cancelled on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Suite** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/czlonkowski/n8n-mcp/actions/runs/39969554898 — dark (conclusion: `cancelled`), 2026-10-23 14:25 UTC
- Dark since: 2026-10-22 15:50 UTC (first run of the current streak)
- Job / step: `test` → `Build Docker test image`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
#22 2.896
#22 2.911 [plugin vite:singlefile] Inlining: index-72kVBfbv.js
#22 2.911 [plugin vite:singlefile] Inlining: style-CodQMfDl.css
#22 2.913 computing gzip size...
#22 2.929 dist/validation-summary/index.html  580.68 kB │ gzip: 155.54 kB
#22 2.929
#22 2.931 ✓ built in 508ms
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
