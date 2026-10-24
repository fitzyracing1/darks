<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 15242 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

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

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/40111955300 — dark (conclusion: `failure`), 2026-10-24 16:31 UTC
- Dark since: 2026-10-24 05:31 UTC (first run of the current streak)
- Job / step: `Build + Test` → `Unit + integration tests`
- Likely cause: error: test failed, to rerun pass '-p xerj-api --test cluster_metadata_replicates'

<details><summary>End of the job log</summary>

```
thread 'a_late_member_copies_documents_written_before_it_joined' (17975) panicked at crates/xerj-api/tests/cluster_metadata_replicates.rs:630:13:
in-sync for shard 0 stayed [["n2"], ["n2"], ["n2"]], wanted ["n2", "n3"]
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    a_late_member_copies_documents_written_before_it_joined
test result: FAILED. 13 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.01s
error: test failed, to rerun pass `-p xerj-api --test cluster_metadata_replicates`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
