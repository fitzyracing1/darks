<!-- dark-draft: socketio/socket.io -->
<!-- draft-state: ready -->
# Upstream issue draft: socketio/socket.io

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/socketio/socket.io/issues/new
- **Stars:** 63228 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build examples" workflow failing on main since 2026-09-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build examples** workflow (`.github/workflows/build-examples.yml`) on `main` has been failing since 2026-09-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/socketio/socket.io/actions/runs/40148033857 — dark (conclusion: `failure`), 2026-10-25 00:46 UTC
- Dark since: 2026-09-27 00:53 UTC (first run of the current streak)
- Job / step: `build-examples (typescript-check-public-exports)` → `Build typescript-check-public-exports`
- Likely cause: sh: 1: tsc: not found

<details><summary>End of the job log</summary>

```
Cache restored successfully
Cache restored from key: node-cache-Linux-x64-npm-e5746def79fac01a66a96f0fbda4992cfd963d23c84f12ba5a4120b7522c0df1
added 9 packages, and audited 10 packages in 766ms
found 0 vulnerabilities
> typescript-check-public-exports@0.0.0 build
> tsc
sh: 1: tsc: not found
##[error]Process completed with exit code 127.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining socket.io!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
