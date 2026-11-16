<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 28004 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-15. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/43764628811 — dark (conclusion: `failure`), 2026-11-15 21:36 UTC
- Dark since: 2026-11-15 17:58 UTC (first run of the current streak)
- Job / step: `portable / portable (macos-15-intel, osx-x64)` → `Build portable package`
- Likely cause: | Create dmg failed with exit code 1

<details><summary>End of the job log</summary>

```
    raise DMGError(callback, f"Unable to detach device cleanly: {output}")
dmgbuild.core.DMGError: Unable to detach device cleanly: hdiutil: couldn't eject "disk2" - Resource busy
Exception: /Users/runner/work/Filee/Filee/build/build-portable.ps1:91
Line |
  91 |  … EXITCODE -ne 0) { throw "$name failed with exit code $LASTEXITCODE" }
     |                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | Create dmg failed with exit code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
