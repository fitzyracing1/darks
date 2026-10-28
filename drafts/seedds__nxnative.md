<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 8178 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "tests" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **tests** workflow (`.github/workflows/tests.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/40643682303 — dark (conclusion: `failure`), 2026-10-28 06:24 UTC
- Dark since: 2026-10-28 06:24 UTC (first run of the current streak)
- Job / step: `Host unit tests and CPU-only gfx tests` → `Host unit tests (dm/host/tests)`
- Likely cause: Assertion failed: (left.testPlayer.stops == 1), function main, file t_haptics_apple.m, line 143.

<details><summary>End of the job log</summary>

```
hid players: 119 checks, 0 failed
build/t_haptics
haptics: state, timing, routing, sanitization and mapping passed
build/t_haptics_apple
[RED] haptics: test left start engine: The operation couldn’t be completed. (com.apple.CoreHaptics error -4810.) (com.apple.CoreHaptics -4810)
Assertion failed: (left.testPlayer.stops == 1), function main, file t_haptics_apple.m, line 143.
make: *** [run] Abort trap: 6
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
