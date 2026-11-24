<!-- dark-draft: ChromeDevTools/chrome-devtools-mcp -->
<!-- draft-state: resolved -->
# Upstream issue draft: ChromeDevTools/chrome-devtools-mcp

- **Status:** resolved — lit again (2026-11-24); nothing to file
- **Would be filed at:** https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/new
- **Stars:** 59029 · **Generated:** 2026-11-24T00:51:11.893Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Compile and run tests" workflow failing on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Compile and run tests** workflow (`.github/workflows/run-tests.yml`) on `main` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ChromeDevTools/chrome-devtools-mcp/actions/runs/45261817758 — dark (conclusion: `failure`), 2026-11-23 20:40 UTC
- Dark since: 2026-11-23 20:40 UTC (first run of the current streak)
- Job / step: `Tests on ubuntu-latest with node 26` → `Run tests`
- Likely cause: expected: undefined,

<details><summary>End of the job log</summary>

```
        at TestContext.<anonymous> (file:///home/runner/work/chrome-devtools-mcp/chrome-devtools-mcp/out/Default/gen/tests/daemon/client.test.js:196:24)
        at async Test.run (node:internal/test_runner/test:1409:7)
        at async Suite.processPendingSubtests (node:internal/test_runner/test:974:7),
    expected: undefined,
    operator: 'doesNotThrow',
    diff: 'simple'
  }
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining chrome-devtools-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
