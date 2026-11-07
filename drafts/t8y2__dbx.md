<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 29439 · **Generated:** 2026-11-07T12:37:41.487Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/42369247259 — dark (conclusion: `cancelled`), 2026-11-07 11:41 UTC
- Dark since: 2026-11-06 10:56 UTC (first run of the current streak)
- Job / step: `packages` → `Node package tests`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling ***-driver-mongodb v0.1.0 (/home/runner/work/***/***/crates/***-driver-mongodb)
   Compiling ***-driver-elasticsearch v0.1.0 (/home/runner/work/***/***/crates/***-driver-elasticsearch)
   Compiling ***-driver-redis v0.1.0 (/home/runner/work/***/***/crates/***-driver-redis)
   Compiling ***-driver-agent v0.1.0 (/home/runner/work/***/***/crates/***-driver-agent)
   Compiling ***-plugin-runtime v0.1.0 (/home/runner/work/***/***/crates/***-plugin-runtime)
   Compiling ***-ai-provider v0.1.0 (/home/runner/work/***/***/crates/***-ai-provider)
   Compiling ***-driver-mysql v0.1.0 (/home/runner/work/***/***/crates/***-driver-mysql)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
