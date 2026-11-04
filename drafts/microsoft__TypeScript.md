<!-- dark-draft: microsoft/TypeScript -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/TypeScript

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/TypeScript/issues/new
- **Stars:** 111731 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/TypeScript/actions/runs/41743889911 — dark (conclusion: `failure`), 2026-11-04 00:03 UTC
- Dark since: 2026-11-04 00:03 UTC (first run of the current streak)
- Job / step: `test (windows-latest)` → `Tests`
- Likely cause: Failed tasks: test:tsc

<details><summary>End of the job log</summary>

```
go: downloading golang.org/x/mod v0.41.0
C:\Users\runneradmin\go\pkg\mod\github.com\bitfield\gotestdox@v0.2.2\prettifier.go:10:2: golang.org/x/text@v0.42.0: read "https://proxy.golang.org/golang.org/x/text/@v/v0.42.0.zip": stream error: stream ID 139; INTERNAL…
C:\Users\runneradmin\go\pkg\mod\github.com\bitfield\gotestdox@v0.2.2\prettifier.go:11:2: golang.org/x/text@v0.42.0: read "https://proxy.golang.org/golang.org/x/text/@v/v0.42.0.zip": stream error: stream ID 139; INTERNAL…
Error in test:tsc in 6.7s
Error: The command `go install gotest.tools/gotestsum` exited with a non-zero status (1)
Completed test:tsc with errors in 6.7s
Failed tasks: test:tsc
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining TypeScript!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
