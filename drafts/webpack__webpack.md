<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66004 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-11-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-14. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/43633514432 — dark (conclusion: `failure`), 2026-11-14 19:42 UTC
- Dark since: 2026-11-14 17:22 UTC (first run of the current streak)
- Job / step: `invariants` → `Syntax code its own tests run`
- Likely cause: error Command failed with exit code 1.

<details><summary>End of the job log</summary>

```
Ran all test suites matching test/unitCases/json/printer.unittest.js.
json: {"lib/json/jsonMinify.js":{"statements":0,"branches":0,"functions":0}}
Syntax code its own unit tests never run grew; cover it with a fixture or from the language's tokenizer, parser, printer or minifier test:
  lib/javascript/syntax-printer.js: 214 statements its own tests never run, 213 allowed
  lib/javascript/syntax-printer.js: 403 branches its own tests never run, 402 allowed
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
