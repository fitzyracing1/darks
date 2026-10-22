<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 8994 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Pages" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Pages** workflow (`.github/workflows/pages.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39722056038 — dark (conclusion: `failure`), 2026-10-22 04:22 UTC
- Dark since: 2026-10-22 04:22 UTC (first run of the current streak)
- Job / step: `build` → `Test the web app offline and across an update (headless Chrome)`
- Likely cause: error: only 6 of 8 slow files were asked for

<details><summary>End of the job log</summary>

```
     Running `target/debug/xtask web-offline-test --site dist/web`
ok    online: build v1 starts and is kept for offline use (4.2s)
ok    offline: build v1 starts from the kept copy (4.0s)
ok    another copy at another path keeps its own build; offline, v1 still starts here (4.0s)
ok    flaky: build v2 can't be downloaded whole, so v1 starts (3.9s)
ok    flaky again: build v3 neither, so v1 starts; v2's unfinished download is dropped (3.9s)
error: only 6 of 8 slow files were asked for
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
