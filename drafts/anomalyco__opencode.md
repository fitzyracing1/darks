<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 220102 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- stats (`.github/workflows/stats.yml`): [issue #57878](https://github.com/anomalyco/opencode/issues/57878) "cli: stats totals differ from stored session usage", [issue #53657](https://github.com/anomalyco/opencode/issues/53657) "FEATURE: Show a back shortcut hint on the TUI stats screen", [issue #51534](https://github.com/anomalyco/opencode/issues/51534) "fix(core): empty `--project` makes session stats silently report zero", [issue #47481](https://github.com/anomalyco/opencode/issues/47481) "cli: stats --days N omits cost/token/cache breakdown that v1 showed by default"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("test", "publish")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### test (`.github/workflows/test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39821578998 — dark (conclusion: `failure`), 2026-10-22 17:19 UTC
- Dark since: 2026-10-22 12:25 UTC (first run of the current streak)
- Job / step: `unit (windows)` → `Run unit tests`
- Likely cause: @opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)

<details><summary>End of the job log</summary>

```
[17:36:35.596] INFO (#306274): watcher subscribe {
  path: "C:\\Users\\runneradmin\\AppData\\Local\\Temp\\oc-nI69VL\\AGENTS.md",
  type: "file",
  ignores: 0,
}
[17:36:35.606] INFO (#306274): watcher subscribe {
  path: "C:\\Users\\runneradmin\\AppData\\Local\\Temp\\oc-nI69VL\\.config\\opencode\\skill",
##[error]@opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (1)
```

</details>

### publish (`.github/workflows/publish.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39821578820 — dark (conclusion: `failure`), 2026-10-22 17:19 UTC
- Dark since: 2026-10-22 17:19 UTC (first run of the current streak)
- Job / step: `sign-cli-windows` → `Run azure/artifact-signing-action@b443cf8ea4124818d2ea9f043cba29fc3ec47b16`
- Likely cause: Exception: SignTool failed with exit code 1

<details><summary>End of the job log</summary>

```
SignTool Error: File not found: C:\runner\_work\opencode\opencode\packages\cli\dist\cli-windows-arm64\bin\opencode.exe
SignTool Error: File not found: C:\runner\_work\opencode\opencode\packages\cli\dist\cli-windows-x64\bin\opencode.exe
SignTool Error: File not found: C:\runner\_work\opencode\opencode\packages\cli\dist\cli-windows-x64-baseline\bin\opencode.exe
Number of files successfully Signed: 0
Number of warnings: 0
Number of errors: 3
Exception: SignTool failed with exit code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
