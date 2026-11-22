<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16271 · **Generated:** 2026-11-22T00:55:06.197Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44947141174 — dark (conclusion: `failure`), 2026-11-21 20:36 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 5/8` → `Run this shard's tests`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
        SLOW [>6180.000s] (───────) lightcraft-ui-egui tests::find_similar::a_second_search_waits_for_the_first
        SLOW [>6240.000s] (───────) lightcraft-ui-egui tests::find_similar::a_second_search_waits_for_the_first
        SLOW [>6300.000s] (───────) lightcraft-ui-egui tests::find_similar::a_second_search_waits_for_the_first
        SLOW [>6360.000s] (───────) lightcraft-ui-egui tests::find_similar::a_second_search_waits_for_the_first
        SLOW [>6420.000s] (───────) lightcraft-ui-egui tests::find_similar::a_second_search_waits_for_the_first
        SLOW [>6480.000s] (───────) lightcraft-ui-egui tests::find_similar::a_second_search_waits_for_the_first
        SLOW [>6540.000s] (───────) lightcraft-ui-egui tests::find_similar::a_second_search_waits_for_the_first
##[error]The operation was canceled.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44855028980 — dark (conclusion: `failure`), 2026-11-21 02:17 UTC
- Dark since: 2026-11-21 02:17 UTC (first run of the current streak)
- Job / step: `release / Linux x86_64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=584]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=591]
##[start-action display=Run python3 "$CHANNEL";id=rust.channel]
Traceback (most recent call last):
  File "/home/runner/work/_actions/storytold/craft-common-actions/main/actions/rust-channel/channel.py", line 9, in <module>
    import tomllib
ModuleNotFoundError: No module named 'tomllib'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
