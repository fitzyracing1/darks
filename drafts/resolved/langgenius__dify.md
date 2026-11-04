<!-- dark-draft: langgenius/dify -->
<!-- draft-state: resolved -->
# Upstream issue draft: langgenius/dify

- **Status:** resolved — lit again (2026-11-04); nothing to file
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 160366 · **Generated:** 2026-11-04T06:44:24.955Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build and Push API & Web" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build and Push API & Web** workflow (`.github/workflows/build-push.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/41785717820 — dark (conclusion: `failure`), 2026-11-04 06:28 UTC
- Dark since: 2026-11-03 15:32 UTC (first run of the current streak)
- Job / step: `build (build-web-amd64, DIFY_WEB_IMAGE_NAME, web, {{defaultContext}}, web/Dockerfile, linux/amd64...` → `Build Docker image`
- Likely cause: failed with: failed to receive status: rpc error: code = Unavailable desc = keepalive ping failed to receive ACK within timeout

<details><summary>End of the job log</summary>

```
#28 2.373 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
#28 2.373 https://nextjs.org/telemetry
#28 2.373
#28 2.408
#28 2.458   Creating an optimized production build ...
Build Summary: https://depot.dev/orgs/mx7lpzp5dl/projects/smkxz53ddb/builds/7bhk04g7sn
failed to receive status: rpc error: code = Unavailable desc = keepalive ping failed to receive ACK within timeout
##[error]failed with: failed to receive status: rpc error: code = Unavailable desc = keepalive ping failed to receive ACK within timeout
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
