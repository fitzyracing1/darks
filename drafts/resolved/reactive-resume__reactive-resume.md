<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: resolved -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** resolved — lit again (2026-11-02); nothing to file
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45156 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/41330730946 — dark (conclusion: `failure`), 2026-11-01 17:17 UTC
- Dark since: 2026-11-01 17:17 UTC (first run of the current streak)
- Job / step: `Run browser tests` → `Run browser tests`
- Likely cause: 1) [chromium] › tests/e2e/specs/accessibility-preferences.spec.ts:135:5 › control boundary contrast clears 3:1 in both themes (tests/e2e/specs/accessibility-preferences.spec.ts:198)

<details><summary>End of the job log</summary>

```
  Time:    31.257s
Running 199 tests using 4 workers
  ✓    1 [chromium] › tests/e2e/specs/accessibility-preferences.spec.ts:61:6 › URL-open alertdialog retains focus after route settles (866ms)
  ✓    3 [chromium] › tests/e2e/specs/accessibility-preferences.spec.ts:61:6 › URL-open dialog retains focus after route settles (917ms)
  ✓    4 [chromium] › tests/e2e/specs/accessibility-preferences.spec.ts:46:5 › route transitions set distinct titles and focus (1.5s)
  ✓    2 [chromium] › tests/e2e/specs/accessibility-preferences.spec.ts:6:5 › explicit language and theme persist across fresh browser sessions (2.0s)
  ✘    6 [chromium] › tests/e2e/specs/accessibility-preferences.spec.ts:135:5 › control boundary contrast clears 3:1 in both themes (1.8s)
##[error]  1) [chromium] › tests/e2e/specs/accessibility-preferences.spec.ts:135:5 › control boundary contrast clears 3:1 in both themes
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
