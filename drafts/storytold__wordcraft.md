<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 18399 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/44979533868 — dark (conclusion: `failure`), 2026-11-22 03:12 UTC
- Dark since: 2026-11-21 03:12 UTC (first run of the current streak)
- Job / step: `release / Linux aarch64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=624]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=630]
##[start-action display=Run python3 "$CHANNEL";id=rust.channel]
Traceback (most recent call last):
  File "/home/runner/work/_actions/storytold/craft-common-actions/main/actions/rust-channel/channel.py", line 9, in <module>
    import tomllib
ModuleNotFoundError: No module named 'tomllib'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining wordcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
