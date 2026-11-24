<!-- dark-draft: Graphify-Labs/graphify -->
<!-- draft-state: ready -->
# Upstream issue draft: Graphify-Labs/graphify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Graphify-Labs/graphify/issues/new
- **Stars:** 152758 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on v8 since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `v8` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `v8`: https://github.com/Graphify-Labs/graphify/actions/runs/45246779017 — dark (conclusion: `failure`), 2026-11-23 19:14 UTC
- Dark since: 2026-11-23 13:38 UTC (first run of the current streak)
- Job / step: `test (3.11)` → `Run tests`
- Likely cause: The strategy configuration was canceled because "test._3_12" failed

<details><summary>End of the job log</summary>

```
........................................................................ [ 88%]
........................................................................ [ 89%]
s....................................................................... [ 89%]
........................................................................ [ 90%]
........................................................................ [ 91%]
........................................................................ [ 91%]
........................................................................ [ 92%]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining graphify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
