<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 73946 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/40591065884 — dark (conclusion: `failure`), 2026-10-27 21:57 UTC
- Dark since: 2026-10-27 21:57 UTC (first run of the current streak)
- Job / step: `test (windows-latest, integration)` → `Test`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
  stdout ───
    running 1 test
  stderr ───
    GPU parity backend: Dx12 (Microsoft Basic Render Driver, Cpu)
    (test aborted)
warning: 1020/2440 tests were not run due to test failure (run with --no-fail-fast to run all tests, or run with --max-fail)
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
