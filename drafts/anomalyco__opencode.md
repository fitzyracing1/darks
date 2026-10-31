<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 223389 · **Generated:** 2026-10-31T06:39:29.667Z
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

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41175628361 — dark (conclusion: `cancelled`), 2026-10-31 06:12 UTC
- Dark since: 2026-10-30 16:58 UTC (first run of the current streak)
- Likely cause: run cancelled

### check-test (`.github/workflows/check-test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/41175662159 — dark (conclusion: `failure`), 2026-10-31 06:12 UTC
- Dark since: 2026-10-31 06:12 UTC (first run of the current streak)
- Job / step: `e2e (linux, app-2)` → `Run app e2e tests against production build`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
    ────────────────────────────────────────────────────────────────────────────────────────────────
    Error Context: e2e/test-results/regression-timeline-stream-9098f-and-skips-it-with-Alt-click-chromium-retry2/error-context.md
[317/315] [chromium] › e2e/regression/timeline-stream.spec.ts:3256:1 › reaches the quote action from the keyboard and blocks a selection over the limit
  1 failed
    [chromium] › e2e/regression/timeline-stream.spec.ts:3077:1 › opens an optional comment beside the quote action and skips it with Alt-click
  314 passed (2.7m)
error: script "test:e2e:built" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
