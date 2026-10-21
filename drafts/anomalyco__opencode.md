<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 219580 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on dev ("docs-update", "publish", "deploy", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### docs-update (`.github/workflows/docs-update.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39598451977 — dark (conclusion: `skipped`), 2026-10-21 12:17 UTC
- Dark since: 2026-10-21 12:17 UTC (first run of the current streak)
- Likely cause: run skipped

### publish (`.github/workflows/publish.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39649949881 — dark (conclusion: `cancelled`), 2026-10-21 18:07 UTC
- Dark since: 2026-10-21 12:23 UTC (first run of the current streak)
- Likely cause: run cancelled

### deploy (`.github/workflows/deploy.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39653940641 — dark (conclusion: `failure`), 2026-10-21 18:34 UTC
- Dark since: 2026-10-21 12:23 UTC (first run of the current streak)
- Job / step: `deploy` → `Run bun sst deploy --stage=dev`
- Likely cause: "message": "Actor migration tag precondition failed, got tag 'v1' when expected tag is 'v2'. Please make sure the tags match and try again."

<details><summary>End of the job log</summary>

```
      "code": 10079,
      "message": "Actor migration tag precondition failed, got tag 'v1' when expected tag is 'v2'. Please make sure the tags match and try again."
    }
  ],
  "messages": []
}
error: "sst" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

### docs-locale-sync (`.github/workflows/docs-locale-sync.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39646664561 — dark (conclusion: `skipped`), 2026-10-21 17:45 UTC
- Dark since: 2026-10-21 17:30 UTC (first run of the current streak)
- Likely cause: run skipped

### test (`.github/workflows/test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39652281445 — dark (conclusion: `failure`), 2026-10-21 18:23 UTC
- Dark since: 2026-10-21 18:23 UTC (first run of the current streak)
- Job / step: `unit (windows)` → `Run unit tests`
- Likely cause: @opencode/util#test: command (C:\runner\_work\opencode\opencode\packages\util) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (3)

<details><summary>End of the job log</summary>

```
(pass) details preserves disabled state from its shipping legacy declaration [0.72ms]
(pass) context preserves disabled state from its shipping legacy declaration [0.39ms]
src\main\extension\storage.test.ts:
Downloading Electron binary...
cache miss, executing 0fb994e0f70b7d16
$ bun test --only-failures
bun test v1.4.2 (744846f84)
##[error]@opencode/util#test: command (C:\runner\_work\opencode\opencode\packages\util) C:\Users\runneradmin\.bun\bin\bun.exe run test exited (3)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
