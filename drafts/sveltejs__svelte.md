<!-- dark-draft: sveltejs/svelte -->
<!-- draft-state: ready -->
# Upstream issue draft: sveltejs/svelte

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/sveltejs/svelte/issues/new
- **Stars:** 89828 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/sveltejs/svelte/actions/runs/44729669960 — dark (conclusion: `failure`), 2026-11-20 11:41 UTC
- Dark since: 2026-11-20 11:41 UTC (first run of the current streak)
- Job / step: `Tests (22, ubuntu-latest)` → `Run pnpm test`
- Likely cause: The strategy configuration was canceled because "Tests._20_windows-latest" failed

<details><summary>End of the job log</summary>

```
> vitest run
 RUN  v4.1.7 /home/runner/work/svelte/svelte
init
 Test Files  46 passed (46)
      Tests  8422 passed | 39 skipped (8461)
   Start at  11:44:57
   Duration  87.81s (transform 52.44s, setup 0ms, import 48.87s, tests 198.54s, environment 7.12s)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining svelte!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
