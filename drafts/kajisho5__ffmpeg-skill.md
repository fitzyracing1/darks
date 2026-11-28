<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 12028 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

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

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/46110902524 — dark (conclusion: `cancelled`), 2026-11-28 05:10 UTC
- Dark since: 2026-11-27 15:00 UTC (first run of the current streak)
- Job / step: `test (macos-latest, py3.10, 1/3)` → `Run python tests/run_parallel.py --part 1/3`
- Likely cause: Canceling since a higher priority waiting request for tests-refs/heads/main exists

<details><summary>End of the job log</summary>

```
OK (skipped=1)
===== test_guards: OK in 413s (OK) =====
Ran 14 tests in 412.741s
OK
===== test_audio: OK in 707s (OK) =====
Ran 93 tests in 706.252s
OK
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
