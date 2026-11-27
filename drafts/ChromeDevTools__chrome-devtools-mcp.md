<!-- dark-draft: ChromeDevTools/chrome-devtools-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: ChromeDevTools/chrome-devtools-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/new
- **Stars:** 59533 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Compile and run tests" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Compile and run tests** workflow (`.github/workflows/run-tests.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ChromeDevTools/chrome-devtools-mcp/actions/runs/45877201798 — dark (conclusion: `failure`), 2026-11-26 18:35 UTC
- Dark since: 2026-11-26 18:35 UTC (first run of the current streak)
- Job / step: `Tests on ubuntu-latest with node 26` → `Run tests`
- Likely cause: expected: 'Successfully reloaded the page.\nAccepted a beforeunload dialog.',

<details><summary>End of the job log</summary>

```
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'Successfully reloaded the page.',
    expected: 'Successfully reloaded the page.\nAccepted a beforeunload dialog.',
    operator: 'strictEqual',
    diff: 'simple'
  }
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining chrome-devtools-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
