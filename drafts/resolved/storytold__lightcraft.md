<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/lightcraft

- **Status:** resolved — lit again (2026-11-11); nothing to file
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15821 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

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

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/42920612181 — dark (conclusion: `cancelled`), 2026-11-10 23:07 UTC
- Dark since: 2026-11-10 17:00 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
