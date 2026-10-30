<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: ready -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 458192 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI - Node.js" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI - Node.js** workflow (`.github/workflows/node.js-tests.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/40920344067 — dark (conclusion: `failure`), 2026-10-29 17:20 UTC
- Dark since: 2026-10-29 17:20 UTC (first run of the current streak)
- Job / step: `Test - Upcoming Changes (24)` → `Run Tests`
- Likely cause: command (/home/runner/work/freeCodeCamp/freeCodeCamp/api) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test exited (1)

<details><summary>End of the job log</summary>

```
    419|         expect(user.emailVerified).toBe(true);
    420|         expect(user.emailVerifyTTL).toBeNull();
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 56 passed (57)
      Tests  1 failed | 1200 passed | 5 todo (1206)
   Start at  17:34:41
   Duration  145.22s (transform 7.01s, setup 0ms, import 299.69s, tests 101.66s, environment 10ms)
##[error]AssertionError: expected 'anything@goes.com' to be null
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
