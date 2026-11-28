<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: ready -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 82578 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Clone Tracker (14-day rolling)" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Clone Tracker (14-day rolling)** workflow (`.github/workflows/clone-tracker.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

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
