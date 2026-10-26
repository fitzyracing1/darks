<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 221882 · **Generated:** 2026-10-26T18:57:58.513Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on dev ("bot-nix-hashes", "nightly-beta", "release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### bot-nix-hashes (`.github/workflows/bot-nix-hashes.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40377024194 — dark (conclusion: `failure`), 2026-10-26 18:21 UTC
- Dark since: 2026-10-25 22:38 UTC (first run of the current streak)
- Job / step: `update-hashes` → `Commit changes`
- Likely cause: error: failed to push some refs to 'https://github.com/anomalyco/opencode'

<details><summary>End of the job log</summary>

```
remote: - Changes must be made through a pull request.
remote:
remote: - 5 of 5 required status checks are expected.
remote:
To https://github.com/anomalyco/opencode
 ! [remote rejected]       HEAD -> dev (push declined due to repository rule violations)
error: failed to push some refs to 'https://github.com/anomalyco/opencode'
##[error]Process completed with exit code 1.
```

</details>

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40301781578 — dark (conclusion: `failure`), 2026-10-26 09:43 UTC
- Dark since: 2026-10-26 09:43 UTC (first run of the current streak)
- Job / step: `dispatch` → `Dispatch beta test runs`
- Likely cause: could not create workflow dispatch event: HTTP 422: No ref found for: beta (https://api.github.com/repos/anomalyco/opencode/actions/workflows/396447938/dispatches)

<details><summary>End of the job log</summary>

```
Metadata: read
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: dispatch
could not create workflow dispatch event: HTTP 422: No ref found for: beta (https://api.github.com/repos/anomalyco/opencode/actions/workflows/396447938/dispatches)
##[error]Process completed with exit code 1.
```

</details>

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40378840330 — dark (conclusion: `cancelled`), 2026-10-26 18:33 UTC
- Dark since: 2026-10-26 18:33 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
