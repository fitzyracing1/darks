<!-- dark-draft: openfilm/openfilm -->
<!-- draft-state: ready -->
# Upstream issue draft: openfilm/openfilm

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openfilm/openfilm/issues/new
- **Stars:** 9670 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/openfilm/openfilm/actions/runs/46015574368 — dark (conclusion: `failure`), 2026-11-27 14:23 UTC
- Dark since: 2026-11-27 14:23 UTC (first run of the current streak)
- Job / step: `windows / shard 2/3` → `Run node scripts/ci-test.mjs 2/3`
- Likely cause: # fail 0

<details><summary>End of the job log</summary>

```
# suites 0
# pass 122
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 4707.9367
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openfilm!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
