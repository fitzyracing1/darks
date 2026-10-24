<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 14470 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/40055494710 — dark (conclusion: `cancelled`), 2026-10-24 02:45 UTC
- Dark since: 2026-10-23 15:45 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test tests_crop_rotate::the_angle_field_reads_angles_as_people_type_them ... ok
test tests_crop_rotate::the_crop_panel_has_an_angle_field ... ok
test tests_crop_rotate::the_readout_follows_the_pointer_in_the_margin ... ok
test tests_crop_rotate::the_readout_stays_on_the_canvas ... ok
test tests_crop_rotate::the_straighten_value_says_it_can_be_typed ... ok
test tests_crop_rotate::typing_in_the_angle_field_applies_on_return ... ok
test tests_crop_rotate::the_straighten_value_takes_an_exact_angle ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
