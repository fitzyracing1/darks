<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: resolved -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** resolved — lit again (2026-10-30); nothing to file
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 8135 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Windows Full Suite", "Gentle Shell macOS qualification")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Windows Full Suite (`.github/workflows/windows-full-suite.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40976835003 — dark (conclusion: `failure`), 2026-10-30 00:00 UTC
- Dark since: 2026-10-29 05:10 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (rest)` → `Run shard`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/update/upgrade	8.905s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/verify	0.028s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/versions	0.032s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts	[no test files]
ok  	github.com/gentleman-programming/gentle-ai/v4/scripts/crosslane	2.333s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts/gen-sdd-agent-digests	[no test files]
FAIL
##[error]Process completed with exit code 1.
```

</details>

### Gentle Shell macOS qualification (`.github/workflows/shell-macos-qualification.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40981559952 — dark (conclusion: `failure`), 2026-10-30 00:44 UTC
- Dark since: 2026-10-30 00:00 UTC (first run of the current streak)
- Job / step: `macOS installation and recovery qualification` → `Qualify native Separate, Shared and recovery`
- Likely cause: No files were found with the provided path: /Users/runner/work/_temp/macos-qualification/receipt.json. No artifacts will be uploaded.

<details><summary>End of the job log</summary>

```
----------------------------------------------------------------------
Ran 10 tests in 0.062s
OK
Traceback (most recent call last):
  File "/Users/runner/work/gentle-ai/gentle-ai/e2e/shell-macos-qualification.py", line 56, in <module>
    REVIEWED_SUPPLIERS = json.loads((pathlib.Path(__file__).resolve().parents[1] / 'scripts/gentle-pi-suppliers.json').read_text())['releases']
NameError: name 'pathlib' is not defined
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
