<!-- dark-draft: pascalorg/editor -->
<!-- draft-state: resolved -->
# Upstream issue draft: pascalorg/editor

- **Status:** resolved — lit again (2026-10-22); nothing to file
- **Would be filed at:** https://github.com/pascalorg/editor/issues/new
- **Stars:** 25032 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/pascalorg/editor/actions/runs/39613856768 — dark (conclusion: `failure`), 2026-10-21 14:06 UTC
- Dark since: 2026-10-21 14:06 UTC (first run of the current streak)
- Job / step: `quality` → `Test`
- Likely cause: command (/home/runner/work/editor/editor/packages/core) /home/runner/.bun/bin/bun run test exited (1)

<details><summary>End of the job log</summary>

```
+   "roofLevelIds": [],
+   "supportLevelCount": 0,
+   "valid": true,
  }
- Expected  - 1
+ Received  + 36
      at <anonymous> (/home/runner/work/editor/editor/packages/core/src/agent-operations/operations.test.ts:82:22)
##[error]  {
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining editor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
