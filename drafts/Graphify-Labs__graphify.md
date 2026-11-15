<!-- dark-draft: Graphify-Labs/graphify -->
<!-- draft-state: ready -->
# Upstream issue draft: Graphify-Labs/graphify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Graphify-Labs/graphify/issues/new
- **Stars:** 148083 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on v8 since 2026-11-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `v8` has been failing since 2026-11-14. Here is what I saw, in case it's useful:

- Latest run on `v8`: https://github.com/Graphify-Labs/graphify/actions/runs/43642961926 — dark (conclusion: `failure`), 2026-11-14 21:28 UTC
- Dark since: 2026-11-14 21:28 UTC (first run of the current streak)
- Job / step: `test (3.12)` → `Run tests`
- Likely cause: The strategy configuration was canceled because "test._3_14" failed

<details><summary>End of the job log</summary>

```
........................................................................ [ 92%]
........................................................................ [ 93%]
........................................................................ [ 93%]
........................................................................ [ 94%]
........................................................................ [ 95%]
........................................................................ [ 95%]
........................................................................ [ 96%]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining graphify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
