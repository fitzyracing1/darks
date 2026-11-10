<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/craft-anything

- **Status:** resolved — lit again (2026-11-10); nothing to file
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 23758 · **Generated:** 2026-11-09T12:43:14.164Z
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

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/42550949589 — dark (conclusion: `failure`), 2026-11-09 02:26 UTC
- Dark since: 2026-11-07 02:24 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p craft-anything-engine --lib'

<details><summary>End of the job log</summary>

```
thread 'tools::window_tools::process_tree::tests::snapshot_finds_an_owned_child_on_this_host' (114778) panicked at crates/engine/src/tools/window_tools/process_tree.rs:199:9:
assertion failed: family.unwrap().contains(&child.pid())
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    tools::window_tools::process_tree::tests::snapshot_finds_an_owned_child_on_this_host
test result: FAILED. 562 passed; 1 failed; 8 ignored; 0 measured; 0 filtered out; finished in 4.14s
error: test failed, to rerun pass `-p craft-anything-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/42615869097 — dark (conclusion: `cancelled`), 2026-11-09 12:18 UTC
- Dark since: 2026-11-09 06:26 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
