<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 11255 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Pages", "Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40605008253 — dark (conclusion: `failure`), 2026-10-27 23:51 UTC
- Dark since: 2026-10-27 23:51 UTC (first run of the current streak)
- Job / step: `build` → `Include the published Flatpak repository`
- Likely cause: flatpak-site.sh: line 45: "ostree --repo="$repo_dir" pull --mirror previous" failed (exit 1)

<details><summary>End of the job log</summary>

```
Running kernel seems to be up-to-date.
No services need to be restarted.
No containers need to be restarted.
No user sessions are running outdated binaries.
No VM guests are running outdated hypervisor (qemu) binaries on this host.
error: Server returned HTTP 503
flatpak-site.sh: line 45: "ostree --repo="$repo_dir" pull --mirror previous" failed (exit 1)
##[error]Process completed with exit code 1.
```

</details>

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40610673635 — dark (conclusion: `cancelled`), 2026-10-28 00:44 UTC
- Dark since: 2026-10-28 00:44 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
58 |     Later(Deferred),
   |     ^^^^^
   |
   = note: `#[warn(dead_code)]` (part of `#[warn(unused)]`) on by default
warning: `solidcraft-engine` (lib) generated 1 warning
warning: `solidcraft-ui-egui` (lib) generated 2 warnings (run `cargo fix --lib -p solidcraft-ui-egui` to apply 1 suggestion)
   Compiling solidcraft-web v0.25.0 (/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
