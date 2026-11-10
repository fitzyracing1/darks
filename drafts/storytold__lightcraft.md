<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15784 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/42711822015 — dark (conclusion: `failure`), 2026-11-09 22:25 UTC
- Dark since: 2026-11-09 22:25 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Combine shard coverage`
- Likely cause: error: no profile can be merged

<details><summary>End of the job log</summary>

```
info: downloading 4 components
  1.99.1-x86_64-unknown-linux-gnu installed - rustc 1.99.1 (58cf8f9c3 2026-10-13)
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   52G   93G  36% /
/dev/root       145G   52G   93G  36% /
warning: profraw/shard-8-12406-6616866415804224847_0.profraw: invalid instrumentation profile data (file header is corrupt)
error: no profile can be merged
##[error]Process completed with exit code 1.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/42754746989 — dark (conclusion: `failure`), 2026-11-10 04:15 UTC
- Dark since: 2026-11-10 04:15 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/var/tmp/craft-target/debug/deps/lightcraft-3954919308217832' (signal: 11, SIGSEGV: invalid memory reference)

<details><summary>End of the job log</summary>

```
test tests::window_has_no_indirect_call_validation_pipeline ... ok
test window_gpu::tests::composition_only_changes_windows_dx12_presentation ... ok
test window_gpu::tests::marker_records_the_failed_renderer ... ok
test window_gpu::tests::probe_fallback_is_silent ... ok
error: test failed, to rerun pass `-p lightcraft --bin lightcraft`
Caused by:
  process didn't exit successfully: `/var/tmp/craft-target/debug/deps/lightcraft-3954919308217832` (signal: 11, SIGSEGV: invalid memory reference)
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
