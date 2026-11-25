<!-- dark-draft: vinta/awesome-python -->
<!-- draft-state: ready -->
# Upstream issue draft: vinta/awesome-python

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vinta/awesome-python/issues/new
- **Stars:** 337097 · **Generated:** 2026-11-25T18:39:22.716Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Website" workflow failing on master since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Website** workflow (`.github/workflows/deploy-website.yml`) on `master` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/vinta/awesome-python/actions/runs/45514788594 — dark (conclusion: `failure`), 2026-11-25 00:01 UTC
- Dark since: 2026-11-24 00:01 UTC (first run of the current streak)
- Job / step: `deploy` → `Deploy to GitHub Pages`
- Likely cause: Error: No artifacts named "github-pages" were found for this workflow run. Ensure artifacts are uploaded with actions/upload-artifact@v4 or later.

<details><summary>End of the job log</summary>

```
Artifact github-pages has been successfully uploaded! Final size is 1009747 bytes. Artifact ID is 14977308240
Artifact download URL: https://github.com/vinta/awesome-python/actions/runs/45514788594/artifacts/14977308240
##[end-action id=__actions_upload-pages-artifact.upload-artifact;outcome=success;conclusion=success;duration_ms=1766]
(node:3289) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Fetching artifact metadata for "github-pages" in this workflow run
Found 0 artifact(s)
##[error]Fetching artifact metadata failed. Is githubstatus.com reporting issues with API requests, Pages, or Actions? Please re-run the deployment at a later time.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining awesome-python!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
