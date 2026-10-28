<!-- dark-draft: expressjs/body-parser -->
<!-- draft-state: ready -->
# Upstream issue draft: expressjs/body-parser

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/expressjs/body-parser/issues/new
- **Stars:** 5500 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow getting cancelled on master since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on `master` has been getting cancelled since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/expressjs/body-parser/actions/runs/40654360272 — dark (conclusion: `cancelled`), 2026-10-28 08:05 UTC
- Dark since: 2026-10-28 08:05 UTC (first run of the current streak)
- Job / step: `Test - ubuntu-latest / Node.js 21` → `Run actions/setup-node@820762786026740c76f36085b0efc47a31fe5020`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
/github/runner_temp/git-credentials-9e0f940d-537a-40d7-b35f-51f6875d15e7.config
Removing credentials config '/home/runner/work/_temp/git-credentials-9e0f940d-537a-40d7-b35f-51f6875d15e7.config'
Attempt to resolve the latest version from manifest...
Failed to resolve version 21 from manifest
Attempting to download 21...
Not found in manifest. Falling back to download directly from Node
Acquiring 21.7.3 - x64 from https://nodejs.org/dist/v21.7.3/node-v21.7.3-linux-x64.tar.gz
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining body-parser!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
