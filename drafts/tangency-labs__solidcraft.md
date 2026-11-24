<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 18018 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #17903](https://github.com/tangency-labs/solidcraft/issues/17903) "solidcraft: the Preferences pages (Appearance, Layout, Graphics, Navigation) as kit pages"
- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations", [issue #20820](https://github.com/tangency-labs/solidcraft/issues/20820) "Publish a Docker/web image variant with the optional bundled-render-library texture/HDR pack"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Fillet rig" workflow getting cancelled on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Fillet rig** workflow (`.github/workflows/fillet-rig.yml`) on `main` has been getting cancelled since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/45385944937 — dark (conclusion: `cancelled`), 2026-11-24 11:37 UTC
- Dark since: 2026-11-24 11:37 UTC (first run of the current streak)
- Job / step: `Fillet rig` → `Build the CLI (release)`
- Likely cause: Canceling since a higher priority waiting request for fillet-rig-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling craft-plugin-wasm v0.48.0 (/home/runner/_work/solidcraft/solidcraft/crates/craft-plugin-wasm)
   Compiling solidcraft-doc v0.48.0 (/home/runner/_work/solidcraft/solidcraft/crates/doc)
   Compiling solidcraft-ui-text v0.48.0 (/home/runner/_work/solidcraft/solidcraft/crates/ui-text)
   Compiling solidcraft-control v0.48.0 (/home/runner/_work/solidcraft/solidcraft/crates/control)
   Compiling solidcraft-panel-layout v0.48.0 (/home/runner/_work/solidcraft/solidcraft/crates/panel-layout)
   Compiling solidcraft-mcp-server v0.48.0 (/home/runner/_work/solidcraft/solidcraft/crates/mcp-server)
   Compiling solidcraft-cli v0.48.0 (/home/runner/_work/solidcraft/solidcraft/apps/solidcraft-cli)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
