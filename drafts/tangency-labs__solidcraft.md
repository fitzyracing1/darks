<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 14737 · **Generated:** 2026-11-07T18:36:17.303Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #12942](https://github.com/tangency-labs/solidcraft/issues/12942) "Preferences: a shared window with kit pages and host pages", [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow getting cancelled on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42400335600 — dark (conclusion: `cancelled`), 2026-11-07 18:15 UTC
- Dark since: 2026-11-07 17:21 UTC (first run of the current streak)
- Job / step: `image` → `Run Swatinem/rust-cache@6323deb102c322ba6fcbdcafc7e3dddab59af2b6`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  - /home/runner/work/solidcraft/solidcraft/crates/ui-egui/Cargo.toml
  - /home/runner/work/solidcraft/solidcraft/xtask/Cargo.toml
... Restoring cache ...
Cache hit for: v0-rust-docker-web-image-Linux-x64-01b81e85-de44f037
Received 167772160 of 926609448 (18.1%), 160.0 MBs/sec
Received 402653184 of 926609448 (43.5%), 192.0 MBs/sec
Received 641728512 of 926609448 (69.3%), 204.0 MBs/sec
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
