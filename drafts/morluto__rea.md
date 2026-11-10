<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 446956 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL production", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42712677108 — dark (conclusion: `skipped`), 2026-11-09 22:31 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42720635909 — dark (conclusion: `failure`), 2026-11-09 23:27 UTC
- Dark since: 2026-11-08 16:39 UTC (first run of the current streak)
- Job / step: `Documentation` → `Verify published routes, source links and local anchors`
- Likely cause: expected: true,

<details><summary>End of the job log</summary>

```
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '==',
  diff: 'simple'
}
Node.js v24.22.1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
