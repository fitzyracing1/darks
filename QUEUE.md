# Queued for Joshua's approval

Upstream actions (issues, PRs, comments on other people's repos) are **never sent** by the crawler. They wait here until Joshua approves and sends them himself.

| dark | light now | proposed action | note | added |
|---|---|---|---|---|
| nukeop/nuclear#.github/workflows/ci.yml | ○ dark | PR: chore: sync pnpm-lock.yaml with eslint-plugin-storybook 10.6.1 | CI dark: lockfile out of sync (ERR_PNPM_OUTDATED_LOCKFILE). Patch: patches/nukeop-nuclear-0001-sync-pnpm-lock.patch. Not sent; waits for Joshua. | 2026-10-13 |

Edit `queued.json` to add entries: `[{"key": "owner/repo#.github/workflows/ci.yml", "action": "PR: fix flaky test", "note": "...", "addedAt": "2026-10-13"}]`.
