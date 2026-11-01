<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: resolved -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** resolved — lit again (2026-11-01); nothing to file
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 259183 · **Generated:** 2026-11-01T00:58:31.984Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yaml`) on `main` has been failing since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/41251227284 — dark (conclusion: `failure`), 2026-10-31 23:08 UTC
- Dark since: 2026-10-31 23:07 UTC (first run of the current streak)
- Job / step: `Python tests / Run tests (1/2)` → `Run tests`
- Likely cause: tests/cron/test_cron_next_run_profile_timezone.py  (1 test failed)

<details><summary>End of the job log</summary>

```
FAILED tests/cron/test_cron_next_run_profile_timezone.py::test_foreign_process_tick_persists_owning_profile_offset - AssertionError: next_run_at 2026-11-01T14:00:00-05:00 persisted with foreign offset -1 day, 19:00:00 i…
assert datetime.timedelta(days=-1, seconds=68400) == datetime.timedelta(days=-1, seconds=72000)
 +  where datetime.timedelta(days=-1, seconds=68400) = <built-in method utcoffset of datetime.datetime object at 0x7f0c3c693ae0>()
 +    where <built-in method utcoffset of datetime.datetime object at 0x7f0c3c693ae0> = datetime.datetime(2026, 11, 1, 14, 0, tzinfo=datetime.timezone(datetime.timedelta(days=-1, seconds=68400))).utcoffset
============================== 1 failed in 0.32s ===============================
=== 1 file with test failures ===
  tests/cron/test_cron_next_run_profile_timezone.py  (1 test failed)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
