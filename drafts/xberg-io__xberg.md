<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9565 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42467139997 — dark (conclusion: `failure`), 2026-11-08 09:25 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Setup Rust`
- Likely cause: Unable to locate executable file: undefined. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.

<details><summary>End of the job log</summary>

```
##[start-action display=Setup sccache;id=__xberg-io_actions_2.__mozilla-actions_sccache-action]
try to setup sccache version: v0.19.0
sccache download from url: https://github.com/mozilla/sccache/releases/download/v0.19.0/sccache-v0.19.0-aarch64-unknown-linux-musl.tar.gz
Unexpected HTTP response: 504
Waiting 11 seconds before trying again
Unexpected HTTP response: 504
Waiting 17 seconds before trying again
##[error]Error: Unexpected HTTP response: 504
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42467140027 — dark (conclusion: `failure`), 2026-11-08 09:25 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Setup Rust`
- Likely cause: Unable to locate executable file: undefined. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.

<details><summary>End of the job log</summary>

```
##[start-action display=Setup sccache;id=__xberg-io_actions.__mozilla-actions_sccache-action]
try to setup sccache version: v0.19.0
sccache download from url: https://github.com/mozilla/sccache/releases/download/v0.19.0/sccache-v0.19.0-x86_64-unknown-linux-musl.tar.gz
Unexpected HTTP response: 504
Waiting 10 seconds before trying again
Unexpected HTTP response: 504
Waiting 16 seconds before trying again
##[error]Error: Unexpected HTTP response: 504
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42467140024 — dark (conclusion: `failure`), 2026-11-08 09:25 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Setup Rust`
- Likely cause: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com)

<details><summary>End of the job log</summary>

```
Written by John Gilmore and Jay Fenlason.
Using curl to download mise
##[warning]Download attempt 1/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 1.2 seconds.
##[warning]Download attempt 2/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 3.2 seconds.
##[warning]Download attempt 3/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 5.9 seconds.
##[warning]Download attempt 4/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 8.8 seconds.
##[warning]Download attempt 5/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 16.2 seconds.
##[error]Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com)
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42467140280 — dark (conclusion: `failure`), 2026-11-08 09:25 UTC
- Dark since: 2026-11-08 08:56 UTC (first run of the current streak)
- Job / step: `Plugin bundle freshness` → `Install Python, uv and Node`
- Likely cause: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com)

<details><summary>End of the job log</summary>

```
Written by John Gilmore and Jay Fenlason.
Using curl to download mise
##[warning]Download attempt 1/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 1.6 seconds.
##[warning]Download attempt 2/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 4.0 seconds.
##[warning]Download attempt 3/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 5.3 seconds.
##[warning]Download attempt 4/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 14.6 seconds.
##[warning]Download attempt 5/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 16.7 seconds.
##[error]Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com)
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42467140005 — dark (conclusion: `failure`), 2026-11-08 09:25 UTC
- Dark since: 2026-11-08 08:56 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios)` → `cargo check xberg-dart`
- Likely cause: Unable to locate executable file: undefined. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.

<details><summary>End of the job log</summary>

```
##[start-action display=Setup sccache;id=__xberg-io_actions.__mozilla-actions_sccache-action]
try to setup sccache version: v0.19.0
sccache download from url: https://github.com/mozilla/sccache/releases/download/v0.19.0/sccache-v0.19.0-aarch64-apple-darwin.tar.gz
Unexpected HTTP response: 504
Waiting 15 seconds before trying again
Unexpected HTTP response: 504
Waiting 12 seconds before trying again
##[error]Error: Unexpected HTTP response: 504
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42467140286 — dark (conclusion: `failure`), 2026-11-08 09:25 UTC
- Dark since: 2026-11-08 08:56 UTC (first run of the current streak)
- Job / step: `docs / Build` → `Install Node.js and pnpm through mise`
- Likely cause: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com)

<details><summary>End of the job log</summary>

```
Written by John Gilmore and Jay Fenlason.
Using curl to download mise
##[warning]Download attempt 1/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 1.2 seconds.
##[warning]Download attempt 2/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 3.3 seconds.
##[warning]Download attempt 3/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 4.3 seconds.
##[warning]Download attempt 4/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 9.4 seconds.
##[warning]Download attempt 5/6 failed: Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com). Retrying in 17.0 seconds.
##[error]Could not download github.com/…/mise-v2026.10.24-linux-x64.tar.zst (HTTP 504 from github.com)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
