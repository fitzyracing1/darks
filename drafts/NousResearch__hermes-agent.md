<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 266065 · **Generated:** 2026-11-25T18:39:22.716Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Docker Build, Test, and Publish (`.github/workflows/docker.yml`): [issue #155129](https://github.com/NousResearch/hermes-agent/issues/155129) "Docker Build, Test, and Publish on main stuck since Nov 5 — run 42066863849 holds the concurrency group (publish jobs waiting on never-evaluated container-publish deployments)"
- Skills Index Freshness Check (`.github/workflows/skills-index-freshness.yml`): [issue #139372](https://github.com/NousResearch/hermes-agent/issues/139372) "fix(ci): align skills-index freshness watchdog floors with build_skills_index.py EXPECTED_FLOORS"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Site" workflow getting cancelled on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Site** workflow (`.github/workflows/deploy-site.yml`) on `main` has been getting cancelled since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/45657257577 — dark (conclusion: `cancelled`), 2026-11-25 16:44 UTC
- Dark since: 2026-11-24 02:37 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
