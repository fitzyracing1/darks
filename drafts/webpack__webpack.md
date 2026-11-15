<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66007 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-11-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-15. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/43738571687 — dark (conclusion: `failure`), 2026-11-15 16:59 UTC
- Dark since: 2026-11-15 16:59 UTC (first run of the current streak)
- Job / step: `lint` → `Run yarn lint`
- Likely cause: lib/javascript/parse-error-codes.js is up to date

<details><summary>End of the job log</summary>

```
$ yarn fmt:check
$ node node_modules/prettier/bin/prettier.cjs --cache --ignore-unknown . --check
Checking formatting...
All matched files use Prettier code style!
$ yarn lint:code
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
