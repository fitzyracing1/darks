<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 17582 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/40958538493 — dark (conclusion: `failure`), 2026-10-29 21:31 UTC
- Dark since: 2026-10-29 17:28 UTC (first run of the current streak)
- Job / step: `UX pipeline tests` → `Console browser security suite (headless Chrome)`
- Likely cause: # fail 1

<details><summary>End of the job log</summary>

```
# suites 0
# pass 24
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 24348.562839
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
