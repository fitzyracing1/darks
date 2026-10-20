<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 217821 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "test" workflow failing on dev since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **test** workflow (`.github/workflows/test.yml`) on `dev` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39349201545 — dark (conclusion: `failure`), 2026-10-20 00:42 UTC
- Dark since: 2026-10-20 00:42 UTC (first run of the current streak)
- Job / step: `unit (linux)` → `Run unit tests`
- Likely cause: @opencode/cli#test: command (/home/runner/_work/opencode/opencode/packages/cli) /home/runner/.bun/bin/bun run test exited (1)

<details><summary>End of the job log</summary>

```
test/cors.test.ts:
  --port integer
  --cors string        Additional allowed CORS origin (repeat for multiple origins)
  --service
  --stdio
GLOBAL FLAGS
  --help, -h                                                          Show help information
##[error]@opencode/cli#test: command (/home/runner/_work/opencode/opencode/packages/cli) /home/runner/.bun/bin/bun run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
