<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 394071 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/42319135354 — dark (conclusion: `failure`), 2026-11-07 00:35 UTC
- Dark since: 2026-11-06 18:24 UTC (first run of the current streak)
- Job / step: `security-fast` → `Check main push ratchets and protocol additions`
- Likely cause: test-lines failed (exit 1)

<details><summary>End of the job log</summary>

```
$ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base d1be6e243ccd850329d93567cb3ffd71e0ff837d --no-merge-base
Mock factory ratchet OK: 6365 grandfathered factories.
[ok] mock-exports
$ node --import ./scripts/tsx.mjs scripts/check-test-lines-ratchet.mts --base d1be6e243ccd850329d93567cb3ffd71e0ff837d --no-merge-base
Test lines: 6556043; ceiling: 6556042; over by: 1; net delta: +20.
Offset the added lines by deleting or consolidating tests elsewhere, or add a justified allocation in config/test-lines-allocations/<change>.txt.
[ELIFECYCLE] Command failed with exit code 1.
##[error]test-lines failed (exit 1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
