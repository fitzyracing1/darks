<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 15030 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #12942](https://github.com/tangency-labs/solidcraft/issues/12942) "Preferences: a shared window with kit pages and host pages", [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow getting cancelled on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42541473974 — dark (conclusion: `cancelled`), 2026-11-09 00:40 UTC
- Dark since: 2026-11-08 23:06 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling solidcraft-theme v0.40.0-rc.3 (/home/runner/work/solidcraft/solidcraft/crates/theme)
   Compiling solidcraft-ui-registry v0.40.0-rc.3 (/home/runner/work/solidcraft/solidcraft/crates/ui-registry)
   Compiling solidcraft-space-mouse v0.40.0-rc.3 (/home/runner/work/solidcraft/solidcraft/crates/space-mouse)
   Compiling solidcraft-web v0.40.0-rc.3 (/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web)
   Compiling eframe v0.37.0
   Compiling solidcraft-smlib v0.40.0-rc.3 (/home/runner/work/solidcraft/solidcraft/crates/smlib)
   Compiling solidcraft-kernel v0.40.0-rc.3 (/home/runner/work/solidcraft/solidcraft/crates/kernel)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
