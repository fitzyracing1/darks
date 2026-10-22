<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 219977 · **Generated:** 2026-10-22T12:57:28.437Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Skipped: upstream already tracking

- stats (`.github/workflows/stats.yml`): [issue #57878](https://github.com/anomalyco/opencode/issues/57878) "cli: stats totals differ from stored session usage", [issue #53657](https://github.com/anomalyco/opencode/issues/53657) "FEATURE: Show a back shortcut hint on the TUI stats screen", [issue #51534](https://github.com/anomalyco/opencode/issues/51534) "fix(core): empty `--project` makes session stats silently report zero", [issue #47481](https://github.com/anomalyco/opencode/issues/47481) "cli: stats --days N omits cost/token/cache breakdown that v1 showed by default"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on dev ("docs-update", "deploy", "test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### docs-update (`.github/workflows/docs-update.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39777308361 — dark (conclusion: `skipped`), 2026-10-22 12:18 UTC
- Dark since: 2026-10-21 12:17 UTC (first run of the current streak)
- Likely cause: run skipped

### deploy (`.github/workflows/deploy.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39778174637 — dark (conclusion: `failure`), 2026-10-22 12:25 UTC
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

### test (`.github/workflows/test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39778174627 — dark (conclusion: `failure`), 2026-10-22 12:25 UTC
- Dark since: 2026-10-22 12:25 UTC (first run of the current streak)
- Job / step: `unit (linux)` → `Run unit tests`
- Likely cause: @opencode/core#test: command (/home/runner/_work/opencode/opencode/packages/core) /home/runner/.bun/bin/bun run test exited (1)

<details><summary>End of the job log</summary>

```
  █  █ █  █ █▀▀▀ █  █ █    █  █ █  █ █▀▀▀
  ▀▀▀▀ █▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀
  Session   Model ordering fixture
  Continue  opencode -s ses_model_order
                                   ▄
  █▀▀█ █▀▀█ █▀▀█ █▀▀▄ █▀▀▀ █▀▀█ █▀▀█ █▀▀█
  █  █ █  █ █▀▀▀ █  █ █    █  █ █  █ █▀▀▀
##[error]@opencode/core#test: command (/home/runner/_work/opencode/opencode/packages/core) /home/runner/.bun/bin/bun run test exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
