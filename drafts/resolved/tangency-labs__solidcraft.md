<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** resolved — lit again (2026-10-20); nothing to file
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 7882 · **Generated:** 2026-10-20T12:54:49.577Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Pages", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39421403872 — dark (conclusion: `cancelled`), 2026-10-20 12:19 UTC
- Dark since: 2026-10-19 06:16 UTC (first run of the current streak)
- Likely cause: run cancelled

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39397013376 — dark (conclusion: `failure`), 2026-10-20 08:56 UTC
- Dark since: 2026-10-20 08:56 UTC (first run of the current streak)
- Job / step: `Flatpak aarch64` → `Build the Flatpak bundle`
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

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
