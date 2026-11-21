<!-- dark-draft: pascalorg/editor -->
<!-- draft-state: ready -->
# Upstream issue draft: pascalorg/editor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/pascalorg/editor/issues/new
- **Stars:** 25665 · **Generated:** 2026-11-21T18:36:18.976Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/pascalorg/editor/actions/runs/44885545209 — dark (conclusion: `failure`), 2026-11-21 08:34 UTC
- Dark since: 2026-11-21 08:06 UTC (first run of the current streak)
- Job / step: `Test` → `Test`
- Likely cause: command (/home/runner/work/editor/editor/packages/core) /home/runner/.bun/bin/bun run test exited (1)

<details><summary>End of the job log</summary>

```
(pass) polygon boolean kernel > square with a hole preserves area, membership, hole rims and boundary distance [0.38ms]
(pass) polygon boolean kernel > quantises inputs to 0.1 mm and removes sub-1e-6 square metre slivers [0.27ms]
(pass) polygon boolean kernel > disconnected components and holes have deterministic ordering [0.28ms]
(pass) polygon boolean kernel > quantising a narrow notch preserves its reversal until clipping resolves it [0.44ms]
(pass) polygon boolean kernel > all operations reject non-finite outer and hole coordinates without throwing [0.69ms]
(pass) polygon boolean kernel > clipping exceptions return empty polygons in all operations [0.40ms]
(pass) polygon boolean kernel > development warns once per failing caller and production stays quiet [0.31ms]
##[error]command (/home/runner/work/editor/editor/packages/core) /home/runner/.bun/bin/bun run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining editor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
