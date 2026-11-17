<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 28344 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-15. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/44082307945 — dark (conclusion: `cancelled`), 2026-11-17 12:21 UTC
- Dark since: 2026-11-15 17:58 UTC (first run of the current streak)
- Job / step: `metadata (linux-x64)` → `Test`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
No VM guests are running outdated hypervisor (qemu) binaries on this host.
/home/runner/work/_temp/exiftool.tar.gz: OK
  Determining projects to restore...
  Restored /home/runner/work/Filee/Filee/src/Filee.Core/Filee.Core.csproj (in 1.03 sec).
  Restored /home/runner/work/Filee/Filee/src/Filee.Engines/Filee.Engines.csproj (in 5.54 sec).
  Restored /home/runner/work/Filee/Filee/tests/Filee.Engines.Tests/Filee.Engines.Tests.csproj (in 5.54 sec).
  Filee.Core -> /home/runner/work/Filee/Filee/src/Filee.Core/bin/Release/net10.0/Filee.Core.dll
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
