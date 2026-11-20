<!-- dark-draft: avelino/awesome-go -->
<!-- draft-state: ready -->
# Upstream issue draft: avelino/awesome-go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/avelino/awesome-go/issues/new
- **Stars:** 194982 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Auto-merge README PRs" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Auto-merge README PRs** workflow (`.github/workflows/auto-merge-readme.yaml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/avelino/awesome-go/actions/runs/44792009460 — dark (conclusion: `failure`), 2026-11-20 18:21 UTC
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

If this is already known or expected, feel free to close. Thanks for maintaining awesome-go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
