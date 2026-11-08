<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 14902 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #12942](https://github.com/tangency-labs/solidcraft/issues/12942) "Preferences: a shared window with kit pages and host pages", [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"
- Kernel rig (`.github/workflows/kernel-rig.yml`): [issue #11647](https://github.com/tangency-labs/solidcraft/issues/11647) "Remove the kernel rig's transitional checks when the kernel cases run in solidcore"
- External corpus (`.github/workflows/external-corpus.yml`): [issue #10788](https://github.com/tangency-labs/solidcraft/issues/10788) "CI: external-corpus failing: 5 NIST STEP files exceed 0.10% volume tolerance (e.g. nist_ctc_04_ap203 -17.77%)"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow failing on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been failing since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42465055126 — dark (conclusion: `failure`), 2026-11-08 08:56 UTC
- Dark since: 2026-11-07 17:21 UTC (first run of the current streak)
- Job / step: `image` → `Install trunk`
- Likely cause: tar: Error is not recoverable: exiting now

<details><summary>End of the job log</summary>

```
[command]/usr/bin/tar -xf /home/runner/work/_temp/ecb1cc62-d2ba-447f-9f78-951352b3bdf6/cache.tzst -P -C /home/runner/work/solidcraft/solidcraft --use-compress-program unzstd
Cache restored successfully
Restored from cache key "v0-rust-docker-web-image-Linux-x64-01b81e85-626f4cae" full match: true.
curl: (22) The requested URL returned error: 504
gzip: stdin: unexpected end of file
tar: Child returned status 1
tar: Error is not recoverable: exiting now
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
