<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/craft-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 42114 · **Generated:** 2026-11-24T00:51:11.893Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/45100419673 — dark (conclusion: `failure`), 2026-11-23 02:28 UTC
- Dark since: 2026-11-22 02:27 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: test result: FAILED. 121 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.28s

<details><summary>End of the job log</summary>

```
        },
    ],
}
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    a_check_shows_the_claims_that_dont_hold_and_the_rest_on_request
test result: FAILED. 121 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.28s
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
