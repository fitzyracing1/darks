<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 14131 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39992512191 — dark (conclusion: `cancelled`), 2026-10-23 17:07 UTC
- Dark since: 2026-10-23 04:56 UTC (first run of the current streak)
- Likely cause: run cancelled

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39926420615 — dark (conclusion: `failure`), 2026-10-23 08:41 UTC
- Dark since: 2026-10-23 08:41 UTC (first run of the current streak)
- Job / step: `Build aarch64-unknown-linux-musl` → `Build xerj-server`
- Likely cause: error: could not compile 'xerj-server' (bin "xerj") due to 1 previous error

<details><summary>End of the job log</summary>

```
 259 | pub fn try_spawn_unguarded<F>(name: &str, f: F) -> Result<SpawnedThread, SpawnFailure<F>>
     |        ------------------- required by a bound in this function
 260 | where
 261 |     F: FnOnce() + Send + 'static,
     |                   ^^^^ required by this bound in `try_spawn_unguarded`
For more information about this error, try `rustc --explain E0277`.
error: could not compile `xerj-server` (bin "xerj") due to 1 previous error
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
