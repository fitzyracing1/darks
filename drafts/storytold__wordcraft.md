<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 18067 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #6512](https://github.com/storytold/wordcraft/issues/6512) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there", [issue #3772](https://github.com/storytold/wordcraft/issues/3772) "A13-1358b SonarCloud workflow uses `secrets: inherit` on a mutable `@main` shared workflow, handing it every repository secret when it only needs `SONAR_TOKEN`", [issue #6757](https://github.com/storytold/wordcraft/issues/6757) "Layout: unequal_formats_lay_out_in_linear_time fails in every SonarCloud run (15x for 8x the runs in a debug build)"
- FreeBSD (`.github/workflows/freebsd.yml`): [issue #2069](https://github.com/storytold/wordcraft/issues/2069) "FreeBSD nightly is red: two layout tests depend on the installed fonts"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-15. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/43671297823 — dark (conclusion: `failure`), 2026-11-15 03:12 UTC
- Dark since: 2026-11-15 03:12 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Set up the aarch64 cross toolchain`
- Likely cause: ../libpkgconf/cache.c:227 [void pkgconf_cache_free(pkgconf_client_t *)]: cleared package cache

<details><summary>End of the job log</summary>

```
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: wayland-egl refcount@0x2923d6e11b40: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo-xlib refcount@0x2923d6e11ba0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo refcount@0x2923d6e11c00: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: epoxy refcount@0x2923d6e11c60: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: fribidi refcount@0x2923d6e11cc0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: gdk-3.0 refcount@0x2923d6e11d20: 0
../libpkgconf/cache.c:227 [void pkgconf_cache_free(pkgconf_client_t *)]: cleared package cache
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining wordcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
