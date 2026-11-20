<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16221 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44706287955 — dark (conclusion: `failure`), 2026-11-20 08:54 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 7/8` → `Merge this shard's profiles`
- Likely cause: llvm-profdata could not merge shard 7's profiles (exit 1)

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.100.0-x86_64-unknown-linux-gnu installed - rustc 1.100.0 (0ef1bc386 2026-11-09)
Raw profiles: 1.4G in 858 files
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   64G   82G  44% /
warning: profraw/shard-7-10451-16701917663194703865_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]shard 7 wrote a truncated or corrupt coverage profile: profraw/shard-7-10451-16701917663194703865_0.profraw: invalid instrumentation profile data (file header is corrupt)
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44673419303 — dark (conclusion: `failure`), 2026-11-20 04:17 UTC
- Dark since: 2026-11-20 04:17 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/var/tmp/craft-target/debug/build/lightcraft/cb971947e928aa38/out/lightcraft-cb971947e928aa38' (signal: 11, SIGSEGV: invalid memory reference)

<details><summary>End of the job log</summary>

```
test window_gpu::tests::composition_only_changes_windows_dx12_presentation ... ok
test window_gpu::tests::marker_records_the_failed_renderer ... ok
test tests::ui_json_is_written_atomically ... ok
test window_gpu::tests::probe_fallback_is_silent ... ok
error: test failed, to rerun pass `-p lightcraft --bin lightcraft`
Caused by:
  process didn't exit successfully: `/var/tmp/craft-target/debug/build/lightcraft/cb971947e928aa38/out/lightcraft-cb971947e928aa38` (signal: 11, SIGSEGV: invalid memory reference)
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
