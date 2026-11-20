<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 228209 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "check-test" workflow failing on dev since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **check-test** workflow (`.github/workflows/check-test.yml`) on `dev` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44787465847 — dark (conclusion: `failure`), 2026-11-20 17:52 UTC
- Dark since: 2026-11-20 17:46 UTC (first run of the current streak)
- Job / step: `e2e (linux, app-1)` → `Run app e2e tests against production build`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
    [chromium] › e2e/regression/session-summary.spec.ts:399:3 › summary overlays the view and submenus follow rtl
  3 flaky
    [chromium] › e2e/regression/review.spec.ts:2267:3 › review toggle stays at the header edge in ltr
    [chromium] › e2e/regression/review.spec.ts:2267:3 › review toggle stays at the header edge in rtl
    [chromium] › e2e/regression/session-summary.spec.ts:399:3 › summary overlays the view and submenus follow ltr
  407 passed (7.6m)
error: script "test:e2e:built" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
