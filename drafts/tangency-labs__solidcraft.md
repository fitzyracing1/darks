<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 6508 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Pages", "Release", "Docker", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39252777432 — dark (conclusion: `cancelled`), 2026-10-19 12:31 UTC
- Dark since: 2026-10-19 06:16 UTC (first run of the current streak)
- Likely cause: run cancelled

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39229486900 — dark (conclusion: `failure`), 2026-10-19 09:21 UTC
- Dark since: 2026-10-19 09:21 UTC (first run of the current streak)
- Job / step: `Flatpak x86_64` → `Build the Flatpak bundle`
- Likely cause: Internal error in ShaderStages(FRAGMENT) shader: WGSL 'textureLoad' from depth textures is not supported in GLSL

<details><summary>End of the job log</summary>

```
wgpu error: Validation Error
Caused by:
  In Device::create_render_pipeline, label = 'sc_tris'
    Internal error in ShaderStages(FRAGMENT) shader: WGSL `textureLoad` from depth textures is not supported in GLSL
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
Flatpak desktop smoke failed: Command '['dbus-run-session', '--', '/usr/bin/python3', '/home/runner/work/solidcraft/solidcraft/packaging/linux/flatpak-smoke.py', '--probe', '--gl-saved-four']' returned non-zero exit sta…
x11: default sandbox desktop startup and modelling PASS
##[error]Process completed with exit code 1.
```

</details>

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39252777327 — dark (conclusion: `cancelled`), 2026-10-19 12:31 UTC
- Dark since: 2026-10-19 10:44 UTC (first run of the current streak)
- Job / step: `image`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39252777462 — dark (conclusion: `cancelled`), 2026-10-19 12:31 UTC
- Dark since: 2026-10-19 11:24 UTC (first run of the current streak)
- Likely cause: run cancelled

### Generated files (`.github/workflows/generated.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39250979512 — dark (conclusion: `cancelled`), 2026-10-19 12:18 UTC
- Dark since: 2026-10-19 12:18 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
