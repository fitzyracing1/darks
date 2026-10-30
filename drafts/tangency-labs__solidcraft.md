<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 12215 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Pages", "Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41048952426 — dark (conclusion: `failure`), 2026-10-30 11:33 UTC
- Dark since: 2026-10-29 18:10 UTC (first run of the current streak)
- Job / step: `build` → `Test the web app offline and across an update (headless Chrome)`
- Likely cause: error: v5's download is finished, not dropped: timed out after 240s; last state: {"build":"v6","caches":{"solidcraft-app /solidcraft/app/ 0.27.1-0e8339ee77420171":11,"solidcraft-app /solidcraft/app/ 0.27.1-dadb7505b8d35…

<details><summary>End of the job log</summary>

```
ok    deployed mid-download: v4's page doesn't fit v3's files, so v1 starts (4.0s)
ok    update: build v3 starts on the first launch; only it stays kept (3.9s)
ok    offline: build v3 starts from the kept copy (3.9s)
ok    slow network: build v3 starts from the kept copy (4.9s)
ok    update in another tab: the kept v3 still starts; its copy is retired, not deleted (5.5s)
ok    no open page uses them any more: the retired copies are deleted; v4 starts (4.1s)
error: v5's download is finished, not dropped: timed out after 240s; last state: {"build":"v6","caches":{"solidcraft-app /solidcraft/app/ 0.27.1-0e8339ee77420171":11,"solidcraft-app /solidcraft/app/ 0.27.1-dadb7505b8d35…
##[error]Process completed with exit code 1.
```

</details>

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41054841906 — dark (conclusion: `cancelled`), 2026-10-30 12:22 UTC
- Dark since: 2026-10-30 12:22 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
warning: `solidcraft-ui-egui` (lib) generated 2 warnings (run `cargo fix --lib -p solidcraft-ui-egui` to apply 1 suggestion)
   Compiling solidcraft-web v0.27.1 (/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web)
    Finished `release` profile [optimized + debuginfo] target(s) in 6m 29s
2026-10-30T12:29:39.031319Z  INFO downloading wasm-bindgen version="0.2.129"
2026-10-30T12:29:39.349704Z  INFO installing wasm-bindgen
2026-10-30T12:29:58.510068Z  INFO downloading wasm-opt version="version_123"
2026-10-30T12:29:59.035110Z  INFO installing wasm-opt
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
