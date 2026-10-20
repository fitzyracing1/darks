<!-- dark-draft: langgenius/dify -->
<!-- draft-state: ready -->
# Upstream issue draft: langgenius/dify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 158972 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CLI Edge Publish" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CLI Edge Publish** workflow (`.github/workflows/cli-edge.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/39379129245 — dark (conclusion: `failure`), 2026-10-20 06:13 UTC
- Dark since: 2026-10-20 06:13 UTC (first run of the current streak)
- Job / step: `build + publish edge to R2` → `Publish to R2`
- Likely cause: upload failed: dist/bin/difyctl-v1.17.1-edge.b2455705bf-darwin-arm64 to s3://cli-dev/difyctl/bin/edge/1.17.1-edge.b2455705bf/difyctl-v1.17.1-edge.b2455705bf-darwin-arm64 AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT: Timed…

<details><summary>End of the job log</summary>

```
Completed 328.7 MiB/372.9 MiB (40.3 MiB/s) with 3 file(s) remaining
upload: dist/bin/difyctl-v1.17.1-edge.b2455705bf-linux-x64 to s3://cli-dev/difyctl/bin/edge/1.17.1-edge.b2455705bf/difyctl-v1.17.1-edge.b2455705bf-linux-x64
Completed 328.7 MiB/372.9 MiB (40.3 MiB/s) with 2 file(s) remaining
Completed 336.7 MiB/372.9 MiB (37.6 MiB/s) with 2 file(s) remaining
upload: dist/bin/difyctl-v1.17.1-edge.b2455705bf-windows-x64.exe to s3://cli-dev/difyctl/bin/edge/1.17.1-edge.b2455705bf/difyctl-v1.17.1-edge.b2455705bf-windows-x64.exe
upload failed: dist/bin/difyctl-v1.17.1-edge.b2455705bf-darwin-arm64 to s3://cli-dev/difyctl/bin/edge/1.17.1-edge.b2455705bf/difyctl-v1.17.1-edge.b2455705bf-darwin-arm64 AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT: Timed…
Completed 336.7 MiB/372.9 MiB (37.6 MiB/s) with 1 file(s) remaining
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
