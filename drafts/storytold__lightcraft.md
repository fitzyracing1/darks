<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 14554 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/40105038758 — dark (conclusion: `cancelled`), 2026-10-24 15:00 UTC
- Dark since: 2026-10-23 15:45 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test frame_rate::tests::a_long_pause_while_it_shows_is_not_a_frame ... ok
test headless::tests::a_background_export_holds_photos_while_it_writes ... ok
test frame_rate::tests::show_frame_rate_is_a_debug_toggle ... ok
test headless::tests::a_headless_run_waits_for_its_exports_photos_import ... ok
test frame_rate::tests::turning_it_back_on_shows_no_spike_for_the_time_it_was_off ... ok
test headless::tests::a_connected_card_opens_the_import_review ... ok
test headless::tests::a_headless_run_waits_for_its_photos_import_before_ending ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
