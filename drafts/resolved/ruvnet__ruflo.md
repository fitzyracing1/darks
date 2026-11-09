<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: resolved -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** resolved — lit again (2026-11-09); nothing to file
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 81303 · **Generated:** 2026-11-09T06:54:36.072Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL Advanced" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL Advanced** workflow (`.github/workflows/codeql.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/42568061243 — dark (conclusion: `failure`), 2026-11-09 05:34 UTC
- Dark since: 2026-11-09 05:34 UTC (first run of the current streak)
- Job / step: `Analyze (rust)` → `Initialize CodeQL`
- Likely cause: Unable to download and extract CodeQL CLI: Unexpected HTTP response: 504

<details><summary>End of the job log</summary>

```
Streaming the extraction of the CodeQL bundle.
##[warning]Failed to download and extract CodeQL bundle using streaming with error: Failed to download CodeQL bundle from https://github.com/github/codeql-action/releases/download/codeql-bundle-v2.27.4/codeql-bundle-rus…
##[warning]Falling back to downloading the bundle before extracting.
Unexpected HTTP response: 504
Waiting 18 seconds before trying again
Unexpected HTTP response: 504
Waiting 18 seconds before trying again
##[error]Unable to download and extract CodeQL CLI: Unexpected HTTP response: 504
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ruflo!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
