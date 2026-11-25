<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 11019 · **Generated:** 2026-11-25T18:39:22.716Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("release", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/45674661713 — dark (conclusion: `failure`), 2026-11-25 18:23 UTC
- Dark since: 2026-11-24 04:54 UTC (first run of the current streak)
- Job / step: `release` → `Resolve the next version from merged PR labels`
- Likely cause: raise CalledProcessError(retcode, process.args,

<details><summary>End of the job log</summary>

```
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        capture_output=True, text=True, check=True).stdout
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/lib/python3.14/subprocess.py", line 578, in run
    raise CalledProcessError(retcode, process.args,
                             output=stdout, stderr=stderr)
subprocess.CalledProcessError: Command '['gh', 'api', 'repos/kajisho5/ffmpeg-skill/pulls/453', '--jq', '[.labels[].name]']' returned non-zero exit status 1.
##[error]Process completed with exit code 1.
```

</details>

### tests (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/45663666473 — dark (conclusion: `cancelled`), 2026-11-25 17:20 UTC
- Dark since: 2026-11-25 16:04 UTC (first run of the current streak)
- Job / step: `test (macos-latest, py3.10, 1/3)` → `Run python tests/run_parallel.py --part 1/3`
- Likely cause: Canceling since a higher priority waiting request for tests-refs/heads/main exists

<details><summary>End of the job log</summary>

```
===== test_picture[1/4]: OK in 483s () =====
OK (skipped=2)
===== test_picture[4/4]: OK in 525s () =====
OK (skipped=5)
===== test_orchestration[3/3]: OK in 830s (OK) =====
Ran 50 tests in 829.600s
OK
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
