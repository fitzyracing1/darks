<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 10925 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/39979584169 — dark (conclusion: `cancelled`), 2026-10-23 15:35 UTC
- Dark since: 2026-10-23 15:35 UTC (first run of the current streak)
- Job / step: `portable / portable (macos-15-intel, osx-x64)` → `Check archive and run native converters`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
/Users/runner/work/Filee/Filee/build/.cache/portable/3ac7f7522d85436a837366ee6a54a847/Filee-2.0.0-osx-x64/Filee.app/Contents/MacOS/filee-cli: replacing existing signature
/Users/runner/work/Filee/Filee/build/.cache/portable/3ac7f7522d85436a837366ee6a54a847/Filee-2.0.0-osx-x64/Filee.app/Contents/MacOS/Filee: replacing existing signature
/Users/runner/work/Filee/Filee/build/.cache/portable/3ac7f7522d85436a837366ee6a54a847/Filee-2.0.0-osx-x64/Filee.app: replacing existing signature
Package: /Users/runner/work/Filee/Filee/Releases/Filee-2.0.0-osx-x64.tar.gz, /Users/runner/work/Filee/Filee/Releases/Filee-2.0.0-osx-x64.dmg
Checksums: /Users/runner/work/Filee/Filee/Releases/Filee-2.0.0-osx-x64-SHA256SUMS.txt
Unpacked build retained for testing: /Users/runner/work/Filee/Filee/build/.cache/portable/3ac7f7522d85436a837366ee6a54a847/Filee-2.0.0-osx-x64
This macOS build is ad-hoc signed for testing; it is not notarized for public distribution.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
