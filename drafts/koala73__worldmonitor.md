<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 91053 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Sentry Resolve Pin Audit" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Sentry Resolve Pin Audit** workflow (`.github/workflows/sentry-resolve-pin-audit.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44993675338 — dark (conclusion: `failure`), 2026-11-22 06:25 UTC
- Dark since: 2026-11-22 06:25 UTC (first run of the current streak)
- Job / step: `audit` → `Audit resolved issues for release pins`
- Likely cause: WORLDMONITOR-1FS is resolved and pinned to release c90b3314b69a25d0faa0052749423cd2abaa3974; deployed release compatibility needs verification.

<details><summary>End of the job log</summary>

```
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
c140eab2b93d1272300de5e02de930350d053702
Found in cache @ /opt/hostedtoolcache/node/24.22.3/x64
node: v24.22.3
npm: 11.19.1
yarn: 1.22.22
##[error]WORLDMONITOR-1AY is resolved and pinned to release 92eee70e5a89b7e503108ccd1278222cbd809330; deployed release compatibility needs verification.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
