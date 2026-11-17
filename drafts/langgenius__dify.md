<!-- dark-draft: langgenius/dify -->
<!-- draft-state: ready -->
# Upstream issue draft: langgenius/dify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 161368 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CLI Edge Publish" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CLI Edge Publish** workflow (`.github/workflows/cli-edge.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/44128375142 — dark (conclusion: `failure`), 2026-11-17 16:40 UTC
- Dark since: 2026-11-17 16:40 UTC (first run of the current streak)
- Job / step: `build + publish edge to R2` → `Publish to R2`
- Likely cause: upload failed: dist/bin/difyctl-v1.19.0-edge.73b3dc3d8a-linux-x64 to s3://cli-dev/difyctl/bin/edge/1.19.0-edge.73b3dc3d8a/difyctl-v1.19.0-edge.73b3dc3d8a-linux-x64 An error occurred (InvalidPart) when calling the Comple…

<details><summary>End of the job log</summary>

```
Completed 349.3 MiB/373.3 MiB (31.6 MiB/s) with 2 file(s) remaining
upload: dist/bin/difyctl-v1.19.0-edge.73b3dc3d8a-windows-x64.exe to s3://cli-dev/difyctl/bin/edge/1.19.0-edge.73b3dc3d8a/difyctl-v1.19.0-edge.73b3dc3d8a-windows-x64.exe
Completed 349.3 MiB/373.3 MiB (31.6 MiB/s) with 1 file(s) remaining
Completed 357.3 MiB/373.3 MiB (25.7 MiB/s) with 1 file(s) remaining
Completed 365.3 MiB/373.3 MiB (24.2 MiB/s) with 1 file(s) remaining
Completed 373.3 MiB/373.3 MiB (22.5 MiB/s) with 1 file(s) remaining
upload: dist/bin/difyctl-v1.19.0-edge.73b3dc3d8a-darwin-x64 to s3://cli-dev/difyctl/bin/edge/1.19.0-edge.73b3dc3d8a/difyctl-v1.19.0-edge.73b3dc3d8a-darwin-x64
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
