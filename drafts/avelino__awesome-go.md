<!-- dark-draft: avelino/awesome-go -->
<!-- draft-state: ready -->
# Upstream issue draft: avelino/awesome-go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/avelino/awesome-go/issues/new
- **Stars:** 191015 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Check For Stale Repositories" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Check For Stale Repositories** workflow (`.github/workflows/run-check.yaml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/avelino/awesome-go/actions/runs/40146366592 — dark (conclusion: `failure`), 2026-10-25 00:21 UTC
- Dark since: 2026-10-25 00:21 UTC (first run of the current streak)
- Job / step: `Running test` → `run script`
- Likely cause: FAIL	github.com/avelino/awesome-go	0.234s

<details><summary>End of the job log</summary>

```
be87bc4b73447b87438ad8434032d3abce59ad02
=== RUN   TestStaleRepository
    stale_repositories_test.go:274: getAllFlaggedRepositories: rate limit or auth failure (status 401)
--- FAIL: TestStaleRepository (0.23s)
FAIL
exit status 1
FAIL	github.com/avelino/awesome-go	0.234s
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining awesome-go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
