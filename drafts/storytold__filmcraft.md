<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 18701 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/44750176700 — dark (conclusion: `failure`), 2026-11-20 14:05 UTC
- Dark since: 2026-11-20 14:05 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: failed: "/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo" "nextest" "run" "--workspace" "--lib" "--bins" "--tests" "--no-fail-fast"

<details><summary>End of the job log</summary>

```
     Running tests/it/main.rs (target/debug/build/filmcraft-web/4dc56294c1b4cf51/out/it-4dc56294c1b4cf51)
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 13 filtered out; finished in 0.00s
     Running unittests src/main.rs (target/debug/build/xtask/7dd990ea25aedf8c/out/xtask-7dd990ea25aedf8c)
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 18 filtered out; finished in 0.00s
failed: "/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo" "nextest" "run" "--workspace" "--lib" "--bins" "--tests" "--no-fail-fast"
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
