<!-- dark-draft: isaacs/node-glob -->
<!-- draft-state: ready -->
# Upstream issue draft: isaacs/node-glob

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/isaacs/node-glob/issues/new
- **Stars:** 8710 · **Generated:** 2026-11-27T00:52:53.857Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "typedoc" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **typedoc** workflow (`.github/workflows/typedoc.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/isaacs/node-glob/actions/runs/45556393055 — dark (conclusion: `failure`), 2026-11-25 05:50 UTC
- Dark since: 2026-11-25 05:50 UTC (first run of the current streak)
- Job / step: `deploy` → `Deploy to GitHub Pages`
- Likely cause: Error: No artifacts named "github-pages" were found for this workflow run. Ensure artifacts are uploaded with actions/upload-artifact@v4 or later.

<details><summary>End of the job log</summary>

```
Artifact github-pages has been successfully uploaded! Final size is 142559 bytes. Artifact ID is 14996276049
Artifact download URL: https://github.com/isaacs/node-glob/actions/runs/45556393055/artifacts/14996276049
##[end-action id=__actions_upload-pages-artifact.upload-artifact;outcome=success;conclusion=success;duration_ms=1144]
(node:2554) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Fetching artifact metadata for "github-pages" in this workflow run
Found 0 artifact(s)
##[error]Fetching artifact metadata failed. Is githubstatus.com reporting issues with API requests, Pages, or Actions? Please re-run the deployment at a later time.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining node-glob!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
