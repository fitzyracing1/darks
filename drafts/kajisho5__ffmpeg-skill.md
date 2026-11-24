<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 10367 · **Generated:** 2026-11-24T06:47:07.198Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("tests", "release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### tests (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/45329597995 — dark (conclusion: `failure`), 2026-11-24 04:54 UTC
- Dark since: 2026-11-24 04:54 UTC (first run of the current streak)
- Job / step: `test (windows-latest, py3.10, 1/3)` → `Install ffmpeg (Windows)`
- Likely cause: - ffmpeg - ffmpeg not installed. The package was not found with the source(s) listed.

<details><summary>End of the job log</summary>

```
 NOTE: When you specify explicit sources, it overrides default sources.
If the package version is a prerelease and you didn't specify `--pre`,
 the package may not be found.
Version was specified as '9.0.2'. It is possible that version
 does not exist for 'ffmpeg' at the source specified.
Please see https://docs.chocolatey.org/en-us/troubleshooting for more
 assistance.
##[error]Process completed with exit code 1.
```

</details>

### release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/45329597844 — dark (conclusion: `failure`), 2026-11-24 04:54 UTC
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

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
