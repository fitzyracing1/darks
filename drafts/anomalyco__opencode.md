<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 225400 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on dev ("nightly-beta", "release", "bot-nix-hashes")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `dev` have been dark recently. Details below, in case they're useful:

### nightly-beta (`.github/workflows/nightly-beta.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42466820040 — dark (conclusion: `failure`), 2026-11-08 09:21 UTC
- Dark since: 2026-11-07 09:21 UTC (first run of the current streak)
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

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42462929316 — dark (conclusion: `failure`), 2026-11-08 08:26 UTC
- Dark since: 2026-11-07 11:31 UTC (first run of the current streak)
- Job / step: `models-catalog` → `Set up Bun`
- Likely cause: Error: Unexpected HTTP response: 504

<details><summary>End of the job log</summary>

```
##[start-action display=Setup Bun;id=__self.__oven-sh_setup-bun]
Obtained version 1.4.4 from package.json
Downloading a new version of Bun: https://github.com/oven-sh/bun/releases/download/bun-v1.4.4/bun-linux-x64-baseline.zip
Unexpected HTTP response: 504
Waiting 13 seconds before trying again
Unexpected HTTP response: 504
Waiting 12 seconds before trying again
##[error]Error: Unexpected HTTP response: 504
```

</details>

### bot-nix-hashes (`.github/workflows/bot-nix-hashes.yml`)

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/42462929303 — dark (conclusion: `failure`), 2026-11-08 08:26 UTC
- Dark since: 2026-11-08 08:26 UTC (first run of the current streak)
- Job / step: `hash (aarch64-darwin, macos-latest)` → `Setup Nix`
- Likely cause: gtar: Error is not recoverable: exiting now

<details><summary>End of the job log</summary>

```
2026-11-08 08:47:06.521 mdutil[9745:30487] mdutil disabling Spotlight: /nix -> kMDConfigSearchLevelFSSearchOnly
/nix:
	Indexing disabled.
Fetching nix archives from https://github.com/nixbuild/nix-quick-install-action/releases/download/v34/nix-2.29.2-aarch64-darwin.tar.zstd
zstd: /*stdin*\: unsupported format
gtar: Child returned status 1
gtar: Error is not recoverable: exiting now
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
