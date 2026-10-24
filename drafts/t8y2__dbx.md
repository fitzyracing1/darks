<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27659 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Docs" workflow failing on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Docs** workflow (`.github/workflows/docs.yml`) on `main` has been failing since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39983839338 — dark (conclusion: `failure`), 2026-10-23 16:05 UTC
- Dark since: 2026-10-23 04:08 UTC (first run of the current streak)
- Job / step: `build` → `Run cd docs && pnpm install --frozen-lockfile && pnpm build`
- Likely cause: Error: SEO verification failed:

<details><summary>End of the job log</summary>

```
if (errors.length) throw new Error(`SEO verification failed:\n${errors.join("\n")}`);
                         ^
Error: SEO verification failed:
/en/plugins/io.github.caichangqing1120.xxljob: duplicate title in the same language
    at file:///home/runner/work/dbx/dbx/docs/scripts/verify-seo.mjs:43:26
Node.js v22.23.3
 ELIFECYCLE  Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
