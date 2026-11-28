<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 481692 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mutation sweep" workflow getting cancelled on main since 2026-11-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mutation sweep** workflow (`.github/workflows/mutation.yml`) on `main` has been getting cancelled since 2026-11-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/46109339017 — dark (conclusion: `cancelled`), 2026-11-28 04:49 UTC
- Dark since: 2026-11-28 04:49 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
Mutation testing 91% (elapsed: ~1h 25m, remaining: ~8m) 876/1034 tested (133 survived, 7 timed out)
Mutation testing 91% (elapsed: ~1h 25m, remaining: ~8m) 878/1034 tested (133 survived, 7 timed out)
Mutation testing 91% (elapsed: ~1h 26m, remaining: ~7m) 880/1034 tested (133 survived, 7 timed out)
Mutation testing 91% (elapsed: ~1h 26m, remaining: ~7m) 880/1034 tested (133 survived, 7 timed out)
Mutation testing 91% (elapsed: ~1h 26m, remaining: ~7m) 882/1034 tested (133 survived, 7 timed out)
Mutation testing 91% (elapsed: ~1h 26m, remaining: ~7m) 882/1034 tested (133 survived, 7 timed out)
Mutation testing 91% (elapsed: ~1h 26m, remaining: ~7m) 884/1034 tested (133 survived, 7 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
