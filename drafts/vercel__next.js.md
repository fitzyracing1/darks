<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143131 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on canary ("build-and-test", "Update Font Data")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### build-and-test (`.github/workflows/build_and_test.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39693075492 — dark (conclusion: `failure`), 2026-10-21 23:23 UTC
- Dark since: 2026-10-21 23:23 UTC (first run of the current streak)
- Job / step: `test rspack dev (4/5, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-dev-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
test/e2e/url-imports/url-imports.test.ts finished on retry 0/2 in 12.884s
test/e2e/use-router-with-rewrites/use-router-with-rewrites.test.ts finished on retry 0/2 in 14.642s
test/e2e/prerender.test.ts finished on retry 0/2 in 76.284s
test/e2e/next-image-new/app-dir/app-dir.test.ts finished on retry 0/2 in 210.238s
Some tests failed
Successfully updated test timings in KV store
exiting with code 1
##[error]Process completed with exit code 1.
```

</details>

### Update Font Data (`.github/workflows/update_fonts_data.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39698867219 — dark (conclusion: `failure`), 2026-10-22 00:18 UTC
- Dark since: 2026-10-22 00:18 UTC (first run of the current streak)
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
