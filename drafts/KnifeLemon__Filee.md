<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 26097 · **Generated:** 2026-11-12T06:44:18.567Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/43161747730 — dark (conclusion: `cancelled`), 2026-11-12 05:29 UTC
- Dark since: 2026-11-10 18:31 UTC (first run of the current streak)
- Job / step: `build (win-arm64)` → `Run actions/setup-dotnet@v6`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
dotnet-install: To check the list of supported versions, go to https://learn.microsoft.com/dotnet/core/install/windows#supported-versions
dotnet-install: Installed version is 10.0.15
dotnet-install: Installation finished
[command]"C:\Program Files\PowerShell\7\pwsh.exe" -NoLogo -Sta -NoProfile -NonInteractive -ExecutionPolicy Unrestricted -Command & 'C:\a\_actions\actions\setup-dotnet\v6\externals\install-dotnet.ps1' -SkipNonVersionedFi…
dotnet-install: Downloaded file https://builds.dotnet.microsoft.com/dotnet/Sdk/10.0.404/dotnet-sdk-10.0.404-win-arm64.zip size is 293827291 bytes.
dotnet-install: Either downloaded or local package size can not be measured. One of them may be corrupted.
dotnet-install: Extracting the archive.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
