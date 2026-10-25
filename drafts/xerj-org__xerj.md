<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 15302 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/40058986935 — dark (conclusion: `failure`), 2026-10-24 03:36 UTC
- Dark since: 2026-10-23 08:41 UTC (first run of the current streak)
- Job / step: `Build x86_64-unknown-linux-musl` → `Build xerj-server`
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
