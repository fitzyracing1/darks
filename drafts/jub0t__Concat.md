<!-- dark-draft: jub0t/Concat -->
<!-- draft-state: ready -->
# Upstream issue draft: jub0t/Concat

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/jub0t/Concat/issues/new
- **Stars:** 10866 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/jub0t/Concat/actions/runs/39708795592 — dark (conclusion: `failure`), 2026-10-22 01:58 UTC
- Dark since: 2026-10-21 11:12 UTC (first run of the current streak)
- Job / step: `Engine tests and lints` → `Build the tests`
- Likely cause: The action 'Build the tests' has timed out after 25 minutes.

<details><summary>End of the job log</summary>

```
   Compiling ryu v1.0.23
   Compiling base64 v0.13.1
   Compiling smol_str v0.2.2
   Compiling dpi v0.1.2
   Compiling macro_rules_attribute-proc_macro v0.2.3
   Compiling whisper-rs v0.16.0
   Compiling macro_rules_attribute v0.2.3
##[error]The action 'Build the tests' has timed out after 25 minutes.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Concat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
