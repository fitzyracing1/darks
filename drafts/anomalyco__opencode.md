<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 229661 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "deploy-site" workflow failing on dev since 2026-11-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **deploy-site** workflow (`.github/workflows/deploy-site.yml`) on `dev` has been failing since 2026-11-28. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/46108945861 — dark (conclusion: `failure`), 2026-11-28 04:44 UTC
- Dark since: 2026-11-28 04:16 UTC (first run of the current streak)
- Job / step: `site-deploy` → `Deploy`
- Likely cause: The site's Worker config in the artifact is not the pinned target (/home/runner/_work/opencode/opencode/.github/release/targets/site/dev/worker.json)

<details><summary>End of the job log</summary>

```
##[end-action id=__self.__actions_download-artifact;outcome=success;conclusion=success;duration_ms=5181]
##[start-action display=Run bash "${GITHUB_ACTION_PATH//\\//}/../verify-artifacts.sh" "$RUNNER_TEMP/in";id=__self.__run]
verified site-dev (463ebf7bfe42a7185de2cc6c2dbfe62ccf12ca0671d3e94f7fa0b58ab376af45)
##[end-action id=__self.__run;outcome=success;conclusion=success;duration_ms=190]
Assuming role with OIDC
Authenticated as assumedRoleId AROAYZO3B27FTPKUCQ7A2:opencode-46108945861
##[notice]Cloudflare token ready; expires 2026-11-28T05:05:05Z
##[error]The site's Worker config in the artifact is not the pinned target (/home/runner/_work/opencode/opencode/.github/release/targets/site/dev/worker.json)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
