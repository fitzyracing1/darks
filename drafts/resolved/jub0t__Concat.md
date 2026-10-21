<!-- dark-draft: jub0t/Concat -->
<!-- draft-state: resolved -->
# Upstream issue draft: jub0t/Concat

- **Status:** resolved — lit again (2026-10-21); nothing to file
- **Would be filed at:** https://github.com/jub0t/Concat/issues/new
- **Stars:** 9969 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/jub0t/Concat/actions/runs/39460556220 — dark (conclusion: `failure`), 2026-10-20 16:47 UTC
- Dark since: 2026-10-20 16:31 UTC (first run of the current streak)
- Job / step: `Engine tests and lints` → `Build the tests`
- Likely cause: The action 'Build the tests' has timed out after 25 minutes.

<details><summary>End of the job log</summary>

```
   Compiling colorchoice v1.0.5
   Compiling anstyle-query v1.1.5
   Compiling simdutf8 v0.1.5
   Compiling is_terminal_polyfill v1.70.2
   Compiling anstream v1.0.0
   Compiling simd_cesu8 v1.2.0
   Compiling jni v0.22.4
##[error]The action 'Build the tests' has timed out after 25 minutes.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Concat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
