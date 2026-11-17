<!-- dark-draft: microsoft/TypeScript -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/TypeScript

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/TypeScript/issues/new
- **Stars:** 111836 · **Generated:** 2026-11-17T06:45:50.833Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/TypeScript/actions/runs/43973183487 — dark (conclusion: `failure`), 2026-11-16 22:46 UTC
- Dark since: 2026-11-16 22:46 UTC (first run of the current streak)
- Job / step: `test (race mode)` → `Tests`
- Likely cause: Failed tasks: test:tsc

<details><summary>End of the job log</summary>

```
    diagnostics_test.go:259: assertion failed: error is not nil: exit status 1: go: downloading github.com/klauspost/compress v1.20.3
        generate.go:23:2: github.com/klauspost/compress@v1.20.3: read "https://proxy.golang.org/github.com/klauspost/compress/@v/v1.20.3.zip": write /home/cloudtest/go/pkg/mod/cache/download/github.com/klauspost/compres…
DONE 170455 tests, 2143 skipped, 1 failure in 684.346s
Error in test:tsc in 17m 0.7s
Error: The command `/usr/local/vss-agent/2.338.2/_work/TypeScript/TypeScript/tools/gotestsum --format-hide-empty-pkg --hide-summary skipped -- -race ./... --timeout=45m` exited with a non-zero status (1)
Completed test:tsc with errors in 17m 0.7s
Failed tasks: test:tsc
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining TypeScript!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
