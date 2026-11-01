<!-- dark-draft: DayuanJiang/next-ai-draw-io -->
<!-- draft-state: ready -->
# Upstream issue draft: DayuanJiang/next-ai-draw-io

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DayuanJiang/next-ai-draw-io/issues/new
- **Stars:** 36534 · **Generated:** 2026-11-01T12:36:12.706Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish DSH plugin" workflow failing on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish DSH plugin** workflow (`.github/workflows/publish-dsh.yml`) on `main` has been failing since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/DayuanJiang/next-ai-draw-io/actions/runs/41254035606 — dark (conclusion: `failure`), 2026-10-31 23:48 UTC
- Dark since: 2026-10-31 23:48 UTC (first run of the current streak)
- Job / step: `publish` → `Publish to npm`
- Likely cause: npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-31T23_48_27_553Z-debug-0.log

<details><summary>End of the job log</summary>

```
npm error 404 Not Found - PUT https://registry.npmjs.org/@next-ai-drawio%2fdsh - Not found
npm error 404
npm error 404  The requested resource '@next-ai-drawio/dsh@0.1.0' could not be found or you do not have permission to access it.
npm error 404
npm error 404 Note that you can also install from a
npm error 404 tarball, folder, http url, or git url.
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-31T23_48_27_553Z-debug-0.log
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next-ai-draw-io!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
