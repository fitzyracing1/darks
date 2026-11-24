<!-- dark-draft: kingcharleslzy-ai/dsh-purge -->
<!-- draft-state: resolved -->
# Upstream issue draft: kingcharleslzy-ai/dsh-purge

- **Status:** resolved — lit again (2026-11-24); nothing to file
- **Would be filed at:** https://github.com/kingcharleslzy-ai/dsh-purge/issues/new
- **Stars:** 11970 · **Generated:** 2026-11-24T00:51:11.893Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish plugin market" workflow failing on master since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish plugin market** workflow (`.github/workflows/market.yml`) on `master` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/kingcharleslzy-ai/dsh-purge/actions/runs/45298857605 — dark (conclusion: `failure`), 2026-11-24 00:38 UTC
- Dark since: 2026-11-23 18:24 UTC (first run of the current streak)
- Job / step: `publish` → `Deploy index`
- Likely cause: Error: No artifacts named "github-pages" were found for this workflow run. Ensure artifacts are uploaded with actions/upload-artifact@v4 or later.

<details><summary>End of the job log</summary>

```
Artifact github-pages has been successfully uploaded! Final size is 7212 bytes. Artifact ID is 14878155945
Artifact download URL: https://github.com/kingcharleslzy-ai/dsh-purge/actions/runs/45298857605/artifacts/14878155945
##[end-action id=__actions_upload-pages-artifact.upload-artifact;outcome=success;conclusion=success;duration_ms=915]
(node:2557) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Fetching artifact metadata for "github-pages" in this workflow run
Found 0 artifact(s)
##[error]Fetching artifact metadata failed. Is githubstatus.com reporting issues with API requests, Pages, or Actions? Please re-run the deployment at a later time.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-purge!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
