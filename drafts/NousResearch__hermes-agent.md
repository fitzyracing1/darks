<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 263708 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Docker Build, Test, and Publish (`.github/workflows/docker.yml`): [issue #155129](https://github.com/NousResearch/hermes-agent/issues/155129) "Docker Build, Test, and Publish on main stuck since Nov 5 — run 42066863849 holds the concurrency group (publish jobs waiting on never-evaluated container-publish deployments)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Catalog dead repos" workflow failing on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Catalog dead repos** workflow (`.github/workflows/catalog-dead-repos.yml`) on `main` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/43818694414 — dark (conclusion: `failure`), 2026-11-16 06:43 UTC
- Dark since: 2026-11-16 06:43 UTC (first run of the current streak)
- Job / step: `delist` → `Find and delete dead entries`
- Likely cause: a lookup did not answer, delisting nothing: graphql: [{'type': 'FORBIDDEN', 'path': ['r4'], 'extensions': {'saml_failure': False, 'ip_allow_list_failure': True}, 'locations': [{'line': 1, 'column': 538}], 'message': 'Although you appear to 

<details><summary>End of the job log</summary>

```
##[start-action display=Check if App credentials exist;id=app-token.check]
##[end-action id=app-token.check;outcome=success;conclusion=success;duration_ms=7]
##[start-action display=Create GitHub App token;id=app-token.app-token]
Inputs 'owner' and 'repositories' are not set. Creating token for this repository (NousResearch/hermes-agent).
##[end-action id=app-token.app-token;outcome=success;conclusion=success;duration_ms=392]
##[start-action display=Fall back to GITHUB_TOKEN;id=app-token.fallback]
##[end-action id=app-token.fallback;outcome=skipped;conclusion=skipped;duration_ms=0]
##[error]a lookup did not answer, delisting nothing: graphql: [{'type': 'FORBIDDEN', 'path': ['r4'], 'extensions': {'saml_failure': False, 'ip_allow_list_failure': True}, 'locations': [{'line': 1, 'column': 538}], 'mess…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
