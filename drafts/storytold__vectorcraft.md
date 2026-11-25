<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12103 · **Generated:** 2026-11-25T18:39:22.716Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Windows ARM64", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45546463928 — dark (conclusion: `failure`), 2026-11-25 04:23 UTC
- Dark since: 2026-11-22 04:21 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling winresource v0.1.34
   Compiling socket2 v0.6.5
   Compiling vectorcraft v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft)
   Compiling craft-psd v0.1.0 (https://github.com/storytold/craft-libs?rev=a4b6d3b6ca04a65d5972339b808d1049a14c7167#a4b6d3b6)
   Compiling weezl v0.2.1
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
   Compiling vectorcraft-web v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-web)
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

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

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45665661976 — dark (conclusion: `cancelled`), 2026-11-25 17:31 UTC
- Dark since: 2026-11-25 04:27 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
