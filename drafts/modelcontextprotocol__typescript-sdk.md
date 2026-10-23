<!-- dark-draft: modelcontextprotocol/typescript-sdk -->
<!-- draft-state: ready -->
# Upstream issue draft: modelcontextprotocol/typescript-sdk

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/modelcontextprotocol/typescript-sdk/issues/new
- **Stars:** 13641 · **Generated:** 2026-10-23T06:59:11.689Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/modelcontextprotocol/typescript-sdk/actions/runs/39810844578 — dark (conclusion: `failure`), 2026-10-22 16:04 UTC
- Dark since: 2026-10-22 16:04 UTC (first run of the current streak)
- Job / step: `Version` → `Create or update Version Packages PR`
- Likely cause: The process '/opt/hostedtoolcache/node/24.21.0/x64/bin/node' failed with exit code 1

<details><summary>End of the job log</summary>

```
🦋  error [
🦋  error   {
🦋  error     "message": "Something went wrong while executing your query on 2026-10-22T16:05:24Z. Please include `4880:331337:727961A:1702D6F9:6ADA3443` when reporting this issue."
🦋  error   }
🦋  error ]
🦋  error     at /home/runner/work/typescript-sdk/typescript-sdk/node_modules/.pnpm/@changesets+get-github-info@0.7.0_encoding@0.1.13/node_modules/@changesets/get-github-info/dist/changesets-get-github-info.cjs.js:177:11
🦋  error     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
##[error]Error: The process '/opt/hostedtoolcache/node/24.21.0/x64/bin/node' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining typescript-sdk!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
