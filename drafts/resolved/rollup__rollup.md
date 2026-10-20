<!-- dark-draft: rollup/rollup -->
<!-- draft-state: resolved -->
# Upstream issue draft: rollup/rollup

- **Status:** resolved — lit again (2026-10-20); nothing to file
- **Would be filed at:** https://github.com/rollup/rollup/issues/new
- **Stars:** 26302 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on master since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/build-and-tests.yml`) on `master` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/rollup/rollup/actions/runs/39280765174 — dark (conclusion: `failure`), 2026-10-19 15:48 UTC
- Dark since: 2026-10-19 15:35 UTC (first run of the current streak)
- Job / step: `Test Node 18.20.0 (aarch64-apple-darwin)` → `Test Rollup`
- Likely cause: Error: Expected START event, got BUNDLE_END.

<details><summary>End of the job log</summary>

```
      at /Users/runner/work/rollup/rollup/src/watch/WatchEmitter.ts:30:5
      at Array.map (<anonymous>)
      at WatchEmitter.emit (src/watch/WatchEmitter.ts:29:78)
      at Task.run (src/watch/watch.ts:282:31)
      at Watcher.run (src/watch/watch.ts:173:4)
      at Watcher.announceChangesAndRebuild (src/watch/watch.ts:126:3)
      at Watcher.runExclusively (src/watch/watch.ts:107:4)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rollup!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
