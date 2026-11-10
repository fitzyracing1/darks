<!-- dark-draft: prettier/prettier -->
<!-- draft-state: resolved -->
# Upstream issue draft: prettier/prettier

- **Status:** resolved — lit again (2026-11-10); nothing to file
- **Would be filed at:** https://github.com/prettier/prettier/issues/new
- **Stars:** 52410 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Prod", "Dev")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Prod (`.github/workflows/prod-test.yml`)

- Latest run on `main`: https://github.com/prettier/prettier/actions/runs/42771395673 — dark (conclusion: `cancelled`), 2026-11-10 06:52 UTC
- Dark since: 2026-11-10 06:52 UTC (first run of the current streak)
- Job / step: `Node.js 14 on MacOS` → `Run Tests`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
PASS tests/format/css/color/format.test.js
PASS tests/format/css/case/format.test.js
PASS tests/format/css/character-escaping/format.test.js
PASS tests/format/css/atword/format.test.js
PASS tests/format/css/bom/format.test.js
PASS tests/format/css/_errors_/format.test.js
PASS tests/format/css/atrule/format.test.js
##[error]The operation was canceled.
```

</details>

### Dev (`.github/workflows/dev-test.yml`)

- Latest run on `main`: https://github.com/prettier/prettier/actions/runs/42771395944 — dark (conclusion: `cancelled`), 2026-11-10 06:52 UTC
- Dark since: 2026-11-10 06:52 UTC (first run of the current streak)
- Job / step: `Node.js 26 on Windows` → `Run Tests`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
PASS tests/format/css/comments/format.test.js
PASS tests/format/css/color/format.test.js
PASS tests/format/css/case/format.test.js
PASS tests/format/css/bom/format.test.js
PASS tests/format/css/atword/format.test.js
PASS tests/format/css/atrule/format.test.js
^C
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prettier!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
