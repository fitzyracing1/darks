<!-- dark-draft: avelino/awesome-go -->
<!-- draft-state: resolved -->
# Upstream issue draft: avelino/awesome-go

- **Status:** resolved — lit again (2026-11-12); nothing to file
- **Would be filed at:** https://github.com/avelino/awesome-go/issues/new
- **Stars:** 193359 · **Generated:** 2026-11-12T00:55:01.455Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Check For Stale Repositories" workflow failing on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Check For Stale Repositories** workflow (`.github/workflows/run-check.yaml`) on `main` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/avelino/awesome-go/actions/runs/42428804638 — dark (conclusion: `failure`), 2026-11-08 00:13 UTC
- Dark since: 2026-11-08 00:13 UTC (first run of the current streak)
- Job / step: `Running test` → `run script`
- Likely cause: FAIL	github.com/avelino/awesome-go	0.168s

<details><summary>End of the job log</summary>

```
499762cd36b35c31c2ae860f3d17d2086464411a
=== RUN   TestStaleRepository
    stale_repositories_test.go:274: getAllFlaggedRepositories: rate limit or auth failure (status 401)
--- FAIL: TestStaleRepository (0.16s)
FAIL
exit status 1
FAIL	github.com/avelino/awesome-go	0.168s
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining awesome-go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
