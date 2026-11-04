<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: ready -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45303 · **Generated:** 2026-11-04T06:44:24.955Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "autofix.ci")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/41780296852 — dark (conclusion: `failure`), 2026-11-04 05:36 UTC
- Dark since: 2026-11-03 22:43 UTC (first run of the current streak)
- Job / step: `Run unit tests` → `Run unit tests`
- Likely cause: AssertionError: expected [] to have a length of 1 but got +0 (packages/api/src/features/resume/import-ownership.test.ts:48)

<details><summary>End of the job log</summary>

```
{"evt":"agent.step","threadId":"01a1a510-0d51-7288-a53d-74dc0ee4fcc5","runId":"01a1a510-0d56-765b-b758-3a58e44a6483","step":2,"toolNames":[],"usage":{"inputTokens":1,"inputTokenDetails":{"noCacheTokens":1,"cacheReadToke…
stdout | src/features/ai/usage.integration.test.ts > AI request metering through installed SDK, protected routers and PostgreSQL > keeps saved MCP/REST tailoring pending until reviewed
{"evt":"agent.tool","threadId":"01a1a510-0db2-71f4-aff0-63e0bede1626","tool":"propose_edits","ok":true,"durationMs":5}
stdout | src/features/ai/usage.integration.test.ts > AI request metering through installed SDK, protected routers and PostgreSQL > keeps saved MCP/REST tailoring pending until reviewed
{"evt":"agent.step","threadId":"01a1a510-0db2-71f4-aff0-63e0bede1626","runId":"01a1a510-0db5-7288-a021-7748e51e8722","step":1,"toolNames":["propose_edits"],"usage":{"inputTokenDetails":{},"outputTokenDetails":{}},"finis…
stdout | src/features/agent/review.integration.test.ts > document assistant review on PostgreSQL > never sends or shows a Knowledge reply once sharing is off or the fact is forgotten
{"evt":"agent.step","threadId":"01a1a510-0d51-7288-a53d-74dc0ee4fcc5","runId":"01a1a510-0dd7-765e-b238-2d30ac553d55","step":0,"toolNames":[],"usage":{"inputTokens":1,"inputTokenDetails":{"noCacheTokens":1,"cacheReadToke…
##[error]command (/home/runner/_work/reactive-resume/reactive-resume/packages/api) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run test:ci exited (1)
```

</details>

### autofix.ci (`.github/workflows/autofix.yml`)

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/41780296797 — dark (conclusion: `failure`), 2026-11-04 05:36 UTC
- Dark since: 2026-11-04 03:02 UTC (first run of the current streak)
- Job / step: `Apply autofixes` → `Apply Knip fixes`
- Likely cause: [ELIFECYCLE] Command failed with exit code 1.

<details><summary>End of the job log</summary>

```
Unlisted dependencies (2)
tsx  apps/mobile/scripts/display-time.test.mjs:6:57
tsx  apps/mobile/scripts/outline-retention.test.mjs:8:68
Configuration hints (2)
lingui.config.ts  apps/mobile  knip.json  Remove redundant entry pattern
lingui.config.ts  apps/web     knip.json  Remove redundant entry pattern
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
