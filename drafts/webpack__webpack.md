<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65967 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39873802287 — dark (conclusion: `failure`), 2026-10-22 23:44 UTC
- Dark since: 2026-10-22 23:44 UTC (first run of the current streak)
- Job / step: `trigger-documentation-update` → `Dispatch workflow`
- Likely cause: Unhandled error: HttpError: Resource not accessible by integration - https://docs.github.com/rest/actions/workflows#create-a-workflow-dispatch-event

<details><summary>End of the job log</summary>

```
Download action repository 'actions/github-script@3a2844b7e9c422d3c10d287c895573f7108da1b3' (SHA:3a2844b7e9c422d3c10d287c895573f7108da1b3)
Complete job name: trigger-documentation-update
##[warning]Input 'app-id' has been deprecated with message: Use 'client-id' instead.
Inputs 'owner' and 'repositories' are not set. Creating token for this repository (webpack/webpack).
[@octokit/request] "POST https://api.github.com/repos/webpack/webpack-doc-kit/actions/workflows/release.yml/dispatches" is deprecated. It is scheduled to be removed on Fri, 10 Mar 2028 00:00:00 GMT. See https://docs.git…
POST /repos/webpack/webpack-doc-kit/actions/workflows/release.yml/dispatches - 403 with id B801:1BCCDA:102175E:115396B:6ADAA031 in 292ms
RequestError [HttpError]: Resource not accessible by integration - https://docs.github.com/rest/actions/workflows#create-a-workflow-dispatch-event
##[error]Unhandled error: HttpError: Resource not accessible by integration - https://docs.github.com/rest/actions/workflows#create-a-workflow-dispatch-event
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
