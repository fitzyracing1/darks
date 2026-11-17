<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 465915 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mutation sweep" workflow getting cancelled on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mutation sweep** workflow (`.github/workflows/mutation.yml`) on `main` has been getting cancelled since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/44019863741 — dark (conclusion: `cancelled`), 2026-11-17 04:49 UTC
- Dark since: 2026-11-17 04:49 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 85% (elapsed: ~55m, remaining: ~9m) 785/1030 tested (108 survived, 0 timed out)
Mutation testing 85% (elapsed: ~55m, remaining: ~9m) 787/1030 tested (109 survived, 0 timed out)
Mutation testing 86% (elapsed: ~56m, remaining: ~9m) 789/1030 tested (109 survived, 0 timed out)
Mutation testing 86% (elapsed: ~56m, remaining: ~9m) 791/1030 tested (109 survived, 0 timed out)
Mutation testing 86% (elapsed: ~56m, remaining: ~9m) 792/1030 tested (109 survived, 0 timed out)
Mutation testing 86% (elapsed: ~56m, remaining: ~9m) 793/1030 tested (109 survived, 0 timed out)
Mutation testing 86% (elapsed: ~56m, remaining: ~9m) 796/1030 tested (109 survived, 0 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
