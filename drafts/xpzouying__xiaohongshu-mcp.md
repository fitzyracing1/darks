<!-- dark-draft: xpzouying/xiaohongshu-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: xpzouying/xiaohongshu-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xpzouying/xiaohongshu-mcp/issues/new
- **Stars:** 17296 · **Generated:** 2026-11-23T18:39:43.208Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xpzouying/xiaohongshu-mcp/actions/runs/45205362541 — dark (conclusion: `failure`), 2026-11-23 15:27 UTC
- Dark since: 2026-11-22 23:58 UTC (first run of the current streak)
- Job / step: `test` → `Check Go vulnerabilities`
- Likely cause: browser.NewBrowser calls headless_browser.New, which eventually calls http.ReadResponse

<details><summary>End of the job log</summary>

```
Vulnerability #1: GO-2026-6859
    HTTP/1 server crash due to MaxBytesReader header race in net/http
  More info: https://pkg.go.dev/vuln/GO-2026-6859
  Standard library
    Found in: net/http@go1.27.3
    Fixed in: net/http@go1.27.4
    Example traces found:
##[error]      #1: app_server.go:12:2: xiaohongshu.init calls mcp.init, which eventually calls http.CanonicalHeaderKey
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xiaohongshu-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
