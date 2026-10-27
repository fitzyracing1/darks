<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: resolved -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** resolved — lit again (2026-10-27); nothing to file
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 458006 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI - Node.js" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI - Node.js** workflow (`.github/workflows/node.js-tests.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/40463310722 — dark (conclusion: `failure`), 2026-10-27 06:48 UTC
- Dark since: 2026-10-27 06:48 UTC (first run of the current streak)
- Job / step: `Lint (24)` → `Lint Source Files`
- Likely cause: command (/home/runner/work/freeCodeCamp/freeCodeCamp/) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run lint-root exited (1)

<details><summary>End of the job log</summary>

```
cache miss, executing c563a5aa2cc0dd9a
$ pnpm npm-run-all lint:*
$ prettier --list-different .
README.md
[ELIFECYCLE] Command failed with exit code 1.
ERROR: "lint:prettier" exited with 1.
[ELIFECYCLE] Command failed with exit code 1.
##[error]command (/home/runner/work/freeCodeCamp/freeCodeCamp/) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run lint-root exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
