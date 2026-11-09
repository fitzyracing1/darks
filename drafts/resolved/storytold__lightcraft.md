<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/lightcraft

- **Status:** resolved — lit again (2026-11-09); nothing to file
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15721 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/42446116237 — dark (conclusion: `failure`), 2026-11-08 04:16 UTC
- Dark since: 2026-11-08 04:16 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/var/tmp/craft-target/debug/deps/lightcraft-5b7b3a2fe070bd44' (signal: 11, SIGSEGV: invalid memory reference)

<details><summary>End of the job log</summary>

```
test window_gpu::tests::composition_only_changes_windows_dx12_presentation ... ok
test tests::ui_json_is_written_atomically ... ok
test window_gpu::tests::marker_records_the_failed_renderer ... ok
test window_gpu::tests::probe_fallback_is_silent ... ok
error: test failed, to rerun pass `-p lightcraft --bin lightcraft`
Caused by:
  process didn't exit successfully: `/var/tmp/craft-target/debug/deps/lightcraft-5b7b3a2fe070bd44` (signal: 11, SIGSEGV: invalid memory reference)
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
