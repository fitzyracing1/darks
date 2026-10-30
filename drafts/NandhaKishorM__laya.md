<!-- dark-draft: NandhaKishorM/laya -->
<!-- draft-state: ready -->
# Upstream issue draft: NandhaKishorM/laya

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NandhaKishorM/laya/issues/new
- **Stars:** 34642 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/40918223894 — dark (conclusion: `failure`), 2026-10-29 17:07 UTC
- Dark since: 2026-10-29 17:07 UTC (first run of the current streak)
- Job / step: `tests (windows)` → `Test suites`
- Likely cause: 1 suite invocation(s) failed:

<details><summary>End of the job log</summary>

```
tests/test_system_one_lang.py::test_lang_temperatures_still_clamps_an_override
  D:\a\laya\laya\tests\test_system_one_lang.py:53: RuntimeWarning: laya: language override 'de' ships invalid temperatures or values outside [0.5, 5]; using temperature[0]=99 -> 5, temperature[1]=0.01 -> 0.5. Treat conf…
    return resolve_lang_temperatures(raw, base_temperature)
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
706 passed, 1 skipped, 7 warnings in 38.93s
1 suite invocation(s) failed:
  - tests/test_revision_pinning.py [exit 1]
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining laya!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
