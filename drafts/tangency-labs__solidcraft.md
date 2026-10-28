<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 11576 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker", "Pages")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40742881101 — dark (conclusion: `failure`), 2026-10-28 18:12 UTC
- Dark since: 2026-10-28 12:29 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: 2026-10-28T18:15:10.959012Z  INFO   4: error during cargo build execution

<details><summary>End of the job log</summary>

```
    4: cargo call to executable 'cargo' with args: '["build", "--target=wasm32-unknown-unknown", "--manifest-path", "/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web/Cargo.toml", "--release", "--bin", "solidc…
2026-10-28T18:15:10.958998Z ERROR error from build pipeline
2026-10-28T18:15:10.959008Z  INFO   1: HTML build pipeline failed (1 errors), showing first
2026-10-28T18:15:10.959010Z  INFO   2: error from asset pipeline
2026-10-28T18:15:10.959011Z  INFO   3: running cargo build
2026-10-28T18:15:10.959012Z  INFO   4: error during cargo build execution
2026-10-28T18:15:10.959013Z  INFO   5: cargo call to executable 'cargo' with args: '["build", "--target=wasm32-unknown-unknown", "--manifest-path", "/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web/Cargo.toml…
##[error]Process completed with exit code 1.
```

</details>

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40742881085 — dark (conclusion: `failure`), 2026-10-28 18:12 UTC
- Dark since: 2026-10-28 18:08 UTC (first run of the current streak)
- Job / step: `build` → `Build the web app`
- Likely cause: 2026-10-28T18:32:13.552524Z  INFO   4: error during cargo build execution

<details><summary>End of the job log</summary>

```
    4: cargo call to executable 'cargo' with args: '["build", "--target=wasm32-unknown-unknown", "--manifest-path", "/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web/Cargo.toml", "--release", "--bin", "solidc…
2026-10-28T18:32:13.552506Z ERROR error from build pipeline
2026-10-28T18:32:13.552520Z  INFO   1: HTML build pipeline failed (1 errors), showing first
2026-10-28T18:32:13.552522Z  INFO   2: error from asset pipeline
2026-10-28T18:32:13.552523Z  INFO   3: running cargo build
2026-10-28T18:32:13.552524Z  INFO   4: error during cargo build execution
2026-10-28T18:32:13.552524Z  INFO   5: cargo call to executable 'cargo' with args: '["build", "--target=wasm32-unknown-unknown", "--manifest-path", "/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web/Cargo.toml…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
