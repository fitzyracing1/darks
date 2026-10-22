<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25173 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Chat Evals", "Generate Translation Files for Community Pieces and UI", "Continuous Delivery — Staging")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39733468921 — dark (conclusion: `failure`), 2026-10-22 06:21 UTC
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
   Start at  06:26:14
   Duration  547.36s (transform 1.50s, setup 94ms, collect 16.74s, tests 541.31s, environment 3ms, prepare 1.14s)
##[error]Error: Hook timed out in 540000ms.
```

</details>

### Generate Translation Files for Community Pieces and UI (`.github/workflows/generate-translations.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39624644968 — dark (conclusion: `failure`), 2026-10-21 15:19 UTC
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

### Continuous Delivery — Staging (`.github/workflows/continuous-delivery-stg.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39819856872 — dark (conclusion: `failure`), 2026-10-22 17:07 UTC
- Dark since: 2026-10-22 17:07 UTC (first run of the current streak)
- Job / step: `tag-release-candidate` → `Tag release candidate image`
- Likely cause: ERROR: failed to parse source "ghcr.io/activepieces/activepieces-cloud:", valid sources are digests, references and descriptors: invalid reference format

<details><summary>End of the job log</summary>

```
17bc6cacb88535898bb3d1737d0dd8824094166e
Warning: Permanently added '***' (ED25519) to the list of known hosts.
Connection to *** closed.
Staging tag:  (SHA: )
Logging into ghcr.io...
Login Succeeded!
ERROR: failed to parse source "ghcr.io/activepieces/activepieces-cloud:", valid sources are digests, references and descriptors: invalid reference format
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
