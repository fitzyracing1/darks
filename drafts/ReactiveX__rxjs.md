<!-- dark-draft: ReactiveX/rxjs -->
<!-- draft-state: ready -->
# Upstream issue draft: ReactiveX/rxjs

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ReactiveX/rxjs/issues/new
- **Stars:** 31717 · **Generated:** 2026-11-27T00:52:53.857Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Extended property fuzzing", "OSV vulnerability policy")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Extended property fuzzing (`.github/workflows/fuzz.yml`)

- Latest run on `master`: https://github.com/ReactiveX/rxjs/actions/runs/45561676502 — dark (conclusion: `failure`), 2026-11-25 06:35 UTC
- Dark since: 2026-09-16 06:45 UTC (first run of the current streak)
- Job / step: `Observable and release-policy properties` → `Run extended properties; fast-check reports the reproduction seed on failure`
- Likely cause: Could not find 'scripts/release/authorize-stage.test.mjs, scripts/release/install-pinned-npm.test.mjs, scripts/release/release-policy.test.mjs, scripts/release/release-candidate.test.mjs, scripts/release/stage-release.t…
- A change that makes this workflow lit on a fork: https://github.com/fitzyracing1/rxjs/tree/try%2Ffix-rxjs (lit run: https://github.com/fitzyracing1/rxjs/actions/runs/38199675723) — happy to open a PR if that helps.

<details><summary>End of the job log</summary>

```
 ✓ src/lifecycle.fuzz.spec.ts (1 test) 706ms
     ✓ preserves sharing, ref-count, restart, terminal, abort, and teardown invariants  704ms
 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  06:35:28
   Duration  920ms (transform 87ms, setup 0ms, import 112ms, tests 706ms, environment 0ms)
Could not find 'scripts/release/authorize-stage.test.mjs, scripts/release/install-pinned-npm.test.mjs, scripts/release/release-policy.test.mjs, scripts/release/release-candidate.test.mjs, scripts/release/stage-release.t…
##[error]Process completed with exit code 1.
```

</details>

### OSV vulnerability policy (`.github/workflows/osv.yml`)

- Latest run on `master`: https://github.com/ReactiveX/rxjs/actions/runs/45132928321 — dark (conclusion: `failure`), 2026-11-23 07:41 UTC
- Dark since: 2026-11-23 07:41 UTC (first run of the current streak)
- Job / step: `No unreviewed release-reachable vulnerabilities` → `Run full OSV scan with only reviewed docs-tooling exceptions`
- Likely cause: Filtered 373 vulnerabilities from output

<details><summary>End of the job log</summary>

```
GHSA-96hv-2xvq-fx4p and 1 alias have been filtered out because: workspace=apps/rxjs.dev; owner=benlesh; tracking=docs/security/LEGACY_DOCS_VULNERABILITIES.md; reviewed=2026-11-19; unreachable=apps/rxjs.dev is excluded f…
GHSA-3h5v-q93c-6h6q and 1 alias have been filtered out because: workspace=apps/rxjs.dev; owner=benlesh; tracking=docs/security/LEGACY_DOCS_VULNERABILITIES.md; reviewed=2026-11-19; unreachable=apps/rxjs.dev is excluded f…
GHSA-58qx-3vcg-4xpx and 1 alias have been filtered out because: workspace=apps/rxjs.dev; owner=benlesh; tracking=docs/security/LEGACY_DOCS_VULNERABILITIES.md; reviewed=2026-11-19; unreachable=apps/rxjs.dev is excluded f…
GHSA-96hv-2xvq-fx4p and 1 alias have been filtered out because: workspace=apps/rxjs.dev; owner=benlesh; tracking=docs/security/LEGACY_DOCS_VULNERABILITIES.md; reviewed=2026-11-19; unreachable=apps/rxjs.dev is excluded f…
GHSA-776f-qx25-q3cc and 1 alias have been filtered out because: workspace=apps/rxjs.dev; owner=benlesh; tracking=docs/security/LEGACY_DOCS_VULNERABILITIES.md; reviewed=2026-11-19; unreachable=apps/rxjs.dev is excluded f…
Filtered 373 vulnerabilities from output
Exit code: 1
##[warning]No files were found with the provided path: .security. No artifacts will be uploaded.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rxjs!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
