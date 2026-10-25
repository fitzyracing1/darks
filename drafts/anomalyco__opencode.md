<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 221431 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- stats (`.github/workflows/stats.yml`): [issue #57878](https://github.com/anomalyco/opencode/issues/57878) "cli: stats totals differ from stored session usage", [issue #58881](https://github.com/anomalyco/opencode/issues/58881) "desktop: diff pane renders empty despite correct +/- stats (v2.1.4, Windows)", [issue #53657](https://github.com/anomalyco/opencode/issues/53657) "FEATURE: Show a back shortcut hint on the TUI stats screen", [issue #51534](https://github.com/anomalyco/opencode/issues/51534) "fix(core): empty `--project` makes session stats silently report zero", [issue #47481](https://github.com/anomalyco/opencode/issues/47481) "cli: stats --days N omits cost/token/cache breakdown that v1 showed by default"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "publish" workflow failing on dev since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **publish** workflow (`.github/workflows/publish.yml`) on `dev` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40218764982 — dark (conclusion: `failure`), 2026-10-25 17:55 UTC
- Dark since: 2026-10-25 17:55 UTC (first run of the current streak)
- Job / step: `sign-cli-windows` → `Run azure/artifact-signing-action@b443cf8ea4124818d2ea9f043cba29fc3ec47b16`
- Likely cause: Exception: SignTool failed with exit code 1

<details><summary>End of the job log</summary>

```
Number of files successfully Signed: 2
Number of warnings: 0
Number of errors: 1
SignTool Error: SignedCode::Sign returned error: 0x800700C1
	For more information, please see https://aka.ms/badexeformat
SignTool Error: An error occurred while attempting to sign: C:\runner\_work\opencode\opencode\packages\cli\dist\cli-windows-x64-baseline\bin\opencode.exe
Exception: SignTool failed with exit code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
