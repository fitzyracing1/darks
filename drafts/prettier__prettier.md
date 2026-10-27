<!-- dark-draft: prettier/prettier -->
<!-- draft-state: ready -->
# Upstream issue draft: prettier/prettier

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/prettier/prettier/issues/new
- **Stars:** 52386 · **Generated:** 2026-10-27T12:57:18.218Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Prod" workflow getting cancelled on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Prod** workflow (`.github/workflows/prod-test.yml`) on `main` has been getting cancelled since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/prettier/prettier/actions/runs/40053505441 — dark (conclusion: `cancelled`), 2026-10-24 02:16 UTC
- Dark since: 2026-10-24 02:16 UTC (first run of the current streak)
- Job / step: `Node.js 14 on MacOS` → `Run Tests`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
PASS tests/format/css/case/format.test.js
PASS tests/format/css/character-escaping/format.test.js
PASS tests/format/css/color/format.test.js
PASS tests/format/css/atword/format.test.js
PASS tests/format/css/bom/format.test.js
PASS tests/format/css/_errors_/format.test.js
PASS tests/format/css/atrule/format.test.js
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining prettier!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
