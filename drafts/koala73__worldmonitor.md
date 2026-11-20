<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90970 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Sentry Resolve Pin Audit" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Sentry Resolve Pin Audit** workflow (`.github/workflows/sentry-resolve-pin-audit.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44687982712 — dark (conclusion: `failure`), 2026-11-20 06:27 UTC
- Dark since: 2026-11-20 06:27 UTC (first run of the current streak)
- Job / step: `audit` → `Audit resolved issues for release pins`
- Likely cause: WORLDMONITOR-1FS is resolved and pinned to release c90b3314b69a25d0faa0052749423cd2abaa3974; deployed release compatibility needs verification.

<details><summary>End of the job log</summary>

```
npm: 11.19.1
yarn: 1.22.22
Sentry resolve pins require review: 2 of 347 resolved issues are pinned; verify deployed release compatibility before repair.
  WORLDMONITOR-1FR pinned to release c90b3314b69a25d0faa0052749423cd2abaa3974 (in-release)
    https://elie-habib.sentry.io/issues/7857755809/
  WORLDMONITOR-1FS pinned to release c90b3314b69a25d0faa0052749423cd2abaa3974 (in-release)
    https://elie-habib.sentry.io/issues/7857755817/
##[error]WORLDMONITOR-1FR is resolved and pinned to release c90b3314b69a25d0faa0052749423cd2abaa3974; deployed release compatibility needs verification.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
