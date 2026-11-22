<!-- dark-draft: twbs/bootstrap -->
<!-- draft-state: ready -->
# Upstream issue draft: twbs/bootstrap

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/twbs/bootstrap/issues/new
- **Stars:** 175108 · **Generated:** 2026-11-22T00:55:06.197Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Lint" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Lint** workflow (`.github/workflows/lint.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/twbs/bootstrap/actions/runs/44952718361 — dark (conclusion: `failure`), 2026-11-21 21:40 UTC
- Dark since: 2026-11-20 18:41 UTC (first run of the current streak)
- Job / step: `lint` → `Lint`
- Likely cause: ERROR: "docs-mdx" exited with 1.

<details><summary>End of the job log</summary>

```
  1345:1  warning  This line has a length of 214. Maximum allowed is 200  @stylistic/max-len
  1372:1  warning  This line has a length of 202. Maximum allowed is 200  @stylistic/max-len
  1394:1  warning  This line has a length of 204. Maximum allowed is 200  @stylistic/max-len
/home/runner/work/bootstrap/bootstrap/js/tests/unit/tooltip.spec.js
  1511:1  warning  File has too many lines (1766). Maximum allowed is 1500  max-lines
✖ 17 problems (0 errors, 17 warnings)
ERROR: "docs-mdx" exited with 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining bootstrap!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
