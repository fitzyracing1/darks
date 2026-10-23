<!-- dark-draft: pascalorg/editor -->
<!-- draft-state: ready -->
# Upstream issue draft: pascalorg/editor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/pascalorg/editor/issues/new
- **Stars:** 25069 · **Generated:** 2026-10-23T12:52:35.417Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/pascalorg/editor/actions/runs/39880562674 — dark (conclusion: `failure`), 2026-10-23 00:51 UTC
- Dark since: 2026-10-23 00:51 UTC (first run of the current streak)
- Job / step: `quality` → `Test`
- Likely cause: command (/home/runner/work/editor/editor/packages/core) /home/runner/.bun/bin/bun run test exited (1)

<details><summary>End of the job log</summary>

```
+ [
+   "pascal_max_credits (packages/cli/src/architect.ts)",
+   "project_id (packages/cli/src/architect.ts)",
+ ]
- Expected  - 1
+ Received  + 4
      at <anonymous> (/home/runner/work/editor/editor/packages/core/src/contracts/reference-inventory.test.ts:199:26)
##[error]- []
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining editor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
