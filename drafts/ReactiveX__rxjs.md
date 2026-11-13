<!-- dark-draft: ReactiveX/rxjs -->
<!-- draft-state: ready -->
# Upstream issue draft: ReactiveX/rxjs

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ReactiveX/rxjs/issues/new
- **Stars:** 31714 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("OSV vulnerability policy", "Extended property fuzzing")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### OSV vulnerability policy (`.github/workflows/osv.yml`)

- Latest run on `master`: https://github.com/ReactiveX/rxjs/actions/runs/42580957179 — dark (conclusion: `failure`), 2026-11-09 07:41 UTC
- Dark since: 2026-09-14 07:50 UTC (first run of the current streak)
- Job / step: `No unreviewed release-reachable vulnerabilities` → `Reject expired, unowned, untracked, or overlong exceptions`
- Likely cause: expected: [],

<details><summary>End of the job log</summary>

```
    ... 77 more items
  ],
  expected: [],
  operator: 'deepStrictEqual',
  diff: 'simple'
}
Node.js v24.12.0
##[error]Process completed with exit code 1.
```

</details>

### Extended property fuzzing (`.github/workflows/fuzz.yml`)

- Latest run on `master`: https://github.com/ReactiveX/rxjs/actions/runs/42973114120 — dark (conclusion: `failure`), 2026-11-11 06:32 UTC
- Dark since: 2026-09-16 06:45 UTC (first run of the current streak)
- Job / step: `Observable and release-policy properties` → `Run extended properties; fast-check reports the reproduction seed on failure`
- Likely cause: Could not find 'scripts/release/authorize-stage.test.mjs, scripts/release/install-pinned-npm.test.mjs, scripts/release/release-policy.test.mjs, scripts/release/release-candidate.test.mjs, scripts/release/stage-release.t…
- A change that makes this workflow lit on a fork: https://github.com/fitzyracing1/rxjs/tree/try%2Ffix-rxjs (lit run: https://github.com/fitzyracing1/rxjs/actions/runs/38199675723) — happy to open a PR if that helps.

<details><summary>End of the job log</summary>

```
 ✓ src/lifecycle.fuzz.spec.ts (1 test) 716ms
     ✓ preserves sharing, ref-count, restart, terminal, abort, and teardown invariants  714ms
 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  06:32:48
   Duration  927ms (transform 78ms, setup 0ms, import 102ms, tests 716ms, environment 0ms)
Could not find 'scripts/release/authorize-stage.test.mjs, scripts/release/install-pinned-npm.test.mjs, scripts/release/release-policy.test.mjs, scripts/release/release-candidate.test.mjs, scripts/release/stage-release.t…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rxjs!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
