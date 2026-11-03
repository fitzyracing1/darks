<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 21225 · **Generated:** 2026-11-03T18:36:41.394Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/41693107009 — dark (conclusion: `cancelled`), 2026-11-03 18:21 UTC
- Dark since: 2026-11-03 05:57 UTC (first run of the current streak)
- Job / step: `build` → `Restore`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
dotnet-install: .NET Core SDK with version '10.0.403' is already installed.
  Determining projects to restore...
  Restored D:\a\Filee\Filee\src\Filee.Platform.Windows\Filee.Platform.Windows.csproj (in 8.56 sec).
  Restored D:\a\Filee\Filee\src\Filee.Platform.MacOS\Filee.Platform.MacOS.csproj (in 8.56 sec).
  Restored D:\a\Filee\Filee\src\Filee.Platform.Linux\Filee.Platform.Linux.csproj (in 11 ms).
Attempting to cancel the build...
C:\Program Files\dotnet\sdk\10.0.403\NuGet.targets(198,5): error : Restore canceled! [D:\a\Filee\Filee\Filee.slnx]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
