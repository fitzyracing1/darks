<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/lightcraft

- **Status:** resolved — lit again (2026-11-05); nothing to file
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15507 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/41976253397 — dark (conclusion: `cancelled`), 2026-11-05 05:47 UTC
- Dark since: 2026-11-05 05:09 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/41978543367 — dark (conclusion: `failure`), 2026-11-05 06:09 UTC
- Dark since: 2026-11-05 05:47 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
  model (7): needs the model files the reasons name
      4× LC_YUNET_MODEL is not set (lightcraft_engine::tests::face_models::detect_replaces_only_earlier_detections_and_is_one_undo_step, …)
      3× LC_YUNET_MODEL is not set, so the face-finding part is not checked (lightcraft_engine::cmd::face_recognize::imp::tests::only_the_background_scan_looks_for_faces_and_only_in_photos_without_any, …)
  system (1): needs what the operating system provides
      1× no system ICC profiles (codecs/it::corpus::system_icc_profiles)
error: ci failed at `test`
Report: target/ci/report.json; to paste into a PR: target/ci/summary.md (or run with --summary-md)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
