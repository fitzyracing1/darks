<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 229608 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on dev ("nightly-beta", "release", "check-cli-rs", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/45973283814 — dark (conclusion: `failure`), 2026-11-27 09:23 UTC
- Dark since: 2026-11-27 09:23 UTC (first run of the current streak)
- Job / step: `dispatch` → `Dispatch beta test runs`
- Likely cause: could not create workflow dispatch event: HTTP 422: No ref found for: beta (https://api.github.com/repos/anomalyco/opencode/actions/workflows/396447938/dispatches)

<details><summary>End of the job log</summary>

```
Metadata: read
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: dispatch
could not create workflow dispatch event: HTTP 422: No ref found for: beta (https://api.github.com/repos/anomalyco/opencode/actions/workflows/396447938/dispatches)
##[error]Process completed with exit code 1.
```

</details>

### release (`.github/workflows/release.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/45998915747 — dark (conclusion: `failure`), 2026-11-27 12:28 UTC
- Dark since: 2026-11-27 12:28 UTC (first run of the current streak)
- Job / step: `publish-npm` → `Publish`
- Likely cause: @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364 did not appear in the registry

<details><summary>End of the job log</summary>

```
waiting for @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364
waiting for @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364
waiting for @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364
waiting for @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364
waiting for @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364
waiting for @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364
waiting for @opencode/cli-darwin-x64-baseline@0.0.0-dev-1364
##[error]@opencode/cli-darwin-x64-baseline@0.0.0-dev-1364 did not appear in the registry
```

</details>

### check-cli-rs (`.github/workflows/check-cli-rs.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/46046664757 — dark (conclusion: `failure`), 2026-11-27 18:04 UTC
- Dark since: 2026-11-27 18:04 UTC (first run of the current streak)
- Job / step: `check` → `Run bun run cargo test --locked --workspace --no-fail-fast`
- Likely cause: error: 1 target failed:

<details><summary>End of the job log</summary>

```
all doctests ran in 0.06s; merged doctests compilation took 0.06s
   Doc-tests opencode_util
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
error: 1 target failed:
    `-p opencode-tui --test all`
error: script "cargo" exited with code 101
##[error]Process completed with exit code 101.
```

</details>

### check-test (`.github/workflows/check-test.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/46047275630 — dark (conclusion: `failure`), 2026-11-27 18:09 UTC
- Dark since: 2026-11-27 18:09 UTC (first run of the current streak)
- Job / step: `e2e (linux, app-1)` → `Run app e2e tests against production build`
- Likely cause: TypeError: Cannot read properties of undefined (reading 'VITE_OPENCODE_CHANNEL')

<details><summary>End of the job log</summary>

```
> 164 |   ...(import.meta.env.VITE_OPENCODE_CHANNEL === "local" || import.meta.env.VITE_OPENCODE_CHANNEL === "dev"
      |                       ^
  165 |     ? [
  166 |         {
  167 |           tab: "experimental",
    at /home/runner/_work/opencode/opencode/packages/app/src/settings/search-catalog.ts:164:23
error: script "test:e2e:built" exited with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
