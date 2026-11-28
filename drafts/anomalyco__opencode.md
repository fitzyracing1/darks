<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 229637 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "check-test" workflow failing on dev since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **check-test** workflow (`.github/workflows/check-test.yml`) on `dev` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/46083382924 — dark (conclusion: `failure`), 2026-11-27 23:35 UTC
- Dark since: 2026-11-27 18:09 UTC (first run of the current streak)
- Job / step: `e2e (linux, app-2)` → `Run app e2e tests against production build`
- Likely cause: TypeError: Cannot read properties of undefined (reading 'VITE_OPENCODE_CHANNEL')

<details><summary>End of the job log</summary>

```
> 157 |   ...(import.meta.env.VITE_OPENCODE_CHANNEL === "local" || import.meta.env.VITE_OPENCODE_CHANNEL === "dev"
      |                       ^
  158 |     ? [
  159 |         {
  160 |           tab: "experimental",
    at /home/runner/_work/opencode/opencode/packages/app/src/settings/search-catalog.ts:157:23
error: script "test:e2e:built" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
