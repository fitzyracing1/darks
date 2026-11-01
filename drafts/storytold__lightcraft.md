<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15238 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/41331760651 — dark (conclusion: `failure`), 2026-11-01 17:29 UTC
- Dark since: 2026-11-01 17:29 UTC (first run of the current streak)
- Job / step: `sonarcloud / Build instrumented test archive` → `Build instrumented test archive`
- Likely cause: GitHub Actions has encountered an internal error when running your job.

<details><summary>End of the job log</summary>

```
   Compiling egui_glow v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling pollster v0.4.0
   Compiling eframe v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling brotli-decompressor v6.0.1
   Compiling brotli v9.0.0
   Compiling xtask v0.16.0 (/home/runner/work/lightcraft/lightcraft/xtask)
   Compiling lightcraft-web v0.16.0 (/home/runner/work/lightcraft/lightcraft/apps/lightcraft-web)
##[error]The runner has received a shutdown signal. This can happen when the runner service is stopped, or a manually started runner is canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/41331760721 — dark (conclusion: `failure`), 2026-11-01 17:29 UTC
- Dark since: 2026-11-01 17:29 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: GitHub Actions has encountered an internal error when running your job.

<details><summary>End of the job log</summary>

```
test headless::tests::the_headless_host_has_a_clipboard ... ok
test headless::tests::snapshots_are_deterministic_and_control_requests_work ... ok
test headless::tests::slider_values_can_be_typed ... ok
test headless::tests::the_photos_progress_line_is_in_the_users_language ... ok
test headless::tests::the_rename_keyword_field_selects_pastes_and_cancels ... ok
test headless::tests::the_search_field_pastes_from_its_menu ... ok
test headless::tests::the_unnamed_faces_name_field_pastes_and_escape_clears ... ok
##[error]The runner has received a shutdown signal. This can happen when the runner service is stopped, or a manually started runner is canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
