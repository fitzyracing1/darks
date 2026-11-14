<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: ready -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 81672 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI/CD Pipeline", "no-metaharness-smoke", "all-plugins-smoke", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI/CD Pipeline (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/43544676876 — dark (conclusion: `failure`), 2026-11-14 02:09 UTC
- Dark since: 2026-11-12 02:08 UTC (first run of the current streak)
- Job / step: `Test Suite (ubuntu-latest)` → `Run all tests`
- Likely cause: AssertionError: expected 0.0004374980926513672 to be greater than 0.001

<details><summary>End of the job log</summary>

```
CI test ratchet: FAILED — 2 unexpected failing file(s)
  + plugins/ruflo-console/tests/write-argv.spec.ts
      ✗ the POSIX scripts on a real disk (sh and dd as this machine has them) eight writers of 55 kB batches through the POSIX append tear no line here (one dd block per batch)
        AssertionError: expected [ …(1620) ] to have a length of 2400 but got 1620
  + v3/@claude-flow/neural/__tests__/moe-router-load-balance.test.ts
      ✗ computeLoadBalanceLoss() uses the mean router probability (#4381) is not driven by the current call: one divergent query leaves the loss at the historical value
        AssertionError: expected 0.0004374980926513672 to be greater than 0.001
##[error]Process completed with exit code 1.
```

</details>

### no-metaharness-smoke (`.github/workflows/no-metaharness-smoke.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/43505546146 — dark (conclusion: `failure`), 2026-11-13 20:52 UTC
- Dark since: 2026-11-12 20:34 UTC (first run of the current streak)
- Job / step: `smoke-without-metaharness` → `Run meta-smoke (should pass with current optional deps in place)`
- Likely cause: ⚠ 1 plugin(s) failed their smoke contract — see failing steps above.

<details><summary>End of the job log</summary>

```
| `agentic-qe-fleet (external)` | ✓ | — | 5.3s |  |
| `agentdb (external)` | ✓ | — | 1.8s |  |
| `agentic-flow (external)` | ✓ | — | 4.1s |  |
| `changelog contract` | ✓ | 4/4 | 0.0s |  |
| `guard-probe (fast)` | ✓ | 2817/2817 | 148.5s |  |
**Summary**: 51/52 plugins OK · 3581/3582 steps passed · 570.4s wall (parallel: true)
⚠ 1 plugin(s) failed their smoke contract — see failing steps above.
##[error]Process completed with exit code 1.
```

</details>

### all-plugins-smoke (`.github/workflows/all-plugins-smoke.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/43314293871 — dark (conclusion: `failure`), 2026-11-12 21:51 UTC
- Dark since: 2026-11-12 20:56 UTC (first run of the current streak)
- Job / step: `smoke-all` → `Discover and run every plugin smoke contract (parallel)`
- Likely cause: "stepsFailed": 1,

<details><summary>End of the job log</summary>

```
    "stepsPassed": 3581,
    "stepsFailed": 1,
    "stepsTotal": 3582,
    "wallTimeMs": 695030
  },
  "generatedAt": "2026-11-12T21:58:13.364Z"
}
##[error]Process completed with exit code 1.
```

</details>

### Clone Tracker (14-day rolling) (`.github/workflows/clone-tracker.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/43566356629 — dark (conclusion: `failure`), 2026-11-14 06:26 UTC
- Dark since: 2026-11-14 06:26 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining ruflo!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
