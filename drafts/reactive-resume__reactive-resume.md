<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: ready -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45140 · **Generated:** 2026-11-01T06:42:01.505Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/41279329836 — dark (conclusion: `failure`), 2026-11-01 06:04 UTC
- Dark since: 2026-11-01 06:04 UTC (first run of the current streak)
- Job / step: `Run browser tests` → `Run browser tests`
- Likely cause: 1) [chromium] › tests/e2e/specs/ai-provider-regressions.spec.ts:244:5 › application coach history survives provider-list failure (tests/e2e/specs/ai-provider-regressions.spec.ts:270)

<details><summary>End of the job log</summary>

```
  ✓  24 [chromium] › tests/e2e/specs/application-profile.spec.ts:4:5 › private application profile supports manual editing, unknowns, export and deletion on a narrow screen (2.9s)
  ✓  25 [chromium] › tests/e2e/specs/application-profile.spec.ts:126:5 › public resume links and document exports never inherit private profile details (147ms)
  ✓  22 [chromium] › tests/e2e/specs/application-lanes.spec.ts:298:5 › named CSV import survives pending and failed stage discovery without discarding metadata (4.6s)
  ✓  27 [chromium] › tests/e2e/specs/application-submission.spec.ts:4:6 › Apply reconciles submission from workspace without inventing review checks (1.2s)
  ✓  26 [chromium] › tests/e2e/specs/application-submission.spec.ts:4:6 › Apply reconciles submission from detail without inventing review checks (1.7s)
  ✓  28 [chromium] › tests/e2e/specs/application-submission.spec.ts:4:6 › Apply reconciles submission from api without inventing review checks (798ms)
  ✘  11 [chromium] › tests/e2e/specs/ai-provider-regressions.spec.ts:244:5 › application coach history survives provider-list failure (14.3s)
##[error]  1) [chromium] › tests/e2e/specs/ai-provider-regressions.spec.ts:244:5 › application coach history survives provider-list failure
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
