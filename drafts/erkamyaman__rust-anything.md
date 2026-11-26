<!-- dark-draft: erkamyaman/rust-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: erkamyaman/rust-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/erkamyaman/rust-anything/issues/new
- **Stars:** 9842 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/erkamyaman/rust-anything/actions/runs/45721172488 — dark (conclusion: `failure`), 2026-11-25 23:24 UTC
- Dark since: 2026-11-25 20:39 UTC (first run of the current streak)
- Job / step: `macos` → `Gate every demo port`
- Likely cause: Gate failed.

<details><summary>End of the job log</summary>

```
pass  tests      0 tests, 0 assertions; saved as the baseline once gate passes
pass  error cases the original fails on purpose nowhere
pass  panics     no unwrap, expect or panic where the original returns an error
pass  build      built /Users/runner/work/rust-anything/rust-anything/demo/fixtures/python-textkit-rs/python/textkit_rs
pass  api        exports slugify, word_counts, chunk, page_count, mean, class Stack
pass  behavior   1144/1144 recorded cases match
Gate failed.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rust-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
