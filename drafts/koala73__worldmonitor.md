<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 91081 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Refresh Crawlable Live Pulse", "Sentry Resolve Pin Audit")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Refresh Crawlable Live Pulse (`.github/workflows/crawlable-pulse-refresh.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45113696855 — dark (conclusion: `failure`), 2026-11-23 04:45 UTC
- Dark since: 2026-11-23 04:45 UTC (first run of the current streak)
- Job / step: `refresh` → `Verify published artifacts`
- Likely cause: 'errors',        'forecastScorecard',

<details><summary>End of the job log</summary>

```
      'pizzaIndex',    'quotes',
      'quotesAsOf',    'resilienceSnapshotPath',
      'schemaVersion', 'signalConvergence'
    ],
    operator: 'deepStrictEqual',
    diff: 'simple'
  }
##[error]Process completed with exit code 1.
```

</details>

### Sentry Resolve Pin Audit (`.github/workflows/sentry-resolve-pin-audit.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45125299511 — dark (conclusion: `failure`), 2026-11-23 06:37 UTC
- Dark since: 2026-11-23 06:37 UTC (first run of the current streak)
- Job / step: `audit` → `Audit resolved issues for release pins`
- Likely cause: WORLDMONITOR-1FS is resolved and pinned to release c90b3314b69a25d0faa0052749423cd2abaa3974; deployed release compatibility needs verification.

<details><summary>End of the job log</summary>

```
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
e770cf2ddf28fa7c8088fd08ac476f8e428897ba
Found in cache @ /opt/hostedtoolcache/node/24.22.3/x64
node: v24.22.3
npm: 11.19.1
yarn: 1.22.22
##[error]WORLDMONITOR-1AY is resolved and pinned to release 92eee70e5a89b7e503108ccd1278222cbd809330; deployed release compatibility needs verification.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
