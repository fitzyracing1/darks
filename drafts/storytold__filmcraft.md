<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 15890 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/40002598730 — dark (conclusion: `cancelled`), 2026-10-23 18:21 UTC
- Dark since: 2026-10-23 15:18 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: Canceling since a higher priority waiting request for sonarcloud-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test export_tests::caption_sidecars_keep_only_the_exported_interval ... ok
test export_tests::crf_param_picks_constant_quality ... ok
test export_tests::default_export_dir_never_needs_a_real_filesystem ... ok
test essential_sound_tests::deess_and_dereverb_improve_their_metrics ... ok
test export_tests::export_integer_parameters_cannot_wrap_or_overflow ... ok
test export_tests::export_without_wait_says_where_to_poll ... ok
test export_tests::exr_compression_param_is_parsed_and_defaults_to_none ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
