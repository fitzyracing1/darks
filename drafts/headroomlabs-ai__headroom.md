<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 80261 · **Generated:** 2026-11-22T00:55:06.197Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Docker (`.github/workflows/docker.yml`): [issue #3649](https://github.com/headroomlabs-ai/headroom/issues/3649) "Docker image: ast-grep binary missing from runtime stage (whitelist COPY) — --intercept-tool-results fails to start"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("PR Governance", "CI", "Init E2E", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR Governance (`.github/workflows/pr-health.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/44753536028 — dark (conclusion: `cancelled`), 2026-11-20 14:26 UTC
- Dark since: 2026-11-17 14:26 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4588
https://github.com/headroomlabs-ai/headroom/pull/4588
https://github.com/headroomlabs-ai/headroom/pull/4588
https://github.com/headroomlabs-ai/headroom/pull/4588
https://github.com/headroomlabs-ai/headroom/pull/4579
https://github.com/headroomlabs-ai/headroom/pull/4579
https://github.com/headroomlabs-ai/headroom/pull/4579
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/44967526870 — dark (conclusion: `cancelled`), 2026-11-22 00:37 UTC
- Dark since: 2026-11-22 00:36 UTC (first run of the current streak)
- Likely cause: run cancelled

### Init E2E (`.github/workflows/init-e2e.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/44967527180 — dark (conclusion: `cancelled`), 2026-11-22 00:37 UTC
- Dark since: 2026-11-22 00:36 UTC (first run of the current streak)
- Likely cause: run cancelled

### Wrap E2E (`.github/workflows/wrap-e2e.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/44967527029 — dark (conclusion: `cancelled`), 2026-11-22 00:37 UTC
- Dark since: 2026-11-22 00:36 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
