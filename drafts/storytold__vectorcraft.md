<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12021 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Release", "FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44978188104 — dark (conclusion: `failure`), 2026-11-22 02:54 UTC
- Dark since: 2026-11-21 02:53 UTC (first run of the current streak)
- Job / step: `release / Linux x86_64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=623]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=630]
##[start-action display=Run python3 "$CHANNEL";id=rust.channel]
Traceback (most recent call last):
  File "/home/runner/work/_actions/storytold/craft-common-actions/main/actions/rust-channel/channel.py", line 9, in <module>
    import tomllib
ModuleNotFoundError: No module named 'tomllib'
##[error]Process completed with exit code 1.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44984725992 — dark (conclusion: `failure`), 2026-11-22 04:21 UTC
- Dark since: 2026-11-22 04:21 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-engine --lib'

<details><summary>End of the job log</summary>

```
assertion `left == right` failed: turned 180: {"fonts":[{"area":false,"family":"Source Sans 3","leading":null,"score":0.889,"size":39.92530781914129,"style":"Regular","tracking":0.0}],"ids":[9],"texts":["no"],"truncated…
  left: Array [String("no")]
 right: Array [String("no.")]
failures:
    cmd::retype::tests::turned_near_matched_round_glyphs_keep_the_line_turn
test result: FAILED. 8293 passed; 1 failed; 15 ignored; 0 measured; 0 filtered out; finished in 247.85s
error: test failed, to rerun pass `-p vectorcraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45085930900 — dark (conclusion: `failure`), 2026-11-22 23:56 UTC
- Dark since: 2026-11-22 18:16 UTC (first run of the current streak)
- Job / step: `sonarcloud / Build instrumented test archive` → `Build instrumented test archive`
- Likely cause: Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)

<details><summary>End of the job log</summary>

```
   Compiling craft-print v0.1.0 (https://github.com/storytold/craft-libs?rev=d7c9632bfb3040cf45db394e7500cc93c81c49e0#d7c9632b)
   Compiling eframe v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling webbrowser v1.2.5
   Compiling craft-window v0.1.0 (https://github.com/storytold/craft-libs?rev=d7c9632bfb3040cf45db394e7500cc93c81c49e0#d7c9632b)
   Compiling craft-web-api v0.1.0 (https://github.com/storytold/craft-libs?rev=50b0ee7bf811e363b5f238382b5c77318cf33e46#50b0ee7b)
   Compiling vectorcraft-web v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-web)
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
##[error]Process completed with exit code 143.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
