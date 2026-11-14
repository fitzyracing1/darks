<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 8958 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43590975158 — dark (conclusion: `cancelled`), 2026-11-14 11:38 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Remote server (linux musl)` → `Run Swatinem/rust-cache@v2`
- Likely cause: The run was canceled by @l0ng-ai.

<details><summary>End of the job log</summary>

```
Received 130023424 of 710628578 (18.3%), 123.8 MBs/sec
Received 293601280 of 710628578 (41.3%), 139.8 MBs/sec
Received 515899392 of 710628578 (72.6%), 163.7 MBs/sec
Received 704643072 of 710628578 (99.2%), 167.7 MBs/sec
Received 710628578 of 710628578 (100.0%), 167.6 MBs/sec
Cache Size: ~678 MB (710628578 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/df2151c4-02c9-475d-a79a-56d304950cd0/cache.tzst -P -C /home/runner/work/openidea/openidea --use-compress-program unzstd
##[error]The operation was canceled.
```

</details>

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43590975134 — dark (conclusion: `cancelled`), 2026-11-14 11:38 UTC
- Dark since: 2026-11-13 00:14 UTC (first run of the current streak)
- Job / step: `Language smoke (kotlin)` → `Run Swatinem/rust-cache@v2`
- Likely cause: The run was canceled by @l0ng-ai.

<details><summary>End of the job log</summary>

```
Received 96468992 of 795766745 (12.1%), 91.9 MBs/sec
Received 268435456 of 795766745 (33.7%), 123.6 MBs/sec
Received 482344960 of 795766745 (60.6%), 149.6 MBs/sec
Received 679477248 of 795766745 (85.4%), 158.9 MBs/sec
Received 795766745 of 795766745 (100.0%), 166.7 MBs/sec
Cache Size: ~759 MB (795766745 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/07fb7349-2fdc-4221-80d6-6b99c866f665/cache.tzst -P -C /home/runner/work/openidea/openidea --use-compress-program unzstd
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
