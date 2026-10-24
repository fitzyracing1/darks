<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 14455 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/40027999272 — dark (conclusion: `cancelled`), 2026-10-23 21:36 UTC
- Dark since: 2026-10-23 15:45 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test headless::tests::a_background_export_holds_photos_while_it_writes ... ok
test export_task::tests::apple_photos_outcomes_read_well ... ok
test docking::tests::explicit_reveal_opens_collapsed_tools_and_survives_reload ... ok
test headless::tests::a_headless_run_waits_for_its_exports_photos_import ... ok
test headless::tests::a_connected_card_opens_the_import_review ... ok
test headless::tests::a_headless_run_waits_for_its_photos_import_before_ending ... ok
test export_task::contact_sheet_tests::contact_sheet_menu_dialog_picker_and_background_export ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
