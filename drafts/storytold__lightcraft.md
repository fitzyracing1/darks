<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16512 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/46105145805 — dark (conclusion: `failure`), 2026-11-28 03:55 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 5/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 5's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.100.1-x86_64-unknown-linux-gnu installed - rustc 1.100.1 (20ddd0171 2026-11-25)
Raw profiles: 1.8G in 985 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   65G   81G  45% /
warning: profraw/shard-5-20202-5932005498180857718_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 5 wrote a truncated or corrupt coverage profile: profraw/shard-5-20202-5932005498180857718_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/46106772519 — dark (conclusion: `failure`), 2026-11-28 04:16 UTC
- Dark since: 2026-11-28 04:16 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/var/tmp/craft-target/debug/build/lightcraft/8feaa71e37e332de/out/lightcraft-8feaa71e37e332de' (signal: 11, SIGSEGV: invalid memory reference)

<details><summary>End of the job log</summary>

```
test window_gpu::tests::composition_only_changes_windows_dx12_presentation ... ok
test window_gpu::tests::marker_records_the_failed_renderer ... ok
test tests::ui_json_is_written_atomically ... ok
test window_gpu::tests::probe_fallback_is_silent ... ok
error: test failed, to rerun pass `-p lightcraft --bin lightcraft`
Caused by:
  process didn't exit successfully: `/var/tmp/craft-target/debug/build/lightcraft/8feaa71e37e332de/out/lightcraft-8feaa71e37e332de` (signal: 11, SIGSEGV: invalid memory reference)
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
