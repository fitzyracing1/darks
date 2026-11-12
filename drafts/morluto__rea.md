<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 454179 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mutation sweep" workflow getting cancelled on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mutation sweep** workflow (`.github/workflows/mutation.yml`) on `main` has been getting cancelled since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43157532408 — dark (conclusion: `cancelled`), 2026-11-12 04:51 UTC
- Dark since: 2026-11-12 04:51 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 84% (elapsed: ~55m, remaining: ~10m) 843/1090 tested (125 survived, 5 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 845/1090 tested (126 survived, 5 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 847/1090 tested (127 survived, 5 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 849/1090 tested (127 survived, 5 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 851/1090 tested (128 survived, 5 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 853/1090 tested (128 survived, 5 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 855/1090 tested (128 survived, 5 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
