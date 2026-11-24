<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 30757 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/45459777798 — dark (conclusion: `cancelled`), 2026-11-24 18:27 UTC
- Dark since: 2026-11-24 15:10 UTC (first run of the current streak)
- Job / step: `metadata (linux-x64)` → `Test`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
No VM guests are running outdated hypervisor (qemu) binaries on this host.
ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
/home/runner/work/_temp/exiftool.tar.gz: OK
  Determining projects to restore...
  Restored /home/runner/work/Filee/Filee/src/Filee.Core/Filee.Core.csproj (in 1.04 sec).
  Restored /home/runner/work/Filee/Filee/src/Filee.Engines/Filee.Engines.csproj (in 5.32 sec).
  Restored /home/runner/work/Filee/Filee/tests/Filee.Engines.Tests/Filee.Engines.Tests.csproj (in 5.43 sec).
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
