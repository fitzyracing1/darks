<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9429 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- CI E2E (`.github/workflows/ci-e2e.yaml`): [issue #2163](https://github.com/xberg-io/xberg/issues/2163) "ci(e2e): kotlin-android job loses its runner after ~1h50 on every completed run"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI Lint" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI Lint** workflow (`.github/workflows/ci-lint.yaml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39321778577 — dark (conclusion: `failure`), 2026-10-19 20:44 UTC
- Dark since: 2026-10-19 19:30 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
 INFO   dart: generating...
 INFO   php: generating...
 INFO   go: generating...
 INFO   java: generating...
 INFO   ffi: generating...
ERROR failed to render the e2e stage of alef's managed output: failed to load fixtures from fixtures: duplicate fixture ID '': found in 'repros/bidder-column-alignment/config.json' and 'repros/caltrans-native-table/conf…
task: Failed to run task "alef:verify": exit status 1
##[error]exit status 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
