<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12108 · **Generated:** 2026-11-26T00:53:15.119Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Windows ARM64" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Windows ARM64** workflow (`.github/workflows/windows-arm64.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45551854191 — dark (conclusion: `failure`), 2026-11-25 05:11 UTC
- Dark since: 2026-11-24 05:11 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: | cargo build (aarch64-pc-windows-msvc) failed with exit code 101

<details><summary>End of the job log</summary>

```
error: could not compile `vectorcraft-ui-egui` (lib) due to 7 previous errors
warning: build failed, waiting for other jobs to finish...
Exception: D:\a\vectorcraft\vectorcraft\packaging\windows\package.ps1:33
Line |
  33 |  … EXITCODE -ne 0) { throw "$What failed with exit code $LASTEXITCODE" }
     |                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | cargo build (aarch64-pc-windows-msvc) failed with exit code 101
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
