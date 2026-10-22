<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65971 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish to pkg.pr.new" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish to pkg.pr.new** workflow (`.github/workflows/publish-to-pkg-pr-new.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39618931998 — dark (conclusion: `failure`), 2026-10-21 14:40 UTC
- Dark since: 2026-10-21 14:40 UTC (first run of the current streak)
- Job / step: `Publish to pkg.pr.new` → `Run npx pkg-pr-new publish --compact --json output.json --comment=off`
- Likely cause: Check failed (404): {"url":"/check","statusCode":404,"statusMessage":"Not Found","message":"There is no workflow defined for j54WsqcS2Y","stack":""}

<details><summary>End of the job log</summary>

```
warning Workspaces can only be enabled in private projects.
warning Workspaces can only be enabled in private projects.
warning Workspaces can only be enabled in private projects.
[4/4] Building fresh packages...
$ husky
Done in 12.28s.
Check failed (404): {"url":"/check","statusCode":404,"statusMessage":"Not Found","message":"There is no workflow defined for j54WsqcS2Y","stack":""}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
