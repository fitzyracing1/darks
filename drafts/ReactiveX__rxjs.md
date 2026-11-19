<!-- dark-draft: ReactiveX/rxjs -->
<!-- draft-state: ready -->
# Upstream issue draft: ReactiveX/rxjs

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ReactiveX/rxjs/issues/new
- **Stars:** 31722 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Extended property fuzzing" workflow failing on master since 2026-09-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Extended property fuzzing** workflow (`.github/workflows/fuzz.yml`) on `master` has been failing since 2026-09-16. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/ReactiveX/rxjs/actions/runs/44252186161 — dark (conclusion: `failure`), 2026-11-18 06:33 UTC
- Dark since: 2026-09-16 06:45 UTC (first run of the current streak)
- Job / step: `Observable and release-policy properties` → `Run extended properties; fast-check reports the reproduction seed on failure`
- Likely cause: Could not find 'scripts/release/authorize-stage.test.mjs, scripts/release/install-pinned-npm.test.mjs, scripts/release/release-policy.test.mjs, scripts/release/release-candidate.test.mjs, scripts/release/stage-release.t…
- A change that makes this workflow lit on a fork: https://github.com/fitzyracing1/rxjs/tree/try%2Ffix-rxjs (lit run: https://github.com/fitzyracing1/rxjs/actions/runs/38199675723) — happy to open a PR if that helps.

<details><summary>End of the job log</summary>

```
 ✓ src/lifecycle.fuzz.spec.ts (1 test) 1003ms
     ✓ preserves sharing, ref-count, restart, terminal, abort, and teardown invariants  1002ms
 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  06:33:44
   Duration  1.26s (transform 92ms, setup 0ms, import 121ms, tests 1.00s, environment 0ms)
Could not find 'scripts/release/authorize-stage.test.mjs, scripts/release/install-pinned-npm.test.mjs, scripts/release/release-policy.test.mjs, scripts/release/release-candidate.test.mjs, scripts/release/stage-release.t…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rxjs!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
