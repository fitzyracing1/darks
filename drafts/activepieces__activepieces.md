<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25126 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Chat Evals", "Continuous Delivery — Canary", "Release Pieces", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39379920766 — dark (conclusion: `failure`), 2026-10-20 06:21 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: AssertionError: see the eval report above for the failing checks: expected [ …(2) ] to deeply equal [] (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:58)

<details><summary>End of the job log</summary>

```
     59|     })
     60| })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 88 passed (89)
   Start at  06:26:10
   Duration  476.68s (transform 1.50s, setup 65ms, collect 15.04s, tests 471.36s, environment 2ms, prepare 992ms)
##[error]AssertionError: see the eval report above for the failing checks: expected [ …(2) ] to deeply equal []
```

</details>

### Continuous Delivery — Canary (`.github/workflows/continuous-delivery-canary.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39227207183 — dark (conclusion: `failure`), 2026-10-19 09:03 UTC
- Dark since: 2026-10-19 09:03 UTC (first run of the current streak)
- Job / step: `check-migrations` → `Fail on breaking migrations`
- Likely cause: Breaking migrations detected: DropChatRolloutUserTable1870000000000

<details><summary>End of the job log</summary>

```
 Tasks:    7 successful, 7 total
Cached:    0 cached, 7 total
  Time:    21.991s
Found 1 migration(s) to roll back:
  BREAKING: DropChatRolloutUserTable1870000000000
1 breaking migration(s) detected.
Breaking migrations detected: DropChatRolloutUserTable1870000000000
##[error]Process completed with exit code 1.
```

</details>

### Release Pieces (`.github/workflows/release-pieces.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39286506715 — dark (conclusion: `failure`), 2026-10-19 16:34 UTC
- Dark since: 2026-10-19 12:11 UTC (first run of the current streak)
- Job / step: `Release-Pieces` → `publish pieces packages`
- Likely cause: [publishPieces] 1/11 piece(s) failed to publish:

<details><summary>End of the job log</summary>

```
  output: [ null, null, null ],
  pid: 2961,
  stdout: null,
  stderr: null
}
[publishPieces] 1/11 piece(s) failed to publish:
  packages/pieces/community/hubspot
##[error]Process completed with exit code 1.
```

</details>

### Generate Translation Files for Community Pieces and UI (`.github/workflows/generate-translations.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39276967411 — dark (conclusion: `failure`), 2026-10-19 15:19 UTC
- Dark since: 2026-10-19 15:19 UTC (first run of the current streak)
- Job / step: `finalize / finalize` → `Create Pull Request`
- Likely cause: Unhandled error: HttpError: Pull Request has merge conflicts

<details><summary>End of the job log</summary>

```
    request: {
      agent: [Agent],
      fetch: [Function: proxyFetch],
      hook: [Function: bound bound register]
    }
  }
}
##[error]Unhandled error: HttpError: Pull Request has merge conflicts
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
