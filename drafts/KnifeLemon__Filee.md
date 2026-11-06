<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 22592 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/42086869145 — dark (conclusion: `failure`), 2026-11-05 18:42 UTC
- Dark since: 2026-11-05 18:42 UTC (first run of the current streak)
- Job / step: `portable / portable (macos-15-intel, osx-x64)` → `Build portable package`
- Likely cause: Failed to CreateArtifact: Unable to make request: ENOTFOUND

<details><summary>End of the job log</summary>

```
/Users/runner/work/Filee/Filee/build/.cache/portable/11a4c80a00ce469fb01c840bd29fab78/Filee-2.4.0-osx-x64/Filee.app: replacing existing signature
hdiutil: create failed - Resource busy
Exception: /Users/runner/work/Filee/Filee/build/build-portable.ps1:83
Line |
  83 |  … EXITCODE -ne 0) { throw "$name failed with exit code $LASTEXITCODE" }
     |                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | Create dmg failed with exit code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
