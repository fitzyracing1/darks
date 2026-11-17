<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 264156 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Docker Build, Test, and Publish (`.github/workflows/docker.yml`): [issue #155129](https://github.com/NousResearch/hermes-agent/issues/155129) "Docker Build, Test, and Publish on main stuck since Nov 5 — run 42066863849 holds the concurrency group (publish jobs waiting on never-evaluated container-publish deployments)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docs Search Monitor" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docs Search Monitor** workflow (`.github/workflows/docs-search-monitor.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/44147025904 — dark (conclusion: `failure`), 2026-11-17 18:21 UTC
- Dark since: 2026-11-17 12:24 UTC (first run of the current streak)
- Job / step: `probe` → `Probe live docs search`
- Likely cause: search button never opened the search modal within 30s

<details><summary>End of the job log</summary>

```
ok   query "telegram": 755 hits
ok   query "install": 1766 hits
ok   query "skills": 3225 hits
ok   result opens: https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/messaging/telegram
ok   result opens: https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/switching-to-source
ok   result opens: https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/skills/optional/software-development/software-development-hermes-agent-skill-authoring
FAIL search button never opened the search modal within 30s
##[error]search button never opened the search modal within 30s
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
