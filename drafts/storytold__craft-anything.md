<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/craft-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 22615 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/42438529269 — dark (conclusion: `failure`), 2026-11-08 02:26 UTC
- Dark since: 2026-11-07 02:24 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p craft-anything-engine --lib'

<details><summary>End of the job log</summary>

```
thread 'tools::window_tools::process_tree::tests::snapshot_finds_an_owned_child_on_this_host' (114604) panicked at crates/engine/src/tools/window_tools/process_tree.rs:199:9:
assertion failed: family.unwrap().contains(&child.pid())
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    tools::window_tools::process_tree::tests::snapshot_finds_an_owned_child_on_this_host
test result: FAILED. 555 passed; 1 failed; 8 ignored; 0 measured; 0 filtered out; finished in 4.15s
error: test failed, to rerun pass `-p craft-anything-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
