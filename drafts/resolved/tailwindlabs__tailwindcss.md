<!-- dark-draft: tailwindlabs/tailwindcss -->
<!-- draft-state: resolved -->
# Upstream issue draft: tailwindlabs/tailwindcss

- **Status:** resolved — lit again (2026-11-06); nothing to file
- **Would be filed at:** https://github.com/tailwindlabs/tailwindcss/issues/new
- **Stars:** 98101 · **Generated:** 2026-11-06T12:41:11.038Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tailwindlabs/tailwindcss/actions/runs/42127576162 — dark (conclusion: `failure`), 2026-11-05 23:10 UTC
- Dark since: 2026-11-05 23:09 UTC (first run of the current streak)
- Job / step: `Build and publish Tailwind CSS` → `Trigger Tailwind Play update`
- Likely cause: Unhandled error: HttpError: Unexpected end of JSON input

<details><summary>End of the job log</summary>

```
GET https://run-actions-3-azure-eastus.actions.githubusercontent.com/116//idtoken/6d682a00-0198-8751-b6cb-bbd5676bf92b/b7243103-4b46-5285-b5a9-1badfcbb0679?api-version=2.0&audience=npm%3Aregistry.npmjs.org 200 188ms
📦 @tailwindcss/oxide-wasm32-wasi@0.0.0-insiders.7e79802 → https://registry.npmjs.org/
✅ Published package @tailwindcss/oxide-wasm32-wasi@0.0.0-insiders.7e79802
~/work/tailwindcss/tailwindcss
[@octokit/request] "POST https://api.github.com/repos/tailwindlabs/upgrades/actions/workflows/upgrade-tailwindcss.yml/dispatches" is deprecated. It is scheduled to be removed on Fri, 10 Mar 2028 00:00:00 GMT. See https:…
RequestError [HttpError]: Unexpected end of JSON input
    at /Users/runner/work/_actions/actions/github-script/ed597411d8f924073f98dfc5c65a23a2325f34cd/dist/index.js:9561:11
##[error]Unhandled error: HttpError: Unexpected end of JSON input
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining tailwindcss!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
