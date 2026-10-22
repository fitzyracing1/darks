<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 71231 · **Generated:** 2026-10-22T18:48:47.419Z
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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/39712565418 — dark (conclusion: `cancelled`), 2026-10-22 02:39 UTC
- Dark since: 2026-10-19 02:40 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling fs-set-times v0.20.3
   Compiling futures-executor v0.3.34
   Compiling chrono v0.4.45
   Compiling darling_macro v0.24.1
   Compiling dyn-clone v1.0.20
   Compiling rmcp v3.5.0
   Compiling schemars_derive v1.2.2
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/39826585169 — dark (conclusion: `failure`), 2026-10-22 17:53 UTC
- Dark since: 2026-10-22 17:53 UTC (first run of the current streak)
- Job / step: `test (windows-latest, integration)` → `Test`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
       3: core::panicking::assert_failed::<core::option::Option<bool>, core::option::Option<bool>>
       4: <alloc::borrow::Cow<str> as core::fmt::Debug>::fmt
       5: core::ops::function::FnOnce::call_once
                 at /rustc/58cf8f9c35b355199727627d07ae34a4e2846d67/library\core\src\ops\function.rs:250
    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
warning: 1049/2275 tests were not run due to test failure (run with --no-fail-fast to run all tests, or run with --max-fail)
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
