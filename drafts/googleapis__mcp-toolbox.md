<!-- dark-draft: googleapis/mcp-toolbox -->
<!-- draft-state: ready -->
# Upstream issue draft: googleapis/mcp-toolbox

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/googleapis/mcp-toolbox/issues/new
- **Stars:** 16910 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CF: Deploy Dev Docs", "Schedule Reporter")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CF: Deploy Dev Docs (`.github/workflows/deploy_dev_docs_to_cf.yaml`)

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

### Schedule Reporter (`.github/workflows/schedule_reporter.yml`)

- Latest run on `main`: https://github.com/googleapis/mcp-toolbox/actions/runs/44471113366 — dark (conclusion: `failure`), 2026-11-19 06:17 UTC
- Dark since: 2026-11-19 06:17 UTC (first run of the current streak)
- Job / step: `run_reporter / report` → `Run actions/github-script@3a2844b7e9c422d3c10d287c895573f7108da1b3`
- Likely cause: Unhandled error: HttpError: Server Error

<details><summary>End of the job log</summary>

```
Handling test name build
Handling test name toolbox-continuous-release (database-toolbox)
checking runs at https://github.com/googleapis/mcp-toolbox/commit/69aa2f259a5ba92d20086e89d4e77e5d1630e1be: fix(datalineage): increase timeouts
GET /repos/googleapis/mcp-toolbox/commits/69aa2f259a5ba92d20086e89d4e77e5d1630e1be/check-runs - 502 with id B420:16CCDD:3AC1A8B:BE5E907:6AFE94EB in 10566ms
RequestError [HttpError]: Server Error
    at fetchWrapper (/home/runner/work/_actions/actions/github-script/3a2844b7e9c422d3c10d287c895573f7108da1b3/dist/index.js:61509:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
##[error]Unhandled error: HttpError: Server Error
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp-toolbox!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
