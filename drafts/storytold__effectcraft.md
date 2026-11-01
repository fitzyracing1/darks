<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/effectcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8287 · **Generated:** 2026-11-01T12:36:12.706Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/41266895194 — dark (conclusion: `failure`), 2026-11-01 02:52 UTC
- Dark since: 2026-11-01 02:52 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p effectcraft-cli --test it'

<details><summary>End of the job log</summary>

```
thread 'cli::run_reads_commands_from_a_file_or_stdin' (113643) panicked at apps/effectcraft-cli/tests/it/cli.rs:139:61:
called `Result::unwrap()` on an `Err` value: Os { code: 32, kind: BrokenPipe, message: "Broken pipe" }
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    cli::run_reads_commands_from_a_file_or_stdin
test result: FAILED. 43 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.09s
error: test failed, to rerun pass `-p effectcraft-cli --test it`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
