<!-- dark-draft: Ebony-Vinyl/dsh-our-free-model -->
<!-- draft-state: ready -->
# Upstream issue draft: Ebony-Vinyl/dsh-our-free-model

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Ebony-Vinyl/dsh-our-free-model/issues/new
- **Stars:** 75799 · **Generated:** 2026-11-16T00:59:22.034Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "test" workflow failing on main since 2026-11-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-14. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Ebony-Vinyl/dsh-our-free-model/actions/runs/43672703068 — dark (conclusion: `failure`), 2026-11-15 03:30 UTC
- Dark since: 2026-11-14 19:28 UTC (first run of the current streak)
- Job / step: `standalone-frontend` → `Run node scripts/build-standalone-ui.mjs --check`
- Likely cause: Error: 独立端存在未引用的旧资源：channels-DPbv4N7g.js

<details><summary>End of the job log</summary>

```
file:///home/runner/work/dsh-our-free-model/dsh-our-free-model/scripts/build-standalone-ui.mjs:22
  throw new Error(`独立端存在未引用的旧资源：${obsolete.join(', ')}`)
        ^
Error: 独立端存在未引用的旧资源：channels-DPbv4N7g.js
    at file:///home/runner/work/dsh-our-free-model/dsh-our-free-model/scripts/build-standalone-ui.mjs:22:9
    at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
Node.js v22.23.4
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-our-free-model!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
