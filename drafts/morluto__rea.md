<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 456531 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mutation sweep" workflow getting cancelled on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mutation sweep** workflow (`.github/workflows/mutation.yml`) on `main` has been getting cancelled since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43367989206 — dark (conclusion: `cancelled`), 2026-11-13 04:49 UTC
- Dark since: 2026-11-13 04:49 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 96% (elapsed: ~56m, remaining: ~2m) 1035/1090 tested (171 survived, 6 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 1039/1090 tested (172 survived, 6 timed out)
Mutation testing 97% (elapsed: ~56m, remaining: ~1m) 1043/1090 tested (174 survived, 6 timed out)
Mutation testing 97% (elapsed: ~56m, remaining: ~1m) 1045/1090 tested (174 survived, 6 timed out)
Mutation testing 97% (elapsed: ~57m, remaining: ~1m) 1049/1090 tested (174 survived, 6 timed out)
Mutation testing 97% (elapsed: ~57m, remaining: ~1m) 1051/1090 tested (175 survived, 6 timed out)
Mutation testing 98% (elapsed: ~57m, remaining: ~1m) 1054/1090 tested (175 survived, 6 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
