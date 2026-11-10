<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 29810 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/42769539175 — dark (conclusion: `cancelled`), 2026-11-10 06:35 UTC
- Dark since: 2026-11-10 06:35 UTC (first run of the current streak)
- Job / step: `frontend-checks` → `Check frontend formatting`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Cache restored from key: node-cache-Linux-x64-pnpm-9ee20a484423f2b3e4d5399c9c01e950b4d9d1a611c23b181f94ad5f5b6f4799
> dbx@0.6.68 check:connection-types /home/runner/work/dbx/dbx
> node scripts/sync-connection-types.mjs --check
Validated 88 connection type descriptors and 110 connection profiles.
Checking formatting...
All matched files use the correct format.
Finished in 16501ms on 4046 files using 4 threads.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
