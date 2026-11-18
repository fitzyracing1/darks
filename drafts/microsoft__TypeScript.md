<!-- dark-draft: microsoft/TypeScript -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/TypeScript

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/TypeScript/issues/new
- **Stars:** 111839 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/TypeScript/actions/runs/44211631683 — dark (conclusion: `failure`), 2026-11-18 00:54 UTC
- Dark since: 2026-11-17 18:36 UTC (first run of the current streak)
- Job / step: `test (macos-latest)` → `Tests`
- Likely cause: Failed tasks: test:tsc

<details><summary>End of the job log</summary>

```
=== FAIL: internal/fswatch TestKqueueReplacementWatchBeforeParentDispatch (1.19s)
    kqueue_test.go:325: expected event update /Users/runner/work/_temp/TestKqueueReplacementWatchBeforeParentDispatch935899798/002/barrier within 1s, got []
DONE 170612 tests, 2145 skipped, 1 failure in 507.875s
Error in test:tsc in 26m 38.6s
Error: The command `/Users/runner/work/TypeScript/TypeScript/tools/gotestsum --format-hide-empty-pkg --hide-summary skipped -- -gcflags=all=-dwarf=false -coverprofile=/Users/runner/work/TypeScript/TypeScript/coverage/co…
Completed test:tsc with errors in 26m 38.6s
Failed tasks: test:tsc
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining TypeScript!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
