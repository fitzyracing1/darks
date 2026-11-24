<!-- dark-draft: HeyPuter/everything -->
<!-- draft-state: ready -->
# Upstream issue draft: HeyPuter/everything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/HeyPuter/everything/issues/new
- **Stars:** 9479 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Browser tests" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Browser tests** workflow (`.github/workflows/e2e.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/HeyPuter/everything/actions/runs/45338730565 — dark (conclusion: `failure`), 2026-11-24 06:12 UTC
- Dark since: 2026-11-24 06:12 UTC (first run of the current streak)
- Job / step: `documents (4/8)` → `Run npm run test:browser -- --shard=4/8`
- Likely cause: 26 failed

<details><summary>End of the job log</summary>

```
    tests/browser/manual-break-metrics.spec.js:8:27 › native manual-break metrics and editing, compatibility 14
    tests/browser/manual-break-metrics.spec.js:8:27 › native manual-break metrics and editing, compatibility 15
    tests/browser/merged-ending-rows.spec.js:7:27 › matches native merged ending rows in compatibility 14
    tests/browser/merged-ending-rows.spec.js:7:27 › matches native merged ending rows in compatibility 15
    tests/browser/metafile-fonts.spec.js:23:1 › missing EMF fonts are reported once without disabling editing or changing the package
  14 skipped
  374 passed (21.3m)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining everything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
