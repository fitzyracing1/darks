<!-- dark-draft: pascalorg/editor -->
<!-- draft-state: resolved -->
# Upstream issue draft: pascalorg/editor

- **Status:** resolved — lit again (2026-11-23); nothing to file
- **Would be filed at:** https://github.com/pascalorg/editor/issues/new
- **Stars:** 25676 · **Generated:** 2026-11-22T18:35:55.565Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/pascalorg/editor/actions/runs/45019721200 — dark (conclusion: `failure`), 2026-11-22 11:56 UTC
- Dark since: 2026-11-21 08:06 UTC (first run of the current streak)
- Job / step: `Test` → `Test`
- Likely cause: command (/home/runner/work/editor/editor/packages/core) /home/runner/.bun/bin/bun run test exited (1)

<details><summary>End of the job log</summary>

```
  ^ this test timed out after 5000ms.
 7310 pass
 3 skip
 2 fail
 124169 expect() calls
Ran 7315 tests across 400 files. [138.02s]
error: script "test" exited with code 1
##[error]command (/home/runner/work/editor/editor/packages/core) /home/runner/.bun/bin/bun run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining editor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
