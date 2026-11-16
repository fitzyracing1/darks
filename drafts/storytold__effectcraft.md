<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/effectcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8844 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "CI (macOS)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/43787731778 — dark (conclusion: `cancelled`), 2026-11-16 01:41 UTC
- Dark since: 2026-11-16 01:41 UTC (first run of the current streak)
- Job / step: `release / Linux riscv64` → `Build and package (deb, rpm, tar.gz)`
- Likely cause: The run was canceled by @FredApps.

<details><summary>End of the job log</summary>

```
   Compiling cpu-time v1.0.0
   Compiling effectcraft-cli v0.24.1 (/home/runner/work/effectcraft/effectcraft/apps/effectcraft-cli)
    Finished `release` profile [optimized] target(s) in 18m 40s
/home/runner/work/effectcraft/effectcraft/target/linux-package/root/usr/share/applications/ai.storyteller.effectcraft.desktop: hint: value "AudioVideo;Video;Graphics;2DGraphics;" for key "Categories" in group "Desktop E…
✔ Validation was successful.
wrote /home/runner/work/effectcraft/effectcraft/dist/release/effectcraft-0.24.1-linux-riscv64.tar.gz
using deb packager...
##[error]The operation was canceled.
```

</details>

### CI (macOS) (`.github/workflows/ci-macos.yml`)

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/43815705720 — dark (conclusion: `cancelled`), 2026-11-16 06:17 UTC
- Dark since: 2026-11-16 06:17 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-15)` → `Gate`
- Likely cause: Canceling since a higher priority waiting request for ci-macos-refs/heads/main exists

<details><summary>End of the job log</summary>

```
        PASS [   0.325s] (4762/6412) effectcraft-track klt::tests::window_taps_match_per_pixel_sampling_bit_for_bit
        PASS [   0.342s] (4763/6412) effectcraft-track mask::tests::follows_a_rotating_scaling_disk
        PASS [   0.488s] (4764/6412) effectcraft-track mask::tests::follows_the_disk_through_a_frame_offset
        PASS [   0.012s] (4765/6412) effectcraft-track plane::tests::channels
        PASS [   0.017s] (4766/6412) effectcraft-track plane::tests::gradient_window_and_interior_path_match_the_clamped_definition
        PASS [   0.018s] (4767/6412) effectcraft-track plane::tests::sampling_and_pyramid_share_coordinates
        PASS [   0.987s] (4768/6412) effectcraft-track roto::bench::tests::a_users_clip_becomes_a_scenario_and_bad_ones_are_refused
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
