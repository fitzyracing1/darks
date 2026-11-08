<!-- dark-draft: mksglu/context-mode -->
<!-- draft-state: ready -->
# Upstream issue draft: mksglu/context-mode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mksglu/context-mode/issues/new
- **Stars:** 33672 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("readme-stats", "ci")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### readme-stats (`.github/workflows/readme-stats.yml`)

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/42442539321 — dark (conclusion: `failure`), 2026-11-08 03:23 UTC
- Dark since: 2026-11-05 03:23 UTC (first run of the current streak)
- Job / step: `readme-stats` → `commit only if a file changed`
- Likely cause: error: failed to push some refs to 'https://github.com/mksglu/context-mode'

<details><summary>End of the job log</summary>

```
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/mksglu/context-mode'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
##[error]Process completed with exit code 1.
```

</details>

### ci (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/42479503458 — dark (conclusion: `failure`), 2026-11-08 12:17 UTC
- Dark since: 2026-11-08 12:17 UTC (first run of the current streak)
- Job / step: `ci (macos-latest, node 24.15.0)` → `D3 hook overhead p95 <= 15 ms (perf check; cold first call is info)`
- Likely cause: {"ok":false,"budgetMs":15,"samples":40,"platform":"darwin","node":"v24.15.0","cold":{"claude-code":{"firstWallMs":61,"bareMs":46,"firstOverheadMs":15},"codex":{"firstWallMs":50,"bareMs":39,"firstOverheadMs":11}},"agents…

<details><summary>End of the job log</summary>

```
  npm audit fix --force
Run `npm audit` for details.
gate milestone M6
{"ok":true,"os":"darwin","node":"v24.15.0","budgetMs":250,"trace":true,"crash":null,"rows":[{"call":"ctx_index","ms":91.9},{"call":"ctx_stats","ms":38.4},{"call":"ctx_stats","ms":3.3},{"call":"ctx_search","ms":5.1},{"ca…
{"ok":true,"os":"darwin","node":"v24.15.0","budgetMs":250,"trace":false,"crash":null,"rows":[{"call":"ctx_index","ms":88.1},{"call":"ctx_stats","ms":6.5},{"call":"ctx_stats","ms":7.8},{"call":"ctx_search","ms":10.9},{"c…
{"ok":true,"os":"darwin","node":"v24.15.0","budgetMs":250,"trace":false,"crash":{"found":true},"rows":[{"call":"ctx_index","ms":57.3}],"over":0,"found":true}
{"ok":false,"budgetMs":15,"samples":40,"platform":"darwin","node":"v24.15.0","cold":{"claude-code":{"firstWallMs":61,"bareMs":46,"firstOverheadMs":15},"codex":{"firstWallMs":50,"bareMs":39,"firstOverheadMs":11}},"agents…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining context-mode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
