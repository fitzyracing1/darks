<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11745 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43669894127 — dark (conclusion: `failure`), 2026-11-15 02:54 UTC
- Dark since: 2026-11-15 02:54 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Set up the aarch64 cross toolchain`
- Likely cause: ../libpkgconf/cache.c:227 [void pkgconf_cache_free(pkgconf_client_t *)]: cleared package cache

<details><summary>End of the job log</summary>

```
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: wayland-egl refcount@0x121014411b40: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo-xlib refcount@0x121014411ba0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo refcount@0x121014411c00: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: epoxy refcount@0x121014411c60: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: fribidi refcount@0x121014411cc0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: gdk-3.0 refcount@0x121014411d20: 0
../libpkgconf/cache.c:227 [void pkgconf_cache_free(pkgconf_client_t *)]: cleared package cache
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43681941647 — dark (conclusion: `cancelled`), 2026-11-15 05:38 UTC
- Dark since: 2026-11-15 05:37 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
