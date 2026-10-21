<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 219470 · **Generated:** 2026-10-21T12:55:24.472Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Skipped: upstream already tracking

- stats (`.github/workflows/stats.yml`): [issue #53657](https://github.com/anomalyco/opencode/issues/53657) "FEATURE: Show a back shortcut hint on the TUI stats screen", [issue #51534](https://github.com/anomalyco/opencode/issues/51534) "fix(core): empty `--project` makes session stats silently report zero", [issue #47481](https://github.com/anomalyco/opencode/issues/47481) "cli: stats --days N omits cost/token/cache breakdown that v1 showed by default"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on dev ("docs-update", "publish", "deploy")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### docs-update (`.github/workflows/docs-update.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39598451977 — dark (conclusion: `skipped`), 2026-10-21 12:17 UTC
- Dark since: 2026-10-21 12:17 UTC (first run of the current streak)
- Likely cause: run skipped

### publish (`.github/workflows/publish.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39599274975 — dark (conclusion: `failure`), 2026-10-21 12:23 UTC
- Dark since: 2026-10-21 12:23 UTC (first run of the current streak)
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

### deploy (`.github/workflows/deploy.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39599275041 — dark (conclusion: `failure`), 2026-10-21 12:23 UTC
- Dark since: 2026-10-21 12:23 UTC (first run of the current streak)
- Job / step: `deploy` → `Run bun sst deploy --stage=dev`
- Likely cause: "message": "Actor migration tag precondition failed, got tag 'v1' when expected tag is 'v2'. Please make sure the tags match and try again."

<details><summary>End of the job log</summary>

```
      "code": 10079,
      "message": "Actor migration tag precondition failed, got tag 'v1' when expected tag is 'v2'. Please make sure the tags match and try again."
    }
  ],
  "messages": []
}
error: "sst" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
