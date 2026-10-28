<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: ready -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 458091 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI - Node.js" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI - Node.js** workflow (`.github/workflows/node.js-tests.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/40681455097 — dark (conclusion: `failure`), 2026-10-28 11:37 UTC
- Dark since: 2026-10-28 11:37 UTC (first run of the current streak)
- Job / step: `Test - Upcoming Changes (24)` → `Run Tests`
- Likely cause: Error: Timed out waiting for the test frame to load (curriculum/src/test/test-challenges.js:496)

<details><summary>End of the job log</summary>

```
  block: 'review-dom-manipulation-by-building-a-rock-paper-scissors-game'
}
 ✓  test  blocks-generated/review-dom-manipulation-by-building-a-rock-paper-scissors-game.test.js (31 tests) 2339ms
stdout | blocks-generated/learn-introductory-javascript-by-building-a-pyramid-generator.test.js
Applied filter: {
  block: 'learn-introductory-javascript-by-building-a-pyramid-generator'
}
##[error]command (/home/runner/work/freeCodeCamp/freeCodeCamp/curriculum) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
