<!-- dark-draft: triggerdotdev/trigger.dev -->
<!-- draft-state: ready -->
# Upstream issue draft: triggerdotdev/trigger.dev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/triggerdotdev/trigger.dev/issues/new
- **Stars:** 16833 · **Generated:** 2026-11-27T12:42:45.007Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "CodeQL", "🚀 Publish Trigger.dev Docker", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 🛡️ E2E Tests: Webapp Auth (full) (`.github/workflows/e2e-webapp-auth-full.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45937411680 — dark (conclusion: `failure`), 2026-11-27 04:00 UTC
- Dark since: 2026-11-11 04:00 UTC (first run of the current streak)
- Job / step: `🛡️ E2E Auth Tests (full)` → `🛡️ Run Webapp Full Auth E2E Tests`
- Likely cause: {"traceId":"d3cb90fb0aefc6339ccf5c8b402b89ac","message":"enqueue","spanId":"6e825099c0c469c9","kind":3,"timestamp":1795752185756000,"duration":451.52,"attributes":{"job_type":"scheduleEmail","job_visibility_timeout_ms":…

<details><summary>End of the job log</summary>

```
{"traceId":"bf2b09a45e613461ef3a1a1ccb2ffcf4","message":"api_auth.tenant_usage","spanId":"bcda1997d197ae48","kind":0,"timestamp":1795752185813000,"duration":3.507,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"ddbf324748a52caa8c8e5233518b2f2b","message":"api_auth.tenant_usage","spanId":"3e356234c042446a","kind":0,"timestamp":1795752185813000,"duration":3.326,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"3cb9a3f81907467e99bf1d78a2f1ec44","message":"api_auth.tenant_usage","spanId":"da23600e1af65722","kind":0,"timestamp":1795752185813000,"duration":3.587,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"e1e42ab590701311b1e17380089ce452","message":"api_auth.tenant_usage","spanId":"4260e0f2f945e033","kind":0,"timestamp":1795752185813000,"duration":3.527,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"381a4daca89b690ad63dd08dc4bb7574","message":"api_auth.tenant_usage","spanId":"fb8f2a8515deffcd","kind":0,"timestamp":1795752185813000,"duration":3.226,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"769ae77321fdc82a8eac5fb3389b1b2f","message":"api_auth.tenant_usage","spanId":"8d60af3f427dfa17","kind":0,"timestamp":1795752185813000,"duration":3.546,"attributes":{"forceRecording":true,"tenant_usage.organi…
{"traceId":"1c3bb877adc732aa7c0f759bb97fa4d1","message":"api_auth.tenant_usage","spanId":"c34d1eeae4f0063e","kind":0,"timestamp":1795752185813000,"duration":3.266,"attributes":{"forceRecording":true,"tenant_usage.organi…
##[error]Process completed with exit code 1.
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45999389976 — dark (conclusion: `cancelled`), 2026-11-27 12:31 UTC
- Dark since: 2026-11-27 12:28 UTC (first run of the current streak)
- Job / step: `Analyze (actions)` → `Checkout repository`
- Likely cause: Canceling since a higher priority waiting request for CodeQL-refs/heads/main exists

<details><summary>End of the job log</summary>

```
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/trigger.dev/trigger.dev/.git/
##[error]The operation was canceled.
```

</details>

### 🚀 Publish Trigger.dev Docker (`.github/workflows/publish.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45999407155 — dark (conclusion: `cancelled`), 2026-11-27 12:31 UTC
- Dark since: 2026-11-27 12:29 UTC (first run of the current streak)
- Likely cause: run cancelled

### 🦋 Changesets PR (`.github/workflows/changesets-pr.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45999344159 — dark (conclusion: `cancelled`), 2026-11-27 12:31 UTC
- Dark since: 2026-11-27 12:29 UTC (first run of the current streak)
- Likely cause: run cancelled

### Dispatch RepoOps sync (`.github/workflows/dispatch-repo-ops-sync.yml`)

- Latest run on `main`: https://github.com/triggerdotdev/trigger.dev/actions/runs/45999389871 — dark (conclusion: `cancelled`), 2026-11-27 12:31 UTC
- Dark since: 2026-11-27 12:31 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining trigger.dev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
