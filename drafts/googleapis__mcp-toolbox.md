<!-- dark-draft: googleapis/mcp-toolbox -->
<!-- draft-state: ready -->
# Upstream issue draft: googleapis/mcp-toolbox

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/googleapis/mcp-toolbox/issues/new
- **Stars:** 16900 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CF: Deploy Dev Docs" workflow failing on main since 2026-09-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CF: Deploy Dev Docs** workflow (`.github/workflows/deploy_dev_docs_to_cf.yaml`) on `main` has been failing since 2026-09-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/googleapis/mcp-toolbox/actions/runs/44230240965 — dark (conclusion: `failure`), 2026-11-18 03:24 UTC
- Dark since: 2026-09-28 21:08 UTC (first run of the current streak)
- Job / step: `deploy` → `Run hugo --minify --config hugo.cloudflare.toml`
- Likely cause: render of "/categories" failed: "/tmp/hugo_cache_runner/modules/filecache/modules/pkg/mod/github.com/google/docsy@v0.12.0/layouts/baseof.html:7:7": execute of template failed: template: taxonomy.html:7:7: executing "tax…

<details><summary>End of the job log</summary>

```
hugo: collected modules in 43557 ms
Start building sites …
hugo v0.170.0-f7aa05f0f521611aa960b2da56e1870ea04f57b2 linux/amd64 BuildDate=2026-11-13T14:17:19Z VendorInfo=gohugoio
WARN  deprecated: .Language.LanguageDirection was deprecated in Hugo v0.158.0 and will be removed in a future release. Use .Language.Direction instead.
ERROR error building site: render: [en v1.0.0 guest] failed to render pages: render of "/home/runner/work/mcp-toolbox/mcp-toolbox/docs/en/blogs/_index.md" failed: "/tmp/hugo_cache_runner/modules/filecache/modules/pkg/mo…
Total in 43943 ms
render of "/categories" failed: "/tmp/hugo_cache_runner/modules/filecache/modules/pkg/mod/github.com/google/docsy@v0.12.0/layouts/baseof.html:7:7": execute of template failed: template: taxonomy.html:7:7: executing "tax…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp-toolbox!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
