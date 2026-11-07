<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: ready -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 81083 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Clone Tracker (14-day rolling)", "no-metaharness-smoke", "all-plugins-smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Clone Tracker (14-day rolling) (`.github/workflows/clone-tracker.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/42254165419 — dark (conclusion: `failure`), 2026-11-06 16:37 UTC
- Dark since: 2026-11-06 16:37 UTC (first run of the current streak)
- Job / step: `Snapshot clones for ruflo ecosystem` → `Run clone tracker`
- Likely cause: clone tracker: 5/5 repo(s) failed (ruvnet/ruflo, ruvnet/agentdb, ruvnet/agentic-flow, ruvnet/ruvector, ruvnet/ruv-FANN). Set the TRAFFIC_TOKEN secret (fine-grained PAT, Administration: read on these repos). No snapshot …

<details><summary>End of the job log</summary>

```
  [error] failed to fetch clones for ruvnet/agentic-flow: gh: Resource not accessible by integration (HTTP 403)
  ruvnet/agentic-flow      count=       0  uniques=     0
  [error] failed to fetch clones for ruvnet/ruvector: gh: Resource not accessible by integration (HTTP 403)
  ruvnet/ruvector          count=       0  uniques=     0
  [error] failed to fetch clones for ruvnet/ruv-FANN: gh: Resource not accessible by integration (HTTP 403)
  ruvnet/ruv-FANN          count=       0  uniques=     0
clone tracker: 5/5 repo(s) failed (ruvnet/ruflo, ruvnet/agentdb, ruvnet/agentic-flow, ruvnet/ruvector, ruvnet/ruv-FANN). Set the TRAFFIC_TOKEN secret (fine-grained PAT, Administration: read on these repos). No snapshot …
##[error]Process completed with exit code 1.
```

</details>

### no-metaharness-smoke (`.github/workflows/no-metaharness-smoke.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/42297689454 — dark (conclusion: `failure`), 2026-11-06 21:33 UTC
- Dark since: 2026-11-06 21:00 UTC (first run of the current streak)
- Job / step: `smoke-without-metaharness` → `Run meta-smoke (should pass with current optional deps in place)`
- Likely cause: ⚠ 1 plugin(s) failed their smoke contract — see failing steps above.

<details><summary>End of the job log</summary>

```
| `agentic-qe-fleet (external)` | ✓ | — | 5.3s |  |
| `agentdb (external)` | ✓ | — | 2.2s |  |
| `agentic-flow (external)` | ✓ | — | 4.4s |  |
| `changelog contract` | ✓ | 4/4 | 0.0s |  |
| `guard-probe (fast)` | ✓ | 2817/2817 | 109.0s |  |
**Summary**: 51/52 plugins OK · 3580/3581 steps passed · 400.5s wall (parallel: true)
⚠ 1 plugin(s) failed their smoke contract — see failing steps above.
##[error]Process completed with exit code 1.
```

</details>

### all-plugins-smoke (`.github/workflows/all-plugins-smoke.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/42293029604 — dark (conclusion: `failure`), 2026-11-06 21:00 UTC
- Dark since: 2026-11-06 21:00 UTC (first run of the current streak)
- Job / step: `smoke-all` → `Discover and run every plugin smoke contract (parallel)`
- Likely cause: "stepsFailed": 1,

<details><summary>End of the job log</summary>

```
    "stepsPassed": 3580,
    "stepsFailed": 1,
    "stepsTotal": 3581,
    "wallTimeMs": 358617
  },
  "generatedAt": "2026-11-06T21:30:20.800Z"
}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ruflo!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
