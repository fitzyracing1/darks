<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28784 · **Generated:** 2026-11-27T12:42:45.007Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "PBT campaign" workflow getting cancelled on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **PBT campaign** workflow (`.github/workflows/pbt-campaign.yml`) on `main` has been getting cancelled since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/45957933341 — dark (conclusion: `cancelled`), 2026-11-27 07:21 UTC
- Dark since: 2026-11-25 07:22 UTC (first run of the current streak)
- Job / step: `campaign` → `Hunt`
- Likely cause: The job has exceeded the maximum execution time of 20m0s

<details><summary>End of the job log</summary>

```
 + watchfiles==1.2.0
 + wcwidth==0.8.2
 + websockets==16.1.1
##[end-action id=__self.__run;outcome=success;conclusion=success;duration_ms=3263]
Cache not found for input keys: pbt-db-45957933341-1, pbt-db-
bringing up nodes...
bringing up nodes...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
