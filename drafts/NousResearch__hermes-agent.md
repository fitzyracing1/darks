<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 256126 · **Generated:** 2026-10-22T12:57:28.437Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker Build, Test, and Publish", "auto-fix lint issues & formatting")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39776549543 — dark (conclusion: `cancelled`), 2026-10-22 12:13 UTC
- Dark since: 2026-10-13 19:04 UTC (first run of the current streak)
- Likely cause: run cancelled

### auto-fix lint issues & formatting (`.github/workflows/js-autofix.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39754347965 — dark (conclusion: `failure`), 2026-10-22 09:18 UTC
- Dark since: 2026-10-22 09:17 UTC (first run of the current streak)
- Job / step: `Apply patch` → `Apply patch and push to bot branch`
- Likely cause: error: failed to push some refs to 'https://github.com/NousResearch/hermes-agent'

<details><summary>End of the job log</summary>

```
remote: Time 2026-10-22T09:21:51Z
remote: Create a pull request for 'bot/js-autofix' on GitHub by visiting:
remote:      https://github.com/NousResearch/hermes-agent/pull/new/bot/js-autofix
remote:
To https://github.com/NousResearch/hermes-agent
 ! [remote rejected]         HEAD -> bot/js-autofix (Internal Server Error)
error: failed to push some refs to 'https://github.com/NousResearch/hermes-agent'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
