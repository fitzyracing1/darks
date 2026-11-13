<!-- dark-draft: langgenius/dify -->
<!-- draft-state: resolved -->
# Upstream issue draft: langgenius/dify

- **Status:** resolved — lit again (2026-11-13); nothing to file
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 161075 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build and Push API & Web" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build and Push API & Web** workflow (`.github/workflows/build-push.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/43374056420 — dark (conclusion: `failure`), 2026-11-13 05:45 UTC
- Dark since: 2026-11-13 05:29 UTC (first run of the current streak)
- Job / step: `build (build-web-amd64, DIFY_WEB_IMAGE_NAME, web, {{defaultContext}}, web/Dockerfile, linux/amd64...` → `Build Docker image`
- Likely cause: The strategy configuration was canceled because "build.build-web-arm64_DIFY_WEB_" failed

<details><summary>End of the job log</summary>

```
#30 73.05 `output.codeSplitting.groups[1].name` is a function. Set `output.codeSplitting.groups[1].debugName` so the bundler timing report can identify this group.
#30 73.05 `output.codeSplitting.groups[2].name` is a function. Set `output.codeSplitting.groups[2].debugName` so the bundler timing report can identify this group.
#30 73.22 transforming...
#30 CANCELED
#6 [base 1/3] FROM docker.io/library/node:24.22.3-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5
Build Summary: https://depot.dev/orgs/mx7lpzp5dl/projects/smkxz53ddb/builds/mrcwcsltvs
failed to solve: Canceled: context canceled
##[error]failed with: failed to solve: Canceled: context canceled
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
