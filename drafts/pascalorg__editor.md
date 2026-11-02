<!-- dark-draft: pascalorg/editor -->
<!-- draft-state: ready -->
# Upstream issue draft: pascalorg/editor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/pascalorg/editor/issues/new
- **Stars:** 25280 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/pascalorg/editor/actions/runs/41479932962 — dark (conclusion: `failure`), 2026-11-02 16:17 UTC
- Dark since: 2026-11-02 16:17 UTC (first run of the current streak)
- Job / step: `quality` → `Test`
- Likely cause: command (/home/runner/work/editor/editor/packages/ifc-converter) /home/runner/.bun/bin/bun run test exited (1)

<details><summary>End of the job log</summary>

```
350 |     // Per-room scans of every node made 4× the rooms cost ~16×.
351 |     expect(large / small).toBeLessThan(6)
                                ^
error: expect(received).toBeLessThan(expected)
Expected: < 6
Received: 6.255572155222012
      at <anonymous> (/home/runner/work/editor/editor/packages/ifc-converter/tests/export-review.test.ts:351:27)
##[error]Expected: < 6
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining editor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
