<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/effectcraft

- **Status:** resolved — lit again (2026-11-17); nothing to file
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8879 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow getting cancelled on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been getting cancelled since 2026-11-16. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
