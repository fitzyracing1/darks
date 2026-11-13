<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 226468 · **Generated:** 2026-11-13T00:54:20.399Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on dev ("release", "check-test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43334362277 — dark (conclusion: `cancelled`), 2026-11-13 00:06 UTC
- Dark since: 2026-11-12 23:43 UTC (first run of the current streak)
- Likely cause: run cancelled

### check-test (`.github/workflows/check-test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/43336338608 — dark (conclusion: `failure`), 2026-11-13 00:20 UTC
- Dark since: 2026-11-13 00:20 UTC (first run of the current streak)
- Job / step: `unit (windows)` → `Run unit tests`
- Likely cause: @opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (3)

<details><summary>End of the job log</summary>

```
  ▀▀▀▀ █▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀
  Session   Simplify compiler parsing
  Continue  opencode -s ses_rename
                                   ▄
  █▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀▀ █▀▀█ █▀▀█ █▀▀█
  █  █ █  █ █▀▀▀ █  █ █    █  █ █  █ █▀▀▀
  ▀▀▀▀ █▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀
##[error]@opencode/core#test: command (C:\runner\_work\opencode\opencode\packages\core) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (3)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
