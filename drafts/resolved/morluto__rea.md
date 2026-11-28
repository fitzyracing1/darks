<!-- dark-draft: morluto/rea -->
<!-- draft-state: resolved -->
# Upstream issue draft: morluto/rea

- **Status:** resolved — lit again (2026-11-28); nothing to file
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 480879 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Mutation sweep", "CI", "CodeQL production")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/45942198182 — dark (conclusion: `failure`), 2026-11-27 04:49 UTC
- Dark since: 2026-11-27 04:49 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 91% (elapsed: ~56m, remaining: ~5m) 899/1030 tested (135 survived, 8 timed out)
Mutation testing 91% (elapsed: ~56m, remaining: ~5m) 901/1030 tested (136 survived, 8 timed out)
Mutation testing 91% (elapsed: ~56m, remaining: ~5m) 903/1030 tested (138 survived, 8 timed out)
Mutation testing 91% (elapsed: ~57m, remaining: ~5m) 905/1030 tested (140 survived, 8 timed out)
Mutation testing 91% (elapsed: ~57m, remaining: ~5m) 907/1030 tested (140 survived, 8 timed out)
Mutation testing 91% (elapsed: ~57m, remaining: ~5m) 909/1030 tested (140 survived, 8 timed out)
Mutation testing 91% (elapsed: ~57m, remaining: ~5m) 911/1030 tested (140 survived, 8 timed out)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/46046263861 — dark (conclusion: `cancelled`), 2026-11-27 18:01 UTC
- Dark since: 2026-11-27 17:44 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/46045131745 — dark (conclusion: `cancelled`), 2026-11-27 17:52 UTC
- Dark since: 2026-11-27 17:44 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
