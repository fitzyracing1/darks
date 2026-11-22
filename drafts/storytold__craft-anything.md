<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/craft-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 41057 · **Generated:** 2026-11-22T18:35:55.565Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/44976169281 — dark (conclusion: `failure`), 2026-11-22 02:27 UTC
- Dark since: 2026-11-22 02:27 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Set up the aarch64 cross toolchain`
- Likely cause: error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts

<details><summary>End of the job log</summary>

```
 82 148.3M  82 121.9M   0      0 711.0k      0   03:33   02:55   00:38 625.7k
 82 148.3M  82 122.5M   0      0 710.4k      0   03:33   02:56   00:37 581.6k
 82 148.3M  82 123.1M   0      0 709.6k      0   03:34   02:57   00:37 591.5k
 83 148.3M  83 123.7M   0      0 709.1k      0   03:34   02:58   00:36 578.9k
 83 148.3M  83 124.3M   0      0 708.5k      0   03:34   02:59   00:35 566.1k
curl: (28) Operation timed out after 180000 milliseconds with 130645468 out of 155595600 bytes received
error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
