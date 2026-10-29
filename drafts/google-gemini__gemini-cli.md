<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108600 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release: Nightly" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release: Nightly** workflow (`.github/workflows/release-nightly.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40793711761 — dark (conclusion: `failure`), 2026-10-29 00:23 UTC
- Dark since: 2026-10-29 00:23 UTC (first run of the current streak)
- Job / step: `build-mac / Build Unsigned (x64)` → `Install dependencies`
- Likely cause: 1: 0x102c25058 node::AsyncHooks::FailWithCorruptedAsyncStack(double) [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]

<details><summary>End of the job log</summary>

```
11: 0x1038424b1 uv__async_io [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
12: 0x103855ee3 uv__io_poll [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
13: 0x103842a30 uv_run [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
14: 0x102be5793 node::SpinEventLoopInternal(node::Environment*) [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
15: 0x102d30ca3 node::NodeMainInstance::Run() [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
16: 0x102ca108d node::Start(int, char**) [/Users/runner/hostedtoolcache/node/20.20.2/x64/bin/node]
17: 0x2087721c8
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
