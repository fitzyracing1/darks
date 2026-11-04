<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 21540 · **Generated:** 2026-11-04T06:44:24.955Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/41783718763 — dark (conclusion: `cancelled`), 2026-11-04 06:10 UTC
- Dark since: 2026-11-03 05:57 UTC (first run of the current streak)
- Job / step: `build (win-arm64)` → `Restore`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Failed to download package 'AvaloniaUI.DiagnosticsSupport.2.2.3' from 'https://api.nuget.org/v3-flatcontainer/avaloniaui.diagnosticssupport/2.2.3/avaloniaui.diagnosticssupport.2.2.3.nupkg'.
  An error occurred while sending the request.
    Unable to read data from the transport connection: An existing connection was forcibly closed by the remote host..
    An existing connection was forcibly closed by the remote host.
Attempting to cancel the build...
  Restored C:\a\Filee\Filee\tests\Filee.Platform.Tests\Filee.Platform.Tests.csproj (in 47.98 sec).
C:\Program Files\dotnet\sdk\10.0.403\NuGet.targets(198,5): error : Restore canceled! [C:\a\Filee\Filee\Filee.slnx]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
