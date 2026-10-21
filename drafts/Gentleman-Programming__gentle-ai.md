<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 7894 · **Generated:** 2026-10-21T12:55:24.472Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/39536201038 — dark (conclusion: `failure`), 2026-10-21 03:00 UTC
- Dark since: 2026-10-21 03:00 UTC (first run of the current streak)
- Job / step: `Windows Runtime` → `Run Windows release-blocker tests`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
=== RUN   TestProbeStdio_MissingAbsoluteConfiguredCommandFails
--- PASS: TestProbeStdio_MissingAbsoluteConfiguredCommandFails (0.00s)
=== RUN   TestProbeStdio_MissingRelativeWindowsExecutableIsNotInstalled
--- PASS: TestProbeStdio_MissingRelativeWindowsExecutableIsNotInstalled (0.00s)
PASS
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/components/engram	0.715s
FAIL
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
