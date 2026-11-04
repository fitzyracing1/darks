<!-- dark-draft: mksglu/context-mode -->
<!-- draft-state: ready -->
# Upstream issue draft: mksglu/context-mode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mksglu/context-mode/issues/new
- **Stars:** 33457 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/41877498445 — dark (conclusion: `failure`), 2026-11-04 17:25 UTC
- Dark since: 2026-11-04 17:25 UTC (first run of the current streak)
- Job / step: `ci (ubuntu-latest, node 24.15.0)` → `v2 unit tests (TECH-SPEC 6.2a, DEVIATIONS D-M1-13, same as gate layer v2-unit)`
- Likely cause: expected: '2.0.0',

<details><summary>End of the job log</summary>

```
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: '2.0.0-next.39',
    expected: '2.0.0',
    operator: 'strictEqual',
    diff: 'simple'
  }
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining context-mode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
