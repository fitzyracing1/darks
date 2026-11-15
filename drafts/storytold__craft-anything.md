<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/craft-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 33571 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43667762639 — dark (conclusion: `failure`), 2026-11-15 02:26 UTC
- Dark since: 2026-11-12 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p craft-anything-ai --lib'

<details><summary>End of the job log</summary>

```
  left: 0
 right: 3
failures:
    rebuild::kinds::runs::tests::a_relative_project_runs_a_console_check
    rebuild::tests::console_study_keeps_two_real_observations_for_each_input
test result: FAILED. 664 passed; 2 failed; 3 ignored; 0 measured; 0 filtered out; finished in 11.39s
error: test failed, to rerun pass `-p craft-anything-ai --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43742952002 — dark (conclusion: `cancelled`), 2026-11-15 17:46 UTC
- Dark since: 2026-11-15 16:28 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
