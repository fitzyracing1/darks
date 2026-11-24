<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 30767 · **Generated:** 2026-11-24T00:51:11.893Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("iOS compile", "iOS UI tour")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45297441164 — dark (conclusion: `cancelled`), 2026-11-24 00:28 UTC
- Dark since: 2026-11-23 18:16 UTC (first run of the current streak)
- Job / step: `engine` → `Boot the simulator`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
	Waiting on System App
[2026-11-24 00:36:57 +0000] Status=4, isTerminal=NO, Elapsed=01:46.
	Waiting on System App
[2026-11-24 00:37:08 +0000] Status=4, isTerminal=NO, Elapsed=01:56.
	Waiting on System App
[2026-11-24 00:37:17 +0000] Status=4294967295, isTerminal=YES, Elapsed=02:05.
	Finished
##[error]The operation was canceled.
```

</details>

### iOS UI tour (`.github/workflows/ios-ui-tour.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45275601897 — dark (conclusion: `failure`), 2026-11-23 22:01 UTC
- Dark since: 2026-11-23 19:40 UTC (first run of the current streak)
- Job / step: `tour`
- Likely cause: The job was not acquired by Runner of type hosted even after multiple attempts

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
