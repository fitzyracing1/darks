<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 257755 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker Build, Test, and Publish", "Docs Search Monitor")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/40609555929 — dark (conclusion: `cancelled`), 2026-10-28 00:33 UTC
- Dark since: 2026-10-28 00:33 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docs Search Monitor (`.github/workflows/docs-search-monitor.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/40610694294 — dark (conclusion: `failure`), 2026-10-28 00:44 UTC
- Dark since: 2026-10-28 00:44 UTC (first run of the current streak)
- Job / step: `probe` → `Probe live docs search`
- Likely cause: browser check crashed: locator.fill: Timeout 10000ms exceeded.

<details><summary>End of the job log</summary>

```
ok   query "telegram": 743 hits
ok   query "install": 2074 hits
ok   query "skills": 4937 hits
ok   result opens: https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/messaging/telegram
ok   result opens: https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/switching-to-source
ok   result opens: https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/skills/optional/research/research-bioinformatics
FAIL browser check crashed: locator.fill: Timeout 10000ms exceeded.
##[error]browser check crashed: locator.fill: Timeout 10000ms exceeded.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
