<!-- dark-draft: rollup/rollup -->
<!-- draft-state: resolved -->
# Upstream issue draft: rollup/rollup

- **Status:** resolved — lit again (2026-11-21); nothing to file
- **Would be filed at:** https://github.com/rollup/rollup/issues/new
- **Stars:** 26316 · **Generated:** 2026-11-21T06:41:51.202Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on master since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/build-and-tests.yml`) on `master` has been getting cancelled since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/rollup/rollup/actions/runs/44875616708 — dark (conclusion: `cancelled`), 2026-11-21 06:27 UTC
- Dark since: 2026-11-21 06:27 UTC (first run of the current streak)
- Job / step: `Coverage and Additional Tests` → `Build and run tests with coverage`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/master exists

<details><summary>End of the job log</summary>

```
[test:only:coverage]
[test:only:coverage]       ✔ interop: does not include the interop block (709ms)
[test:only:coverage]
[test:only:coverage] main.js → stdout...
[test:only:coverage]
[test:only:coverage]       ✔ jsx: supports jsx presets via CLI (796ms)
[test:only:coverage]       ✔ log-side-effects: logs side effects (669ms)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rollup!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
