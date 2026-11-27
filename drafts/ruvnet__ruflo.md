<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: ready -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 82516 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI/CD Pipeline", "Clone Tracker (14-day rolling)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI/CD Pipeline (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/45926645948 — dark (conclusion: `failure`), 2026-11-27 02:09 UTC
- Dark since: 2026-11-27 02:09 UTC (first run of the current streak)
- Job / step: `Test Suite (ubuntu-latest)` → `Run all tests`
- Likely cause: AssertionError: expected 0.0002508610486984253 to be greater than 0.001

<details><summary>End of the job log</summary>

```
  duration_ms: 2.572636
  ...
JSON report written to /home/runner/work/ruflo/ruflo/.test-results/vitest.json
CI test ratchet: FAILED — 1 unexpected failing file(s)
  + v3/@claude-flow/neural/__tests__/moe-router-load-balance.test.ts
      ✗ computeLoadBalanceLoss() uses the mean router probability (#4381) is not driven by the current call: one divergent query leaves the loss at the historical value
        AssertionError: expected 0.0002508610486984253 to be greater than 0.001
##[error]Process completed with exit code 1.
```

</details>

### Clone Tracker (14-day rolling) (`.github/workflows/clone-tracker.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/45952416396 — dark (conclusion: `failure`), 2026-11-27 06:31 UTC
- Dark since: 2026-11-27 06:31 UTC (first run of the current streak)
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
