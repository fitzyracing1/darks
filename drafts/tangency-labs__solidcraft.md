<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 14798 · **Generated:** 2026-11-08T00:55:40.555Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow getting cancelled on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42430178760 — dark (conclusion: `cancelled`), 2026-11-08 00:32 UTC
- Dark since: 2026-11-07 17:21 UTC (first run of the current streak)
- Job / step: `image` → `Run Swatinem/rust-cache@6323deb102c322ba6fcbdcafc7e3dddab59af2b6`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Received 54525952 of 1065972586 (5.1%), 52.0 MBs/sec
Received 130023424 of 1065972586 (12.2%), 62.0 MBs/sec
Received 130023424 of 1065972586 (12.2%), 41.3 MBs/sec
Received 130023424 of 1065972586 (12.2%), 31.0 MBs/sec
Received 264241152 of 1065972586 (24.8%), 50.4 MBs/sec
Received 264241152 of 1065972586 (24.8%), 42.0 MBs/sec
Received 385875968 of 1065972586 (36.2%), 52.5 MBs/sec
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
