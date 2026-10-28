<!-- dark-draft: rollup/rollup -->
<!-- draft-state: ready -->
# Upstream issue draft: rollup/rollup

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/rollup/rollup/issues/new
- **Stars:** 26305 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on master since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/build-and-tests.yml`) on `master` has been getting cancelled since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/rollup/rollup/actions/runs/40681586985 — dark (conclusion: `cancelled`), 2026-10-28 11:38 UTC
- Dark since: 2026-10-28 11:38 UTC (first run of the current streak)
- Job / step: `Test Node 18.20.0 (aarch64-apple-darwin)` → `Test Rollup`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
      ✔ static-class-property-calls: handles effects when calling static class properties
      ✔ static-method-deoptimization: avoids infinite recursions when deoptimizing "this" context
      ✔ string-replace-side-effects: does not assume string.replace has side effects when called with a string as second argument
      ✔ super-class-no-side-effects: Does not wrongly attribute side effects when the super class of an unused class is in a file without side effects (#4808)
      ✔ support-decorators-after-export: support decorators after export
      ✔ support-decorators-before-export: support decorators before export
      ✔ support-using-keyword: Support `using` keyword
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rollup!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
