<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 11348 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Pages" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Pages** workflow (`.github/workflows/pages.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40633335436 — dark (conclusion: `failure`), 2026-10-28 04:37 UTC
- Dark since: 2026-10-27 23:51 UTC (first run of the current streak)
- Job / step: `build` → `Test the web app offline and across an update (headless Chrome)`
- Likely cause: error: v5's download is finished, not dropped: timed out after 240s; last state: {"build":"v6","caches":{"solidcraft-app /solidcraft/app/ 0.25.1-1d30dea8c4eea6aa":11,"solidcraft-app /solidcraft/app/ 0.25.1-c2849f639bdd2…

<details><summary>End of the job log</summary>

```
ok    deployed mid-download: v4's page doesn't fit v3's files, so v1 starts (4.0s)
ok    update: build v3 starts on the first launch; only it stays kept (4.0s)
ok    offline: build v3 starts from the kept copy (4.1s)
ok    slow network: build v3 starts from the kept copy (4.8s)
ok    update in another tab: the kept v3 still starts; its copy is retired, not deleted (5.7s)
ok    no open page uses them any more: the retired copies are deleted; v4 starts (4.0s)
error: v5's download is finished, not dropped: timed out after 240s; last state: {"build":"v6","caches":{"solidcraft-app /solidcraft/app/ 0.25.1-1d30dea8c4eea6aa":11,"solidcraft-app /solidcraft/app/ 0.25.1-c2849f639bdd2…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
