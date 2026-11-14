<!-- dark-draft: ccfos/nightingale -->
<!-- draft-state: ready -->
# Upstream issue draft: ccfos/nightingale

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccfos/nightingale/issues/new
- **Stars:** 13487 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "test" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccfos/nightingale/actions/runs/43443403280 — dark (conclusion: `failure`), 2026-11-13 14:30 UTC
- Dark since: 2026-11-13 14:30 UTC (first run of the current streak)
- Job / step: `test` → `Run unit tests`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
ok  	github.com/ccfos/nightingale/v6/pushgw/router	0.882s	coverage: 88.6% of statements
ok  	github.com/ccfos/nightingale/v6/pushgw/writer	0.060s	coverage: 88.1% of statements
ok  	github.com/ccfos/nightingale/v6/storage	0.120s	coverage: 30.2% of statements
ok  	github.com/ccfos/nightingale/v6/tsdb	0.294s	coverage: 84.1% of statements
ok  	github.com/ccfos/nightingale/v6/tsdb/router	0.105s	coverage: 81.4% of statements
	github.com/ccfos/nightingale/v6/tsdb/tconf		coverage: 0.0% of statements
FAIL
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nightingale!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
