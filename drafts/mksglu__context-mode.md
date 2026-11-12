<!-- dark-draft: mksglu/context-mode -->
<!-- draft-state: ready -->
# Upstream issue draft: mksglu/context-mode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mksglu/context-mode/issues/new
- **Stars:** 33976 · **Generated:** 2026-11-12T18:39:27.411Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("readme-stats", "weekly", "ci")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### readme-stats (`.github/workflows/readme-stats.yml`)

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/43147933865 — dark (conclusion: `failure`), 2026-11-12 03:23 UTC
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

### weekly (`.github/workflows/weekly.yml`)

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/42560203886 — dark (conclusion: `failure`), 2026-11-09 04:09 UTC
- Dark since: 2026-11-09 04:09 UTC (first run of the current streak)
- Job / step: `weekly` → `Run node scripts/release/smoke.mjs --ref release --agent claude-code`
- Likely cause: Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@modelcontextprotocol/sdk' imported from /home/runner/work/context-mode/context-mode/scripts/release/smoke.mjs

<details><summary>End of the job log</summary>

```
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:763:56)
    at #resolve (node:internal/modules/esm/loader:687:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:607:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:276:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}
Node.js v24.22.2
##[error]Process completed with exit code 1.
```

</details>

### ci (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/43267375799 — dark (conclusion: `failure`), 2026-11-12 17:14 UTC
- Dark since: 2026-11-12 17:14 UTC (first run of the current streak)
- Job / step: `ci (windows-latest, node 24.15.0)` → `D3 hook overhead p95 <= 15 ms (perf check; cold first call is info)`
- Likely cause: {"ok":false,"budgetMs":15,"samples":40,"platform":"win32","node":"v24.15.0","cold":{"claude-code":{"firstWallMs":64,"bareMs":48,"firstOverheadMs":16},"codex":{"firstWallMs":65,"bareMs":49,"firstOverheadMs":16}},"agents"…

<details><summary>End of the job log</summary>

```
gate milestone M6
{"ok":true,"runs":10,"alive":0,"noPid":0,"graceMs":1000,"results":[{"run":1,"gpid":2032,"alive":false},{"run":2,"gpid":3232,"alive":false},{"run":3,"gpid":8872,"alive":false},{"run":4,"gpid":7992,"alive":false},{"run":5…
{"ok":true,"runs":30,"taskkillMs":{"p50":71,"max":79},"goneAfterMs":{"p50":118,"max":128},"rows":[{"taskkillMs":71,"goneAfterMs":118},{"taskkillMs":74,"goneAfterMs":121},{"taskkillMs":71,"goneAfterMs":118},{"taskkillMs"…
{"ok":true,"os":"win32","node":"v24.15.0","budgetMs":250,"trace":true,"crash":null,"rows":[{"call":"ctx_index","ms":190},{"call":"ctx_stats","ms":12.9},{"call":"ctx_stats","ms":8.7},{"call":"ctx_search","ms":15},{"call"…
{"ok":true,"os":"win32","node":"v24.15.0","budgetMs":250,"trace":false,"crash":null,"rows":[{"call":"ctx_index","ms":133.5},{"call":"ctx_stats","ms":13.9},{"call":"ctx_stats","ms":8.2},{"call":"ctx_search","ms":15.6},{"…
{"ok":true,"os":"win32","node":"v24.15.0","budgetMs":250,"trace":false,"crash":{"found":true},"rows":[{"call":"ctx_index","ms":149.1}],"over":0,"found":true}
{"ok":false,"budgetMs":15,"samples":40,"platform":"win32","node":"v24.15.0","cold":{"claude-code":{"firstWallMs":64,"bareMs":48,"firstOverheadMs":16},"codex":{"firstWallMs":65,"bareMs":49,"firstOverheadMs":16}},"agents"…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining context-mode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
