<!-- dark-draft: openfilm/openfilm -->
<!-- draft-state: ready -->
# Upstream issue draft: openfilm/openfilm

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openfilm/openfilm/issues/new
- **Stars:** 9444 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/openfilm/openfilm/actions/runs/45702905700 — dark (conclusion: `failure`), 2026-11-25 21:17 UTC
- Dark since: 2026-11-23 11:02 UTC (first run of the current streak)
- Job / step: `macos / shard 3/3` → `Run node scripts/ci-test.mjs 3/3`
- Likely cause: # fail 0

<details><summary>End of the job log</summary>

```
# suites 0
# pass 265
# fail 0
# cancelled 0
# skipped 2
# todo 0
# duration_ms 15329.167666
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openfilm!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
