<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16276 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44984135408 — dark (conclusion: `failure`), 2026-11-22 04:14 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 1/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 1's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.100.0-x86_64-unknown-linux-gnu installed - rustc 1.100.0 (0ef1bc386 2026-11-09)
Raw profiles: 1.5G in 934 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   64G   81G  44% /
warning: profraw/shard-1-11248-16891802771724957895_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 1 wrote a truncated or corrupt coverage profile: profraw/shard-1-11248-16891802771724957895_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44975443260 — dark (conclusion: `failure`), 2026-11-22 02:18 UTC
- Dark since: 2026-11-21 02:17 UTC (first run of the current streak)
- Job / step: `release / Linux x86_64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=600]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=604]
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
