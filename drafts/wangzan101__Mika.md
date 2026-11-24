<!-- dark-draft: wangzan101/Mika -->
<!-- draft-state: ready -->
# Upstream issue draft: wangzan101/Mika

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/wangzan101/Mika/issues/new
- **Stars:** 9859 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/wangzan101/Mika/actions/runs/45456812501 — dark (conclusion: `failure`), 2026-11-24 18:11 UTC
- Dark since: 2026-11-24 12:52 UTC (first run of the current streak)
- Job / step: `cli (Python)` → `Translation resource checks`
- Likely cause: 135 translation resource issue(s).

<details><summary>End of the job log</summary>

```
values-tr: missing string/calls_rule_delay
values-tr: missing string/calls_scope_all_short
values-tr: missing string/calls_scope_strangers_short
values-tr: missing string/calls_seconds_value
values-tr: missing string/calls_task_more
values-tr: missing string/calls_this_call
135 translation resource issue(s).
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Mika!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
