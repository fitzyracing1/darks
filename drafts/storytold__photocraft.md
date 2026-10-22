<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 70815 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/39534171872 — dark (conclusion: `failure`), 2026-10-21 02:38 UTC
- Dark since: 2026-10-19 02:40 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling ciborium v0.2.2
   Compiling tinytemplate v1.2.1
   Compiling photocraft-automation v0.11.1 (/home/runner/work/photocraft/photocraft/crates/automation)
   Compiling is-terminal v0.4.17
   Compiling anes v0.1.6
   Compiling oorandom v11.1.5
   Compiling criterion v0.5.1
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/39722350596 — dark (conclusion: `failure`), 2026-10-22 04:26 UTC
- Dark since: 2026-10-22 04:26 UTC (first run of the current streak)
- Job / step: `test (windows-latest, integration)` → `Test`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
       3: core::panicking::assert_failed::<core::option::Option<bool>, core::option::Option<bool>>
       4: <alloc::borrow::Cow<str> as core::fmt::Debug>::fmt
       5: core::ops::function::FnOnce::call_once
                 at /rustc/58cf8f9c35b355199727627d07ae34a4e2846d67/library\core\src\ops\function.rs:250
    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
warning: 1027/2191 tests were not run due to test failure (run with --no-fail-fast to run all tests, or run with --max-fail)
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
