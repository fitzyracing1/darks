<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 76152 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Perf (nightly)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/41484319177 — dark (conclusion: `failure`), 2026-11-02 16:43 UTC
- Dark since: 2026-11-01 11:33 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `SonarCloud Scan`
- Likely cause: Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1

<details><summary>End of the job log</summary>

```
17:29:05.165 INFO  SonarScanner CLI 8.3.0.16463
17:29:05.170 INFO  Linux 7.0.0-1017-azure amd64
17:29:07.765 INFO  Communicating with SonarQube Cloud
17:29:07.766 INFO  JRE provisioning: os[linux], arch[x86_64]
17:29:08.217 ERROR Failed to query JRE metadata: GET https://api.sonarcloud.io/analysis/jres?os=linux&arch=x86_64 failed with HTTP 403 Forbidden. Please check the property sonar.token or the environment variable SONAR_T…
17:29:08.218 INFO  EXECUTION FAILURE
17:29:08.218 INFO  Total time: 3.073s
##[error]Action failed: The process '/opt/hostedtoolcache/sonar-scanner-cli/8.3.0-build.16463/linux-x64/bin/sonar-scanner' failed with exit code 1
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/41383399775 — dark (conclusion: `failure`), 2026-11-02 03:29 UTC
- Dark since: 2026-11-02 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: wrote /Users/runner/work/photocraft/photocraft/target/perf/results.json

<details><summary>End of the job log</summary>

```
| Id | Scenario | Target | Why | Issue |
|---|---|---|---|---|
| P15 | Zoom / pan frame time on a 15000×10000 16-bit document | ≤ 16 ms per frame | no headless canvas frame harness yet (zoom and pan sample the GPU texture in the egui paint callback) | [#209](https://github.com/stor…
| P23 | Warp / Puppet / Perspective preview at 4K | ≤ 16 ms per frame, commit in the background | the previews run inside the UI tools; no headless frame harness, no background commit | [#210](https://github.com/storyto…
| P34 | Brush preview memory, small dab on an 8K viewport | ≤ 2 MiB | the live brush preview buffers are UI-side; no headless counter yet | [#211](https://github.com/storytold/photocraft/issues/211) |
| P35 | Marquee drag on 24 MP with Alt/Shift | ≤ 17 ms p95 | Shift/Alt marquee modifiers don't exist yet (#208) and the drag preview is UI-side | [#211](https://github.com/storytold/photocraft/issues/211) |
wrote /Users/runner/work/photocraft/photocraft/target/perf/results.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
