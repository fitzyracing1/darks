<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 19136 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/46076955855 — dark (conclusion: `failure`), 2026-11-27 22:29 UTC
- Dark since: 2026-11-27 22:29 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: failed: "/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo" "nextest" "run" "--workspace" "--lib" "--bins" "--tests" "--no-fail-fast"

<details><summary>End of the job log</summary>

```
     Running tests/it/main.rs (target/debug/build/filmcraft-web/dc05f8b8559073f7/out/it-dc05f8b8559073f7)
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 13 filtered out; finished in 0.00s
     Running unittests src/main.rs (target/debug/build/xtask/17371ff56ab3f83e/out/xtask-17371ff56ab3f83e)
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 18 filtered out; finished in 0.00s
failed: "/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo" "nextest" "run" "--workspace" "--lib" "--bins" "--tests" "--no-fail-fast"
##[error]Process completed with exit code 1.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/46095095566 — dark (conclusion: `failure`), 2026-11-28 01:50 UTC
- Dark since: 2026-11-28 01:50 UTC (first run of the current streak)
- Job / step: `release / Linux riscv64` → `Build and package (deb, rpm, tar.gz)`
- Likely cause: unpack-objects failed

<details><summary>End of the job log</summary>

```
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/filmcraft/filmcraft/craft-fonts/.git/
##[error]error: RPC failed; curl 56 GnuTLS recv error (-24): Decryption has failed.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
