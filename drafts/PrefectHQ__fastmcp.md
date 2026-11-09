<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28358 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Update SDK Documentation" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Update SDK Documentation** workflow (`.github/workflows/update-sdk-docs.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/42581547140 — dark (conclusion: `failure`), 2026-11-09 07:47 UTC
- Dark since: 2026-11-09 07:47 UTC (first run of the current streak)
- Job / step: `update-sdk-docs` → `Install just`
- Likely cause: Unexpected HTTP response: 504

<details><summary>End of the job log</summary>

```
 + wcwidth==0.8.2
 + websockets==16.1.1
##[start-action display=Run extractions/setup-crate@0551596312d4008a6dfbc4d3c38fa20eaef46d2d;id=__extractions_setup-just.__extractions_setup-crate]
Unexpected HTTP response: 504
Waiting 15 seconds before trying again
Unexpected HTTP response: 504
Waiting 13 seconds before trying again
##[error]Unexpected HTTP response: 504
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
