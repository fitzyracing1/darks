<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 11896 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- pages (`.github/workflows/pages.yml`): [issue #690](https://github.com/kajisho5/ffmpeg-skill/issues/690) "Use-case pages, the first five minutes, and a Japanese README"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "tests" workflow getting cancelled on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **tests** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/46080964895 — dark (conclusion: `cancelled`), 2026-11-27 23:10 UTC
- Dark since: 2026-11-27 15:00 UTC (first run of the current streak)
- Job / step: `test (debian-trixie container, py3.13, ffmpeg 7.1 apt, 1/3)` → `Run python3 tests/run_parallel.py --part 1/3`
- Likely cause: run cancelled in job "test (debian-trixie container, py3.13, ffmpeg 7.1 apt, 1/3)"

<details><summary>End of the job log</summary>

```
    1  the Windows tree kill: runs on the Windows CI job
    1  this FFmpeg does not read the mislabelled fixture back as written: 15 not less than or equal to 7 : fixture pq_bt2020nc: red (192, 48, 40) came back (197, 53, 37); green (48, 192, 80) came back (43, 177, 77); blu…
    1  this FFmpeg reads the fixture's matrix as 'gbr', not None
    1  this ffmpeg's drawtext does not draw a box at a line break
    1  this machine has no font covering hi
    1  this machine has no font covering ja
873 tests, 5 modules in 6 processes, 4 at a time, 1912s wall; FAILED: test_contract
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
