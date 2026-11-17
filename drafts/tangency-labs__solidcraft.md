<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 16859 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Fillet rig" workflow getting cancelled on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Fillet rig** workflow (`.github/workflows/fillet-rig.yml`) on `main` has been getting cancelled since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/44140685006 — dark (conclusion: `cancelled`), 2026-11-17 17:46 UTC
- Dark since: 2026-11-17 17:46 UTC (first run of the current streak)
- Job / step: `Fillet rig` → `Build the CLI (release)`
- Likely cause: Canceling since a higher priority waiting request for fillet-rig-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling solidcraft-geom v0.44.0 (/home/runner/_work/solidcraft/solidcraft/crates/geom)
   Compiling solidcore-step v0.1.0 (/home/runner/_work/solidcraft/solidcraft/solidcore/crates/solidcore-step)
   Compiling solidcraft-smlib v0.44.0 (/home/runner/_work/solidcraft/solidcraft/crates/smlib)
   Compiling solidcraft-render v0.44.0 (/home/runner/_work/solidcraft/solidcraft/crates/render)
   Compiling solidcraft-sketch v0.44.0 (/home/runner/_work/solidcraft/solidcraft/crates/sketch)
   Compiling solidcraft-kernel v0.44.0 (/home/runner/_work/solidcraft/solidcraft/crates/kernel)
   Compiling solidcraft-gpu v0.44.0 (/home/runner/_work/solidcraft/solidcraft/crates/gpu)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
