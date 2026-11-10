<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 24912 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/42768594756 — dark (conclusion: `cancelled`), 2026-11-10 06:27 UTC
- Dark since: 2026-11-09 14:34 UTC (first run of the current streak)
- Job / step: `build (win-arm64)` → `Restore`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
branch 'main' set up to track 'origin/main'.
[command]"C:\Program Files\Git\bin\git.exe" log -1 --format=%H
4be2f9654cbe770913cf2a863756d813d4d41cd7
[command]"C:\Program Files\PowerShell\7\pwsh.exe" -NoLogo -Sta -NoProfile -NonInteractive -ExecutionPolicy Unrestricted -Command & 'C:\a\_actions\actions\setup-dotnet\v6\externals\install-dotnet.ps1' -SkipNonVersionedFi…
dotnet-install: .NET Core Runtime with version '10.0.14' is already installed.
[command]"C:\Program Files\PowerShell\7\pwsh.exe" -NoLogo -Sta -NoProfile -NonInteractive -ExecutionPolicy Unrestricted -Command & 'C:\a\_actions\actions\setup-dotnet\v6\externals\install-dotnet.ps1' -SkipNonVersionedFi…
dotnet-install: .NET Core SDK with version '10.0.403' is already installed.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
