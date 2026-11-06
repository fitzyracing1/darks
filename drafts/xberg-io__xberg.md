<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9553 · **Generated:** 2026-11-06T18:37:41.328Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42224564188 — dark (conclusion: `failure`), 2026-11-06 13:19 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   54G   91G  38% /
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 3450.23s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42224564185 — dark (conclusion: `failure`), 2026-11-06 13:19 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `E2E (java)` → `Run e2e tests`
- Likely cause: [java:e2e] ERROR task failed

<details><summary>End of the job log</summary>

```
[java] [ERROR] Re-run Maven using the -X switch to enable full debug logging.
[java] [ERROR]
[java] [ERROR] For more information about the errors and possible solutions, please read the following articles:
[java] [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
ERROR test failed: java — Command failed: cd e2e/java && mvn test (env: LD_LIBRARY_PATH, CRAWLBERG_ALLOW_PRIVATE_NETWORK, RUST_MIN_STACK)
ERROR Command failed: cd e2e/java && mvn test (env: LD_LIBRARY_PATH, CRAWLBERG_ALLOW_PRIVATE_NETWORK, RUST_MIN_STACK)
[java:e2e] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
