<!-- dark-draft: avelino/awesome-go -->
<!-- draft-state: ready -->
# Upstream issue draft: avelino/awesome-go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/avelino/awesome-go/issues/new
- **Stars:** 195573 · **Generated:** 2026-11-23T18:39:43.208Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Auto-merge README PRs", "Check For Stale Repositories")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Auto-merge README PRs (`.github/workflows/auto-merge-readme.yaml`)

- Latest run on `main`: https://github.com/avelino/awesome-go/actions/runs/45237357333 — dark (conclusion: `failure`), 2026-11-23 18:20 UTC
- Dark since: 2026-11-17 11:48 UTC (first run of the current streak)
- Job / step: `Auto-merge README PRs` → `Merge eligible PRs`
- Likely cause: "message": "Not Found",

<details><summary>End of the job log</summary>

```
#5780: skip, patch removes a line: "-- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Your practical guide on the ins-and-outs of Go development, covering the standard li…
#5111: skip, not mergeable
#4669: skip, no maintainer approval on head ec475be
#4629: skip, no maintainer approval on head 8f3f7f9
#4594: skip, not mergeable
#4561: skip, not mergeable
exit status 1
##[error]Process completed with exit code 1.
```

</details>

### Check For Stale Repositories (`.github/workflows/run-check.yaml`)

- Latest run on `main`: https://github.com/avelino/awesome-go/actions/runs/44965569705 — dark (conclusion: `failure`), 2026-11-22 00:13 UTC
- Dark since: 2026-11-22 00:13 UTC (first run of the current streak)
- Job / step: `Running test` → `run script`
- Likely cause: FAIL	github.com/avelino/awesome-go	0.137s

<details><summary>End of the job log</summary>

```
a7623113f007bfaad6de95afc127c4429536d503
=== RUN   TestStaleRepository
    stale_repositories_test.go:274: getAllFlaggedRepositories: rate limit or auth failure (status 401)
--- FAIL: TestStaleRepository (0.13s)
FAIL
exit status 1
FAIL	github.com/avelino/awesome-go	0.137s
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining awesome-go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
