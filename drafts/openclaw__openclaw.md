<!-- dark-draft: openclaw/openclaw -->
<!-- draft-state: ready -->
# Upstream issue draft: openclaw/openclaw

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/openclaw/openclaw/issues/new
- **Stars:** 394159 · **Generated:** 2026-11-08T06:41:39.628Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/42454296884 — dark (conclusion: `skipped`), 2026-11-08 06:19 UTC
- Dark since: 2026-11-07 12:23 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/openclaw/openclaw/actions/runs/42454524390 — dark (conclusion: `failure`), 2026-11-08 06:23 UTC
- Dark since: 2026-11-08 06:23 UTC (first run of the current streak)
- Job / step: `security-fast` → `Check main push ratchets and protocol additions`
- Likely cause: test-lines failed (exit 1)

<details><summary>End of the job log</summary>

```
$ node --import ./scripts/tsx.mjs scripts/check-test-mock-exports.mts --base c23b88f1116a4dbe106bd3553a39ce48b9d1cb47 --no-merge-base
Mock factory ratchet OK: 6361 grandfathered factories.
[ok] mock-exports
$ node --import ./scripts/tsx.mjs scripts/check-test-lines-ratchet.mts --base c23b88f1116a4dbe106bd3553a39ce48b9d1cb47 --no-merge-base
Test lines: 6573918; ceiling: 6573902; over by: 16; net delta: +41.
Offset the added lines by deleting or consolidating tests elsewhere, or add a justified allocation in config/test-lines-allocations/<change>.txt.
[ELIFECYCLE] Command failed with exit code 1.
##[error]test-lines failed (exit 1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openclaw!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
