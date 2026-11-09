<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 261839 · **Generated:** 2026-11-09T06:54:36.072Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker Build, Test, and Publish", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42571209972 — dark (conclusion: `cancelled`), 2026-11-09 06:08 UTC
- Dark since: 2026-11-08 17:58 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yaml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42572482317 — dark (conclusion: `failure`), 2026-11-09 06:20 UTC
- Dark since: 2026-11-09 05:34 UTC (first run of the current streak)
- Job / step: `JS & TS checks / JS & TS checks` → `Run all workspace checks`
- Likely cause: 2 of 10 checks failed

<details><summary>End of the job log</summary>

```
$ pnpm run test:ui
$ vitest run --project ui
 RUN  v4.1.12 /home/runner/_work/hermes-agent/hermes-agent/apps/desktop
(node:8389) ExperimentalWarning: localStorage is not available because --localstorage-file was not provided.
(Use `node --trace-warnings ...` to show where the warning was created)
(node:8512) ExperimentalWarning: localStorage is not available because --localstorage-file was not provided.
(Use `node --trace-warnings ...` to show where the warning was created)
##[error]apps/desktop :: check:test:desktop:all failed
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
