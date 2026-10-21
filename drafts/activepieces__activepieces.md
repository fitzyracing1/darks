<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25142 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Chat Evals", "Continuous Delivery — Canary", "Generate Translation Files for Community Pieces and UI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39554969136 — dark (conclusion: `failure`), 2026-10-21 06:22 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: Error: Hook timed out in 540000ms. (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:20)

<details><summary>End of the job log</summary>

```
     21|         const fixtures = evalFixtures.load().filter((fixture) => SCOPE…
     22|         const [fixtureResults, agreement] = await Promise.all([
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  88 passed | 1 skipped (89)
   Start at  06:26:39
   Duration  547.58s (transform 1.58s, setup 69ms, collect 16.87s, tests 541.44s, environment 3ms, prepare 1.17s)
##[error]Error: Hook timed out in 540000ms.
```

</details>

### Continuous Delivery — Canary (`.github/workflows/continuous-delivery-canary.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39397539156 — dark (conclusion: `failure`), 2026-10-20 09:00 UTC
- Dark since: 2026-10-19 09:03 UTC (first run of the current streak)
- Job / step: `check-migrations` → `Fail on breaking migrations`
- Likely cause: Breaking migrations detected: DropChatRolloutUserTable1870000000000

<details><summary>End of the job log</summary>

```
  Time:    19.606s
Found 3 migration(s) to roll back:
  safe: AddPieceTranslationTable1873000000000
  safe: AddBarrierChildAttribution1871000000000
  BREAKING: DropChatRolloutUserTable1870000000000
1 breaking migration(s) detected.
Breaking migrations detected: DropChatRolloutUserTable1870000000000
##[error]Process completed with exit code 1.
```

</details>

### Generate Translation Files for Community Pieces and UI (`.github/workflows/generate-translations.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39447386687 — dark (conclusion: `failure`), 2026-10-20 15:19 UTC
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

### Release Pieces (`.github/workflows/release-pieces.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39548163300 — dark (conclusion: `failure`), 2026-10-21 05:11 UTC
- Dark since: 2026-10-21 05:11 UTC (first run of the current streak)
- Job / step: `Release-Pieces` → `publish pieces packages`
- Likely cause: [publishPieces] 1/4 piece(s) failed to publish:

<details><summary>End of the job log</summary>

```
  output: [ null, null, null ],
  pid: 2532,
  stdout: null,
  stderr: null
}
[publishPieces] 1/4 piece(s) failed to publish:
  packages/pieces/community/clockify
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
