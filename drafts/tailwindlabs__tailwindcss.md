<!-- dark-draft: tailwindlabs/tailwindcss -->
<!-- draft-state: ready -->
# Upstream issue draft: tailwindlabs/tailwindcss

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tailwindlabs/tailwindcss/issues/new
- **Stars:** 98712 · **Generated:** 2026-11-21T00:52:59.041Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/44769705761 — dark (conclusion: `failure`), 2026-11-20 16:04 UTC
- Dark since: 2026-11-20 16:04 UTC (first run of the current streak)
- Job / step: `Build and publish Tailwind CSS` → `Publish`
- Likely cause: pnpm: invalid semver: 0.0.0-insiders.0607226

<details><summary>End of the job log</summary>

```
    at async withOtpHandling (file:///Users/runner/setup-pnpm/node_modules/.bin/store/v11/links/@/pnpm/11.9.0/92bb10372f62db71cbc98af38930d00b053c41d2580dc6358198bb66fe9b65f4/node_modules/pnpm/dist/pnpm.mjs:148933:12)
    at async publishPackedPkg (file:///Users/runner/setup-pnpm/node_modules/.bin/store/v11/links/@/pnpm/11.9.0/92bb10372f62db71cbc98af38930d00b053c41d2580dc6358198bb66fe9b65f4/node_modules/pnpm/dist/pnpm.mjs:283815:20)
    at async publish2 (file:///Users/runner/setup-pnpm/node_modules/.bin/store/v11/links/@/pnpm/11.9.0/92bb10372f62db71cbc98af38930d00b053c41d2580dc6358198bb66fe9b65f4/node_modules/pnpm/dist/pnpm.mjs:284558:22)
    at async recursivePublish (file:///Users/runner/setup-pnpm/node_modules/.bin/store/v11/links/@/pnpm/11.9.0/92bb10372f62db71cbc98af38930d00b053c41d2580dc6358198bb66fe9b65f4/node_modules/pnpm/dist/pnpm.mjs:284280:33)
    at async publish2 (file:///Users/runner/setup-pnpm/node_modules/.bin/store/v11/links/@/pnpm/11.9.0/92bb10372f62db71cbc98af38930d00b053c41d2580dc6358198bb66fe9b65f4/node_modules/pnpm/dist/pnpm.mjs:284509:45)
    at async Object.handler61 [as publish] (file:///Users/runner/setup-pnpm/node_modules/.bin/store/v11/links/@/pnpm/11.9.0/92bb10372f62db71cbc98af38930d00b053c41d2580dc6358198bb66fe9b65f4/node_modules/pnpm/dist/pnpm.mj…
    at async file:///Users/runner/setup-pnpm/node_modules/.bin/store/v11/links/@/pnpm/11.9.0/92bb10372f62db71cbc98af38930d00b053c41d2580dc6358198bb66fe9b65f4/node_modules/pnpm/dist/pnpm.mjs:305851:19
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining tailwindcss!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
