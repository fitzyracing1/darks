<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143214 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Update Font Data" workflow failing on canary since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Update Font Data** workflow (`.github/workflows/update_fonts_data.yml`) on `canary` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40044332231 — dark (conclusion: `failure`), 2026-10-24 00:18 UTC
- Dark since: 2026-10-24 00:18 UTC (first run of the current streak)
- Job / step: `create-pull-request` → `Create Pull Request`
- Likely cause: 'husky - pre-commit script failed (code 1)\n'

<details><summary>End of the job log</summary>

```
    '\n' +
    '  ⚠ lint-staged prevented an empty git commit.\n' +
    '  Use the --allow-empty option to continue, or check your task configuration\n' +
    '\n' +
    '[ELIFECYCLE] Command failed with exit code 1.\n' +
    'husky - pre-commit script failed (code 1)\n'
}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
