<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16621 · **Generated:** 2026-10-26T18:57:58.513Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "🦋 Changesets PR" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **🦋 Changesets PR** workflow (`.github/workflows/changesets-pr.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/40374557539 — dark (conclusion: `failure`), 2026-10-26 18:05 UTC
- Dark since: 2026-10-26 18:05 UTC (first run of the current streak)
- Job / step: `Create Release PR` → `Update PR title and enhance body`
- Likely cause: "message": "Server Error"

<details><summary>End of the job log</summary>

```
From https://github.com/triggerdotdev/trigger.dev
 * branch                changeset-release/main -> FETCH_HEAD
https://github.com/triggerdotdev/trigger.dev/pull/5073
gh: Server Error (HTTP 502)
{
  "message": "Server Error"
}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
